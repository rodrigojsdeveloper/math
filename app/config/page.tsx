import Operators from '@/components/Operators'
import GoBack from '@/components/GoBack'
import Link from 'next/link'

export default function Config() {
  return (
    <main className="mx-auto flex w-full max-w-[900px] flex-col gap-8 px-6 pb-6">
      <h2 className="text-center text-2xl font-bold">Select options</h2>
      <Operators />
      <div className="flex flex-row items-center justify-between">
        <GoBack href="/" />
        <Link
          href="/exercise"
          className="flex size-11 items-center justify-center rounded-md border-2 border-solid border-primary-color bg-primary-color hover:bg-transparent"
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
        </Link>
      </div>
    </main>
  )
}
