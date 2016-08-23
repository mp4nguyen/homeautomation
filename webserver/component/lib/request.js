import axios from 'axios';

export function post(data){
  axios.post('/controlRelay',data)
}
