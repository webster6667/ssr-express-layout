import React from 'react'
import {blockClassesConcat, bemClassName} from 'bem-components-connector'
import './styles.scss'

export const Container = ({children, className = '', justifyContent, alignItems , ...props}) => {
    const block = bemClassName('container'),
          blockClasses = blockClassesConcat(block(), {justifyContent, alignItems}, className)


    return <div className={blockClasses} {...props}>
        {children}
    </div>
}