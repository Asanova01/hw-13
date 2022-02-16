import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button className={classes.join_btn} {...props}>{props.children}</button>
  )
}

export default Button