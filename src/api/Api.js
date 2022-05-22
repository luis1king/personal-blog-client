import { message } from "antd";


export const baseUrl = process.env.REACT_APP_API_URL;
console.log(baseUrl)
export const register = (data) => {
    const url = `${baseUrl}/auth/register`;
    const params = {
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            "Content-Type": "application/json"
        }
    };
    
    return fetch(url, params)
    .then(async (response) => {
      const result =  await response.json()
         if (result.ok === true) {
             message.success('Usuario creado correctamente');
        } else {
            message.error(result.msg);
        }
    })  
}

export const SingIn = (data) => {

    const url = `${baseUrl}/auth/login`;
    const params = {
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            "Content-Type": "application/json"
        }
    };
    
    return fetch(url, params)
    .then(async (response) => {
      const result =  await response.json()
      console.log(result);
         if (result.ok === true) {
            localStorage.setItem('token', result.token);
        } else {
           console.log(result.msg);
        }
    })  
}

export const updateUser = async (token, user, userId) => {

    console.log(user)
    const url = `${baseUrl}/updateuser/${userId}`;
    const params = {
        method : 'PUT',
        body : JSON.stringify(user),
        headers : {
            "Content-Type": "application/json",
            "x-token": token
        }
    };
    
    return fetch(url, params)
    .then(async response => {
      const result = await response.json();
      return result;
    })
    .catch(err => {
      return err.message;
    });

}

export const refreshToken = ({setLogged}) => {

    const url = `${baseUrl}/auth/renew`;
    const token = localStorage.getItem('token')
    const params = {
        method : 'GET',
        headers : {
            "x-token": token
        }
    };
    
    return fetch(url, params)
    .then(async (response) => {
      const result =  await response.json()
         if (result.ok === true) {
            localStorage.setItem('token', result.token);
            setLogged(true)
        } else if (result.ok === false) {
            setLogged(false);
        }
        }
    )  
}

export const logout = ({setLogged}) => {
   localStorage.removeItem("token");
   setLogged(false);
   
}

export const getUsers = (token) => {

    const url = `${baseUrl}/getusers`;
    const params = {
        method : 'GET',
        headers : {
            "Content-Type": "application/json",
            "x-token": token
        }
    };
    
    return fetch(url, params)
    .then(async (response) => {
      const result =  await response.json()
         if (result.ok === true) {
            return result.users
        } else {
            message.error(result.msg);
        }
    })  
}

export const getActiveUsers = (token, status) => {

    const url = `${baseUrl}/getactive?active=${status}`;
    const params = {
        method : 'GET',
        headers : {
            "Content-Type": "application/json",
            "x-token": token
        }
    };
    
    return fetch(url, params)
    .then(async (response) => {
      const result =  await response.json()
         if (result.ok === true) {
            return result.users
        } else {
            message.error(result.msg);
        }
    })  
}

export const uploadAvatar = (token, avatar, userId) => {

    console.log(avatar)
    const url = `${baseUrl}/upload-avatar/${userId}`;
    const formData = new FormData();
    formData.append("avatar", avatar, avatar.name);
    const avatarUpLoaded = {
        avatar: avatar.file
    }

    console.log(formData);
    const params = {
        method : 'PUT',
        body : formData,
        headers : {
            "x-token": token
        }
    };
    
   return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    });
}

export const getAvatar = (avatarName, token) => {

    const url = `${baseUrl}/get-avatar/${avatarName}`;
   // Por defecto el method es GET
    
    return fetch(url)
    .then( (response) => {
      const result = response.url;
         if (result) {
             return result;
        } else {
            message.error(result.msg);
        }
    }) 
}

