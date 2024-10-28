<template>
  <div class="pages">
    <div v-for="(item, index) in state.list" :key="index" class="item-list" @click="toUse(item)">
      <img :src="item.icon" alt="">
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = reactive({
  list: [
    {
      icon: 'https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028035535565_8a518d5b-096a-40d8-8fa4-d11296ed3808.svg',
      title: '两位数加法',
      path: '/algorithm/twoDigitAddition',
    },
    {
      icon: 'https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028035533024_09319c14-85bb-494f-b812-99b05ac61989.svg',
      title: '两位数减法',
      path: '/algorithm/twoDigitSubtraction',
    },
    {
      icon: 'https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028053551605_fc470ec8-e63e-4350-a919-3f16fd6782b5.svg',
      title: '分数转换',
      path: '/algorithm/fraction',
    },
    {
      icon: 'https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028100512610_18be96bd-5bb7-4dce-9859-de11315f81e4.svg',
      title: '多位数加法',
      path: '/algorithm/addition',
    },
    {
      icon: 'https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028100549386_06300568-63b7-4eab-86e5-b7995fdb9e1c.svg',
      title: '多位数减法',
      path: '/algorithm/subtraction',
    },
    {
      icon: 'https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028100422573_d3416441-8e4e-44a5-9512-5d665bf2a396.svg',
      title: '多位数乘法',
      path: '/algorithm/multiplication',
    },
    {
      icon: 'https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028030831331_74d16aee-444a-4354-887c-2c7aa56aeb91.svg',
      title: '百分比速算',
      path: '/algorithm/percentage',
    },
    {
      icon: 'https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028100159682_7aa50066-51d1-41ed-96f9-d0d9a9b288f1.svg',
      title: '多位数除法',
      path: '/algorithm/division',
    }
  ]
})
const toUse = (item) => {
  router.push({ path: item.path })
}
</script>

<style lang="scss" scoped>
.pages {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item-list {
    width: 48%;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    img {
      width: 48px;
      height: 48px;
      margin-bottom: 10px;
    }
    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>