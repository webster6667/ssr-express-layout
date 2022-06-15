import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import {fetchUsers} from "@actions"
//@ts-ignore
import AvatarPath from "@icons/user_1.svg";
import "./styles.scss"

class Main extends Component {

    static getInitialProps() {
        return fetchUsers();
    }

    componentDidMount() {
        if (!this.props.users.length) {
            this.props.dispatch(Main.getInitialProps());
        }
    }

    render() {
        const {users = []} = this.props

        return <div className='main' >
            Главная
            <img src={AvatarPath} alt="123"/>
            <Link to='/profile' >Профиль</Link>
            {users.map(({title}) => <h1>
                {title}
            </h1>)}

        </div>;
    }
}

const mapStateToProps = ({usersReducer}) => ({
    ...usersReducer
});

export default connect(mapStateToProps)(Main);