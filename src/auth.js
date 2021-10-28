import { useState } from "react";
import { useMoralis } from "react-moralis";
import {
  Button,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ErrorBox } from "./Error";




const SignUp = () => {
  const { signup } = useMoralis();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Stack spacing={3}>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <Button onClick={() => signup(email, password, email)}>Signup</Button>
    </Stack>
  );
};

const Login = () => {
  const { login } = useMoralis();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Stack spacing={3}>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <Button onClick={() => login(email, password)}>Login</Button>
    </Stack>
  );
};

export const Auth = () => {
      const {
        authenticate,
        isAuthenticating,
        authError,
      } = useMoralis();

    return (
      <Stack spacing={8}>
        {authError && <ErrorBox title="Authentication has Failed!" message={authError.message} />}
        <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
          Authenticate with Wallet
        </Button>
        <Text textAlign="center">
          <em>OR</em>
        </Text>
        <SignUp />
        <Text textAlign="center">
          <em>OR</em>
        </Text>
        <Login />
      </Stack>
    );
};
