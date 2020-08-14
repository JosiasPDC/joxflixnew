import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function AcessoNegado(){
  return(
    <PageDefault>
        <div><h1>Você não tem acesso a essa funcionalidade.</h1></div>
      
        <Button as={Link} className="ButtonLink" to="/Login">
          Tentar novamente
        </Button>
    </PageDefault>
  )
}

export default AcessoNegado;