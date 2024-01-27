'use client'

import Copyright from './Copyright'
import Logo from '@/svgs/Logo'

const Footer = () => {
  const scrollTop = () => {
    window.scroll({ top: 0 })
  }

  return (
    <footer className="flex w-full max-w-[1600] flex-col gap-12 border-t-2 border-solid border-input-color px-4 pb-4">
      <div className="flex flex-row items-center justify-between pt-12">
        <div className="flex w-full max-w-[400px] flex-col gap-5">
          <Logo />

          <p className="text-sm opacity-70">
            Mathematics is part of our life, especially simple calculations.
            FunMath is focused on providing the learning of Basic Mathematics
            Operators.
          </p>
        </div>

        <button
          onClick={scrollTop}
          className="flex size-11 items-center justify-center rounded-md border-2 border-solid border-button-color bg-button-color hover:bg-transparent"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            ></path>
          </svg>
        </button>
      </div>

      <Copyright />
    </footer>
  )
}

export default Footer
