import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  UPDATE_USER,
} from "../type/RegisterFile";

const initialState = {
  listUser: [
    {
      id: 1,
      account: "Hoàng Phong",
      fullName: "Nguyễn Hoàng Phong",
      phone: "0988321225",
      email: "hoangphong5678@gmail.com",
      password: "05060708",
      typeOfAccount: "Sinh viên",
    },
    {
      id: 2,
      account: "Tass",
      fullName: "Tuấn Anh",
      phone: "0632321225",
      email: "taszz2k@gmail.com",
      password: "34545634",
      typeOfAccount: "Sinh viên",
    },
    {
      id: 3,
      account: "Mạnh Sơn",
      fullName: "Nguyễn Mạnh Sơn",
      phone: "0999123456",
      email: "manhsonjava@gmail.com",
      password: "2312%$%23",
      typeOfAccount: "Giảng viên",
    },
    {
      id: 4,
      account: "Thúy Quỳnh",
      fullName: "Đào Thị Thúy Quỳnh",
      phone: "0934423322",
      email: "quynhai@gmail.com",
      password: "%#$#@121",
      typeOfAccount: "Giảng viên",
    },
  ],
  disabled: false,
  userUpdate: {
    id: -1,
    account: "",
    fullName: "",
    phone: "",
    email: "",
    password: "",
    typeOfAccount: "",
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      state.listUser = [...state.listUser, action.newUser];
      return { ...state };
    }
    case DELETE_USER: {
      state.listUser = state.listUser.filter(
        (user) => user.id !== action.idUser
      );
      return { ...state };
    }
    case UPDATE_USER: {
      state.disabled = false;
      let index = state.listUser.findIndex(
        (user) => user.id === action.userUpdate.id
      );
      state.listUser[index] = action.userUpdate;
      state.userUpdate = {
        id: -1,
        account: "",
        fullName: "",
        phone: "",
        email: "",
        password: "",
        typeOfAccount: "",
      };
      // console.log('state sau update: ', state)
      return { ...state };
    }
    case EDIT_USER: {
      state.disabled = true;
      state.userUpdate = action.userEdit;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
