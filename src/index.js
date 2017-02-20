/**
 * @file vue 比例指令，让元素能够按照一定的比例显示
 * @author MarxJiao
 * @date 2016/02/20
 */


const proportion = {
    install(Vue, options) {
        Vue.directive('proportion', {
            bind(el, binding, vnode, oldVnode) {

                let w = el.offsetWidth;

                let type = binding.value ? [].toString.call(binding.value) : undefined;

                let proportion  = vtype === '[object Object]' ? +binding.value : +options;

                let h = w * proportion;

                el.style.height = h + 'px';
                
            },
            update(el, binding, vnode, oldVnode) {

                let w = el.offsetWidth;

                let type = binding.value ? [].toString.call(binding.value) : undefined;

                let proportion  = vtype === '[object Object]' ? +binding.value : +options;

                let h = w * proportion;

                el.style.height = h + 'px';
            },
            unbind(el, binding, vnode, oldVnode) {
            }
        })
    }
}

export default proportion;