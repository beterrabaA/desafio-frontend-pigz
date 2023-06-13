import Logo from '../assets/Pigz Gestão - Logo.svg'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="m-4 flex justify-between text-white-50">
      <Image src={Logo} alt="pigz-logo" />
      <button
        type="submit"
        className="text-white rounded-full bg-orange-150 px-4 py-2 font-sans hover:bg-orange-200"
      >
        Já sou parceiro
      </button>
    </nav>
  )
}
