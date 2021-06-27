<template>
  <p class="AnotherPage">AnotherPage</p>
  <div>
    <button @click="getUsers">请求数据</button>
    {{isLoading}}
    {{data}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

const fetchSomething = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      console.log('接口返回了');
      resolve('返回成功')
    }, 3000)
  })
/**
 * vue 异步处理_在Vue 3 / Composition API中处理异步
 * https://blog.csdn.net/weixin_26738395/article/details/108258992
 *
 * 自定义挂钩：useAsync，usePromise
 * <Suspense />
 * vue-promised
 */
  export default defineComponent({
    name: "AnotherPage",
    setup() {
      const isLoading = ref(false);
      const error = ref(null);
      const data = ref<string>('');
      const getUsers = async () => {
        isLoading.value = true;
        data.value = await fetchSomething;
        isLoading.value = false;

        console.log('data', data.value);
        console.log('isLoading', isLoading.value);
      };

      return { isLoading, error, data, getUsers };
    }
  })
</script>

<style scoped lang="scss">
.AnotherPage {
    $danger-color: red;
    color: $danger-color;
}
</style>
