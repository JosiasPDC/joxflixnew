import config from '../config';
const URL_CATEGORIAS = `${config.URL_BACKEND_TOP}/categorias`;

function getAllWithVideos(){
    return fetch(`${URL_CATEGORIAS}?_embed=videos`)
        .then(async (respostaDoServer) => {
         if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            return resposta;
          }
          throw new Error('Não foi possível pegar os dados');
    });
}

function getAll(){
    return fetch(`${URL_CATEGORIAS}`)
        .then(async (respostaDoServer) => {
         if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            return resposta;
          }
          throw new Error('Não foi possível pegar os dados');
    });
}

function create(categoria){
    return fetch(`${URL_CATEGORIAS}?_embed=categorias`, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(categoria)
    })
        .then(async (respostaDoServer) => {
         if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            return resposta;
          }
          throw new Error('Não foi possível pegar os dados');
    });
}

export default{
    getAllWithVideos, getAll, create,
}