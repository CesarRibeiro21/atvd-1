import prompt from 'prompt-sync'
let ler = prompt ();

import express from 'express';

const servidor = express();


servidor.get('/calculadora/subtracao/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let mult = n1 * n2;

    resp.send('A multiplicação é ' + mult);
})

servidor.listen(5050, () => console.log('API subiu na porta 5050'));