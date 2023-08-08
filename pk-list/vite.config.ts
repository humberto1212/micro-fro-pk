import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
           name: 'remotecomponent1',
           filename: 'remoteEntry.js',
           exposes: {
               './Button': './src/components/buttons.tsx',
               './PokemonList': './src/components/pokemonList.tsx'
           },
           shared: ['react', 'react-dom'],
      }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});

