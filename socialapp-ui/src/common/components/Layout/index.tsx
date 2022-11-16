import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getUsers } from "../../actions/usersActions";
import { NavBar } from "../NavBar";

type GetUsers = ReturnType<typeof getUsers>;

interface SocialAppLayoutProps {
  children: JSX.Element;
}

const ContentWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export const SocialAppLayout = (props: SocialAppLayoutProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <ContentWrapper>
        {props.children}
      </ContentWrapper>
    </>
  );
};