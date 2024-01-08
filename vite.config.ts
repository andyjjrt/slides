import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import buildSlides from "./plugins/buildSlides"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), buildSlides()],
})
