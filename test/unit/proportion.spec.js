/**
 * @file unit test
 * @author MarxJiao
 */

import Vue from 'vue';

import proportion from '../../src/index.js';
import test from './test.vue';

describe('vue proportion directive test', () => {
    it('proportion shoud work fun', () => {
        const div = document.createElement('div');
        div.setAttribute('id', 'div');
        document.body.appendChild(div);
        Vue.use(proportion);
        let vm = new Vue({
            el: '#div',
            render(h) {
                return h(test);
            }
        }).$mount();

        const el = vm.$el;
        const testelement = el.getElementsByTagName('div')[0];
        expect(testelement.offsetWidth).toEqual(100);
    })
});
    