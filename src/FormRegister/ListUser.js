import React, { Component } from "react";
import { Table, Tbody, Thead, Tr, Td } from "../Components/Table";
import "./style.css";
import { Container } from "../Components/Container";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import {
  deleteUserAction,
  editUserAction,
} from "../redux/actions/RegisterForm";

class ListUser extends Component {
  renderListUser = () => {
    //   console.log(this.props.listUser);
    return this.props.listUser.map((user, index) => {
      return (
        <Tr key={index}>
          <Td scope="row">{index + 1}</Td>
          <Td>{user.account}</Td>
          <Td>{user.fullName}</Td>
          <Td>{user.password}</Td>
          <Td>{user.email}</Td>
          <Td>{user.phone}</Td>
          <Td>{user.typeOfAccount}</Td>
          <Td>
            <button
              className="btn btn-default me-2 btn-edit"
              onClick={() => {
                // console.log(user);
                this.props.dispatch(editUserAction(user));
              }}
            >
              <span>Sửa</span>
            </button>
            <button
              class="btn btn-default btn-delete"
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.props.dispatch(deleteUserAction(user.id));
                    Swal.fire(
                      "Deleted!",
                      "This file has been deleted.",
                      "success"
                    );
                  }
                });
              }}
            >
              <span>Xóa</span>
            </button>
          </Td>
        </Tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <Container>
          <Table class="table">
            <Thead>
              <Tr>
                <Td>STT</Td>
                <Td>Tài khoản</Td>
                <Td>Họ tên</Td>
                <Td>Mật khẩu</Td>
                <Td>Email</Td>
                <Td>Phone</Td>
                <Td>Loại tài khoản</Td>
                <Td colSpan="2"></Td>
              </Tr>
            </Thead>
            <Tbody>{this.renderListUser()}</Tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //   console.log(state.RegisterFormReducer.listUser);
  return {
    listUser: state.RegisterFormReducer.listUser,
    disabled: state.RegisterFormReducer.disabled,
  };
};

export default connect(mapStateToProps)(ListUser);
