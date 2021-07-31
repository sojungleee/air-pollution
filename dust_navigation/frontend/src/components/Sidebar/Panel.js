import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Data } from "./Data";
import Sidebar from "./Sidebar";
import { IconContext } from "react-icons/lib";

const useSlider = () => {
  const [sidebar, setSidebar] = useState(false);

  return {
    sidebarStatus: sidebar,
    setSidebar: setSidebar,
  };
};

/*
Panel.defaultProps = {
  title: "정밀 대기 지도"
}*/

const Panel = (props) => {
  const { sidebarStatus, setSidebar } = useSlider();

  const toggleSidebar = () => setSidebar(!sidebarStatus);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <Title> {props.title} </Title>
          <NavIcon to="#" onClick={toggleSidebar}>
            <FaIcons.FaBars />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebarStatus}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={toggleSidebar} />
            </NavIcon>
            {Data.map((item, index) => {
              return (
                <Sidebar item={item} key={index} toggleEvent={toggleSidebar} />
              );
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

const Nav = styled.div`
  background: #a0d911;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-right: 20px;
  font-size: 2rem;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #a0d911;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  span {
    font-family: "nanum";
  }
`;

const Title = styled.div`
  font-size: x-large;
  margin-left: 30px;
  color: white;
  font-family: "nanum";
  font-weight: bold;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export default Panel;