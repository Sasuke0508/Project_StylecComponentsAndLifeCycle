import React from "react";
import styled from "styled-components";

export const Label = styled.label`
  color: black;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-event: none;
  top: 0%;
  padding: 0 8px;
  display: inline-block;
  background-color: white;
  border-radius: 5px;
  left: 11px;
  transform: translateY(-50%);
  transition: all 0.25s ease;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

export const Input = styled.input`
  font-size: 16px;
  border: 1px solid #999;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  transition: all 0.25s ease;

  &:focus {
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
    outline: none;
    border-color: #55D964;
  }

  &:focus ~ Label,
  &:valid ~ Label {
    top: 0px;
    font-size: 15px;
    color: #55D964;
    padding: 0 10px;
    display: inline-block;
    background-color: white;
    border-radius: 5px;
  }
`;

export const TextField = ({ label, ...props }) => {
  return (
    <div style={{ position: "relative" }}>
      <Input {...props} required placeholder=" " />
      <Label>{label}</Label>
    </div>
  );
};
