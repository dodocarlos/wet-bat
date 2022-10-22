import React from 'react'
import AuthenticatedLayout from './layouts/Authenticated'
import Home from './pages/Home'

function App() {
  return (
    <div className='App'>
      <AuthenticatedLayout>
        <Home />
      </AuthenticatedLayout>
    </div>
  )
}

export default App
