import lgButton from "../src/button.vue";
import {mount} from "@vue/test-utils";

describe('lgButton', () => {
  //
  test('button-test', () => {
    const wrapper = mount(lgButton)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
