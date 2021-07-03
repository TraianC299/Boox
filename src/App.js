import './App.css';
import MenuBar from './components/MenuBar';
import {BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom"
import Home from './components/PageComponents/Home';
import BookStore from './components/BookStore';
import MyLibrary from './components/PageComponents/Books/MyLibrary';
import styled from "styled-components"
import AvailableSwaps from './components/PageComponents/Books/AvailableSwaps';
import ScannerPage from "./components/PageComponents/Books/ScannerPage"
import ProfilePage from "./components/PageComponents/Books/ProdilePage/ProfilePage"
import {useTransition, animated} from "react-spring"



function App() {
  let Space=styled.div`
    width: 100vw;
    height: 10.7vh;
    
    @media (min-width: 768px) {
        width: 25vw;
        height: 9vh;
        bottom: 20px;
        right: 20px;
        border-radius: 100px;

      }

      @media (min-width: 768px) and (max-width: 1024px){
        width: 40vw;
        height: 6vh;
        bottom: 30px;
        right: 30px;
        border-radius: 100px;
      }`

      const location = useLocation()
      console.log(location)

      
  
  return (

    <>
    <Route path="/" exact component={Home}/>
    <Route path="/mylibrary" exact component={MyLibrary}/>
    <Route path="/mylibrary/scanner" exact component={ScannerPage}/>
    <Route path="/availableSwaps" exact component={AvailableSwaps}/>
    <Route path="/profile" exact component = {ProfilePage}/>
    <MenuBar></MenuBar>
    <Space></Space>
    </>

  );
}

export default App;
