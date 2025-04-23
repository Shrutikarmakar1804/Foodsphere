import {
  Button,
  TextField,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../State/Authentication/Action';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log('form values', values);
    dispatch(loginUser({ userData: values, navigate }));
  };

  return (
    <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         height="87%"
          position="absolute"
          borderRadius={2}
          boxShadow={3}
         width="90%"
          sx={{
            backgroundImage: 'url("/your-background-image.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            px: 2,
          }}
>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
       style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Paper
          elevation={10}
          sx={{
            width: { xs: '60%', md: '80%', lg: '100%' },
            p: 4,
            backgroundColor: 'rgba(0,0,0,0.85)',
            color: '#fff',
            borderRadius: '3',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>

          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <Button
                sx={{ mt: 3, py: 1.2 }}
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Form>
          </Formik>

          <Typography variant="body2" align="center" sx={{ mt: 4 }}>
            Don't have an account?
            <Button
              size="small"
              onClick={() => navigate("/account/register")}
              sx={{ ml: 1 }}
              color="secondary"
            >
              Register
            </Button>
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            <Button
              size="small"
              onClick={() => navigate("/account/forgot-password")}
              sx={{ ml: 1 }}
              color="secondary"
            >
              Forgot Password?
            </Button>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default LoginForm;