import React  from 'react';
import TrackCoverDisplay from './components/TrackCoverDisplay';
import { CssBaseline} from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/Join';


function App() {
	return (
		<>
      <CssBaseline />
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat"  component={TrackCoverDisplay} />
      </Router>
		</>
	);
}

export default App;
