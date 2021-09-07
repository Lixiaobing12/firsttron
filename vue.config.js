const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    remUnit: 32
})

module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [ postcss ]
            }
        }
    }
}