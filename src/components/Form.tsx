export default function Form() {
  return (
    <div className="flex bg-white-50 flex-col w-full font-sans rounded-3xl px-3 py-6">
      <div>
        <h2 className="text-3xl font-sans">Quero vender no Pigz</h2>
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
        Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.
      </p>
      <button type="submit" className="bg-orange-150 hover:bg-orange-200 text-white-50 font-sans py-2 px-4 rounded-full">
        Continuar
      </button>
    </div>
  );
}
