import { NavBar } from "../NavBar";
import "./layout.css"

interface SocialAppLayoutProps {
  children: JSX.Element;
}

export const SocialAppLayout = (props: SocialAppLayoutProps) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};