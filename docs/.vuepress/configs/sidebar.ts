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
                    link:'/interview-docs/css'
                },
                {
                    text:'JavaScript',
                    link:'/interview-docs/javascript'
                },
                {
                    text:'Vue',
                    link:'/interview-docs/vue'
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