//Purpose: Manage active user in session storage
//Author:  Erin Agobert

const activeUser = Object.create(null, {

    //get user from session storage
    "getActiveUser": {
        value: () => {
            //note the need below to JSON.parse the item we get from session storage. The method doesn't call for it so if data isn't showing correctly try removing.
           JSON.parse(sessionStorage.getItem("ActiveUser"))
        }
    },
    //save user to session storage
    "saveActiveUser": {
        value: (user) => {
             //note the need below to JSON.stringify the item we get from session storage.  The method doesn't call for it so if data isn't showing correctly try removing.
            sessionStorage.setItem("ActiveUser", JSON.stringify({
                    "id": user.id,
                    "username": user.username,
                    "email": user.email
                }))
        }
    },
    //remove user from session storage
    "clearActiveUser": {
        value: () => {
            sessionStorage.removeItem("ActiveUser")
        }
    }

})


module.exports = activeUser