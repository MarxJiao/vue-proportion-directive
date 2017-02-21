/**
 * @file vue 比例指令，让元素能够按照一定的比例显示
 * @author MarxJiao
 * @date 2016/02/20
 */


const proportion = {
    install(Vue, options) {
        Vue.directive('proportion', {
            inserted(el, binding, vnode, oldVnode) {

                let w = el.offsetWidth;
                let h = w * binding.value;
                console.log(h)
                el.style.height = h + 'px';

            },
            componentUpdated(el, binding, vnode, oldVnode) {
                let w = el.offsetWidth;
                let h = w * binding.value;
                console.log(h)
                el.style.height = h + 'px';
            },
            unbind(el, binding, vnode, oldVnode) {
            }
        })
    }
}

module.exports =  proportion;