import styled from "styled-components";
import { NavBar } from "../NavBar";

interface SocialAppLayoutProps {
  children: JSX.Element;
}

const ContentWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export const SocialAppLayout = (props: SocialAppLayoutProps) => {
  return (
    <>
      <NavBar />
      <ContentWrapper>
      {props.children}
      </ContentWrapper>
    </>
  );
};