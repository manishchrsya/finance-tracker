type ItemsKeys = "label" | "name" | "icon";

type InavItem = { [key in ItemsKeys]: string };

export const navItems: InavItem[] = [
  { label: "Dashboard", name: "dashboard", icon: "ri-dashboard-fill" },
];
