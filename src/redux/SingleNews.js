const SET_SINGLE_NEWS = "SET_SINGLE_NEWS";
let initialState = {
  news: null,
};
const NewsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_NEWS:
      return { ...state, news: action.news };

    default:
      return state;
  }
};
export const setNewsSingle = (news) => ({ type: SET_SINGLE_NEWS, news });
export default NewsReduser;