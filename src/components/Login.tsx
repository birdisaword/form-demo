import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
 import { TextField } from "@mui/material";
 import { FormTitleWrapper, FormTitle, FieldContainer, SubmitBtn, StyledTextField, Link, Hypertext, ErrorText } from "../style";
import Logo from "./Logo";
import { Form } from "../pages/styles";
import EyeBtn from "./VisibilityBtn";

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      showPassword: false
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('https://expa.fly.dev/auth/login', {
          username: values.username,
          password: values.password,
        });

        // Extract the access token and refresh token from the response
        const { accessToken, refreshToken } = response.data;

        // Save the tokens to local storage or secure storage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        // Redirect the user to the home page
        navigate("/home");
      } catch (error) {
        formik.resetForm();
        alert('Invalid username or password');
      }
    },
  });

  return (
    <div>
    <Logo/>
    <FormTitleWrapper>
       <FormTitle>SIGN UP</FormTitle>
     </FormTitleWrapper>

     <Form onSubmit={formik.handleSubmit}>
       <FieldContainer>

        <StyledTextField
           type="text"
           autoComplete="off"
           label="Username"
           variant="standard"
           placeholder="Example123"
           name="username"
           value={formik.values.username}
           onChange={formik.handleChange}
           as={TextField}
        />
        {formik.errors.username && <ErrorText>{formik.errors.username}</ErrorText>}

        <StyledTextField
              type={formik.values.showPassword ? "text" : "password"}
              autoComplete="off"
                label="Password"
                variant="standard"
                placeholder="********"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                as={TextField}
              />
              <EyeBtn name="showPassword" formik={formik}/>
        {formik.errors.password && <ErrorText>{formik.errors.password}</ErrorText>}
        

        <SubmitBtn type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Signing in...' : 'Sign in'}
        </SubmitBtn>

        <Link>Don't have an account?
          <Hypertext onClick={() => navigate('/auth/register')}> Sign up
          </Hypertext>
        </Link>
        </FieldContainer>
      </Form>
    </div>
  );
}

export default Login;