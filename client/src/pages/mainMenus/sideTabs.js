import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Image } from 'react-bootstrap';

import DashboardIcon from '@mui/icons-material/Dashboard';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';



import GImage from '../../assets/images/google.png' 

// import menus
import Dashboard from './dashboard';
import Insights from './insights';

function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="flex flex-wrap justify-center ">
        <Col sm={2} className="bg-gray-100 p-4 rounded-lg   ">
          <div className='flex justify-center items-center my-5 ' >
            <Col xs={3} md={3}>
              <Image src={GImage} rounded />
            </Col>

          </div>
          <Nav variant="pills" className="flex flex-col ">
            <Nav.Item className='tabMenus'>
              <Nav.Link eventKey="first" className='tabLabels' >
                <DashboardIcon className='mx-3'/>
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='tabMenus'>
              <Nav.Link eventKey="second" className='tabLabels'>
                <StackedLineChartIcon className='mx-3'/>
                Reports
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='tabMenus'>
              <Nav.Link eventKey="third" className='tabLabels'>
                <TipsAndUpdatesIcon className='mx-3'/>
                Insights
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='tabMenus'>
              <Nav.Link eventKey="fourth" className='tabLabels'>
                <LeaderboardIcon className='mx-3'/>
                Leaderboard
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10} className="p-4 rounded-lg shadow-md">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Dashboard />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="text-lg font-bold text-gray-600">Second tab content</div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <div className="text-lg font-bold text-gray-600"> <Insights/> </div>
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