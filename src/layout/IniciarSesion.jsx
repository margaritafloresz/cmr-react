import React from 'react'
import { Outlet } from 'react-router-dom'

const IniciarSesion = () => {
  return (
    <div>
      <h1> Desde iniciar Sesion</h1>
      <Outlet/>
    </div>
  )
}

export default IniciarSesion
