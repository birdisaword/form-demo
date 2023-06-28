import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { TextField } from "@mui/material";
import * as Yup from 'yup';
import axios from 'axios';
import {
  FormTitleWrapper,
  FormTitle,
  FieldContainer,
  SubmitBtn,
  StyledTextField,
  Link,
  Hypertext,
  ErrorText,
  Form
} from "../style";
import Logo from "./Logo";
import EyeBtn from "./VisibilityBtn";

const Register = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    displayName: Yup.string().required('Full Name is required'),
    username: Yup.string().required('User Name is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      displayName: '',
      username: '',
      password: '',
      confirmPassword: '',
      showConfirmPassword: false,
      showPassword: false
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post('https://expa.fly.dev/auth/register', {
          displayName: values.displayName,
          username: values.username,
          password: values.password,
        });

        formik.resetForm();

        console.log('User registered:', values);
        navigate("/home");
      } catch (error) {
        alert('Failed to register user');
      }
    },
  });

  return (
    <div>
      <Logo />
      <FormTitleWrapper>
        <FormTitle>SIGN UP</FormTitle>
      </FormTitleWrapper>

      <Form onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <StyledTextField
            type="text"
            autoComplete="off"
            label={<span style={{ fontFamily: "Montserrat-extralight" }}>Full Name</span>}
            variant="standard"
            name="displayName"
            value={formik.values.displayName}
            onChange={formik.handleChange}
            as={TextField}
            InputProps={{
              style: { fontFamily: "Montserrat-extralight" },
              placeholder: "Example Name"
            }}
          />
          {formik.errors.displayName && <ErrorText>{formik.errors.displayName}</ErrorText>}

          <StyledTextField
            type="text"
            autoComplete="off"
            label={<span style={{ fontFamily: "Montserrat-extralight" }}>Username</span>}
            variant="standard"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            as={TextField}
            InputProps={{
              style: { fontFamily: "Montserrat-extralight" },
              placeholder: "Example123"
            }}
          />
          {formik.errors.username && <ErrorText>{formik.errors.username}</ErrorText>}

          <StyledTextField
            type={formik.values.showPassword ? "text" : "password"}
            autoComplete="off"
            label={<span style={{ fontFamily: "Montserrat-extralight" }}>Password</span>}
            variant="standard"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            as={TextField}
            InputProps={{
              style: { fontFamily: "Montserrat-extralight" },
              placeholder: "********"
            }}
          />
          <EyeBtn name="showPassword" formik={formik} />
          {formik.errors.password && <ErrorText>{formik.errors.password}</ErrorText>}

          <StyledTextField
            type={formik.values.showConfirmPassword ? "text" : "password"}
            autoComplete="off"
            label={<span style={{ fontFamily: "Montserrat-extralight" }}>Confirm Password</span>}
            variant="standard"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            as={TextField}
            InputProps={{
              style: { fontFamily: "Montserrat-extralight" },
              placeholder: "********"
            }}
          />
          <EyeBtn name="showConfirmPassword" formik={formik} />
          {formik.errors.confirmPassword && <ErrorText>{formik.errors.confirmPassword}</ErrorText>}

          <SubmitBtn type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? 'Signing up...' : 'Sign up'}
          </SubmitBtn>

          <Link>I have an account.
            <Hypertext onClick={() => navigate('/auth/login')}>Go to Sign in</Hypertext>
          </Link>
        </FieldContainer>
      </Form>
    </div>
  );
};

export default Register;
