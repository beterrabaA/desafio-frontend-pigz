export default function Address() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-semibold">Onde fica a sua loja?</h2>
      </section>
      <form className="flex flex-col justify-between text-left">
        <label htmlFor="cep" className="text-xs font-medium">
          CEP
        </label>
        <input
          className="h-12 rounded-2xl border-2 pl-3 text-sm font-normal"
          id="cep"
          name="cep"
          placeholder="00000-00"
          type="number"
        />
        <section className="grid grid-cols-3">
          <div className="flex flex-col pr-3">
            <label htmlFor="estado" className="pt-6 text-xs font-medium">
              Estado
            </label>
            <select
              className="h-12 rounded-2xl border-2 pl-3 text-sm font-normal"
              name="estado"
              id="estado"
            >
              <option value="">UF</option>
            </select>
          </div>
          <div className="col-span-2 flex flex-col">
            <label htmlFor="cidade" className="pt-6 text-xs font-medium">
              Cidade
            </label>
            <select
              className="h-12 rounded-2xl border-2 pl-3 text-sm font-normal"
              name="cidade"
              id="cidade"
            >
              <option value="">Selecione</option>
            </select>
          </div>
        </section>
        <label htmlFor="endereço" className="pt-6 text-xs font-medium">
          Endereço
        </label>
        <input
          className="h-12 rounded-2xl border-2 pl-3 text-sm font-normal"
          type="text"
          name="endereço"
          id="endereço"
          placeholder="Avenida Brasil"
        />
        <section className="grid grid-cols-3">
          <div className="flex flex-col pr-3">
            <label htmlFor="numero" className="pt-6 text-xs font-medium">
              Número
            </label>
            <input
              type="number"
              className="h-12 rounded-2xl border-2 pl-3 text-sm font-normal"
              placeholder="123"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label htmlFor="complemento" className="pt-6 text-xs font-medium">
              Complemento
            </label>
            <input
              type="text"
              className="h-12 rounded-2xl border-2 pl-3 text-sm font-normal"
              placeholder="Sala 1"
            />
          </div>
        </section>
      </form>
    </>
  )
}
