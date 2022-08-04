import React from 'react'
import S from './Button.module.css'

const Button = ({text, type}) => {
  const { primaryButton, secondaryButton } = S
  return (
    <button className={type == 'primary' ? primaryButton : secondaryButton}>{text}</button>
  )
}

export default Button