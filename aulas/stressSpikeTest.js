//como se comporta em condições extremmas
// capacidade máxima do sistema em termos de usuários ou taxa de transferencias
// ponto de ruptura do sistema
// o sistema se recupera sem intervenção manual após o término do testes de estresse

export const options = {
    stages: [
        { duration: '2m', target: 100 },
        { duration: '5m', target: 100 },
        { duration: '2m', target: 200 },
        { duration: '5m', target: 200 },
        { duration: '2m', target: 300 },
        { duration: '5m', target: 300 },
        { duration: '2m', target: 400 },
        { duration: '5m', target: 400 },
        { duration: '10m', target: 0 }
    ]
}