export default {
    appList: [
        {
            name: '数据汇总',
            showSubMenu: false,
            selectClass: '',
            subAppList: [
                {
                    name: "基础数据",
                    router: "DataStaticBaseData"
                },
                {
                    name: "统计数据",
                    router: "EChartDemo"
                },
                {
                    name: "数据查询",
                    router: ""
                }
            ]
        },
        {
            name: '电量统计',
            showSubMenu: false,
            selectClass: '',
            subAppList: [
                {
                    name: "电量总貌",
                    router: ""
                },
                {
                    name: "对比分析",
                    router: ""
                }
            ]
        },
        {
            name: '风机状态',
            showSubMenu: false,
            selectClass: '',
            subAppList: [
                {
                    name: "状态统计",
                    router: ""
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
            name: '风资源分析',
            showSubMenu: false,
            selectClass: '',
            subAppList: [
                {
                    name: "风资源分析",
                    router: ""
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