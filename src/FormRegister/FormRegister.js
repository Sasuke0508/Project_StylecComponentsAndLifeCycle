import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "../Themes/LightTheme";
import { Container } from "../Components/Container";
import RegisterForm from "./RegisterForm";
import ListUser from "./ListUser";
import "./style.css";

export default class FormRegister extends Component {
  render() {
    return (
      <ThemeProvider theme={LightTheme}>
        <Container className='text-center'>
          <div>
            <div className="title">Thông tin người dùng</div>
            <RegisterForm />
          </div>
          <div>
            <div className="title">Danh sách người dùng</div>
            <ListUser />
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}
