export const rolename = (state, payload) => {
  state.namecurrent = payload;
};
export const roleuser = (state, payload) => {
  state.rolecurrent = payload;
};

export const mutationsPlace = (state, payload) => {
   state.placeDate = payload;
};
export const setPathParams = (state, payload) =>{
    state.pathParams = payload;
    window.localStorage.setItem('pathParams', state.pathParams);
};
export const clearPathParams = (state, payload) =>{
    state.pathParams = payload;
    window.localStorage.setItem('pathParams', JSON.stringify(state.pathParams));
};
export const setPrePathParams = (state, payload) =>{
    state.prePathParams = payload;
    window.localStorage.setItem('prePathParams', state.prePathParams);
};
export const clearPrePathParams = (state, payload) =>{
    state.prePathParams = payload;
    window.localStorage.setItem('prePathParams', JSON.stringify(state.prePathParams));
};


