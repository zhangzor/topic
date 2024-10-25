<template>
	<div class="not-container">
		<img src="@/assets/images/404.png" class="not-img" alt="404" />
		<div class="not-detail">
			<h2>404</h2>
			<h4>抱歉，您访问的页面不存在~🤷‍♂️🤷‍♀️</h4>
      <van-button type="primary" @click="router.push('/')">返回首页</van-button>
		</div>
	</div>
</template>

<script setup name="404">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
  .not-container {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 25% 30px 30px 30px;
    .not-img {
      width: 80%;
    }
    .not-detail {
      display: flex;
      flex-direction: column;
      padding-top: 40px;
      h2,
      h4 {
        padding: 0;
        margin: 0;
      }
      h2 {
        font-size: 20px;
        color: var(--el-text-color-primary);
      }
      h4 {
        margin: 30px 0 20px;
        font-size: 19px;
        font-weight: normal;
        color: var(--el-text-color-regular);
      }
      .van-button {
        width: 100px;
        margin: 0 auto;
      }
    }
  }
</style>
