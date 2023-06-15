import Home from "@/pages/home";
import User from "@/pages/user";
import Setting from "@/pages/setting";
import Work from "@/pages/work";

const router = [
  {
    title: "管理台",
    children: [
      {
        path: "/home",
        title: "主页",
        component: Home,
        exact: true,
      },
      {
        path: "/user",
        title: "用户",
        component: User,
      },
    ],
  },
  {
    title: "用户页",
    children: [
      {
        path: "/setting",
        title: "设置",
        component: Setting,
      },
      {
        path: "/work",
        title: "工作",
        component: Work,
      },
    ],
  },
];

export default router;
