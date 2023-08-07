import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remotecomponent1',
      remotes: [
        {
          pklist: 'http://localhost:5173/assets/remoteEntry.js'
          // sharedComp: {
          //   external: `Promise.resolve(window.remoteURL)`,
          //   from: 'vite',
          //   externalType: 'promise',
          // }
        }
      ],
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
