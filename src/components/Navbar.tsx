import Logo from '../assets/Pigz Gestão - Logo.svg'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="m-4 flex justify-between self-center text-white-50">
      <Image src={Logo} alt="pigz-logo" />
      <button
        type="submit"
        className="text-white rounded-full bg-orange-150 px-5 py-1 text-sm font-medium hover:bg-orange-200"
      >
        Já sou parceiro
      </button>
    </nav>
  )
}
