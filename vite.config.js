import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aisupervision: resolve(__dirname, 'projects/aisupervision.html'),
        blwTherapy: resolve(__dirname, 'projects/blw-therapy.html'),
        cornerstoneHouston: resolve(__dirname, 'projects/cornerstone-houston.html'),
        datahive: resolve(__dirname, 'projects/datahive.html'),
        houstonChristian: resolve(__dirname, 'projects/houston-center-for-christian-counseling.html'),
        passion2024: resolve(__dirname, 'projects/passion-2024.html'),
        speakConference: resolve(__dirname, 'projects/speak-conference.html'),
      },
    },
  },
});
