import React from 'react';
import styled from 'styled-components';
import logo from 'assets/common/logo.png';

const HeaderPart = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`
const LogoWrapper = styled.div`
  flex-grow: 0;
  width: 200px;
`
const Logo = styled.img`
  width: 40px;
  height: 40px;
`

const Header = (props,children)=>{
  return(
      <HeaderPart>
          <LogoWrapper>
            <Logo alt='logo' src={logo}></Logo>
            后台管理系统
          </LogoWrapper>
      </HeaderPart>
  )
}

export default Header