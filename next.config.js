// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})

const settings = {
  devIndicators: {
    buildActivity: false
  }
}

module.exports = withPWA(settings)
