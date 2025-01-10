import { createContext, useContext, useState } from "react"

export const GlobalContext = createContext()

export const activeContentTypes = { 
    introduction: 'introduction',
    question: 'question',
    example : 'example'
}

export const GlobalProvider = ({ children }) => {

   const [sideA, setSideA] = useState(1)    
   const [sideB, setSideB] = useState(2)    
   const [activeQuestion, setActiveQuestion] = useState('a')
   const [activeContent, setActiveContent] = useState(activeContentTypes.question)
     const [playAudio, setPlayAudio] = useState(false);
     const [activeAudio, setActiveAudio] = useState(null);

    return (
        <GlobalContext.Provider value={{ activeAudio, setActiveAudio,playAudio, setPlayAudio,  sideA, setSideA, sideB, setSideB, activeQuestion, setActiveQuestion , activeContent, setActiveContent}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    const context = useContext(GlobalContext)
    if (!context) throw new Error('useGame must be used within a GameProvider')
    return context
}