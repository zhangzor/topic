<template>
  <div class="pages">
    <div v-for="(question, qIndex) in additionQuestions" :key="qIndex" class="question">
      <div class="question-card">{{ question.question }}</div>
      <div class="answers">
        <div
          class="answers-item"
          v-for="(answer, aIndex) in question.answers"
          :key="aIndex"
          :class="getAnswerClass(qIndex, answer)"
          @click="selectAnswer(qIndex, answer)"
          block
        >
          <!-- <span>{{ answer.label }}</span> -->
          <span>{{ answer.text }}</span>
        </div>
      </div>
    </div>
    <IntegralDialog :integralShow="state.integralShow" :integralObj="state.integralObj" @receiveSubmit="receiveSubmit" integralType="receive" @close="integralClose"></IntegralDialog>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, reactive } from 'vue'
import { generateSubtractionQuestions } from './mathGenerator.js'
import IntegralDialog from '@/components/integralDialog.vue'

const additionQuestions = ref([])
const selectedAnswers = ref([])
const startTime = ref(0)
const elapsedTime = ref(0)
const correctCount = ref(0)
const incorrectCount = ref(0)
const timer = ref(null)
const state = reactive({
  integralShow: false,
  integralObj: {},
})
onMounted(() => {
  resetQuiz()
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


// 初始化问答数据和状态
const resetQuiz = () => {
  stopTimer()
  additionQuestions.value = generateSubtractionQuestions()
  selectedAnswers.value = Array(additionQuestions.value.length).fill(null)
  correctCount.value = 0
  incorrectCount.value = 0
  elapsedTime.value = 0
  startTimer()
  setTimeout(() => {
    scrollToTop()
  }, 100)
}

// 答案选择处理
const selectAnswer = (qIndex, answer) => {
  if (selectedAnswers.value[qIndex]) return // 如果已选择，跳过
  selectedAnswers.value[qIndex] = answer.label

  // 判断正确与否
  const isCorrect = answer.text === additionQuestions.value[qIndex].correctAnswer.text
  if (isCorrect) {
    correctCount.value++
  } else {
    incorrectCount.value++
    // 将正确答案显示为 `.correct`
    additionQuestions.value[qIndex].correctAnswer.isCorrectAnswer = true
  }

  // 检查是否全部答完
  if (correctCount.value + incorrectCount.value === additionQuestions.value.length) {
    stopTimer()
    state.integralObj.time = formattedTime.value
    state.integralObj.correctCount = correctCount.value
    state.integralObj.incorrectCount = incorrectCount.value
    state.integralShow = true
    console.log('触发', state.integralShow)
  }
}

// 获取答案样式
const getAnswerClass = (qIndex, answer) => {
  const isSelected = selectedAnswers.value[qIndex] === answer.label
  const isCorrect = answer.text === additionQuestions.value[qIndex].correctAnswer.text

  if (isSelected) {
    return isCorrect ? 'correct' : 'incorrect'
  } else if (additionQuestions.value[qIndex].correctAnswer.isCorrectAnswer && answer === additionQuestions.value[qIndex].correctAnswer) {
    return 'correct'
  }
  return ''
}

const integralClose = () => {
  state.integralShow = false
}
const receiveSubmit = () => {
  state.integralShow = false
  resetQuiz()
}

// 回到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0, // 设置水平滚动位置，通常为0
    behavior: 'smooth' // 添加平滑滚动效果
  })
}
</script>

<style lang="scss" scoped>
.pages {
  background-color: #ffffff;
  padding: 10px;
  min-height: 100vh;
  background-image: url('https://scachealth.oss-cn-shanghai.aliyuncs.com/202410/219a3dfe-04f9-4148-8ed0-cc5c8c0a8b21.jpeg'); 
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
    .question-card {
      font-size: 20px;
      font-weight: bold;
      color: #487cfc;
      margin-bottom: 10px;
      text-align: center;
    }
    .answers {
      display: flex;
      justify-content: space-between;
      .answers-item {
        width: 23%;
        font-size: 14px;
        border: 1px solid #efefef;
        padding: 10px;
        border-radius: 8px;
        text-align: center;
      }
      .correct {
        background: rgba(7, 193, 96, 0.1);
        border-color: #07c160;
        color: #07c160;
      }
      .incorrect {
        background: rgba(238, 10, 36, 0.1);
        border-color: #ee0a24;
        color: #ee0a24;
      }
    }
  }
}
</style>
