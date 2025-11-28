import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        {
            duration: '2h',
            target: 10000
        }
    ]
};

export default function () {
    const res = http.put('https://serverest.dev/#/Usu%C3%A1rios/put_usuarios___id_');
    sleep(1);
    check(res, {
        'status is 200': (r) => r.status === 200
    });
}