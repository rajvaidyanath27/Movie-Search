import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the react plugin
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),  // Use the react plugin
    tailwindcss(),  // Use the tailwindcss plugin
  ],
});
