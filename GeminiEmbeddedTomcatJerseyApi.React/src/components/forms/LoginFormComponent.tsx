import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import BasicCard from "@components/CardComponent";
import { Location, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from "@components/Auth";
import IUser from '@models/user';


export interface UserState {
  name: string;
  password: string;
  showPassword: boolean;
}

export default function InputAdornments() {
  const [values, setValues] = React.useState<UserState>({
    name: '',
    password: '',
    showPassword: false,
  });

  const navigate = useNavigate();
  const location: Location = useLocation();
  const auth = useAuth();

  const state = location.state as { from: { pathname: string } };

  const from = state?.from?.pathname || "/";


  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
     // const name = prop.target.name;
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userName = formData.get("username") as string;
    const password = formData.get("password") as string;
    setValues({
      ...values,
      name: userName,
      password: password
    });
    const newUser: Pick<IUser, "username" | "password"> = {userName,password};
    // validate user section

    auth.signin( newUser , () => { 
      navigate(from, { replace: true}); 
    });

  }

 const formEl = React.useRef(null);

  return (

    <BasicCard>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Login Form
         <p>You must log in to view the page at {from}</p>
       </Typography>
       <form onSubmit={handleSubmit} ref={formEl}>
      <div>   
      <TextField
          required
          name="username"
          id="outlined-required"
          label="Username"
          color="secondary"
          sx={{p: 2}}
          value={values.name}
          onChange={handleChange('name')}
        />
         </div>
         <div>
        <FormControl required   sx={{p: 2}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            name="password"
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      </form>
    </Box>
    </BasicCard>
  );
}
