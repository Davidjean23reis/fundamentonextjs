export default function questao(req, res){
    if(req.method ==="GET") {
        const id = req.query.id
        res.status(200).json({
    id,        
    enunciado: 'Qual é sua cor preferida?',
    respostas: [
        'Branca', 'Vermelha', 'Amerela'
    ]
        })
    } else {
        res.status(405).send()
    }

}