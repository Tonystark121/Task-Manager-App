import React from 'react'
import clsx from 'clsx'

const button = ({className, label, type, icon, onClick = () => {}}) =>{
    return (
         <button type={type || 'button'} className={clsx("px-3 py-2 outline-none", className)}>
            <span>{label}</span>
            {icon && icon}
         </button>
    )
}

export default button
