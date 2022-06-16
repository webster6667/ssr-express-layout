import React from 'react'
import {bemClassName} from "bem-components-connector";
import {Header, Footer} from "./components"
import './styles.scss'

export const Layout = ({children}) => {
    const block = bemClassName('layout')

    return (<div className={block()} >
        <Header/>
        <div className={block('content-wrapper')}>
            {children}
        </div>
        <Footer/>
    </div>)
}