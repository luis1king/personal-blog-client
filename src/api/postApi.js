import { baseUrl } from "./Api";



export function getPostsApi(limit, page) {
    const url = `${baseUrl}/post/get-posts?limit=${limit}&page=${page}`;
  
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      });
  }
  
  export function deletePostApi(token, id) {
    const url = `${baseUrl}/post/delete-post/${id}`;
  
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
        return result;
      })
      .catch(err => {
        return err;
      });
  }
  
  export function addPostApi(token, post) {
    const url = `${baseUrl}/post/add-post`;
  
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": token
      },
      body: JSON.stringify(post)
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      });
  }
  
  export function updatePostApi(token, id, data) {
    const url = `${baseUrl}/post/update-post/${id}`;
  
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
        return result;
      })
      .catch(err => {
        return err;
      });
  }
  
  export function getPostApi(urlPost) {
    const url = `${baseUrl}/post/get-post/${urlPost}`;
  
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      });
  }

  export function getPostApiByTopic(topic, limit, page) {
    
    const url = `${baseUrl}/post/get-post-topic/${topic}?page=${page}&limit=${limit}`;

  
    return fetch(url)
      .then(response => {
        return response.json();

      })
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      });
  }