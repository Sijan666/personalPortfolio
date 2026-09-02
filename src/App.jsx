import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ReactLenis } from 'lenis/react' 
import Home from './components/pages/Home'
import RootLayouts from './components/layouts/RootLayouts'
import Error from './components/pages/Error'
import Preloader from './components/Preloader'

function App () {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(location.pathname === '/')

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div className={`${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <ReactLenis root options={{lerp: 0.05, duration: 1.5, smoothWheel: true, wheelMultiplier: 0.8}}>
          <Routes>
            <Route path="/" element={<RootLayouts />}>
              <Route index element={<Home/>} />
            </Route>
            <Route path="*" element={<Error/>} />
          </Routes>
        </ReactLenis>
      </div>
    </>
  )
}

export default App