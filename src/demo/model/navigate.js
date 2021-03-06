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
        }
      ]
    },
    {
      name: '布局',
      showSubMenu: false,
      selectClass: '',
      subAppList: [
        {

          name: "collection组件",
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
          name:'grid布局',
          router:'Sub/GridLayoutDemo'
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
        },
        {
          name: "echart",
          router: "Sub/EChartDemo"
        },
        {
          name: "loading",
          router: "Sub/LoadingDemo"
        }
      ]
    },
    {
      name: '组件2',
      showSubMenu: false,
      selectClass: '',
      subAppList: [
        {
          name: "scrollEx",
          router: "Sub/ScrollExDemo"
        }
      ]
    }
  ]

}
