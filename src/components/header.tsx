import { FC } from "react";
import styled from "@emotion/styled";
import headerImage from '../assets/images/s4aHEADER.png';
import logo from '../assets/images/S4ALogo.png';
import Navbar from "./navbar";


const Header: FC = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="Startups for All logo" />
      <Title>Events</Title>
      <Navbar />
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.section`
      position: fixed;
      height: 225px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(${headerImage});
      background-size: cover;
      overflow: hidden;
      z-index: 3
      `

const Title = styled.div`
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 54px;
      text-align: center;
      color: #C79288;
      `

const Logo = styled.img`
      position: absolute;
      height: auto;
      width: 200px;
      left: 15px;
      top: 15px;
      `