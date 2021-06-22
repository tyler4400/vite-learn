<template>
  <p :class="$style['big-text']">hello, this is a template project.</p>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: "Home",
  })
</script>

<style scoped module>
.big-text{
    font-size: 20px;
}
</style>
