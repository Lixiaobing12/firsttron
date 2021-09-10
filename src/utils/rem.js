const baseSize = 32
function setRem () {
    // 当前页面宽度相对于375宽的缩放比例
    const scale = document.documentElement.clientWidth / 750
    // 设置也买呢根节点字体大小
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 1) + 'px'
}
setRem()
window.onresize = function () {
    setRem()
}