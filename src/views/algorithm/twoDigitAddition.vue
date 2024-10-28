<template>
  <div class="pages">
    <van-field
      v-model="topicNumber"
      is-link
      readonly
      label="题数"
      placeholder="请选择"
      @click="showPicker = true"
      style="border-radius: 10px;"
    />
    <!-- 当前题目显示 -->
    <div v-if="currentQuestionIndex < totalQuestions && !showSummary" class="question">
      <div class="question-card">题目 {{ currentQuestionIndex + 1 }}/{{ totalQuestions }}</div>
      <div class="question-item">
        {{ currentQuestion.num1 }} + {{ currentQuestion.num2 }} = 
        <van-field v-model="userAnswer" type="number" @keyup.enter="submitAnswer" style="border-bottom: 1px solid #000000;width: 100px;"/>
      </div>
    </div>
    <!-- 答题回顾 -->
    <div v-if="showSummary" class="question">
      <div class="title">
        <img src="https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028020035987_32fba8d0-6ee2-4d01-85c8-55d9e6195cce.svg" alt="大拇指">
        太棒了！
      </div>
      <div class="use-time">用时：<span class="time-text">{{ formattedTime }}</span></div>
      <div class="number-topic">
        <span class="correct">正确：<span class="count">{{ correctCount }}</span>题</span>
        <span class="incorrect">错误：<span class="count">{{ incorrectCount }}</span>题</span>
      </div>
      <div>
        <div v-for="(question, index) in questions" :key="index" class="list-item">
          {{ question.num1 }} + {{ question.num2 }} = {{ question.userAnswer }}
          <span v-if="question.isCorrect" class="correct">正确</span>
          <span v-else class="incorrect">错误 (正确答案: {{ question.correctAnswer }})</span>
        </div>
      </div>
      <div class="btn">
        <van-button class="next-button" type="primary" @click="resetQuiz">重新开始</van-button>
      </div>
    </div>
    <div class="day-quotes">
      <div class="title">加油站</div>
      <div class="tips">{{ state.quotes }}</div>
    </div>
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        title="请选择"
        :columns="questionOptions"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, reactive } from 'vue'
import { motivationalQuotes } from '@/utils/motivationalQuotes.js'

const showPicker = ref(false)
const selectedCount = ref(10)           // 用户选择的题量
const currentQuestionIndex = ref(0)     // 当前题目序号
const questions = ref([])               // 题目列表
const userAnswer = ref('')              // 用户输入的答案
const correctCount = ref(0)             // 答对的题目数量
const incorrectCount = ref(0)           // 答错的题目数量
const showSummary = ref(false)          // 控制答题总结弹窗
const questionOptions = [    // 题量选项
  { text: '10题', value: 10 },
  { text: '15题', value: 15 },
  { text: '20题', value: 20 },
]
const startTime = ref(0)
const elapsedTime = ref(0)
const timer = ref(null)
const topicNumber = ref('10题')

const state = reactive({
  quotes: null,
})

onMounted(() => {
  resetQuiz() // 页面加载时初始化
})

onUnmounted(() => {
  clearInterval(timer)
})

// 计时器功能
const startTimer = () => {
  startTime.value = Date.now()
  timer.value = setInterval(() => {
    elapsedTime.value = Math.floor((Date.now() - startTime.value) / 1000)
  }, 1000)
}

const stopTimer = () => {
  clearInterval(timer.value)
  timer.value = null
}

// 格式化时间显示为 时:分:秒
const formattedTime = computed(() => {
  const hours = Math.floor(elapsedTime.value / 3600)
  const minutes = Math.floor((elapsedTime.value % 3600) / 60)
  const seconds = elapsedTime.value % 60
  let timeString = ''
  if (hours > 0) {
    timeString += `${hours}小时`
  }
  if (minutes > 0 || hours > 0) {
    timeString += `${String(minutes).padStart(2, '0')}分钟`
  }
  timeString += `${String(seconds).padStart(2, '0')}秒`
  return timeString
})

// 计算总题量
const totalQuestions = computed(() => selectedCount.value)

// 生成一道两位数加法题
const generateQuestion = () => {
  const num1 = Math.floor(Math.random() * 90) + 10
  const num2 = Math.floor(Math.random() * 90) + 10
  return {
    num1,
    num2,
    correctAnswer: num1 + num2,
    userAnswer: null,
    isCorrect: false,
  }
}

// 初始化题目列表
const resetQuiz = () => {
  stopTimer()
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length)
  state.quotes = motivationalQuotes[randomIndex]
  questions.value = Array.from({ length: totalQuestions.value }, () => generateQuestion())
  currentQuestionIndex.value = 0
  userAnswer.value = ''
  correctCount.value = 0
  incorrectCount.value = 0
  showSummary.value = false
  startTimer()
}

// 提交答案并显示下一题
const submitAnswer = () => {
  if (userAnswer.value === '') return // 确保输入不为空

  const currentQuestion = questions.value[currentQuestionIndex.value]
  currentQuestion.userAnswer = parseInt(userAnswer.value, 10)
  currentQuestion.isCorrect = currentQuestion.userAnswer === currentQuestion.correctAnswer

  // 更新统计数据
  if (currentQuestion.isCorrect) {
    correctCount.value++
  } else {
    incorrectCount.value++
  }

  userAnswer.value = '' // 清空输入框
  currentQuestionIndex.value++

  // 判断是否完成所有题
  if (currentQuestionIndex.value >= totalQuestions.value) {
    stopTimer()
    showSummary.value = true
  }
}

// 当前题目
const currentQuestion = computed(() => questions.value[currentQuestionIndex.value] || {})

// 选择题量
const onConfirm = ({ selectedOptions }) => {
  selectedCount.value = selectedOptions[0].value
  topicNumber.value = selectedOptions[0].text
  showPicker.value = false
  resetQuiz()
}
const onCancel = () => showPicker.value = false
</script>

<style lang="scss" scoped>
.pages {
  background-color: #ffffff;
  padding: 10px;
  min-height: 100vh;
  background-image: url('https://scachealth.oss-cn-shanghai.aliyuncs.com/202410/12c5c870-2c54-40e2-8df1-75ad992e3630.jpeg'); 
  background-position: center center; 
  background-repeat: no-repeat; 
  background-attachment: fixed;
  background-size: cover;
  .question {
    margin-bottom: 10px;
    padding-bottom: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    margin-top: 15px;
    .question-card {
      font-size: 20px;
      font-weight: bold;
      color: #487cfc;
      margin-bottom: 10px;
      text-align: center;
    }
    .question-item {
      display: flex;
      justify-content: center;
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
      img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
      }
    }
    .use-time, .number-topic {
      font-weight: 400;
      font-size: 16px;
      text-align: center;
      margin-top: 15px;
      .time-text {
        font-weight: bold;
        color: #487cfc;
      }
      .correct {
        margin-right: 20px;
        .count {
          color: #07c160;
        }
      }
      .incorrect {
        .count {
          color: #f13046;
        }
      }
      .count {
        font-weight: bold;
        margin-right: 5px;
      }
    }
    .list-item {
      text-align: center;
      font-size: 16px;
      margin-top: 15px;
      .correct {
        color: #07c160;
      }
      .incorrect {
        color: #f13046;
      }
    }
    .btn {
      display: flex;
      justify-content: center;
      .next-button {
        margin-top: 16px;
        width: 325px;
        height: 48px;
        background: #1B8BFF;
        border-radius: 23px;
        font-weight: 500;
        font-size: 16px;
        color: #FFFFFF;
        border: none;
      }
    }
  }
  .day-quotes {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    .title {
      font-weight: bold;
      font-size: 20px;
      color: #FF8C04;
      margin-bottom: 10px;
    }
    .tips {
      font-weight: 400;
      font-size: 16px;
      color: #000000;
    }
  }
}
</style>
