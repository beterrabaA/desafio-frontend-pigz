import PigzPigz from '../assets/Grupo 3535.svg'
import storeFront from '../assets/storefront_black_24dp.svg'
import aweWhatsapp from '../assets/Icon awesome-whatsapp.svg'
import Image from 'next/image'

export default function SecondEntry() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-2">
        <Image src={PigzPigz} alt="pigz-pigz" className="mt-[-76px]" />
        <h1 className="w-[70%] text-center text-4xl font-bold text-black-67">
          Você tem um novo Pigzdido!
        </h1>
        <section className="flex flex-col items-center justify-center">
          <div className="my-5 h-72 w-72 rounded-6xl bg-gray-50 hover:border-2 hover:border-gray-67">
            <Image src={storeFront} alt="store-front" />
            <h1 className="font-semibold">MarkerPlace</h1>
            <p className="font-normal">Pra sua loja vender mais</p>
          </div>
          <div className="my-5 h-72 w-72 rounded-6xl bg-gray-50 hover:border-2 hover:border-gray-67">
            <Image src={storeFront} alt="store-front" />
            <div className="text-center">
              <h1 className="font-semibold">É fácil e rápido</h1>
              <p className="font-normal">Fazer um pedido no Pigz</p>
            </div>
          </div>
          <div className="my-5 h-72 w-72 rounded-6xl bg-gray-50 hover:border-2 hover:border-gray-67">
            <Image src={storeFront} alt="store-front" />
            <div className="text-center">
              <h1 className="font-semibold">Pigz Gestão</h1>
              <p className="font-normal">Você no controle, sempre</p>
            </div>
          </div>
          <div className="my-5 h-72 w-72 rounded-6xl bg-gray-50 hover:border-2 hover:border-gray-67">
            <Image src={storeFront} alt="store-front" />
            <div className="text-center">
              <h1 className="font-semibold">Vias de impressão</h1>
              <p className="font-normal">Personalizáveis</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center text-center">
          <h1 className="text-center text-3xl font-bold text-black-67">
            Tudo que você precisa por apenas R$199/mês
          </h1>
          <p className="font-normal">
            Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão
            por cada venda, sem letrinhas miúdas.
          </p>
        </section>
        <div className="flex h-100 w-96 rounded-5xl bg-orange-150"></div>
        <section className="flex flex-col items-center justify-center text-center">
          <h1 className="text-center text-3xl font-bold text-black-67">
            E mais: suporte que realmente funciona!
          </h1>
          <p className="font-normal">
            Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre
            disponível pra ajudar você e seus clientes.
          </p>
        </section>
        <section className="flex h-120 w-96 flex-col rounded-5xl bg-gray-50">
          <div>
            <h1 className="text-4xl font-bold">Pigz</h1>
            <p className="font-medium">Tudo que você precisa</p>
          </div>
          <p>
            Pigz Marketplace<br></br> Página exclusiva<br></br>
            Pigz Gestão Desktop e Mobile <br></br> Gestão de entregadores{' '}
            <br></br> Vias de impressão personalizáveis
          </p>
          <div>
            <h1 className="font-bold">R$199/mês</h1>
            <button type="submit" className="bg-orange-150 font-medium">
              Vender no Pigz agora
            </button>
          </div>
        </section>
        <section className="flex h-120 w-96 flex-col rounded-5xl bg-gray-50">
          <div>
            <h1 className="text-4xl font-bold">Pagamento On-line</h1>
            <p className="font-medium">Segurança e agilidade</p>
          </div>
          <p>
            Aceite Pix e Cartão de Crédito <br></br>Antecipação Pix automática
            <br></br>
            Não dependa de maquininha de cartão <br></br>Segurança para receber
            pedidos<br></br>
            Agilidade para entregar
          </p>
          <div>
            <h1 className="font-bold">2,99% por transação</h1>
            <button type="submit" className="bg-orange-150 font-medium">
              Saiba mais
            </button>
          </div>
        </section>
        <section className="flex items-center font-medium">
          <p className="mr-3">Fale com a Pigz</p>
          <Image src={aweWhatsapp} alt="whatsapp" />
          <div className="mx-1">
            <span className="text-sm">88</span>3224-2603
          </div>
        </section>
      </div>
    </>
  )
}
