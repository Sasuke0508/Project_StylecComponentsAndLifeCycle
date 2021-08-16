import React, { Component } from "react";
import { TextField } from "../Components/TextFiled";
import "./style.css";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import {
  addNewUserAction,
  updateUserAction,
} from "../redux/actions/RegisterForm";

class RegisterForm extends Component {
  state = {
    values: {
      account: this.props.userUpdate.account,
      fullName: this.props.userUpdate.fullName,
      password: this.props.userUpdate.password,
      phone: this.props.userUpdate.phone,
      email: this.props.userUpdate.email,
      typeOfAccount: this.props.userUpdate.typeOfAccount,
    },
    error: {
      account: "",
      fullName: "",
      password: "",
      phone: "",
      email: "",
      typeOfAccount: "",
    },
  };

  handleChangeValue = (event) => {
    let { name, value } = event.target;

    let newValue = { ...this.state.values, [name]: value };
    let newError = { ...this.state.error };
    if (value.trim() === "") {
      newError[name] = "This field is required!";
    } else newError[name] = "";

    if (name === "email") {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!value.toLowerCase().match(re)) {
        newError[name] = "Email is invalid!";
      } else newError[name] = "";
    }

    if (name === "password") {
      if (value.length < 8) {
        newError[name] = "Password must be at least 8 characters long!";
      } else newError[name] = "";
    }

    this.setState(
      {
        values: newValue,
        error: newError,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = () => {
    let errorContent = "";
    //Xét điều kiện submit
    let { values, error } = this.state;
    let valid = true;
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
        break;
      }
    }
    for (let key in error) {
      if (error[key] !== "") {
        valid = false;
        errorContent += `
            <p class = "text-start text-danger"> <b>${key.toUpperCase()}</b>: ${
          error[key]
        }</p>
            `;
      }
    }
    if (valid) {
      //   Lấy thông tin người dùng nhập vào
      let dataUser = this.state.values;
      // Tạo 1 Object
      let newUser = {
        id: this.props.listUser.length + 1,
        account: dataUser.account,
        fullName: dataUser.fullName,
        phone: dataUser.phone,
        email: dataUser.email,
        password: dataUser.password,
        typeOfAccount: dataUser.typeOfAccount,
      };
      this.props.dispatch(addNewUserAction(newUser));

      Swal.fire({
        title: "Register success",
        icon: "success", // success, error, warning, question
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops..." + (errorContent !== "" ? "" : " Data is empty!"),
        html: errorContent,
      });
    }
  };

  handelUpdate = () => {
    let errorContent = "";
    //Xét điều kiện submit
    let { values, error } = this.state;
    let valid = true;
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
        break;
      }
    }
    for (let key in error) {
      if (error[key] !== "") {
        valid = false;
        errorContent += `
            <p class = "text-start text-danger"> <b>${key.toUpperCase()}</b>: ${
          error[key]
        }</p>
            `;
      }
    }
    if (valid) {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        //showCancelButton: true,
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          let dataUser = {
            id: this.props.userUpdate.id,
            account: this.state.values.account,
            fullName: this.state.values.fullName,
            phone: this.state.values.phone,
            email: this.state.values.email,
            password: this.state.values.password,
            typeOfAccount: this.state.values.typeOfAccount,
          };
          // console.log('Data đưa lên: ', dataUser);
          this.props.dispatch(updateUserAction(dataUser));
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops..." + (errorContent !== "" ? "" : " Data is empty!"),
        html: errorContent,
      });
    }
  };

//   Component này chạy sau khi render nhưng lại lấy props và state trước khi render,
//   khi sử dụng phải để ý để tránh lặp vô hạn 

  componentDidUpdate(prevProps, prevState) {
    // Để tránh lặp vô tận, so sánh nếu như props trước đó mà userUpdate trước
    // khác userUpdate sau thì mới setState
    if (prevProps.userUpdate.id !== this.props.userUpdate.id) {
      this.setState({
        values: {
          account: this.props.userUpdate.account,
          fullName: this.props.userUpdate.fullName,
          password: this.props.userUpdate.password,
          phone: this.props.userUpdate.phone,
          email: this.props.userUpdate.email,
          typeOfAccount: this.props.userUpdate.typeOfAccount,
        },
      });
    }
  }

  render() {
    // console.log('state: ', this.state.values);
    // console.log('props: ', this.props.userUpdate);
    return (
      <div className="container mb-4 px-5 pt-2">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <TextField
              type="text"
              label="Tài khoản"
              name="account"
              onChange={this.handleChangeValue}
              value={this.state.values.account}
              required
            ></TextField>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <TextField
              type="text"
              label="Họ tên"
              name="fullName"
              onChange={this.handleChangeValue}
              value={this.state.values.fullName}
              required
            ></TextField>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <TextField
              type="password"
              label="Mật khẩu"
              name="password"
              onChange={this.handleChangeValue}
              value={this.state.values.password}
              required
            ></TextField>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <TextField
              label="Số điện thoại"
              name="phone"
              onChange={this.handleChangeValue}
              value={this.state.values.phone}
              required
            ></TextField>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <TextField
              type="email"
              label="Email"
              name="email"
              onChange={this.handleChangeValue}
              value={this.state.values.email}
              required
            ></TextField>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <TextField
              label="Loại tài khoản"
              name="typeOfAccount"
              onChange={this.handleChangeValue}
              value={this.state.values.typeOfAccount}
              required
            ></TextField>
          </div>
        </div>
        <div className="btnForm">
          {this.props.disabled ? (
            <button className="btn btn-default me-2" disabled>
              <span>Đăng ký</span>
            </button>
          ) : (
            <button
              className="btn btn-default me-2"
              onClick={this.handleSubmit}
            >
              <span>Đăng ký</span>
            </button>
          )}
          {this.props.disabled ? (
            <button
              class="btn btn-default btn-update"
              onClick={this.handelUpdate}
            >
              <span>Cập nhật</span>
            </button>
          ) : (
            <button class="btn btn-default btn-update" disabled>
              <span>Cập nhật</span>
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listUser: state.RegisterFormReducer.listUser,
  disabled: state.RegisterFormReducer.disabled,
  userUpdate: state.RegisterFormReducer.userUpdate,
});

export default connect(mapStateToProps)(RegisterForm);
