import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){
  return(
    <PageDefault>
        <h1>Cadatastro de vídeo</h1>
        <Link to="/cadastro/Categoria">
            Cadastrar categoria
        </Link>
    </PageDefault>
  )
}

export default CadastroVideo;
