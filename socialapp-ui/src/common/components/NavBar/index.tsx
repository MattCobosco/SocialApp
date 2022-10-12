import { useLocation, useNavigate } from "react-router-dom";
import { NavItem } from "../../../models/navItem";
import { useNavItems } from "./navItems";

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
      <button
        onClick={() => navigationClick(navItem)}
      >
        {navItem.title}
      </button>
    );
  };

  const navigation = nav.map(navItem => buildNavItem(navItem));

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 1rem",
      height: "3rem",
      backgroundColor: "white",
      width: "200px",
    }}>
      {navigation}
    </nav>
  );
};
