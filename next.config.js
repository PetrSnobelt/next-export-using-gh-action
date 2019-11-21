const path = require('path')

console.log("process.env.GITHUB_ACTIONS", process.env.GITHUB_ACTIONS)

module.exports = {
  assetPrefix: process.env.GITHUB_ACTIONS ? "https://petrsnobelt.github.io/next-export-using-gh-action/" : "",

  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    return config
  },
}