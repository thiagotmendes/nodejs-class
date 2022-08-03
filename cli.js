import chalk from 'chalk';
import pegaArquivo from './index.js';
import validaURL from './http-validacao.js';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) { 
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if(caminho[3] === 'validar') {
        console.log(chalk.yellow('Links validados'), await validaURL(resultado));
    } else {  
        console.log(chalk.yellow('Lista de links'), resultado);
    }
}

processaTexto(caminho);
