import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './Search';
import DataTable from './DataTable';
import AddUser from './AddUser';
import DataUser from './Data.json';
import EditUser from './EditUser';
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser,
      dataSearch: '',
      EditUserStatus: false,
      EditUserObject:{}
    }
  }

  DoiTrangThai = () => {
    this.setState(
      {
        hienThiForm: !this.state.hienThiForm
      }
    )
  }

  getTextSearch = (dl) => {
    this.setState({
      dataSearch: dl
    })

  }

  addUserData = (name, tel, permission) => {
   
    var item  = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = parseInt(permission);

    console.log('Day la item');
    
    console.log(item);
    
    
    var items = this.state.data;
    // items.push(dl);
    this.setState({
      data: items
    });
  }

  editUserData = (user) => {
    this.setState({
       EditUserStatus: true,
       EditUserObject: user
     })
  }

  ChangeEditUserStatus = () => {
    this.setState({
      EditUserStatus: false
    })
  }

  getEditUserData = (obj) => {
      this.state.data.forEach((value, key) => {
        if(obj.id === value.id){
          value.name = obj.name;
          value.tel = obj.tel;
          value.permission = parseInt(obj.permission);
        }
        
      })
  }

  DeleteUser = (id) => {
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id != id);
    this.setState({data: tempData})
    // tempData.forEach((value, key) => {
    //   if(value.id === id){
    //     console.log(value.name);
        
    //   }
    // })
    
  }

  render() {
    var arrSearch = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.dataSearch) !== -1){
        arrSearch.push(item);
      } 
    });

    
    
    return (   
      <div>
        <Header/>
        <div className="searchform">
          <div className="container">
            <div className="row">
              {/* Sử dụng component form */}
              <div className="col-12">
                <SearchForm 
                ketnoi = { () => this.DoiTrangThai()} 
                trangthai = {this.state.hienThiForm} 
                getSearch={(dl) => this.getTextSearch(dl)}
                getEditStatus={this.state.EditUserStatus}
                getChangeEditUserStatus = {() => this.ChangeEditUserStatus()}
                getEditUserObject = {this.state.EditUserObject}
                EditUserDataObj = {(obj) => this.getEditUserData(obj)}
                
                /> 
              </div>
              <div className="col-12">
                    <hr/>
              </div>
              <div className="col">
                <DataTable data = {arrSearch} 
                  getEditUser = {(user) => this.editUserData(user)}
                  getIdDelete = {(id) => this.DeleteUser(id)}
                  />
              </div>
              
                <AddUser hienThiForm = {this.state.hienThiForm} AddUserData = {(name, tel, permission) => this.addUserData(name, tel, permission)}/> 
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
