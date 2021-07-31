import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #135200;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 5px 20px;
  list-style: none;
  height: 45px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #5b8c00;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-right: 16px;
`;

const DropdownLink = styled(Link)`
  background: #7cb305;
  height: 45px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #135200;
  font-size: 18px;
  &:hover {
    background: #5b8c00;
    cursor: pointer;
  }
`;

const Sidebar = ({ item, toggleEvent }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={() => {
          item.subNav && showSubnav();
          !item.subNav && toggleEvent();
        }}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} onClick={toggleEvent}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default Sidebar;