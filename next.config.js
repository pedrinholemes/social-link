const withPWA = require('next-pwa')

var pwaConfig = withPWA({
  poweredByHeader: false,
  pwa: {
    dest: 'public'
  }
})

var devConfig = {
  poweredByHeader: false,
}


module.exports = pwaConfig
