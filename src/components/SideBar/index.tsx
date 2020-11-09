import React from 'react';
import {Link} from 'react-router-dom';

const routerList = [
    {
        title:'图表',
        path:'/chart'
    },
    {
        title:'糖果售卖',
        path:'/candy'
    },
    {
        title:'标签切换',
        path:'/tab'
    }
]
const SideBar = ()=>{
  return(
      <ul>
          {
              routerList.map(item =>{
                  return(
                      <li>
                        <Link to={item.path}>{item.title}</Link>
                      </li>
                  )
              })
          }
      </ul>
  )
}

export default SideBar