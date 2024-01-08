import './App.css'
import { AppRouter } from './AppRouter'
import TurnosStore from './redux/store'

function App() {

  return (
    <provi store={TurnosStore}>
      <AppRouter />
    </Provider>
  )
}

export default App
