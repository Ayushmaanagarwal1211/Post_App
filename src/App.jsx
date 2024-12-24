import { useEffect, useState } from "react"
import Header from "./components/Header"
import Posts from "./components/Posts"
import { useDispatch, useSelector } from "react-redux"
import { change_theme, fill, selectTheme } from "./reducer/postsSlice"
import { getDataFromBackend } from "./service/localstorage"
import Theme from "./components/Theme"
function App() {
  const dispatch = useDispatch()
  const user_name = "Ayushmaan"
  const theme = useSelector(state=>selectTheme(state))
  useEffect(()=>{
      dispatch(fill(getDataFromBackend()))
  },[])
  function toggleTheme(){
    dispatch(change_theme())
  }
  return (
    <>
    <div className={`${theme ? "bg-white" : "bg-black"} min-h-[100vh] mt-0 pt-4`}>
      <Theme  theme={theme} toggleTheme={toggleTheme}/>
      <Header user_name={user_name} theme={theme}/>
      <Posts user_name={user_name}/>
      </div>
    </>
  )
}

export default App
