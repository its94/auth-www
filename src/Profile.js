import { Box, Input, Text, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { ErrorBox } from "./Error";

export const Profile = () => {
  const { user, setUserData, userError, isUserUpdating} = useMoralis();
  const [username, setUsername] = useState(user.attributes.username);
  const [email, setEmail] = useState(user.attributes.email);
  const [password, setPassword] = useState("");

  const handleSave = () => {
    setUserData({
      username,
      email,
      password: password === "" ? undefined : password, // if password is empty, don't send it to the server
    });
  };

  return (
    <Box>
      <Stack spacing={4}>
        {userError && (
          <ErrorBox title="User change failed" message={userError.message} />
        )}
        <Box>
          <Text>Username</Text>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)} // onChange is a built-in event handler
            placeholder="Username"
          />
        </Box>
        <Box>
          <Text>Email</Text>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Box>
        <Box>
          <Text>Password</Text>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" type="password"
          />
        </Box>
        <Button onClick={handleSave} isLoading={isUserUpdating}>
          Save
        </Button>
      </Stack>
    </Box>
  );
};
