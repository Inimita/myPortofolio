import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from "./component/page/Home"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App