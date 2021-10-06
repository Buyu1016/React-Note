import React, { useState } from 'react'
import './style/app.css'
import FadeTransition from './components/FadeTransition'

export default function App() {

  const [lock, setLock] = useState(true)

    return (
      <div>
          <FadeTransition
            appear
            in={lock}
            timeout={1000}
          >
            <h1>Hello World</h1>
          </FadeTransition>
          <button
            onClick={() => {
              setLock(!lock);
            }}
          >Change</button>
      </div>
    );
}
