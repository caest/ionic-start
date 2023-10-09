import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'boilerpalte',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 500,
      useDialog: false,
      splashFullScreen: false,
      launchAutoHide: true,
      androidScaleType: "CENTER",
      splashImmersive: true,
      showSpinner: false,
      backgroundColor: "#2525ac",
    },
  },
};

export default config;
