import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
    http.put('https://serverest.dev/#/Usuarios/put_usuarios___id_');
    sleep(1);
}