import Form from './Form'
import Burguer from '../assets/burguer_2.png'
import Image from 'next/image'

export default function FrontEntry() {
  return (
    <div className="flex  min-h-screen flex-col items-center justify-center bg-orange-150 py-2">
      <main className="mt-1 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="flex">
          <h1 className="w-[80%] text-start font-sans text-5xl font-bold text-white-50">
            Pigz: tudo que você precisa pra vender ainda mais!
          </h1>
          {/* <Image src={Burguer} alt="burguer" className="flex"/> */}
        </div>
        <p className="mt-3 py-6 text-left text-lg text-white-50">
          Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
          Marketplace e deixar sua loja prontinha para iniciar as vendas.
        </p>
        <Form />
      </main>
    </div>
  )
}

