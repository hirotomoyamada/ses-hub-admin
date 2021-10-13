export const logout = (state) => {
  state.admin = "";

  state.index = { page: "companys", edit: "" };

  state.search = {
    value: "",
    target: "",
    type: "",
    filter: "all",
  };

  state.data = {
    seshub: {},
    freelanceDirect: {},
  };

  state.modal = false;

  state.load = {
    root: false,
    list: true,
    fetch: false,
  };
};
