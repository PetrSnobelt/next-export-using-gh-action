const path = require("path")

// Sample GITHUB_REPOSITORY "PetrSnobelt/next-export-using-gh-action"

const prefix =
  process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
    : ""

module.exports = {
  assetPrefix: prefix,

  env: {
    PREFIX: prefix
  },

  webpack(config, options) {
    config.resolve.alias["components"] = path.join(__dirname, "components")
    return config
  }
}
