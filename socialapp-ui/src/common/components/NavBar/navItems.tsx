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

  const navItems: NavItem[] = [
    Feed,
    Profile
  ];

  return navItems;
}