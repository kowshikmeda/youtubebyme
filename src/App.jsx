
import './style.css'
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Maincontainer from './components/Maincontainer'
import Watchpage from './components/Watchpage'
import TestComp from './components/Testcomp'


const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"/watch",
      element:<Watchpage/>
    }
  ]
}])
function App() {
  return (
    
    <div >
      <Provider store={store}>
      <div  >
  
      <Head/>
      <RouterProvider router={appRouter}/>
   
      </div>
      </Provider>
      {/* <TestComp/> */}
    </div>
  )
}

export default App
