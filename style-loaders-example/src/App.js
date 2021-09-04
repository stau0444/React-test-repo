import logo from './logo.svg';
//import './App.css';
//import './App.scss';
import styles from "./App.module.css"
import Button from './components/Button';
import WarnButton from './components/WarnButton';


console.log(styles)
// {
//   App: "App_App__16ZpL",
//   App-logo-spin: "App_App-logo-spin__1e7sv",
//   header: "App_header__3ZZ1n",
//   link: "App_link__TB6Cl"
// }
function App() {
  return (
    <div className={styles['App']}>
      <header className={styles["header"]}>
        <img src={logo} className={styles["logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button what="testButton">클릭</Button>
        <WarnButton>Warning</WarnButton>
      </header>
    </div>
  );
}

export default App;
