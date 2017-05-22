export default {
    appList: [
        {
            name: '基础',
            showSubMenu: false,
            selectClass: '',
            subAppList: [
                {
                    name: "组件生命周期",
                    router: "Sub/LifeCicle"
                },
                {
                    name: "统计数据",
                    router: "Sub/NavLayout"
                },
                {
                    name: "数据查询",
                    router: "Sub/EChartDemo"
                }
            ]
        },
        {
            name: '布局',
            showSubMenu: false,
            selectClass: '',
            subAppList: [
                {

                    name: "宫格组件",
                    router: "Sub/CollectionLayoutDemo",
                },
        {

                    name: "stack布局",
                    router: "Sub/StackLayoutDemo"
                },
                {
                    name: "nav布局",
                    router: "Sub/NavLayoutDemo"
                }
            ]
        },
        {
            name: '布局2',
            showSubMenu: false,
            selectClass: '',
            subAppList: [
                {
                    name: "page布局",
                    router: "Sub/PageLayoutDemo"
                },
                {
                    name: "长停风机监督",
                    router: ""
                }
            ]
        },
        {
            name: '故障汇总',
            showSubMenu: false,
            selectClass: '',
            subAppList: [
                {
                    name: "故障汇总",
                    router: ""
                }
            ]
        },
        {
            name: '组件',
            showSubMenu: false,
            selectClass: '',
            subAppList: [
                {
                    name: "card",
                    router: "Sub/CardDemo"
                }
            ]
        },
        {
            name: '巡检路线',
            showSubMenu: false,
            selectClass: '',
            subAppList: [
                {
                    name: "巡检路线",
                    router: ""
                }
            ]
        }
    ]

}