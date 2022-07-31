function getHtmlDocsSidebar() {
   return [
    {
        text:'基础',
        collapsible: true,
        children:[
            {
                text:'HTML 介绍',
                link:'/html-docs/introduce'
            }
        ],

    }
   ] 
}

function getJsDocsSidebar() {
    return [
        {
            text: 'JavaScript编程语言',
            collapsible: true,
            children:[
                {
                    text:'数据类型',
                    children: [
                        {
                            link:'/js-docs/data-types/primitives-methods',
                            text: '原始类型的方法'
                        }
                    ]
                },
                {
                    text:'Promise，async/await',
                    collapsible: true,
                    children: [
                        {
                            link:'/js-docs/promises/callbacks',
                            text: '回调'
                        },
                        {
                            link:'/js-docs/promises/promise',
                            text: 'Promise'
                        },
                        {
                          link:'/js-docs/promises/promise-chaining',
                          text: 'Promise链'
                      }
                    ]
                },
                {
                    text:'杂项',
                    collapsible: true,
                    children: [
                        {
                            link:'/js-docs/miscellaneous/ui-misc',
                            text: '事件循环: 微任务宏任务'
                        }
                    ]
                }
            ],
        }
    ]
}

function getInterViewSidebar() {
    return [
        {
            text: '复习',
            collapsible: true,
            sidebarDepth: 3,    // 可选的, 默认值是 1
            children:[
                {
                    text:'CSS',
                    link:'/interview-docs/css/css'
                },
                {
                    text:'JavaScript',
                    link:'/interview-docs/js/javascript'
                },
                {
                    text:'Vue',
                    children: [
                        {
                            text: '响应式原理',
                            link:'/interview-docs/vue/responsive',
                        }
                    ]
                },
                {
                    text: 'Http',
                    link:'/interview-docs/http/http'
                },
                {
                    text: '打包工具',
                    children: [
                        {
                            text: 'Vite与webpack的区别',
                            link:'/interview-docs/package-tool/vite',
                        }
                    ]
                    // link:'/interview-docs/package-tool/vite'
                },
                {
                  text: '包管理工具',
                  link: '/interview-docs/package/package'
                }
                
            ],
        }
    ]
}

function getExtensionDocsSidebar() {
    return [
        {
            text: '文章精读',
            collapsible: true,
            sidebarDepth: 3,    // 可选的, 默认值是 1
            children:[
                {
                    text:'js',
                    link:'/extension-docs/reading'
                }
            ],
        }
    ]
}

export const sidebar = {
    '/html-docs/':getHtmlDocsSidebar(),
    '/js-docs/': getJsDocsSidebar(),
    '/interview-docs/': getInterViewSidebar(),
    '/extension-docs/': getExtensionDocsSidebar(),
}