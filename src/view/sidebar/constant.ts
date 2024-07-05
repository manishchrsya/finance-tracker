type ItemsKeys = "label" | "name" | "icon";

type InavItem = { [key in ItemsKeys]: string };

export const navItems: InavItem[] = [
  { label: "Dashboard", name: "dashboard", icon: "ri-dashboard-fill" },
];

export const userProfile: {
  avatar: string;
  name: string;
  role: string;
  email: string;
} = {
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "John Doe",
  role: "Software Engineer",
  email: "chaurasiya.mns@gmail.com",
};
