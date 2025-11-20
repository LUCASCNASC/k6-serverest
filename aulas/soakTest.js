// o sistema não sofre bugs ou vazamentos de memória sob carga contínua
// verifique se as reinicializações inesperadas dp aplicativo não perdem solicitações
// encontre bugs relacionados a condições de corrida que aparecem esporadicamente

export const options = {
    stages: [
        { duration: '2m', target: 400 },
        { duration: '3h56m', target: 400 },
        { duration: '2m', target: 0 }
    ]
}