//synchronous actions
export const setMyBooks = books => {
  return {
    type: "SET_MY_BOOKS",
    books
  };
};

//async actions
export const getMyBooks = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/books", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setMyBooks());
        }
      })
      .catch(console.log);
  };
};
