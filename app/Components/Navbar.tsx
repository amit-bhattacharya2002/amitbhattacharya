import Link from 'next/link'
import React,{useState} from 'react'
import { styled } from 'styled-components'
import { Montserrat, Roboto, Lexend_Deca} from 'next/font/google'

const lexendDeca = Lexend_Deca({subsets: ['latin']})

const Navbar = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () =>{
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")

        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
  return (
    <NavStyled style={{}}>

        <nav>
            <div className="burger-menu" onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>

            </div>
        </nav>

        <div className={menu_class}>

            <ul>
            <Link href={"#about"}>
                    <li>
                        About Me
                    </li>
                </Link>
            <Link href={"#projects"}>
                    <li>
                        Projects
                    </li>
                </Link>
                <Link href={"#contact"}>
                    <li>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
    height: 5em;
    background-color: black;
    display: flex;
    justify-content: flex-start;
    padding: 1em;
    border-radius: 2em;

    .burger-menu{
        height: 100%;
        width: 4em;
        display: flex;
        padding: 0.5em;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        cursor: pointer;

    }

    .burger-bar{
        width: 3em;
        height: 0.5em;
        background-color: white;
        border-radius: 0.5em;
    }

    .menu{
        width: 40%;
        height: 80vh;
        margin-top: 2em;
        background-color: white;
        border: 2px solid black;
        position: fixed;
        top: 10vh;
        z-index: 1000;
        transition: all 2s ease-in;
    }

    .hidden{
        display: none;

    }

    .visible{
        display: inherit;
    }


    .burger-bar.clicked:nth-child(1){
        transform: rotate(45deg) translate(0.15em, 0.25em);
        transition: ease-out 0.5s;
    }
    .burger-bar.clicked:nth-child(2){
        transform: scale(0.0001);
        transition: ease-out 0.5s;
    }
    .burger-bar.clicked:nth-child(3){
        transform: rotate(135deg) translate(-0.75em, 1em);
        transition: ease-out 0.5s;
    }
    .burger-bar.unclicked{
        transform: rotate(0) translate(0);
        transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s; 
    }
`
export default Navbar