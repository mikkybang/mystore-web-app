import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStore } from '../../Redux/actions/store';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();


class StoreForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            tags: []

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e) {
        createStore()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const store = {
            name: this.state.name,
            description: this.state.description,
            tags: this.state.tags,
            errors: {}
        }
        this.props.createStore(this.props.profile._id, store);
        console.log(store);
    }

    render() {

        return (
            <div className="container" style={{ marginTop: '50px', width: '700px' }}>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Store Name"
                            className="form-control"
                            name="name"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Store Description"
                            className="form-control"
                            name="description"
                            onChange={this.handleInputChange}
                            value={this.state.description}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Create Store
                    </button>
                    </div>
                </form>
            </div>
        );
    }
}

StoreForm.propTypes = {
    createStore: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
    profile: state.user.profile
})

export default connect(mapStateToProps, { createStore })(withRouter(StoreForm));