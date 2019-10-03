import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempvalue: "",
            userEditObj:{}
        }
    }
    

    isSearchChange = (event) => {
        
        this.setState(
            {
                tempvalue: event.target.value
            }
        )
        console.log(this.state.tempvalue);
        this.props.getSearch(this.state.tempvalue);
    }

    HienThiNut = () => {
        if(this.props.trangthai){
            return <button type="button" className="btn btn-primary btn-block" onClick = {() => this.props.ketnoi()}>Đóng lại</button>
        }
        else {
            return <button type="button" className="btn btn-primary btn-block" onClick = {() => this.props.ketnoi()}>Thêm mới</button>
        }
    }

    getDataUserEdit = (obj) => {
        this.setState({userEditObj: obj});
        this.props.EditUserDataObj(obj);
    }

    XuLyEditStatus = () => {
        
        if(this.props.getEditStatus === true){
            console.log('Da zo xu ly status');
            return <EditUser 
                        ChangeEditUserStatus = {() => this.props.getChangeEditUserStatus()}
                        EditUserObject = {this.props.getEditUserObject}
                        DataUserEdit = {(obj) => this.getDataUserEdit(obj)}/>
        }
    }

    render() {
        return (
            <div>
                {this.XuLyEditStatus()}
                <div className="form-group">
                    <div className="btn-group">
                    <input type="text" className="form-control" onChange={(event) => this.isSearchChange(event)} placeholder="Nhập tìm kiếm" aria-describedby="helpId" style={{width: '600px'}} />
                    <div className="btn btn-info" onClick={(dl) => this.props.getSearch(this.state.tempvalue)}>Tìm kiếm</div>
                    </div>
                </div>
                <div className="form-group">
                    {this.HienThiNut()}
                </div>
            </div>

        );
    }
}

export default SearchForm;