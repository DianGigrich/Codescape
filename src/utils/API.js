// in dev mode
// const URL_PREFIX = "http://localhost:3001"
// in prod mode
const URL_PREFIX= "https://codescaper.herokuapp.com"
const level = localStorage.getItem("difficulty") || 2


const API = {
    login: (userObj) => {
        return fetch(`${URL_PREFIX}/api/users/login`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },
    
    signup: (userObj) => {
        return fetch(`${URL_PREFIX}/api/users`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    editUser:(userId,token)=>{
            return fetch(`${URL_PREFIX}/api/users/${userId}`,{
                method:"PUT",
                body:JSON.stringify(userId),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>res.json())
        },

    deleteUser: (userId) => {
        return fetch(`${URL_PREFIX}/api/users/${userId}`, {
            method: "DELETE",
        }).then(res => res.json())
    },

    getUserFromToken: (token) => {
        return fetch(`${URL_PREFIX}/api/users/getuserfromtoken`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => res.json())
    },

    getQuestions: () => {
        let randId = 0
        console.log(level, "=level")
        // (easy 1-10, med 11-20, hard 21-30)
        if (level === 1 || "easy") {
            randId = Math.floor(Math.random() * (11 - 1) + 1);
            console.log(randId)
        } else if (level === 2 || "medium") {
            randId = Math.floor(Math.random() * (21 - 11) + 11);
            console.log(randId)
        } else if (level === 3 || "hard") {
            randId = Math.floor(Math.random() * (31 - 21) + 21);
            console.log(randId)
        } else {
            alert("uh oh")
        }
        return fetch(`${URL_PREFIX}/api/questions/${randId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    getHighscores: () => {
        return fetch(`${URL_PREFIX}/api/highscores/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },
    
   postHighscores: (userObj) => {
    return fetch(`${URL_PREFIX}/api/highscores`, {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
}

}
export default API