import React, { useState, useEffect } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForms';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
    link_extra: {
      text: '',
      url: ''
    }
  };

  const { handleChange, values, clearForm} = useForm(valoresIniciais);

  //const [categorias, setCategorias] = useState([]);  

  // ============

  // useEffect(() => {
  //   categoriasRepository.getAll()
  //     .then((categorias) => {
  //         console.log(categorias);
  //         setCategorias(categorias);
  //     })
  //     .catch((err) => {
  //       console.log(err.Message);
  //     });    
  // }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        // setCategorias([
        //   ...categorias,
        //   values,
        // ]);

        categoriasRepository.create({
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.cor,
          link_extra: {
            text: values.text,
            url: values.url
          }
        }).then(() => {
          history.push('/');
        });
        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <FormField
          label="Título Link Extra"
          name="text"
          value={values.text}
          onChange={handleChange}
        />

        <FormField
          label="URL Link Extra"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
          <button>
            Cadastrar
          </button>
          
      </form>

      {/* {categorias.length === 0 && (<div>Loading.............</div>)} */}

      {/* <ul>
        {categorias.map((categoria, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul> */}

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
