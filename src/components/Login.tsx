import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { TextField } from "@mui/material";
import {
  FormTitleWrapper,
  FormTitle,
  FieldContainer,
  SubmitBtn,
  StyledTextField,
  Link,
  Hypertext,
  ErrorText,
  Form,
} from "../style";
import Logo from "./Logo";
import EyeBtn from "./VisibilityBtn";

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      showPassword: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://expa.fly.dev/auth/login",
          {
            username: values.username,
            password: values.password,
          }
        );

        const { accessToken, refreshToken } = response.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        navigate("/home");
      } catch (error) {
        formik.resetForm();
        alert("Invalid username or password");
      }
    },
  });

  return (
    <div>
      <Logo />
      <FormTitleWrapper>
        <FormTitle>SIGN IN</FormTitle>
      </FormTitleWrapper>

      <Form onSubmit={formik.handleSubmit}>
        <FieldContainer>
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
              placeholder: "Example123",
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
              style: { fontFamily: "Montserrat-thin" },
              placeholder: "********",
            }}
          />
          <EyeBtn name="showPassword" formik={formik} />
          {formik.errors.password && <ErrorText>{formik.errors.password}</ErrorText>}

          <SubmitBtn type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Signing in..." : "Sign in"}
          </SubmitBtn>

          <Link>
            Don't have an account?
            <Hypertext onClick={() => navigate("/auth/register")}> Sign up</Hypertext>
          </Link>
        </FieldContainer>
      </Form>
    </div>
  );
};

export default Login;
