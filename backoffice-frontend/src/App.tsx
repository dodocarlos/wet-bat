import React from 'react'
import AuthenticatedLayout from './layouts/authenticated'
import Home from './pages/home'

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
