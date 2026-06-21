import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  
  // Prioritize the system environment variable, but fallback to .env if needed.
  // Also filter out common placeholder values.
  const rawApiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY;
  const isPlaceholder = (val?: string) => {
    if (!val) return true;
    const v = val.toUpperCase();
    return v.includes("YOUR_API_KEY") || 
           v.includes("REPLACE_ME") || 
           v.includes("MY_GEMINI_API_KEY") || 
           v.includes("INSERT_KEY") ||
           v.includes("TODO") ||
           v.includes("ENTER_YOUR") ||
           val.trim().length < 10;
  };
  const apiKey = isPlaceholder(rawApiKey) ? "" : rawApiKey;
  
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(apiKey || ""),
      'process.env.VITE_GEMINI_API_KEY': JSON.stringify(apiKey || ""),
      'process.env.API_KEY': JSON.stringify(apiKey || ""),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
