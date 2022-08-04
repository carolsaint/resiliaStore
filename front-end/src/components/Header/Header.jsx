import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import S from './Header.module.css'

const Header = () => {
  return (
    <header className={S.container}>
        <h1>Resilia Store</h1>
        <nav>
            
        <Link className={S.link} to='/'>Home</Link>
        <Link className={S.link} to='/products/notebooks'>Notebooks</Link>
        <Link className={S.link} to='/products/monitores'>Monitores</Link>
        <Link className={S.link} to='/products/acessorios'>Acessorios</Link>
        <Link className={S.link} to='/administrtor'>Administrator</Link>
        </nav>
    </header>
  )
}

export default Header