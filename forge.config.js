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
          runtime: 'org.freedesktop.Platform',
          runtimeVersion: '25.08',
          sdk: 'org.freedesktop.Sdk',
          finishArgs: [
            '--share=ipc',
            '--socket=x11',
            '--socket=wayland',
            '--device=dri',
            '--socket=pulseaudio',
            '--share=network',
            '--filesystem=xdg-desktop',
          ],
        },
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          id: 'com.mfernflower.posford',
          categories: ['Science'],
          icon: './standalone/apple-touch-icon.png',
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
