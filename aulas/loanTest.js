//quantidade de tráfego
//condições normais e de pico
//garantir funcionalidade

export const options = {
    vus: 100,
    duration: '10m'
}

export const options2 = {
    stages: [
        { duration: '5m', target: 100 },
        { duration: '10m', target: 100 },
        { duration: '5m', target: 50 }
    ]
}