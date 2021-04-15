const menuList = [
  { title: '首页', path: '/dashboard' },
  {
    title: '政策宣传',
    path: '/policy',
    pathname: '/policy',
    children: [
      {
        title: '政策宣传',
        path: '/policy',
        pathname: '/policy',
      },
      {
        title: '政策宣传详情',
        path: '/policylist/detail/:id',
        pathname: '/policylist/detail/:id',
      },
    ],
  },
];

export default menuList;
