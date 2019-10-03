import React, { Component } from 'react';

class TableDataRow extends Component {

    PermissionShow = () => {
        if(this.props.Permissions === 1){
            return "Admin";
        }
        else if(this.props.Permissions === 2){
            return "Modrator";
        }
        else if(this.props.Permissions === 3){
            return "Normal";
        }
    }

    getUser = () => {
        this.props.getEdit(); 
    }

    render() {
        return (
            <tr>
                <td scope="row">{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.PermissionShow()}</td>
                <td>
                    <div className="btn btn-warning sua" onClick = {() => this.getUser()}><i className="fa fa-edit">Sửa</i></div>
                    <div className="btn btn-danger xoa" onClick = {(id) => this.props.DeleteButtonUser(this.props.id)}><i className="fa fa-edit">Xoá</i></div>
                </td>
            </tr>
            
        );
    }
}

export default TableDataRow;