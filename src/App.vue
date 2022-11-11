<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import zhCN from 'ant-design-vue/es/locale/zh_CN'

const getPopupContainer = (e: any) => {
  if (e) return e.parentNode
  return document.body
}
</script>

<template>
  <a-config-provider
    :locale="zhCN"
    :getPopupContainer="getPopupContainer"
    :auto-insert-space-in-button="false"
  >
    <div
      id="main"
      class="absolute top-0 bottom-0 h-full w-full min-w-1200 overflow-x-hidden overflow-y-hidden p-16 text-center"
    >
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>

<style>
#app > #main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
