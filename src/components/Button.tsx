type TitleProps = {
  title: string
  onclick: CallableFunction
}

export default function Title({ title, onclick }: TitleProps) {
  return (
    <button
      type="submit"
      onClick={() => onclick()}
      className="h-12 rounded-2xl bg-orange-150 px-4 py-2 font-medium text-white-50 hover:bg-orange-200"
    >
      {title}
    </button>
  )
}
