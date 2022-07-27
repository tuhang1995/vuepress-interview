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
            text: '数据类型',
            collapsible: true,
            children:[
                {
                    text:'原始类型的方法',
                    link:'/js-docs/primitives-methods'
                }
            ],
        }
    ]
}

export const sidebar = {
    '/html-docs/':getHtmlDocsSidebar(),
    '/js-docs/': getJsDocsSidebar()
}