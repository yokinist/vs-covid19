import { h, render, FunctionalComponent } from 'preact';
import Router, { Route } from 'preact-router';
import { AppContainer } from './containers';
import { Top } from './pages';

const App: FunctionalComponent = () => {
  const { Provider } = AppContainer;
  return (
    <Provider>
      <Router>
        <Route path="/" component={Top} />
      </Router>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
