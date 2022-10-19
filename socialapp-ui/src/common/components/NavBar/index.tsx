import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NavItem } from "../../../models/navItem";
import { colorPalette } from "../../styledHelpers/colorPalette";
import { NavButton } from "./NavButton";
import { useNavItems } from "./navItems";

const logoPath = process.env.PUBLIC_URL + "/assets/logo/";

export const NavBar = () => {
  const navigate = useNavigate();
  const nav = useNavItems();

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colorPalette.black}
    width: 100%;
  `;

  const Logo = styled.div`
    height: 60px;
    width: 180px;
    background-image: url(${logoPath}social-app-logo.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    cursor: pointer;
  `;

  const NavButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

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
    <Wrapper>
      <Logo onClick={() => navigate("/")} />
      <NavButtonsWrapper>{navigation}</NavButtonsWrapper>
    </Wrapper>
  );
};
