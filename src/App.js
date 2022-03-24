import './App.css';
import Day from './Day';
import {Route} from "react-router-dom";
import Detail from "./Detail";
function App() { 
    const days=["월","화","수","목","금","토","일"]
    const index=days.index
  return (
    <div className="App"  exact>
      
      <Route path="/"exact>
        <h1>나의 일주일은?</h1>  
        <Day/>
      </Route>
      <Route path="/detail/:index" exact>
        <Detail days={days}/ >
      </Route>
      
    </div>    
  );
}
export default App;
