import React,{ useState } from 'react';
import { Row, Col,Container, TabContent, TabPane,Nav, NavItem,NavLink,Input} from 'reactstrap';
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
            More Tabs
          </NavLink>
        </NavItem>
      </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId={'1'}>
            <ListItem title="模块一" description="这是1的描述">
              <Input></Input>
            </ListItem>
            <ListItem title="模块二" description="这是2的描述">
              <Input></Input>
            </ListItem>
          </TabPane>
          <TabPane tabId={'2'}>模块二</TabPane>
        </TabContent>
      </Container>
  )
}

export default TabPage