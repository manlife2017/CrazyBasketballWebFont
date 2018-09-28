import request from '../utils/request';

export function query() {
  console.log("query")
  return request('/api/users');
}
