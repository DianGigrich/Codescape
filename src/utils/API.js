// in dev mode
const URL_PREFIX = "http://localhost:3001"
// in prod mode
// const URL_PREFIX= "https://codescaper.herokuapp.com/"
const level = localStorage.getItem("difficultyLevel") || 2

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
        return fetch(`${URL_PREFIX}/api/questions/level/${level}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

}
export default API