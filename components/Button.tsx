import Link from 'next/link'

const Button = () => {
  return (
    <Link
      href="/"
      className="flex h-[63.2px] w-full max-w-[200px] flex-row items-center justify-between gap-4 rounded-br-3xl rounded-tl-3xl border-2 border-solid border-primary-color bg-primary-color px-3 py-2 hover:bg-transparent"
    >
      <p className="m-auto text-center text-lg font-medium">Start now</p>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="36"
        width="36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
        ></path>
      </svg>
    </Link>
  )
}

export default Button
