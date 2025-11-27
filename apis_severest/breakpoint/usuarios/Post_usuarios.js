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
    const res = http.post('https://serverest.dev/#/Usu%C3%A1rios/post_usuarios');
    sleep(1);
}