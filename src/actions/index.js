import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export  const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_API = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=JUMBOTRAIN1234'

export function fetchPosts() {
const data = axios.get(`${ROOT_API}/posts/${API_KEY}`)
  return {
    type : FETCH_POSTS,
    payload : data
  }
}

export function createPost(values, callback) {
  const data = axios.post(`${ROOT_API}/posts/${API_KEY}`, values).then(() => {
    callback();
  })
  return {
    type: CREATE_POST,
    payload: data
  }
}

export function fetchPost(id) {
  const data = axios.get(`${ROOT_API}/posts/${id}${API_KEY}`)

    return {
      type : FETCH_POST,
      payload: data
    }
}

export function deletePost(id, callback){
  const data = axios.delete(`${ROOT_API}/posts/${id}${API_KEY}`).then(() => {
    callback()
  })

  return {
    type: DELETE_POST,
    data: id
  }
}