import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'projects/aisupervision': resolve(__dirname, 'projects/aisupervision.html'),
        'projects/blw-therapy': resolve(__dirname, 'projects/blw-therapy.html'),
        'projects/cornerstone-houston': resolve(__dirname, 'projects/cornerstone-houston.html'),
        'projects/datahive': resolve(__dirname, 'projects/datahive.html'),
        'projects/houston-center-for-christian-counseling': resolve(__dirname, 'projects/houston-center-for-christian-counseling.html'),
        'projects/passion-2024': resolve(__dirname, 'projects/passion-2024.html'),
        'projects/speak-conference': resolve(__dirname, 'projects/speak-conference.html'),
      },
    },
  },
});
