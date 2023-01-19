import Shop from "./components/Shop"
import Cart from "./components/Cart"
import { GlobalProvider } from "./context/GlobalContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
    <div className="App">
      <main>
        <h1>JANE'S STORE</h1>
        <GlobalProvider>
        <Routes>
          <Route index element={<Shop />}/>
          <Route path="cart" element={<Cart />} />
        </Routes>
        </GlobalProvider>
      </main>
    </div>
    </Router>
  )
}

export default App
