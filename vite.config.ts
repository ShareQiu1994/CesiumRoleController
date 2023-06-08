import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { mars3dPlugin } from "vite-plugin-mars3d"
const path = require('path')


export default ({ mode }) => {  
    return defineConfig({    
      base: mode === 'development' ? '/' : './',
      resolve: {
        alias: {
          '@': path.resolve('src')
        }
      },
      plugins: [
        vue(),
        mars3dPlugin(),
      ],
      }
  )}



  