import React from 'react'
import {blockClassesConcat, bemClassName} from 'bem-components-connector'
//@ts-ignore
import AvatarPath from "@icons/user_1.svg";
import "./styles.scss"

export const Card1 = ({title, className = '',}) => {

    const block = bemClassName('card-1'),
          blockClasses = blockClassesConcat(block(), {}, className)

    return (<div className={blockClasses} >
        <div className={block('avatar-wrapper')} >
            <img src={AvatarPath} alt="avatar" className={block('avatar-placeholder')} />
        </div>
        <p className={block('name')} >{title}</p>
    </div>)
}