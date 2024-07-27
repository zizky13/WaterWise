import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// import menus
import Dashboard from './dashboard';

function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="flex flex-wrap justify-center">
        <Col sm={3} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <Nav variant="pills" className="flex flex-col ">
            <Nav.Item>
              <Nav.Link eventKey="first" className="text-lg font-bold text-gray-600 hover:text-gray-900">
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="text-lg font-bold text-gray-600 hover:text-gray-900">
                Reports
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className="text-lg font-bold text-gray-600 hover:text-gray-900">
                Insights
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" className="text-lg font-bold text-gray-600 hover:text-gray-900">
                Leaderboard
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} className="p-4 rounded-lg shadow-md">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Dashboard />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="text-lg font-bold text-gray-600">Second tab content</div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <div className="text-lg font-bold text-gray-600">3rd tab content</div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <div className="text-lg font-bold text-gray-600">4th tab content</div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;