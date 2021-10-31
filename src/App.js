import { BrowserRouter as Router, Route } from 'react-router-dom';
import DisplayChoice from './components/DisplayChoice';
import Header from './components/Header';
import ChoiceMaker from './components/ChoiceMaker';

const App = ({question, randomAnswer}) => {

    return (
      <Router>
        <Header />
        <div className="container">
          <Route
            path="/"
            exact
            render={(props) => (
              <>
                <ChoiceMaker />
              </>
            )}
          />
          <Route 
          path="/displaychoice" 
          component= { ()=> (
          <DisplayChoice question={question} answer={randomAnswer} /> 
          )}
          />
        </div>
      </Router>
    );
}

export default App