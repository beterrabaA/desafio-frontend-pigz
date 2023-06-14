export default function TypeOf() {
  return (
    <>
      <section className="mx-1 mt-4 flex flex-col justify-start">
        <h1 className="text-left text-3xl font-semibold">
          Me conta um pouco sobre a sua loja
        </h1>
        <form className="mt-6 flex flex-col justify-between text-left">
          <label htmlFor="nome-loja" className="text-xs font-medium">
            Nome da loja
          </label>
          <input
            className="h-12 rounded-2xl border-2 pl-3 text-sm font-normal"
            id="nome-loja"
            name="nome-loja"
            placeholder="Restaurante Todo Mundo Gosta"
            type="text"
          />
          <label htmlFor="cnpj" className="pt-4 text-xs font-medium ">
            CNPJ da loja
          </label>
          <input
            className="h-12 rounded-2xl border-2 pl-3 text-sm font-normal"
            id="cnpj"
            name="cnpj"
            placeholder="12.345.678/0001-99"
            type="text"
          />
          <div className="flex flex-col pr-3">
            <label htmlFor="tipo" className="pt-4 text-xs font-medium">
              Tipo de loja
            </label>
            <select
              className="h-12 rounded-2xl border-2 pl-3 text-sm font-normal"
              name="tipo"
              id="tipo"
            >
              <option value="">Selecione</option>
            </select>
          </div>
        </form>
      </section>
    </>
  )
}
