import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApplyContextProvider } from 'contexts/Context';
import Main from './pages/Main/Main';
import MakersApply from './pages/MakersApply/MakersApply';
import Nav from 'components/Nav/Nav';
import Signin from 'pages/Signin/Signin';
import Signup from 'pages/Signup/Signup';
import Terms from 'pages/Terms/Terms';
import Welcome from 'pages/Welcome/Welcome';
import FindPassword from 'pages/FindPassword/FindPassword';
import NewPassword from 'pages/NewPassword/NewPassword';
import MyPage from 'pages/MyPage/MyPage';
import ApplyDone from 'pages/MakersApply/ApplyDone';

const Routes = () => {
  return (
    <ApplyContextProvider>
      <Router>
        <Switch>
          <Route exact path="/makersapply" component={MakersApply} />
          <Route
            exact
            path="*"
            component={() => (
              <>
                <Nav />
                <Route exact path="/" component={Main} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/terms" component={Terms} />
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/findpassword" component={FindPassword} />
                <Route exact path="/newpassword" component={NewPassword} />
                <Route exact path="/mypage" component={MyPage} />
                <Route exact path="/applydone" component={ApplyDone} />
              </>
            )}
          />
        </Switch>
      </Router>
    </ApplyContextProvider>
  );
};

export default Routes;
