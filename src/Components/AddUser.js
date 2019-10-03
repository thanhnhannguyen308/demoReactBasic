import React, { Component } from 'react';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name:"",
      tel:"",
      permission: ""

    }
  }
  
  isChangeForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name);
    // console.log(value);

    this.setState({
      [name]: value
    })

    var addData = {}
      addData.id = this.state.id;
      addData.name = this.state.name;
      addData.tel = this.state.tel;
      addData.permission = this.state.permission;

      // console.log(addData)
  }
  

  HienThiForm = () => {
    if(this.props.hienThiForm === true){
      return (
        <div className="col">

        
        <div className="card text-left mt-2">
    <div className="card-body">
      <h4 className="card-title"> Thêm thành viên </h4>
      <form>
      <div className="form-group">
        <label> Họ tên </label>
        <input type="text" name="name" className="form-control" placeholder="Họ tên" aria-describedby="helpId" onChange={(event) => this.isChangeForm(event)}/>
      </div>
      <div className="form-group">
        <label> SĐT </label>
        <input type="text" name="tel" className="form-control" placeholder="SĐT" aria-describedby="helpId" onChange={(event) => this.isChangeForm(event)} />
      </div>
      <div className="form-group">
        <label htmlFor="my-input">Quyền</label>
        <select id="my-input" className="form-control" name="permission" onChange={(event) => this.isChangeForm(event)}>
          <option value>Chọn quyền mặc định</option>
          <option value={1}>Admin</option>
          <option value={2}>Modrator</option>
          <option value={3}>Normal</option>
        </select>
      </div>
      <button type="reset" className="btn btn-primary btn-lg btn-block" onClick={(name, tel, permission) => this.props.AddUserData(this.state.name, this.state.tel, this.state.permission)}>Thêm mới</button>
      </form>
    </div>
    
  </div>
  </div>
      )
    }
  }

  
    render() {
      console.log(this.props.hienThiForm);
      
        return (
            <div>
                
                {this.HienThiForm()}

            </div>
        );
    }
}

export default AddUser;