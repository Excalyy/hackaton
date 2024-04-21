import { FC } from "react"
import { FaSignOutAlt } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
import logo from '../assets/logo.png'

const Header: FC = () => {
    const isAuth = true
  return (
    <header className="flex items-center px-4 py-2 shadow-sm bg-slate-800 backdrop-blur-sm">
        <Link to="/"> 
         <img src={logo} alt="" width={200}/>
        </Link>
        {
            isAuth && (
                <nav className="flex items-center ml-auto mr-10">
                    <ul className="flex items-center gap-10 ">
                      <li>
                        <NavLink 
                            to={'/'} 
                            className={({isActive}) => 
                            isActive ? 'text-white' : 'text-white/50 hover:text-white'
                        } 
                        >Главная</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/Profile'}className={({isActive}) => 
                            isActive ? 'text-white' : 'text-white/50 hover:text-white'
                        } 
                        >Профиль</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/News'}className={({isActive}) => 
                            isActive ? 'text-white' : 'text-white/50 hover:text-white'
                        } 
                        >Лента</NavLink>
                      </li>
                    </ul>
                </nav>
            )
        }
        {
            isAuth ?(
                <button className="btn btn-red">
                    <span>Выйти</span>
                    <FaSignOutAlt />
                </button>
            ) : (
                <Link className='py-2 text-hite/50 hover:text-white ml-auto' 
                to={'auth'}
                >
                    Log In / Sign In
                </Link>
            )
        }
    </header>
  )
}

export default Header