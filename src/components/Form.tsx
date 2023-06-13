export default function Form() {
  return (
    <div className="flex h-140 w-full flex-col justify-between rounded-3xl bg-white-50 px-3 py-6">
      <section>
        <h2 className="text-3xl font-semibold">Quero vender no Pigz</h2>
        <p className="mt-2 text-sm font-normal">
          Dê o primeiro passo para aumentar suas vendas
        </p>
      </section>
      <form className="flex flex-col justify-between text-left">
        <label htmlFor="name" className="text-xs font-medium">
          Nome
        </label>
        <input
          className="h-12 rounded-2xl border-2 pl-3 text-sm font-normal"
          id="name"
          name="name"
          placeholder="Leonercio Gonsalves"
          type="text"
        />
        <label htmlFor="email" className="pt-6 text-xs font-medium">
          E-mail
        </label>
        <input
          className="h-12 rounded-2xl border-2 pl-3 text-sm font-normal"
          type="email"
          name="email"
          id="email"
          placeholder="gonsolvesLeo@email.com"
        />
        <label htmlFor="phone" className=" pt-6 text-xs font-medium">
          Telefone
        </label>
        <div className="h-12 rounded-2xl border-2 font-normal">
          <select
            name="ddd"
            id="ddd"
            className="h-full w-1/4 rounded-2xl bg-white-60 text-sm font-light"
          >
            <option value="95">+95</option>
            <option value="96">+96</option>
          </select>
          <input
            className=" pl-3"
            type="tel"
            name="phone"
            id="phone"
            placeholder="(95) 99876-5432"
          />
        </div>
        <p className="py-4 text-start text-sm font-normal text-gray-70">
          Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
          e-mail ou WhatsApp.
        </p>
      </form>
      <button
        type="submit"
        className="h-12 rounded-2xl bg-orange-150 px-4 py-2 font-medium text-white-50 hover:bg-orange-200"
      >
        Continuar
      </button>
    </div>
  )
}
