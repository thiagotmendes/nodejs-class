import fetch from "node-fetch";

async function checkStatus(arrayURL) {
    const arrayStatus = await Promise
        .all(arrayURL
            .map(async url => {
                const res = await fetch(url)
                return res.status;
            })) 
    return arrayStatus;
}

function geraArrayURL(arrayLinks) {
    return arrayLinks.map( objetoLink => Object.values(objetoLink).join() )
}

async function validaURL(arrayLinks) { 
    const links =  geraArrayURL(arrayLinks);
    const statusLinks = await checkStatus(links)
    return statusLinks;
}

export default validaURL;