'use client'
import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./Route/RouteList";
import { UserLoginProvider } from "@/contexts/LoginUser";
import { Footer } from "./pages/template/Footer";
import { FollowrProvider } from "@/contexts/Follower";

const App = () => {
  return (
    <UserLoginProvider>
      <FollowrProvider>
        <BrowserRouter>
          <main> <RouteList /> </main>
        </BrowserRouter>
      </FollowrProvider>
    </UserLoginProvider>
  )
}

export default App;