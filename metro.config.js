// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

const getResolver = async () => {
  const {
    resolver: {
      sourceExts,
      assetExts
    }
  } = await getDefaultConfig(__dirname)

  return {
    assetExts: assetExts.filter(ext => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"]
  }
}

config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer")
config.resolver = getResolver()



module.exports = config;

