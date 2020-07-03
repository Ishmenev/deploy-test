import axios from "axios";

export const loginUser = (data) => {
    return async (dispatch) => {
        try {
            axios.post("/api/user/login",
                data
            ).then(response => {
                if (response.data.status === true) {
                    window.localStorage.setItem('token', response.data.token);
                    dispatch(userLoginSuccess(response.data));
                }
                
                else {
                    dispatch(userLoginFailed());
                }
            })
            .catch(error => {
                dispatch(userLoginFailed());
            });
             
        } 
        
        catch (err) {
           console.log(err, 'err')
        }
    }
};

export const checkAuth = () => {
    return async (dispatch) => {
        const token = window.localStorage.getItem('token')
        console.log('token', token)
        try {
            axios.post("/api/user/login/auth", {},{
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    },
                },
            ).then(response => {
                if (response.data.status === true) {
                    dispatch(userLoginSuccess(response.data));
                }
                
                else {
                    dispatch(userLoginFailed());
                }
            })
            .catch(error => {
                dispatch(userLoginFailed());
            });
            
        }
        
        catch (err) {
            console.log(err, 'err')
        }
    }
};

function userLoginSuccess(response) {
    return {
        type: 'LOGIN_USER_SUCCESS',
        payload: response
    }
}

function userLoginFailed() {
    return {
        type: 'LOGIN_USER_FAILED'
    }
}

