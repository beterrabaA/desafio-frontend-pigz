export default function Form() {
  return (
    <div className="flex w-full flex-col rounded-3xl bg-white-50 px-3 py-6 font-sans">
      <div>
        <h2 className="font-sans text-3xl">Quero vender no Pigz</h2>
        <p>Dê o primeiro passo para aumentar suas vendas</p>
      </div>
      <form className="flex flex-col text-left">
        <label htmlFor="name">Nome</label>
        <input
          className="rounded-md border-2"
          id="name"
          name="name"
          placeholder="Leonercio Gonsalves"
          type="text"
        />
        <label htmlFor="email">E-mail</label>
        <input
          className="rounded-md border-2"
          type="email"
          name="email"
          id="email"
          placeholder="gonsolvesLeo@email.com"
        />
        <label htmlFor="phone">Telefone</label>
        <input
          className="rounded-md border-2"
          type="tel"
          name="phone"
          id="phone"
          placeholder="(95) 99876-5432"
        />
      </form>
      <p>
        Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
        e-mail ou WhatsApp.
      </p>
      <button
        type="submit"
        className="rounded-full bg-orange-150 px-4 py-2 font-sans text-white-50 hover:bg-orange-200"
      >
        Continuar
      </button>
    </div>
  )
}
