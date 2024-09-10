import http_no_auth from './http-no-auth';

const get = (url, request_type) => {
  return http_no_auth.get(url);
};

const create = (url, data, request_type) => {
  return http_no_auth.post(url, data);
};

const update = (url, data, request_type) => {
  return http_no_auth.put(url, data);
};

const remove = url => {
  return http_no_auth.delete(url);
};

export {get, create, update, remove};
