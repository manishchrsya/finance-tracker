import { ImageComponent } from "components";
import styled from "styled-components";
import brand from "assets/brand.png";
import { useMemo } from "react";
import { navItems, userProfile } from "./constant";

const SidebarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
`;

const BrandWrapper = styled.div`
  height: 76px;
  width: 100%;
  padding: 16px;
`;

const ItemsContainer = styled.div`
  height: calc(100vh - 76px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 16px 20px 16px;
`;

const ItemsWrapper = styled.div`
  width: 100%;
`;

const NavItem = styled.div`
  width: 100%;
  background-color: gray;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  gap: 16px;
  background-color: #6359e9;
  color: #ffffff;
`;

const UserCard = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const Avatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: flex-start;
  color: #ffffff;
`;
const UserName = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
const UserRole = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const NavItemIcon = styled.i`
  font-size: 24px;
`;
const NavItemlabel = styled.span`
  font-size: 16px;
`;

export const Sidebar = () => {
  const renderNavItems = useMemo(() => {
    return navItems.map((item) => {
      return (
        <NavItem key={item.name}>
          <NavItemIcon className={item.icon} />
          <NavItemlabel>{item.label}</NavItemlabel>
        </NavItem>
      );
    });
  }, []);

  const renderUserCard = useMemo(() => {
    return (
      <UserCard>
        <Avatar src={userProfile.avatar} />
        <UserDetails>
          <UserName>{userProfile.name}</UserName>
          <UserRole>{userProfile.role}</UserRole>
        </UserDetails>
      </UserCard>
    );
  }, []);

  return (
    <SidebarContainer>
      <BrandWrapper>
        <ImageComponent
          src={brand}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </BrandWrapper>
      <ItemsContainer>
        <ItemsWrapper>{renderNavItems}</ItemsWrapper>
        <ItemsWrapper>{renderUserCard}</ItemsWrapper>
      </ItemsContainer>
    </SidebarContainer>
  );
};
