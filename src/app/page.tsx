'use client'
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { RouteList } from "./Route/RouteList";

const App = () => {
  return (
    <BrowserRouter>
      <main className="">
        <RouteList />
      </main>
    </BrowserRouter>
  )
}

export default App;