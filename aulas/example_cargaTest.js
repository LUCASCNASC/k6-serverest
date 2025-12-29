import http from 'k6/http'; //conseguir fazer requisições HTTP
import { sleep, check } from 'k6';
import { Counter, Trend } from 'k6/metrics'; //custom metric; //conseguir fazer pausas
import { SharedArray } from 'k6/data'; //conseguir ler dados de um arquivo externo, como .json

export const options = {
    stages: [
        { duration: '10s', target: 10 }, 
        { duration: '10s', target: 10 },
        { duration: '10s', target: 0 } 
    ],
    thresholds: {
        checks: ['rate > 0.95'],
        http_req_duration: ['p(95) < 200']
    }
}

const data = new SharedArray('ler dados do json', function () {
    return JSON.parse(open('./dados.json')).users; //ler o arquivo dados.json e pegar o array users
});

export default function(){

    const userId = data[Math.floor(Math.random() * data.length)].id; //pegar um id aleatório do array de dados
    const BASE_URL = `https://test-api.k6.io/public/crocodiles/${userId}`; //usar o id para construir a URL
    let res = http.get(BASE_URL)
    
    check(res,{
        'status 200': (r) => r.status === 200
    });
    sleep(1);

    check(res, {
        'status is 200': (r) => r.status === 200
    });
    
    res = http.get('https://test.k6.io/news.php');
    newsPageResponseTrend.add(res.timings.duration);
}