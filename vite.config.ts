import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass';


// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    css: {
      preprocessorOptions: {
        sass: {
          implementation: sass,
        },
      },
    },
  }

  if (command !== 'serve') {
    config.base = '/space-tourism-vite-ts/'
  }

  return config
})
