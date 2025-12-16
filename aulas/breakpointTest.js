// ajustar/cuidar de pontos fracos do sistema, buscando limites maiores suportados pelo sistema
// ajudar a planejar o verificar a correção de sistema com baixo limite de utilização
// atenção a elasticidade de ambientes de nuvem
// aumento de carga gradual para essa modalidade
// tipo de teste de ciclo iterativo
//interrupção manual ou automática

import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter, Trend } from 'k6/metrics'; //custom metric

export const options = {
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }
    ]
}

export default () => {
    const urlRes = http.get('https://test.k6.io');
    sleep(1);

    check(res, {
        'status is 200': (r) => r.status === 200
    });
    
    res = http.get('https://test.k6.io/news.php');
    newsPageResponseTrend.add(res.timings.duration);
}
}