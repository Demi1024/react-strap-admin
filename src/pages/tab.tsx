import React,{ useState } from 'react';
import { Row, Col,Container, TabContent, TabPane,Nav, NavItem,NavLink,Input} from 'reactstrap';
import AceEditor from "react-ace";
import {useQuery} from 'utils/index'
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-solarized_light";


const ListItem = ({title, description, children})=>{
  return(
    <Row>
      <Col lg="4">
        <p>{title}</p>
        <p>{description}</p>
      </Col>
      <Col lg="8">
        {children}
      </Col>
    </Row>
  )
}
const TabPage = () => {
  const [activeTab,setActiveTab] = useState('1');
  const reg = new RegExp(/^(?![^A-z]+$)(?!\D+$)[^\n]{8,}$/);
  const query = useQuery();
  const onChange = (newValue)=>{
    console.log("change", newValue);
    console.log(query)
  }
  const changeValue = e =>{
    let value = e.target.value
    console.log(value)
    if(reg.test(value)){
      console.log("符合正则")
    } else {
      console.log('不符合')
    }
  }
  return(
      <Container>
        <Nav tabs>
        <NavItem>
          <NavLink
            onClick={() => { setActiveTab('1'); }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => { setActiveTab('2'); }}
          >
            Tab2
          </NavLink>
        </NavItem>
      </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId={'1'}>
            <ListItem title="请输入 JSON" description="这是1的描述">
            <AceEditor
              mode="json"
              theme="solarized_light"
              showGutter={false}
              onChange={onChange}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
            />
            </ListItem>
            <ListItem title="请输入名称" description="这是2的描述">
              <Input onChange={value=>changeValue(value)}></Input>
            </ListItem>
          </TabPane>
          <TabPane tabId={'2'}>模块二</TabPane>
        </TabContent>
      </Container>
  )
}

export default TabPage