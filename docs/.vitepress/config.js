module.exports = {
  title: 'Z-UI',
  description: 'zi-shui UI',
  themeConfig: {
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此网站',
    repo: 'https://gitee.com/login',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Zi Shui'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/icon', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quieStart' }
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [
            { text: 'Icon', link: '/component/icon' },
            { text: 'Button', link: '/component/button' },
            { text: 'Checkbox', link: '/component/checkbox' },
            { text: 'Input', link: '/component/input' }
          ]
        },
        {
          text: '树组件',
          items: [{ text: 'Tree', link: '/component/tree' }]
        },
        {
          text: '表单组件',
          items: [{ text: 'Form', link: '/component/form' }]
        },
        {
          text: '日历组件',
          items: [{ text: 'Calendar', link: '/component/calendar' }]
        },
        {
          text: '上传组件',
          items: [{ text: 'Upload', link: '/component/upload' }]
        }
      ]
    }
  }
}
