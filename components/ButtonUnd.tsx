"use client"


import React from 'react'
import {ArrowRight} from "@deemlol/next-icons";

interface ButtonProps {
    className : string,
    title: string,
}

const ButtonUnd = ({className, title} : ButtonProps) => {
  return (
    <button className={`${className} uppercase font-manrope text-xl hover-text cursor-pointer flex gap-sm items-center`}>
        <p>{title}</p>
        <ArrowRight size={22}/>
    </button>
  )
}

export default ButtonUnd