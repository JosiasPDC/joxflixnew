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
  // useEffect(() => {
  //   categoriasRepository.getAll()
  //     .then((categorias) => {
  //         console.log(categorias);
  //         //setDadosIniciais(categoriasComVideos);
  //     })
  //     .catch((err) => {
  //       console.log(err.Message);
  //     });    
  // }, []);


  return(
    <PageDefault>
        <h1>Cadatastro de vídeo: 
        {values.nome}</h1>
        
        <form onSubmit={(event) => {
        event.preventDefault();
          videosRepository.create({
            titulo: 'Flappy Bird',//values.titulo,
            url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',//values.url, 
            categoriaId: 1,
          }).then(() => {
            history.push('/');
          });
      }}
      >

        <FormField
          label="Título do vídeo"
          name="nome"
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
          name="nome"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <br />
      <br />

      {categorias.length === 0 && (<div>Loading.............</div>)}

      <ul>
        {categorias.map((categoria, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/Categoria">
          Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
