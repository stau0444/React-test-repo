import logo from './logo.svg';
import './App.css';
import {Calendar,Row,Col} from 'antd';
import 'antd/lib/calendar/style/css'
import {LinkedinOutlined} from '@ant-design/icons'
const colStyle = () =>({
  height:50,
  opacity:0.3
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row gutter={16}>
          <Col span={12} style={colStyle()}>
              <img src={logo} className="App-logo" alt="logo" />
          </Col>
          <Col span={12} offset={8} style={colStyle()}>
              <p>
                <LinkedinOutlined />
              </p>
          </Col>
        </Row>
        <Calendar onPanelChange={false} />
      </header>
    </div>
  );
}

export default App;
