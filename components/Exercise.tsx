'use client'

import { useEffect, useState } from 'react'
import GoBack from './GoBack'

const ExerciseResult = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1

  const [random1, setRandom1] = useState(generateRandomNumber())
  const [random2, setRandom2] = useState(generateRandomNumber())
  const [border, setBorder] = useState('')

  useEffect(() => {
    setRandom1(generateRandomNumber())
    setRandom2(generateRandomNumber())
  }, [])

  const handleRandom = () => {
    setRandom1(generateRandomNumber())
    setRandom2(generateRandomNumber())
    setBorder('border-input-color')
  }

  const handleVerifyRequest = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const result = random1 - random2
    const sum = +value === result

    if (sum) {
      setTimeout(() => setBorder('border-green-400'), 1500)
    } else {
      setTimeout(() => setBorder('border-red-400'), 1500)
    }
  }

  return (
    <div className="m-auto flex w-full max-w-[700px] flex-col gap-8">
      <div className="flex flex-row items-center justify-between">
        <GoBack href="/config" />

        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
        </svg>
      </div>

      <p className="mx-auto flex flex-col gap-3 text-center text-4xl font-bold sm:flex-row">
        What is the result of{' '}
        <span>
          {random1} - {random2}
        </span>
      </p>

      <div className="mx-auto flex flex-col gap-2.5 sm:flex-row sm:items-center">
        <label className="whitespace-nowrap text-base font-medium">
          The result is
        </label>
        <input
          placeholder="Enter the result"
          onChange={handleVerifyRequest}
          type="number"
          className={`h-[51px] w-full max-w-[248.8px] appearance-none rounded-lg border border-solid border-input-color bg-input-color ${border} p-3 placeholder:focus:text-transparent`}
        />
      </div>

      <div className="flex justify-center sm:justify-end">
        <p
          onClick={handleRandom}
          className="w-fit cursor-pointer hover:underline"
        >
          Next Exercise
        </p>
      </div>
    </div>
  )
}

export default ExerciseResult
