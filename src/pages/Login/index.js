import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks/useForms';
import FormField from '../../components/FormField';
import loginRepository from '../../repositories/login';
import { login } from '../../services/auth';
import hash from 'object-hash';

function Login(){
  const history = useHistory();
  const [logins, setLogins] = useState([]); 
  const { handleChange, values } = useForm({
    msgAcessoNegado: '',
    login: '',
    senha: '',
  });
  
  useEffect(() => {
    loginRepository.getAll()
      .then((loginsExistentes) => {
        setLogins(loginsExistentes);
      })
      .catch((err) => {
        console.log(err.Message);
      });    
  }, []);

  return(
    <PageDefault>
        <h1>Logar</h1>

        <form onSubmit={(event) => {
        event.preventDefault();
        const hashLogin = hash({"login": values.login, "senha": values.senha});        
        const exists = logins.some(v => v.login === hashLogin);
        
        if(exists)
        {
            login(hashLogin);
            history.push('/');
        }
        else 
        {
            history.push('/AcessoNegado');
        }
      }}
      >
        <FormField
          label="Login"
          name="login"
          value={values.login}
          onChange={handleChange}
        />

        <FormField
          label="Senha"
          name="senha"
          value={values.senha}
          onChange={handleChange}
          type="password"
        />
        
        <button type="submit">
          Cadastrar
        </button>
      </form>

      <br />
      <br />
    </PageDefault>
  );
}

export default Login;
