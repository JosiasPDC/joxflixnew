import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
//import Button from '../../../components/Button';
import useForm from '../../../hooks/useForms';
import categoriasRepository from '../../../repositories/categorias';
import queryString from 'query-string';

function CadastroCategoria(props) {  
  const url = props.location.search;
  const params = queryString.parse(url);
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
 
  const [categoria, setCategoria] = useState([]);  
  useEffect(() => {
    categoriasRepository.getAll()
      .then((categorias) => {
          //console.log(categorias);
          //setCategorias(categorias);
          if(params.id !== null && params.id !== undefined && parseInt(params.id)){
            console.log(params.id);
            const categoriaIdEscolhida = categorias.find((categoria) => {
              return categoria.id.toString() === params.id.toString();
            });
              
            if(categoriaIdEscolhida !== null && categoriaIdEscolhida !== undefined){
              setCategoria(categoriaIdEscolhida);
            }
            else{
              setCategoria(categoriaIdEscolhida);
            }
          }
      })
      .catch((err) => {
        console.log(err.Message);
      });    
  }, [params.id]);

console.log(categoria);

  const { handleChange, values, clearForm} = useForm(valoresIniciais);

  //const [categorias, setCategorias] = useState([]);  
  // useEffect(() => {
  //   categoriasRepository.getAll()
  //     .then((categorias) => {
  //         //console.log(categorias);
  //         //setCategorias(categorias);
  //         if(params.id !== null && params.id !== undefined && parseInt(params.id)){
  //           console.log(params.id);
  //           const categoriaIdEscolhida = categorias.find((categoria) => {
  //             return categoria.id.toString() === params.id.toString();
  //           });
            
  //           if(categoriaIdEscolhida !== null && categoriaIdEscolhida !== undefined){
  //             valoresIniciais.titulo = categoriaIdEscolhida.titulo;
  //             setValores(valoresIniciais);
  //             console.log(categoriaIdEscolhida.titulo);
  //           }
  //         }
  //     })
  //     .catch((err) => {
  //       console.log(err.Message);
  //     });    
  // }, [params.id, valoresIniciais]);
  

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
