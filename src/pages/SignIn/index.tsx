import React, { useState } from 'react';
import { Container, Form, Input, Title, Button, Link } from './styles';

export default () => {
  const [passwordResetView, setPasswordResetView] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitSingIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitSingIn', { email, password });
  };

  const submitPasswordReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitPasswordReset', { email });
  };

  const setPasswordReset = () => {
    setPasswordResetView(!passwordResetView);
  }

  if (passwordResetView) {
    return (
      <Container>
        <Title>Reset Password</Title>
        <Form onSubmit={submitPasswordReset}>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Reset Password</Button>
        </Form>
        <Link href="#" onClick={setPasswordReset}>Back to Sign In</Link>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Sign In</Title>
      <Form onSubmit={submitSingIn}>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Sign In</Button>
      </Form>
      <Link href="#" onClick={setPasswordReset}>Forgot your password?</Link>
      {/* <Link href="#">Create an account</Link> */}
    </Container>
  );
};
