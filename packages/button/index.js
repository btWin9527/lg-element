import LgButton from './src/button.vue'

// vue组件use使用测试
LgButton.install = (Vue) => {
  Vue.component(LgButton.name, LgButton)
}

export default LgButton