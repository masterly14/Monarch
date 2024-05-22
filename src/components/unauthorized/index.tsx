import Link from 'next/link'
import React from 'react'

type Props = {}

const Unauthorized = (props: Props) => {
  return (
    <div className="p-4 text-center h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl md:text-6xl">Acceso desautorizado</h1>
      <p>Comuníquese con el soporte o con el propietario de su agencia para obtener acceso.</p>
      <Link
        href="/"
        className="mt-4 bg-primary p-2"
      >
        Volver a inicio
      </Link>
    </div>
  )
}

export default Unauthorized