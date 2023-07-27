const AuthReducer = (state = {authData : null, loading : null, error : null}, action) =>
{
    switch(action.type)
    {
        case "AUTH_START":
            return {...state, loading : true, error : false};
        case "AUTH_END":
            localStorage.setItem("profile", JSON.stringify({...action?.data}));
            return {...state, authData : action.data, loadign : false, error:false};
        case "AUTH_FAIL":
            return {...state, loading : false, error : true};
        default:
            return state;
    }
}

export default AuthReducer;