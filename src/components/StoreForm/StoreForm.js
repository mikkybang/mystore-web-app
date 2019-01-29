import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from '../../Redux/actions/user';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();


class StoreForm extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/login');
        }
        this.props.getUserProfile(this.props.auth.user.email);
    }



    render() {
        const { isAuthenticated, user } = this.props.auth;


        return (
            <div>
                {user.email}
                <br />
                name:
                {this.props.profile.name}
                <br />
                {this.props.profile.type}
                <br />
                


                Dashboard Component
            </div>
        );
    }
}

StoreForm.propTypes = {

}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.user.profile
})

export default connect(mapStateToProps, { getUserProfile })(withRouter(StoreForm));