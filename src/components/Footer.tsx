import Image from 'next/image'
import pigzColorido from '../assets/pigz-logotipo-colorido.svg'
import seloAppStore from '../assets/selo-app-store.svg'
import seloGooglePlay from '../assets/selo-google-play.svg'
import faleConosco from '../assets/icone-fale-conosco.svg'
import linkedinCircle from '../assets/linkedin-with-circle.svg'
import instagramCircle from '../assets/instagram-with-circle.svg'
import facebookCircle from '../assets/facebook-with-circle.svg'
import youtubeCircle from '../assets/youtube-with-circle.svg'
import orangeLogo from '../assets/logo-orange-horizontal-branco.svg'

export default function Footer() {
  return (
    <footer className=" bg-gray-50 text-gray-80">
      <main className="m-5 border-b-2 border-b-gray-67 py-14">
        <Image src={pigzColorido} alt="pigz-colorido" />
        <p>Tudo que você precisa. </p>
        <section>
          <h2>Baixe o App</h2>
          <div className="flex">
            <Image src={seloAppStore} alt="selo-app-store" />
            <Image src={seloGooglePlay} alt="selo-google-play" />
          </div>
        </section>
        <section>
          <h2 className="font-semibold">Pigz</h2>
          <p className="font-normal">Quero ser um Pigz Partner</p>
          <p className="font-normal">Portal do Parceiro</p>
          <p className="font-normal">Quero ser um Pigz Partner</p>
        </section>
        <section>
          <span className="flex">
            <Image src={faleConosco} alt="icone-fale-conosco" />
            <h2 className="font-semibold">Fale conosco</h2>
          </span>
          <p className="font-normal">falecom@pigz.com.br</p>
          <p className="font-normal">(95) 3224-2603</p>
        </section>
        <section>
          <h2 className="font-semibold">Pigz nas redes</h2>
          <div className="flex">
            <Image src={linkedinCircle} alt="linkedin-with-circle" />
            <Image src={instagramCircle} alt="instagram-with-circle" />
            <Image src={facebookCircle} alt="facebook-with-circle" />
            <Image src={youtubeCircle} alt="youtube-with-circle" />
          </div>
        </section>
      </main>
      <section className="m-5 flex w-3/5 justify-between text-xs font-normal">
        <a className="font-normal">Nossos termos</a>
        <a className="font-normal">Privacidade</a>
        <a className="font-normal">Ajuda</a>
      </section>
      <section className=" m-5 flex justify-between text-2xs font-normal">
        <p>
          © Copyright 2021 • Pigz • Todos os direitos reservados <br></br>{' '}
          Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85
        </p>
        <Image src={orangeLogo} alt="logo-orange-horizontal-branco" />
      </section>
    </footer>
  )
}
