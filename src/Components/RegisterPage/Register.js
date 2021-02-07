import React from 'react'
import { TextField, Button } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'
import styled from 'styled-components'
import { useForm } from '../Hooks/UseForm'


<<<<<<< HEAD
 const FormInputsSignUp = styled.form`
  /* display: grid; */
  /* height: 20vh; */
  width: 335px;
  /* justify-content: space-around; */
  /* margin-top: 20%; */
  /* margin-left: 3%; */
  /* margin-bottom: 5%; */
  background-color:red;
=======
const FormInputs = styled.form`
display: flex;
flex-direction: column;
height: 20vh;
width: 335px;
justify-content: space-around;
margin-top: 20%;
margin-left: 3%;
margin-bottom: 5%;
>>>>>>> d3894e97c8a59ccc16a2b03ceebe03d32addcddf
`;

function Register() {
    const [showPassword, setShowPassword] = React.useState(false)
  
    const {form, onChange} = useForm({
      name: "",
      email: "",
      cpf: "",
      password: ""
    })
     
   
  
    const handleInputChange = (event) => {
      const {value, name} = event.target
  
      onChange(value, name)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()
      
   
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
        <FormInputs onSubmit={handleSubmit}>
            <TextField 
            value={form.name} 
            onChange={handleInputChange}
            variant='outlined'
            label='Nome'
            placeholder='Nome e sobrenome'
            name='name'
            type='text'
            required
            size="small"
          />
          <br />
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
            size="small"
          />
          <br />
          <TextField 
            value={form.cpf}
            onChange={handleInputChange}
            variant= 'outlined'
            label='CPF'
            placeholder='000.000.000-00'
            minlength="11"
            name='cpf'
            type='cpf'
            pattern='\d{3}\.?\d{3}\.?\d{3}-?\d{2}'
            required
            size="small"
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
            size="small"
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
          <br/>
          <TextField 
            value={form.password}
            onChange={handleInputChange}
            variant= 'outlined'
            label='Confirmar'
            placeholder='Confirme a senha anterior'
            minlength="6"
            name='password'
            size="small"
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
            required
          />
          <br/>
          <Button
            variant='contained'
            color="primary"
            type="submit"
          >
            CRIAR
          </Button>
        </FormInputs>
      </div>
    );
  }
  export default Register;