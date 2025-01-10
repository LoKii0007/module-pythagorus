import React from 'react'
import Overlay from './components/Overlay'
import Module from './components/module'
import './App.css'
import { GlobalProvider } from './components/hooks'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Overlay />
        <Module />
        <Toaster/>
      </GlobalProvider>
    </>
  )
}

export default App