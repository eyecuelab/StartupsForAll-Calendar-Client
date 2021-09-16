import { FC } from "react";
import styled from "@emotion/styled";
import logo from "../assets/images/S4ALogo.png";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setMenuOpen } from "../../store/slices/menu/menuOpenSlice";

const LogoMenu: FC = () => {
  const menuOpen = useAppSelector(({ menu }) => menu.menuOpen);
  const dispatch = useAppDispatch();

  return (
    <TopSticky>
      <Logo src={logo} alt="Startups for All logo" />
      <Hamburger
        className={menuOpen ? "active" : "Hamburger"}
        onClick={() => dispatch(setMenuOpen(!menuOpen))}
      >
        <span id="line1" />
        <span id="line2" />
        <span id="line3" />
      </Hamburger>
    </TopSticky>
  );
};

export default LogoMenu;

const TopSticky = styled.div`
  position: sticky;
  top: 0;
  height: 40px;
`;
const Logo = styled.img`
  height: auto;
  width: 200px;
  z-index: 4;
`;
const Hamburger = styled.div`
  width: 34px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  top: 10px;
  right: 15px;
  cursor: pointer;
  z-index: 4;
  &.active {
    span {
      &:first-of-type {
        background-color: gray;
        transform: rotate(45deg);
        width: 75%;
      }
      &:nth-of-type(2) {
        opacity: 0;
      }
      &:last-of-type {
        opacity: 100;
        background-color: gray;
        transform: rotate(-45deg);
        width: 75%;
      }
    }
  }
  span {
    width: 100%;
    height: 1px;
    background-color: #c79288;
    transform-origin: left;
    transition: all 1s ease;
    &:nth-of-type(3) {
      opacity: 0;
    }
  }
`;