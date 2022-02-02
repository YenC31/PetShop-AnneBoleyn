import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Container = styled.div`
  height: 60px;
`;

const Roll = styled.div`
  padding: 10px 10px;
  display: flex;
  alig-items: center;
  justify-content: space-between;
  background-color: gray;
`;

const Lang = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-color: blue;
`;

const ContainerBusqueda = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  aling-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Entrada = styled.input`
  border: none;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  text-aling: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Logo = styled.div`
  font-weight: bold;
  padding: 20px;
  text-aling: center;
`;

const Navbar = () => {
  return (
    <Container>
      <Roll>
        <Left>
          <Lang>EN</Lang>
          <ContainerBusqueda>
            <Entrada />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </ContainerBusqueda>
        </Left>
        <Logo>ProShop</Logo>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Roll>
    </Container>
  );
};

export default Navbar;
