import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux'
import { MainLayout } from './layout/MainLayout'
import Home from './page/Home'
import TranslateProvider from './core/Translate'
import vi from './translate/vi.json'
import Auth from './page/Auth'

let trans = {
  vn: vi
}
function App() {
  return (
    <TranslateProvider translate={trans}>
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/auth' component={Auth} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    </TranslateProvider>
  )
}

export default App;
