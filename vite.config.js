import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 使用相对路径，这样无论仓库叫什么名字，部署到 GitHub Pages 都能正确加载资源
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
})
