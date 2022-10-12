import { useLocation, useNavigate } from "react-router-dom";
import { NavItem } from "../../../models/navItem";
import { NavButton } from "./NavButton";
import { useNavItems } from "./navItems";
import "./navBar.css";

const logoPath = process.env.PUBLIC_URL + "/assets/logo/";

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const nav = useNavItems();

  const navigationClick = (clicked: NavItem) => {
    if (clicked.id) {
      navigate(clicked.id);
    }

    return;
  };

  const buildNavItem = (navItem: NavItem) => {
    return (
      <NavButton key={navItem.id} label={navItem.title} onClick={() => navigationClick(navItem)} />
    );
  };

  const navigation = nav.map(navItem => buildNavItem(navItem));

  return (
    <nav className="nav">
      <div className="nav_logo-wrapper" onClick={() => navigate("/")}>
        <img className="nav_logo" src={logoPath + "social-app-logo.png"} alt="logo" />
      </div>
      <div className="nav_items">{navigation}</div>
    </nav>
  );
};
