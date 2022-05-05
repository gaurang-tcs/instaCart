//LOG-IN -------------------------------------------------------------------------------

export const setLogInUser = (userCredentials) => {
    fetch("https://insta-cart-api.herokuapp.com/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(userCredentials)
    })
        .then(async (res) => {
            const resData = await res.json();
            console.log(resData);
            if (resData.status === 0) {
                return window.alert(resData.error);
            }

            localStorage.setItem("user-info", JSON.stringify(resData.user));
            return window.alert(resData.message);

        }).catch(err => {
            console.log(err);
        })
}



//SIGN-UP-----------------------------------------------------------------------------------

export const setSignUpUser = (userCredentials) => {
    fetch("https://insta-cart-api.herokuapp.com/auth/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCredentials)
    })

        .then(async (res) => {
            const resData = await res.json();
            console.log(resData);
            if (resData.status === 0) {
                return window.alert(resData.error);
            }
            localStorage.setItem("reg-user-info", JSON.stringify(resData));
            return window.alert(resData.message);
        }).catch(err => {
            console.log(err);
        })
}

