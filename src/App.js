import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { JetSkis } from './pages/JetSkis/JetSkis';
import { JetSki } from './pages/JetSki/JetSki';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/jet-skis">
          <JetSkis />
        </Route>
        <Route exact path="/jet-ski">
          <JetSki />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
