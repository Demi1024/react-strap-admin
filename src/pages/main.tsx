import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/header'
import SideBar from '../components/SideBar'
import TabPage from './tab';
import Chart from './chart';
import Candy from './candies';
import styled from 'styled-components/macro';

const MainContainer = styled.div`
width: 100%;
display: flex;
`
const LeftAside = styled.aside`
  flex: 0;
  min-width: 200px;
`
const RightContainer = styled.div`
  flex: 1;
`
const Main = ()=>{
    return(
        <div>
            <Header>这里是头部</Header>
            <MainContainer>
                <LeftAside>
                    <SideBar></SideBar>
                </LeftAside>
                <RightContainer>
                    <Switch>
                        <Route path="/tab" component={TabPage}></Route>
                        <Route path="/chart" component={Chart}></Route>
                        <Route path="/candy" component={Candy}></Route>
                        <Redirect to={`/tab`} />
                    </Switch>
                </RightContainer>
            </MainContainer>
        </div>
    )
}
export default Main