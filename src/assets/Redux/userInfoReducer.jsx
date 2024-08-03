const initialData = {
    'email': "",
    'inLoggedIn': false
}

const userInfoReducer = (state= initialData,action) =>{
    switch(action.type){
        case "LOGIN":
            return{
                email:action.payload,
                isLogggedIn : true
            }
            case "LOGOUT":
                return {
                    email: '',
                    isLogggedIn: false
                }

                default:
                    return state
    }
}
export default userInfoReducer