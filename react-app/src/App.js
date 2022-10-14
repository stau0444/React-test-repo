import './App.scss';



function App() {
  return (  
      <div className='App'> 
        <div className='text-logo'>
          <p className='text-logo-first'>THINGS</p>
          <p className='text-logo-second'>I</p>
          <p className='text-logo-third'>LOVE</p>
        </div> 
          <div className='container'>
            <div className='content'>
              <div className='content-logoBox'>
                <div className='content-imageBox'>
                  <img className='content-logo' src='/tilLogo.png' alt=''/>
                  <p className='content-logo-desc'>Things I love</p>
                </div>
                <div className='content-slogun'>
                      <small>내가 좋아하는 것들만 저장해요 🍔 🌮 🍕 🍷 🏨 ☕️ 🏃‍♀️</small>
                </div>
                <hr className='content-divider'/>
              </div>
              <div className='content-select-buttonBox'>
                <select className='selectButton'>
                  <option>물건 🍔</option>
                </select>
                <select className='selectButton'>
                  <option>장소 🏨</option>
                  <option>물건 🍔</option>
                  <option>식당 🍔</option>
                </select>
                <select className='selectButton'>
                  <option>카페 ☕️</option>
                </select>
                <select className='selectButton'>
                  <option>식당 🍕</option>
                </select>
                <select className='selectButton'>
                  <option>숙소</option>
                </select>
                <select className='selectButton'>
                  <option>물건🏨</option>
                </select>
                <select className='selectButton'>
                  <option>물건 🍔</option>
                </select>
                <select className='selectButton'>
                  <option>장소 🏨</option>
                </select>
                <select className='selectButton'>
                  <option>카페 ☕️</option>
                </select>
              </div>
              <hr className='content-divider'/>
              <div className='listBox'>
                <ul>
                  <li>
                    <div className='list-item'>
                        <h3 className='list-title'>정릉설렁탕</h3>
                        <small className='list-description'>정릉동 숨은 맛집 다신 안감</small>
                    </div>
                    <div className='list-item'>
                      <h3 className='list-title'>정릉설렁탕</h3>
                      <small className='list-description'>정릉동 숨은 맛집 다신 안감</small>
                    </div>
                    <div className='list-item'>
                      <h3 className='list-title'>정릉설렁탕</h3>
                      <small className='list-description'>정릉동 숨은 맛집 다신 안감</small>
                    </div>
                    <div className='list-item'>
                      <h3 className='list-title'>정릉설렁탕</h3>
                      <small className='list-description'>정릉동 숨은 맛집 다신 안감</small>
                    </div>
                    <div className='list-item'>
                      <h3 className='list-title'>정릉설렁탕</h3>
                      <small className='list-description'>정릉동 숨은 맛집 다신 안감</small>
                    </div>
                    <div className='list-item'>
                      <h3 className='list-title'>정릉설렁탕</h3>
                      <small className='list-description'>정릉동 숨은 맛집 다신 안감</small>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='container-detail'>
            <div className='detail-login'>
              <div className='detail-login-user'>
                <span className='user-thumbnail-box'>
                  <img className='user-thumbnail'src='logo192.png' alt=''/>
                </span>
                <span className='user-id-box'>
                  <p className='user-id'>
                    UGO0444
                  </p>
                </span>
              </div>
              <div>
                
              </div>
            </div>
            <div className='detail-content'>

            </div>
          </div>
      </div>
      
  );
}

export default App;
