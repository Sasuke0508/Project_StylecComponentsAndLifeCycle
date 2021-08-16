import styled from "styled-components";

export const Table = styled.table`
  color: ${(props) => props.theme.color};
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  text-align: center;
  border-spacing: 2px;
  border-color: ${(props) => props.theme.color};
`;
export const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  font-weight: bold;
  // border: 1px solid ${(props) => props.theme.color};
  //   background-color: #95A5A6;
  box-shadow: inset rgb(17 17 26 / 5%) 1px -1px 2px, rgb(17 17 26 / 5%) 1px 0px 32px;
  `;

export const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

export const Tr = styled.tr`
  display: table-row;
  vertical-align: middle;
  // border: 1px solid ${(props) => props.theme.color};
  transition: all 0.1s ease;
  &:hover {
    box-shadow: rgba(17, 17, 26, 0.05) 0px 2px 0px,
      rgba(17, 17, 26, 0.1) 0px 0px 8px;
  }
`;

export const Td = styled.td`
  padding: 0.75rem;
  vertical-align: middle;
  // border: 1px solid ${(props) => props.theme.color};
`;
