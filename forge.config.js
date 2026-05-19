module.exports = {
  packagerConfig: {
    asar: true,
  },
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
};
