<!--
 * @Author: 123 123.com
 * @Date: 2023-05-19 09:55:41
 * @LastEditors: 123 123.com
 * @LastEditTime: 2023-05-19 10:06:31
 * @FilePath: \vue-demo\vue-project\src\components\SvgIcon\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <svg aria-hidden="true" class="svg-icon">
      <use :xlink:href="symbolId" />
    </svg>
</template>
  
<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    }
  })
  
  const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
  
  <style scope lang="scss">
  .svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }
  </style>