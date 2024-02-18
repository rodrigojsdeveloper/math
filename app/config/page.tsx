'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { Operators } from '@/components/operators1'
import { GoBack } from '@/components/go-back'
import { Context } from '@/contexts/context'

export default function Config() {
  const { isOperatorSelected } = useContext(Context)
  const router = useRouter()

  return (
    <main className="mx-auto flex w-full max-w-[56.25rem] flex-col gap-8 p-6">
      <h2 className="text-center text-2xl font-bold">Select options</h2>
      <Operators />
      <div className="flex flex-row items-center justify-between">
        <GoBack href="/" />
        <button
          onClick={() => router.push('/exercise')}
          disabled={isOperatorSelected}
          className="flex size-11 items-center justify-center rounded-md border-2 border-solid border-primary-color bg-primary-color hover:bg-transparent disabled:opacity-70 disabled:hover:bg-primary-color"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            ></path>
          </svg>
        </button>
      </div>
    </main>
  )
}
