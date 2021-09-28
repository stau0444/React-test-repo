import logo from './logo.svg';
import './App.css';
import {Calendar,Row,Col} from 'antd';
import 'antd/lib/calendar/style/css'
import {LinkedinOutlined} from '@ant-design/icons'


function App() {
  return (
        <div>
          <Row gutter={15}>
              <Calendar onPanelChange={false}/>
          </Row>
          <Row>
            <Calendar onPanelChange={false}/>
          </Row>
        </div>
  );
}

export default App;
