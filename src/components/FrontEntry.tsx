import Form from "./Form";
import Burguer from "../assets/burguer_2.png"
import Image from "next/image";

export default function FrontEntry() {
    return (
        <div className="flex  bg-orange-150 flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center flex-1 px-4 text-center mt-1">
                <div className="flex">
                <h1 className="text-5xl font-sans text-start text-white-50 font-bold w-[80%]">
                    Pigz: tudo que você precisa pra vender ainda mais!
                </h1>
                {/* <Image src={Burguer} alt="burguer" className="flex"/> */}
                </div>
                <p className="mt-3 text-lg text-white-50 text-left py-6">
                    Temos uma equipe ansiosa para cadastrar seus
                    produtos no Pigz Marketplace e deixar sua loja
                    prontinha para iniciar as vendas.
                </p>
                <Form />
            </main>
        </div>

    )
}