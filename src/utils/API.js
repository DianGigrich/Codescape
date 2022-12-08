// in dev mode
// const URL_PREFIX= "http://localhost:3001"
// in prod mode
const URL_PREFIX= "https://codescaper.herokuapp.com/"

const  API = {
    login: (userObj)=>{
        return fetch(`${URL_PREFIX}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    signup: (userObj)=>{
        return fetch(`${URL_PREFIX}/api/users`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    getUserTodos:(userId)=>{
        return fetch(`${URL_PREFIX}/api/users/${userId}`).then(res=>res.json())

    },
    getUserFromToken:(token)=>{
        return fetch(`${URL_PREFIX}/api/users/getuserfromtoken`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    // TODO: FIX EXAMPLE TEXT TO REFLECT OUR CODESCAPE_DB
    // createTodo:(todoObj,token)=>{
    //     return fetch(`${URL_PREFIX}/api/todos`,{
    //         method:"POST",
    //         body:JSON.stringify(todoObj),
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Authorization":`Bearer ${token}`
    //         }
    //     }).then(res=>res.json())
    // },
    // deleteTodo:(todoId,token)=>{
    //     return fetch(`${URL_PREFIX}/api/todos/${todoId}`,{
    //         method:"DELETE",
    //         headers:{
    //             "Authorization":`Bearer ${token}`
    //         }
    //     }).then(res=>res.json())
    // },
    // editTodo:(todoObj,todoId,token)=>{
    //     return fetch(`${URL_PREFIX}/api/todos/${todoId}`,{
    //         method:"PUT",
    //         body:JSON.stringify(todoObj),
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Authorization":`Bearer ${token}`
    //         }
    //     }).then(res=>res.json())
    // },
}
export default API