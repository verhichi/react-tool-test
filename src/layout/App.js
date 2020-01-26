import React from 'react';
import TheHeader from 'components/partials/theHeader/theHeader';
import TheSideNav from 'components/partials/theSideNav/theSideNav';
import MyRoutes from 'routes';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

function App() {
  const pages = MyRoutes.map((page, idx) => <page.component key={idx} path={page.path} />)

  return (
    <div className="App">
      <Router>
        <TheHeader />
        <TheSideNav />
        <div className="v-body">
            <Switch>
              { pages }
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
