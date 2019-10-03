import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class DataTable extends Component {


  Laydulieu = () => this.props.data.map((value, key) => (
      <TableDataRow 
        key={key} 
        id ={value.id} 
        name={value.name} 
        tel={value.tel} 
        Permissions={value.permission} 
        getEdit={(user) => this.props.getEditUser(value)}
        DeleteButtonUser = {(idUser) => this.props.getIdDelete(idUser)}
      >
        </TableDataRow>
    ))
  
    render() {
      return (
        <div>
        <table className="table table-striped table-inverse table-hover">
          <thead className="thead-inverse">
            <tr>
              <th> STT </th>
              <th> Họ tên </th>
              <th> Điện thoại </th>
              <th> Quyền </th>
              <th> Tác vụ </th>
            </tr>
          </thead>
          <tbody>
          {
            this.Laydulieu()
          }
     
          </tbody>
  </table>


            </div>
        );
    }
}

export default DataTable;