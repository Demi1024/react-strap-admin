import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TabPage from './tab';
import LiteralTypes from './literalType';

const Main = ()=>{
    return(
        <div>
            <header>头部</header>
            <aside>这里是侧边栏</aside>
            <div>
                <Switch>
                    <Route path="/tab" component={TabPage}></Route>
                    <Route path="/literal" component={LiteralTypes}></Route>
                    <Redirect to={`/tab`} />
                </Switch>
            </div>
        </div>
    )
}
export default Main