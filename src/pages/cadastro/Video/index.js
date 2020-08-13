import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForms';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo(){
  const history = useHistory();
  const [categorias, setCategorias] = useState([]); 
  const categoryTitles = categorias.map(({ titulo }) => titulo); 
  console.log(categoryTitles);
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });
  
  useEffect(() => {
    categoriasRepository.getAll()
      .then((categorias) => {
          console.log(categorias);
          setCategorias(categorias);
      })
      .catch((err) => {
        console.log(err.Message);
      });    
  }, []);

  return(
    <PageDefault>
        <h1>Cadatastro de vídeo: 
        {values.titulo}</h1>
        
        <form onSubmit={(event) => {
        event.preventDefault();
          const categoriaIdEscolhida = categorias.find((categoria) => {
              return categoria.titulo === values.categoria;
          });


          videosRepository.create({
            titulo: values.titulo,
            url: values.url, 
            categoriaId: categoriaIdEscolhida.id,
          }).then(() => {
            history.push('/');
          });
      }}
      >

        <FormField
          label="Título do vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />


        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      <br />
      <br />

      {categorias.length === 0 && (<div>Loading.............</div>)}

      <Link to="/cadastro/Categoria">
          Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
