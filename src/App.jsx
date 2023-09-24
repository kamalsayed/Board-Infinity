import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ToDo from "./components/Todo";
import Done from "./components/Done";
import Register from "./components/Register";
import { useState } from "react";


export const ActivePage = React.createContext();

export const ActiveProvider = ({children})=>{
  const [activePage , setActivePage] =useState('Register');
  return (
    <ActivePage.Provider value={{activePage ,setActivePage}}>
      {children}
    </ActivePage.Provider>
  );

}

export const PageContainer = ()=>{
  
  const {activePage , setActivePage} = React.useContext(ActivePage);
      return(
      activePage == 'Home' ? <Home /> :
      activePage == 'To-Do' ? <ToDo /> :
      activePage == 'Done' ? <Done /> :
      <Register />
      )
      
  }





function App() {
   
  return (
    <>
      <div>
      <ActiveProvider>
        <NavBar />

      <PageContainer />
      

      </ActiveProvider>  
          
        
      </div>
    </>
  )
}

export default App;
