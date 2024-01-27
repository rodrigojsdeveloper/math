import Menu from '../svgs/Menu'
import Logo from '../svgs/Logo'

const Header = () => {
  return (
    <header className="flex justify-between px-8 pt-8">
      <Logo />
      <Menu />
    </header>
  )
}

export default Header
