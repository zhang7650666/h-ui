// import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import {sidebars} from './sidebars'

// console.log('sidebars', JSON.stringify(sidebars))
// import {navs} from './nav'
// console.log('navs', navs)
module.exports = {
  title: 'H-UI',
  description:'H UI',
  themeConfig: {
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此⽹站',
    repo: 'https://gitee.com/login',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Zi Shui'
    },
    nav: [
      {
        "text": "指南",
        "link": "/guide/installation"
      },
      {
        "text": "组件",
        "link": "/component/icon"
      },
      {
        "text": "资源",
        "link": "/"
      },
      {
        "text": "GitHub",
        "link": "https://github.com/lxKylin/vitepressdemo"
      }
    ],
    sidebar: sidebars,
  },
  // markdown: {
  //   theme: {
  //     light: 'vitesse-light',
  //     dark: 'vitesse-dark'
  //   },
  //   lineNumbers: true,
  //   config(md) {
  //     md.use(componentPreview)
  //     md.use(containerPreview)
  //   }
  // },
  markdown: {
    config: (md) => {
      const {
        demoBlockPlugin
      } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'sass'
      })
    },
    lineNumbers: true
  }
}
