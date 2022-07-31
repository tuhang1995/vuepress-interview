const navbar = [
    {
        text: '基础知识', 
        children: [
            {
                text: 'HTML',
                link: '/html-docs/introduce',
            },
            {
                text: 'CSS',
                link: '/css-docs/introduce',
            },
            {
                text: 'JavaScript',
                link: '/js-docs/data-types/primitives-methods'
            },
        ]
    },
   
    {
        text: 'InterView',
        // link: '/interview-docs/javascript'
        children: [
            {
                text: 'HTML',
                link: '/interview-docs/html/html',
            },
            {
                text: 'CSS',
                link: '/interview-docs/css/css',
            },
            {
                text: 'JavaScript',
                link: '/interview-docs/js/javascript'
            },
            {
                text: 'Vue',
                link: '/interview-docs/vue/responsive'
            },
            {
                text: '网络知识',
                link: '/interview-docs/http/http'
            },
            {
                text: '打包工具',
                link: '/interview-docs/package-tool/vite'
            },
            {
              text: '包管理',
              link: '/interview-docs/package/package'
            },
          
        ]
    },
    {
        text: '精读',
        link: '/extension-docs/reading'
    }
]

export {
    navbar
}