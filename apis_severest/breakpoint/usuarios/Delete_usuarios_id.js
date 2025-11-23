import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '2h',
            target: 10000
        }
    ]
};

export default function () {
    http.del('https://serverest.dev/#/Usu%C3%A1rios/delete_usuarios___id_');
    sleep(1);
}