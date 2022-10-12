import { NavItem } from "../../../models/navItem"
import { SocialAppRoutes } from "../../../routes"

export const useNavItems = () => {
  const Feed: NavItem = {
    id: SocialAppRoutes.Feed,
    icon: "home",
    title: "Feed",
  };

  const Profile: NavItem = {
    id: SocialAppRoutes.Profile,
    icon: "person",
    title: "Profile",
  };

  const Auth: NavItem = {
    id: SocialAppRoutes.Auth,
    icon: "login",
    title: "Login/Register",
  };

  const navItems: NavItem[] = [
    Feed,
    Profile,
    Auth,
  ];

  return navItems;
}