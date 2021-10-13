export const initialState = {
  admin: "",

  index: { page: "companys", edit: "" },

  search: {
    value: "",
    target: "",
    type: "",
    filter: "all",
  },

  data: {
    seshub: {},
    freelanceDirect: {},
  },

  modal: false,

  load: {
    root: true,
    list: true,
    fetch: false,
  },

  announce: {
    success: "",
    error: "",
  },
};
