/**
 * @file unit test
 * @author MarxJiao
 */

import Vue from 'vue';

import proportion from '../../src/index.js';
import test from './test.vue';

describe('vue proportion directive test', () => {
    it('proportion shoud work fun', () => {
        Vue.use(proportion);
        let vm = new Vue(test).$mount();
        
        const el = vm.$el;
        const testelement = el.getElementsByTagName('div')[0]
        console.log(testelement);

        // expect(true).toEqual(true);
    })
});
    