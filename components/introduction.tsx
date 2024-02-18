import { Button } from './button'

export const Introduction = () => {
  return (
    <div className="m-auto mt-[11.875rem] flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-5 px-4 text-center">
        <h1 className="flex w-full max-w-[50rem] flex-col text-3xl font-bold md:text-5xl lg:text-5xl xl:text-6xl">
          <span className="bg-accents bg-clip-text text-transparent">
            Mathematical Operators
          </span>
          Basics in Practice
        </h1>

        <p className="w-full max-w-[29.375rem] text-sm md:text-lg">
          Use different exercises to practice and increase your knowledge in
          mathematics
        </p>
      </div>

      <Button />
    </div>
  )
}
