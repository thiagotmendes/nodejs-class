import fetch from "node-fetch";

function manejaErros(erro) {
    throw new Error(erro.message)
}

async function checkStatus(arrayURL) {
    try {
        const arrayStatus = await Promise
        .all(arrayURL
            .map(async url => {
                const res = await fetch(url)
                return res.status;
            })) 
        return arrayStatus;
    } catch (erro) {
        manejaErros(erro)
    }
}

function geraArrayURL(arrayLinks) {
    return arrayLinks.map( objetoLink => Object.values(objetoLink).join() )
}

async function validaURL(arrayLinks) { 
    const links =  geraArrayURL(arrayLinks);
    const statusLinks = await checkStatus(links)

    const resultados = arrayLinks.map((objeto, indice) => ({ 
        ...objeto, 
        status: statusLinks[indice]
    }))

    return resultados;
}

export default validaURL;