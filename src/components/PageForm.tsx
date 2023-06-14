'use client'
import { useState } from 'react'
import SignUp from './forms/SignUp'
import Address from './forms/Address'
import TypeOf from './forms/TypeOf'
import Button from './Button'

const formPages = [
  { component: <SignUp key={1} />, titleButton: 'Continuar' },
  { component: <Address key={2} />, titleButton: 'Próximo' },
  { component: <TypeOf key={3} />, titleButton: 'Concluir' },
]

export default function Form() {
  const [page, setPage] = useState(0)
  const nextPage = () => {
    if (page <= 1) {
      setPage(page + 1)
    }
  }

  return (
    <>
      <div className="flex h-140 w-full flex-col justify-between rounded-3xl bg-white-50 px-3 py-6">
        {formPages[page].component}
        <Button
          title={formPages[page].titleButton}
          onclick={() => nextPage()}
        />
      </div>
    </>
  )
}
