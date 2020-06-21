import React from 'react';
import Ques from "./components/ques";
import{BrowserRouter,Switch,Route} from "react-router-dom";
import Intro from './components/Intro';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <React.Fragment>
          <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/quizground" component={Ques} />
          </Switch>
       </React.Fragment>
      </BrowserRouter>    
    );
  };
}

export default App;