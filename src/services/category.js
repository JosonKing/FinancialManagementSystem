import request from '../utils/request';

export async function query() {
  return request('/api/categorys');
}

export async function queryCurrent() {
  return request('/api/currentCategory');
}
