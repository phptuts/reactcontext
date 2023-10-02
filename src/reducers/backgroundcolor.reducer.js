const backgroundColorReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_BACKGROUND_COLOR":
      return { ...state, backgroundColor: action.payload };
    default:
      return { ...state };
  }
};

export default backgroundColorReducer;
