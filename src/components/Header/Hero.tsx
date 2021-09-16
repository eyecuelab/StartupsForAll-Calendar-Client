import { FC } from "react";
import styled from "@emotion/styled";
import { useLocation } from "react-router";
import { useAppSelector } from "../../hooks";

const Hero: FC = () => {
  const menuOpen = useAppSelector(({ menu }) => menu.menuOpen);
  const location = useLocation();

  return (
    <HeroContainer>
      {!menuOpen && location.pathname === "/" && <Title>Events</Title>}
      {!menuOpen && location.pathname === "/add" && <Title>Add Event</Title>}
      {!menuOpen && location.pathname === "/login" && <Title>Login</Title>}
      {!menuOpen && location.pathname === "/admin" && (
        <Title>Admin Events</Title>
      )}
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 250px;
`;
const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  text-align: center;
  color: #c79288;
`;