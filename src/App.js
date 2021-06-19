import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style/style.scss'
import { MainApp } from './pages/MainApp'
import { MediaList } from './pages/MediaList/MediaList'
import { ItemDetails } from './pages/ItemDetails/ItemDetails'
function App() {

  return (
    <div className="App ">

      <Switch>
        <Route component={MainApp} exact path="/" />
        <Route component={MediaList} path="/:searchTitle/:mediaType/:year/:pageNum" />
        <Route component={ItemDetails} path="/:searchTitle/:id" />
      </Switch>
      {/* <Footer/> */}
    </div>

  );
}

export default App;

