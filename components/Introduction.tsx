import Button from './Button'

const Introduction = () => {
  return (
    <div className="m-auto flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-5 text-center">
        <h1 className="flex w-full max-w-[800px] flex-col text-6xl font-bold">
          <span className="bg-accents bg-clip-text text-transparent">
            Mathematical Operators
          </span>
          Basics in Practice
        </h1>

        <p className="w-full max-w-[470px] text-lg">
          Use different exercises to practice and increase your knowledge in
          mathematics
        </p>
      </div>

      <Button />
    </div>
  )
}

export default Introduction
