import config from '../config';
const URL_LOGIN = `${config.URL_BACKEND_TOP}/login`;

function getAll(){
    return fetch(`${URL_LOGIN}`)
        .then(async (respostaDoServer) => {
         if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            return resposta;
          }
          throw new Error('Não foi possível pegar os dados');
    });
}

export default{
    getAll,
}