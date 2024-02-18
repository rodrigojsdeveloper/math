import Link from 'next/link'

export const Button = () => {
  return (
    <Link
      href="/config"
      className="flex h-12 w-full max-w-[157px] flex-row items-center justify-between gap-4 rounded-br-3xl rounded-tl-3xl border-2 border-solid border-primary-color bg-primary-color px-3 py-2 hover:bg-transparent sm:h-[63.2px] sm:max-w-[200px]"
    >
      <p className="text-md m-auto text-center font-medium sm:text-lg">
        Start now
      </p>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="36"
        width="36"
        xmlns="http://www.w3.org/2000/svg"
        className="size-8 sm:size-[36px]"
      >
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
        ></path>
      </svg>
    </Link>
  )
}
