/**
 * @file vue 比例指令，让元素能够按照一定的比例显示
 * @author MarxJiao
 * @date 2016/02/20
 */

var proportion = {
    install(Vue) {
        function update (el, binding) {
            var w = el.offsetWidth;
            var h = w * binding.value;
            el.style.height = h + 'px';
        }

        Vue.directive('proportion', {
            inserted (el, binding) {
                var w = el.offsetWidth;
                var h = w * binding.value;
                el.style.height = h + 'px';
                el.__resize = function () { update(el, binding); }
                window.addEventListener('resize', el.__resize);
            },

            componentUpdated (el, binding) {
                update(el, binding);
            },

            unbind (el) {
                window.removeEventListener('resize', el.__resize);
            }
        })
    }
};

module.exports =  proportion;
