import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import {fetchUsers} from "@actions"
import {Row, Container} from "@grid"
import {Card1 as User} from "@components/cards"
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

        return <div>
            <Container>
                <Row>
                    {users.map(({title, id}) => <User {...{title}} key={id} />)}
                </Row>
            </Container>
        </div>;
    }
}

const mapStateToProps = ({usersReducer}) => ({
    ...usersReducer
});

export default connect(mapStateToProps)(Main);