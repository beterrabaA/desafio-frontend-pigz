import Image from 'next/image';
import Logo from '../assets/Pigz Gestão - Logo.svg';

export default function Navbar() {
  return (
    <nav className="flex justify-between m-4 text-white-50">
      <Image src={ Logo } alt="pigz-logo" />
      <button
        type="submit"
        className="bg-orange-150 hover:bg-orange-200 text-white font-sans py-2 px-4 rounded-full"
      >
        Já sou parceiro
      </button>
    </nav>
  );
}
