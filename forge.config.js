const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-flatpak',
      config: {
        options: {
          id: 'com.mfernflower.posford',
          categories: ['Science'],
          icon: './standalone/apple-touch-icon.png',
          // Updated to the latest 2026 Freedesktop Runtime
          runtime: 'org.freedesktop.Platform',
          runtimeVersion: '25.08', 
          sdk: 'org.freedesktop.Sdk',
          
          finishArgs: [
            '--share=ipc',              // Shared memory for Chromium performance
            '--socket=x11',             // X11 display access
            '--socket=wayland',         // Wayland display access
            '--device=dri',             // Hardware acceleration (OpenGL/Vulkan)
            '--socket=pulseaudio',      // Audio support
            '--share=network',          // Network access
            '--filesystem=xdg-desktop', // Direct Desktop folder access
          ],
        },
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'MFernflower',
          homepage: 'https://github.com/MFernflower/POSFORD',
        },
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    {
      name: '@electron-forge/plugin-fuses',
      config: {
        version: "2.3.0",
        [FuseV1Options.RunAsNode]: false,
        [FuseV1Options.EnableCookieEncryption]: false,
        [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
        [FuseV1Options.EnableNodeCliInspectArguments]: false,
        [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
        [FuseV1Options.OnlyLoadAppFromAsar]: true,
      },
    },
  ],
};
