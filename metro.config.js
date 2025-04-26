const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    transformer: {
        assetPlugins: [], // Disable asset renaming
        inlineRequires: false,
    },
    resolver: {
        assetExts: ['png', 'jpg', 'jpeg', 'ttf', 'woff', 'woff2'],
        sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);