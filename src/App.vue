<template>
    <router-view></router-view>
    <div class="container">
        <button @click="goto('/home')">home</button>
        <button @click="goto('/AnotherPage')">AnotherPage</button>
        <button @click="goto('/LazyLoadPage')">LazyLoadPage</button>
        <router-link to="/not-foundddddddd/dddd" custom v-slot="{navigate}">
          <span @click="navigate">NotFound</span>
        </router-link>
      <br />
      <a href="https://tyler4400.github.io/vite-learn/">github pages</a>
      <a class="mr10" href="https://helloworld-7gdt5hd730eba3c7-1302238818.tcloudbaseapp.com/dist/">Tencent Cloudbase</a>
      <a class="mr10" href="https://vite-learn.tyler4400.com/Home">Tencent CloudServer</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() { // 测试
    const router = useRouter()
    const goto = (url: string) => {
      router.push(url)
    }

    return {
      goto,
    }
  },
})

</script>

<style scoped>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mr10 {
  margin-left: 10px;
}
</style>
