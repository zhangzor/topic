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
      icon: 'https://scachealth.oss-cn-shanghai.aliyuncs.com/202410/c7f52803-b98a-4322-8f91-026625b576e6.png',
      title: '成语练习',
      path: '/questionType/words',
    },
    {
      icon: 'https://scachealth.oss-cn-shanghai.aliyuncs.com/202410/f391a595-c5b1-467b-846f-0bed5fd735a9.png',
      title: '速算练习',
      path: '/questionType/quickCalculation',
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
  min-height: 100vh;
  background-image: url('https://scachealth.oss-cn-shanghai.aliyuncs.com/202410/0c9848de-72ac-4541-8d25-1d47c8a05a09.jpeg'); 
  background-position: center center; 
  background-repeat: no-repeat; 
  background-attachment: fixed;
  background-size: cover;
  .item-list {
    width: 355px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
      width: 48px;
      height: 48px;
      margin-right: 10px;
    }
    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>