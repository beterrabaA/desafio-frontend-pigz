import PigzPigz from '../assets/Grupo 3535.svg'
import storeFront from '../assets/storefront_black_24dp.svg'
import Image from 'next/image'

export default function SecondEntry() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-2">
        <Image src={PigzPigz} alt="pigz-pigz" className="mt-[-76px]" />
        <h1 className="w-[70%] text-center font-sans text-4xl font-bold text-black-67">
          Você tem um novo Pigzdido!
        </h1>
        <section className="flex flex-col items-center justify-center">
          <div className="my-5 h-72 w-72 rounded-6xl bg-gray-50 hover:border-2 hover:border-gray-67">
            <Image src={storeFront} alt="store-front" />
            <h1>MarkerPlace</h1>
            <p>Pra sua loja vender mais</p>
          </div>
          <div className="my-5 h-72 w-72 rounded-6xl bg-gray-50 hover:border-2 hover:border-gray-67">
            <Image src={storeFront} alt="store-front" />
            <div className="text-center">
              <h1>É fácil e rápido</h1>
              <p>Fazer um pedido no Pigz</p>
            </div>
          </div>
          <div className="my-5 h-72 w-72 rounded-6xl bg-gray-50 hover:border-2 hover:border-gray-67">
            <Image src={storeFront} alt="store-front" />
            <div className="text-center">
              <h1>Pigz Gestão</h1>
              <p>Você no controle, sempre</p>
            </div>
          </div>
          <div className="my-5 h-72 w-72 rounded-6xl bg-gray-50 hover:border-2 hover:border-gray-67">
            <Image src={storeFront} alt="store-front" />
            <div className="text-center">
              <h1>Vias de impressão</h1>
              <p>Personalizáveis</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center text-center">
          <h1 className="text-center text-3xl font-bold text-black-67">
            Tudo que você precisa por apenas R$199/mês
          </h1>
          <p>
            Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão
            por cada venda, sem letrinhas miúdas.
          </p>
        </section>
      </div>
    </>
  )
}
