/**
 * @file vue 比例指令，让元素能够按照一定的比例显示
 * @author MarxJiao
 * @date 2016/02/20
 */


var proportion = {
    install: function (Vue, options) {
        Vue.directive('proportion', {
            inserted: function (el, binding, vnode, oldVnode) {

                var w = el.offsetWidth;
                var h = w * binding.value;
                el.style.height = h + 'px';

            },
            componentUpdated: function (el, binding, vnode, oldVnode) {
                var w = el.offsetWidth;
                var h = w * binding.value;
                el.style.height = h + 'px';
            },
            unbind: function (el, binding, vnode, oldVnode) {
            }
        });
    }
};

module.exports =  proportion;
