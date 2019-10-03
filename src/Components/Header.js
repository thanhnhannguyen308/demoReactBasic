import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <p className="lead">Project quản lý thành viên bằng React JS với dữ liệu Json</p>
                    <hr className="my-2" />
                    <p>Với dữ liệu Json</p>
                    <p className="lead">
                    <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                    </p>
                </div>
            </div>
        </div>
        );
    }
}

export default Header;