
export default {
    // 如果您的网站要在子目录 中提供服务，那么您https://example.com/subdir/必须'/subdir/'在.basedocs/.vitepress/config.js
    //
    // 示例：如果您使用 Github（或 GitLab）页面并部署到user.github.io/repo/，则将您的设置base为/repo/.
    base: '/',

    title: 'John', // 所有文档的浏览器标签title
    description: 'John的网站  ', // 会渲染成<meta>标签，SEO用

    head: [
        ['link', { rel: 'icon', type: 'image/ico', href: '/favicon.ico' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'John' }],
        ['meta', { property: 'og:image', content: '/favicon.ico' }],
        ['meta', { property: 'og:url', content: 'https://github.com/songsings' }],
        ['meta', { property: 'og:description', content: '平安喜乐' }],
        ['meta', { name: 'theme-color', content: '#646cff' }]
    ],

    // 编辑时间
    lastUpdated: true,
    cleanUrls: 'without-subfolders',

    markdown: {
        lineNumbers: true
    },

    themeConfig: {

        siteTitle: '🐳  John  ',
        // logo: '/images/title.jpeg',

        // 导航链接
        nav: nav(),

        // algolia 搜索
        algolia: {
            appId: '8J64VVRP8K',
            apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            indexName: 'vitepress'
        },

        // 侧边栏
        sidebar: {
            '/guide': sidebarGuide(),
            '/config/': sidebarConfig(),
        },
        // sidebar: sidebarGuide(),

        // 编辑链接
        editLink: {
            pattern: 'https://github.com/SongSings/songsings.github.io/edit/master/docs/:path',
            text: 'Edit this page on GitHub' //指定文字
        },

        localeLinks: {
            text: 'English',
            items: [
                {text: '简体中文', link: 'https://songsings.github.io'},
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/songsings' },
            // { icon: 'twitter', link: '...' },
            // { icon: 'discord', link: '...' }
        ],

        // 页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present ❤️'
        },
    }
}

function nav() {
    return [
        { text: 'Guide', link: '/guide', activeMatch: '/guide/'},
        { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
        {
            text: '收藏',
            items: [
                {text: '网站', link: '/example/website'},
                {text: '其它', link: '/example/item2'}
            ]
        },
        {
            text: 'Dropdown Menu2',
            items: [
                {
                    // Title for the section.
                    text: 'Section A Title',
                    items: [
                        { text: 'Section A Item A', link: '/example/item1' },
                        { text: 'Section B Item B', link: '/example/item2' }
                    ]
                }
            ]
        },
    ]
}

function sidebarGuide() {
    return [
        {
            text: 'Guide',
            items: [
                // This shows `/guide/index.md` page.
                { text: 'Index', link: '/guide/' }, // /guide/index.md
                { text: 'Introduction', link: '/guide/introduction' }, // /guide/introduction.md
            ]
        },
        {
            text: 'Section Title A',
            items: [
                { text: 'Item A', link: '/guide/item1' },
                { text: 'Item B', link: '/guide/item2' },
            ]
        },
        {
            text: 'Section Title B',
            // 控制折叠的侧边栏组
            collapsible: true,
            // 设置是否默认折叠
            collapsed: false,
            items: [
                { text: 'Item C', link: 'guide/item1' },
                { text: 'Item D', link: 'guide/item2' },
            ]
        }
    ]
}

function sidebarConfig() {
    return [
        {
            text: 'Config',
            items: [
                { text: 'Introduction', link: '/config/introduction' },
            ]
        }
    ]
}