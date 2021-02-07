
import React from 'react';
import { useForm } from '../Hooks/UseForm'
import { TextField, Button } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'
import styled from 'styled-components'
import { goToRegister } from '../Routes/Cordinator';
import { useHistory } from "react-router-dom";


const FormInputsLoginPage = styled.form`
display: flex;
flex-direction: column;
height: 20vh;
width: 335px;
justify-content: space-around;
margin-top: 20%;
margin-left: 3%;
margin-bottom: 5%;
`;


export default function LoginPage() {
    const history = useHistory();
  const [showPassword, setShowPassword] = React.useState(false)
  
  const { form, onChange } = useForm({
    email: "",
    password: "",
  })
  
  const handleInputChange = (event) => {
    const {value, name} = event.target

    onChange(value, name)
  }
 
  const handleSubmit = (event) => {
    console.log('chamou a função')
    
   }

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false)
    } else {
      setShowPassword(true)
      }
    }

    return (
    <div>
        <FormInputsLoginPage onSubmit={handleSubmit}>
          <TextField
            value={form.email}
            onChange={handleInputChange}
            variant='outlined'
            label='E-mail'
            placeholder='email@email.com'
            name='email'
            type='email'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'
            required
          />
          <br/>
          <TextField
            value={form.password}
            onChange={handleInputChange}
            variant= 'outlined'
            label='Senha'
            placeholder='Mínimo 6 caracteres'
            minlength="6"
            name='password'
            required
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
              showPassword ? (
                <VisibilityIcon 
                  onClick={handleShowPassword} 
                  fontSize={'small'}
                /> ) : (
                <VisibilityOffIcon 
                  onClick={handleShowPassword} 
                  fontSize={'small'}
                />
                )
              ),
            }}
          />
          
          <Button 
            variant='contained'
            color="primary"
            type="submit"
          >
            LOGIN
          </Button>
          <Button onClick={() => goToRegister(history)}
            color="primary"
                     >
            Não possui cadastro? 
            Clique aqui.
          </Button>
     
          </FormInputsLoginPage>
  </div>
  );
}


