import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {fetchUsers} from "@api"
import "./styles.scss"

export class Profile extends Component {

    componentDidUpdate() {
        console.log('Был апдейт profile');
    }

    render() {
        return <div className='profile'>
            Профиль
            <Link to='/' >Главная</Link>
        </div>;
    }
}
