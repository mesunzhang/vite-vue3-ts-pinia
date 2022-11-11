import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

import ViteComponents from 'unplugin-vue-components/vite'
// 使用你所使用的UI组件库的 resolver
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/

// @ts-ignore
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      resolvers: [AntDesignVueResolver()]
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/image')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        // target: 'http://192.168.5.5:9092',
        target: 'http://qw-manage.xht.com',
        changeOrigin: true
        // rewrite: (path:any) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
