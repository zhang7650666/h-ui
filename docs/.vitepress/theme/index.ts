import DefaultTheme from 'vitepress/theme';
// import { AntDesignContainer } from '@vitepress-demo-preview/component'
// import '@vitepress-demo-preview/component/dist/style.css'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { registerComponents } from './register-components'
// import 'vitepress-theme-demoblock/theme/styles/index.css'


import '@h-ui/theme-chalk/src/index.scss';
import HIcon from '@h-ui/components/icon';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(HIcon); // 注册组件
    registerComponents(ctx.app)
  },
};

// export default {
//   ...DefaultTheme,
//   enhanceApp({app}) {
//     app.use(HIcon); // 注册组件
//     app.component('HIcon',HIcon)
//     app.component('demo-preview', AntDesignContainer)
//   }
// }
