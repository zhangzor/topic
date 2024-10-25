<template>
  <div class="game-container">
    <div v-if="currentQuestion" class="question-container">
      <div class="question-card">
        <div class="pinyin">{{ getPinyin(currentQuestion.words) }}</div>
        <div class="words">{{ currentQuestion.words }}</div>
      </div>
      <div class="options-container">
        <div
          class="default-select"
          v-for="(option, index) in options"
          :key="index"
          :class="getOptionClass(option)"
          type="info"
          size="large"
          round
          @click="selectOption(option)"
        >
          {{ option.notes }}
        </div>
      </div>
      <van-button
        v-if="showNextButton"
        type="primary"
        @click="nextQuestion"
        class="next-button"
      >
        下一题
      </van-button>
    </div>
    <div v-else>
      <p>所有题目已完成！点击重新开始。</p>
      <van-button type="primary" class="next-button" @click="resetGame">重新开始</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { idiomDicitionary } from "@/utils/idiomDictionary.js";
import { pinyin } from 'pinyin-pro';

const questionsPool = ref([...idiomDicitionary]); // 副本题库
const usedQuestions = ref([]); // 存储已使用的题目
const currentQuestion = ref(null); // 当前题目
const options = ref([]); // 选项列表
const selectedOption = ref(null); // 当前选择的选项
const showNextButton = ref(false); // 是否显示“下一题”按钮

// 初始化游戏
const startGame = () => {
  nextQuestion();
};

// 生成下一个问题
const nextQuestion = () => {
  if (questionsPool.value.length === 0) {
    currentQuestion.value = null;
    return;
  }

  selectedOption.value = null;
  showNextButton.value = false;

  // 随机抽取一个成语作为题目
  const randomIndex = Math.floor(Math.random() * questionsPool.value.length);
  currentQuestion.value = questionsPool.value.splice(randomIndex, 1)[0];
  usedQuestions.value.push(currentQuestion.value);

  // 生成选项
  generateOptions();
};

// 生成四个选项，包含正确答案和三个随机错误答案
const generateOptions = () => {
  const correctAnswer = currentQuestion.value;
  const allOptions = [correctAnswer];
  
  // 随机选择三个不重复的错误答案
  while (allOptions.length < 4) {
    const randomOption = idiomDicitionary[Math.floor(Math.random() * idiomDicitionary.length)];
    // 检查随机选择的错误答案不与正确答案重复
    if (!allOptions.some(option => option.id === randomOption.id)) {
      allOptions.push(randomOption);
    }
  }

  // 打乱顺序
  options.value = allOptions.sort(() => Math.random() - 0.5);
};

// 用户选择答案
const selectOption = (option) => {
  if (selectedOption.value) return; // 防止重复选择

  selectedOption.value = option;
  if (option === currentQuestion.value) {
    showNextButton.value = false;
    setTimeout(nextQuestion, 200); // 正确后自动进入下一题
  } else {
    showNextButton.value = true;
  }
};

// 获取选项的样式
const getOptionClass = (option) => {
  if (!selectedOption.value) return "";
  if (option === currentQuestion.value) return "correct";
  return option === selectedOption.value ? "incorrect" : "";
};

// 重置游戏
const resetGame = () => {
  questionsPool.value = [...usedQuestions.value];
  usedQuestions.value = [];
  startGame();
};

// 定义一个获取拼音的函数
const getPinyin = (words) => {
  return pinyin(words, { toneType: 'none', type: 'array' }).flat().join(' ')
};

// 启动游戏
startGame();
</script>

<style lang="scss" scoped>
.game-container {
  text-align: center;
  padding: 16px;
  .question-container {
    margin-top: 16px;
    .question-card {
      font-size: 20px;
      font-weight: bold;
      color: #487cfc;
      margin: 0;
      .pinyin {
        font-size: 12px;
      }
      .words {
        letter-spacing: 5px;
      }
    }
    .options-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 16px;
      .default-select {
        font-size: 16px;
        border-radius: 8px;
        border: 1px solid #000000;
        padding: 10px;
        text-align: left;
      }
      .correct {
        background: rgb(7, 193, 96, 0.1);
        border-color: #07c160;
        color: #07c160;
      }
      .incorrect {
        background: rgb(238, 10, 36, 0.1);
        border-color: #ee0a24;
        color: #ee0a24;
      }
    }
  }
  .next-button {
    margin-top: 16px;
    width: 345px;
    height: 48px;
    background: #1B8BFF;
    border-radius: 23px;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
  }
}
</style>
