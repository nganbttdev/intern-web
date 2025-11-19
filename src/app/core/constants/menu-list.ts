export interface MenuGroup {
  groupTitle: string;
  items: any[];
}

export const MENU_LIST: MenuGroup[] = [
  {
    groupTitle: 'Dashboard',
    items: [{ label: 'dashboard', route: '/dashboard', icon: 'dashboard' }],
  },
  {
    groupTitle: 'Authorization',
    items: [
      { label: 'users', route: '/users', icon: 'user' },
      { label: 'roles', route: '/roles', icon: 'team' },
      { label: 'permissions', route: '/permissions', icon: 'safety-certificate' },
    ],
  },
];
