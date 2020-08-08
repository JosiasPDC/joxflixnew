import config from '../config';
const URL_CATEGORIAS = `${config.URL_BACKEND_TOP}/videos`;

function create(video){
    return fetch(`${URL_CATEGORIAS}?_embed=videos`, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(video)
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
    create,
}