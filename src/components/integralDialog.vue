<template>
  <div class="integral-dialog">
    <van-dialog v-model:show="show" :showConfirmButton="false" :closeOnClickOverlay="true" @close="cancel"
      :class="{
        'receive-dia': integralType == 'receive',
        }">
      <div v-if="integralType == 'receive'" class="recive-box">
        <div class="title">
          <img src="https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028020035987_32fba8d0-6ee2-4d01-85c8-55d9e6195cce.svg" alt="大拇指">
          太棒了！
        </div>
        <div class="use-time">用时：<span class="time-text">{{ state.obj.time }}</span></div>
        <div class="number-topic">
          <span class="correct">正确：<span class="count">{{ state.obj.correctCount }}</span>题</span>
          <span class="incorrect">错误：<span class="count">{{ state.obj.incorrectCount }}</span>题</span>
        </div>
        <div class="quotes">{{ state.quotes }}</div>
        <van-button class="next-button" round @click="cirmUserName">再试一次</van-button>
        <img class="close-icon" src="https://scachealth.oss-cn-shanghai.aliyuncs.com/202409/b802b02b-727f-4dd1-8650-d08791cd14a0.png" alt="" @click="cancel" />
      </div>
    </van-dialog>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { motivationalQuotes } from '@/utils/motivationalQuotes.js'
const props = defineProps({
  integralShow: {
    type: Boolean,
    default: false,
  },
  integralType: {
    type: String,
    default: '',
  },
  integralObj: {
    type: Object,
    default: () => {}
  },
  contractCode: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  }
})
const emit = defineEmits(["close", "receiveSubmit"])
const show = ref(false)
const router = useRouter()
const state = reactive({
  obj: {},
  userName: '',
  error: false,
  quotes: null,
})
watch(
  () => props.integralShow,
  (value) => {
    show.value = value
    if(value) {
      switch (props.integralType) {
        case 'receive':
          state.obj = props.integralObj
          const randomIndex = Math.floor(Math.random() * motivationalQuotes.length)
          state.quotes = motivationalQuotes[randomIndex]
          break;
        default:
          break;
      }
    }
  }
)
const cancel = () => {
  emit('close')
}
const cirmUserName = () => {
  emit('receiveSubmit')
}
</script>

<style lang="scss" scoped>
:deep() {
  .receive-dia {
    width: 288px !important;
    overflow: visible;
    box-sizing: border-box;
    .van-dialog__content {
      width: 288px;
      height: 403.2px;
      overflow: visible;
      box-sizing: border-box;
      padding: 0;
    }
  }
}
.recive-box {
  position: relative;
  width: 288px;
  height: 403.2px;
  background-image: url('https://scachealth.oss-cn-shanghai.aliyuncs.com/202410/5cfde536-511b-4537-80cf-3a0237519b62.jpeg');
  background-size: cover;
  padding: 10px 12px 0;
  color: #000000;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    margin-top: 15px;
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
  .quotes {
    font-weight: 400;
    font-size: 14px;
    color: #333333;
    margin-top: 15px;
    padding: 0 12px;
  }
  .next-button {
    position: absolute;
    left: 50%;
    bottom: 130px;
    transform: translateX(-50%);
    width: 150px;
    height: 36px;
    background: #1B8BFF;
    border-radius: 23px;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    border: none;
  }
  .close-icon {
    position: absolute;
    left: 50%;
    bottom: -50px;
    transform: translateX(-50%);
    width: 35px;
    height: 35px;
  }
}
</style>
