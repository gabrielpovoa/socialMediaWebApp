'use client'
import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./Route/RouteList";
import { UserLoginProvider } from "@/contexts/LoginUser";

const App = () => {
  return (
    <UserLoginProvider>
      <BrowserRouter>
        <main className="">
          <RouteList />
        </main>
      </BrowserRouter>
    </UserLoginProvider>
  )
}

export default App;