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
          // Sandbox permissions
          finishArgs: [
            '--share=ipc',       // Shared memory for performance
            '--socket=x11',      // Display server access (X11)
            '--socket=wayland',  // Display server access (Wayland)
            '--share=network',   // General network access (optional, remove if not needed)
            '--filesystem=xdg-desktop', // Permission to read/write to the Desktop
          ],
        },
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: false,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
