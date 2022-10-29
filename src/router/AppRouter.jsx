import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { DcPages, MarvelPages } from "../heroes";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>  

      <Navbar/>

      <Routes>
          <Route path="marvel" element={< MarvelPages/>} />
          <Route path="dc" element={< DcPages/>} />
          <Route path="login" element={< LoginPage/>} />


          <Route path="/" element={< Navigate to={"/marvel"} />} />
      </Routes>
    </>
  )
}
