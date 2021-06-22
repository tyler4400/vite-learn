<template>
  <p class="AnotherPage">AnotherPage</p>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: "AnotherPage"
  })
</script>

<style scoped lang="scss">
.AnotherPage {
    $danger-color: red;
    color: $danger-color;
}
</style>
