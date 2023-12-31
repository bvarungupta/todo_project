import BatchContainer from "./components/appComponents/BatchContainer"
import SideBar from "./components/appComponents/SideBar"
import Provider from "./context/Provider"


function App() {
  return (
    <Provider>
    <div className="h-screen flex">
         <SideBar/>
         <BatchContainer/>
    </div>
    </Provider>
  )
}

export default App
