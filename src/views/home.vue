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
  list: [{
    icon: 'https://scachealth.oss-cn-shanghai.aliyuncs.com/202410/c7f52803-b98a-4322-8f91-026625b576e6.png',
    title: '成语练习',
    path: '/words',
  }]
})
const toUse = (item) => {
  router.push({ path: item.path })
}
</script>

<style lang="scss" scoped>
.pages {
  padding: 10px;
  .item-list {
    width: 355px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
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