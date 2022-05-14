import { baseUrl } from "./Api";

export function getMenuApi() {
    const url = `${baseUrl}/menu/get-menus`;
  
    return fetch(url)
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
  
  export function updateMenuApi (token, menuId, data) {
    const url = `${baseUrl}/menu/update-menu/${menuId}`;
  
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": token
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result.message;
      })
      .catch(err => {
        return err;
      });
  }
  
  export function activateMenuApi(token, menuId, status) {
    const url = `${baseUrl}/menu/activate-menu/${menuId}`;
  
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": token
      },
      body: JSON.stringify({ active: status })
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result.message;
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  export function addMenuApi(token, menu) {
    const url = `${baseUrl}/menu/add-menu`;
  
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": token
      },
      body: JSON.stringify(menu)
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result.message;
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  export function deleteMenuApi(token, menuId) {
    const url = `${baseUrl}/menu/delete-menu/${menuId}`;
  
    const params = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-token": token
      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result.message;
      })
      .catch(err => {
        console.log(err);
      });
  }