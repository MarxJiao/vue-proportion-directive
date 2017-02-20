/**
 * @file unit test
 * @author MarxJiao
 */

import Vue from 'vue';

import proportion from '../../src/index.js';


describe('vue proportion directive test', () => {
    it('proportion shoud work fun', () => {
        Vue.use(proportion)
        Vue.component('my-component',{
            template: '<div id="div" v-proportion="1"><div>{{text}}</div></div>',
            data() {
                return {
                    text: 'hello word'
                }
            }
        })

        let div = document.createElement('div');
        div.id = "div";
        
        let a = new Vue({el: '#div'}).$mount();
        console.log(a.$el);
        // expect(true).toEqual(true);
    })
});
    