import {
  Container,
  Heading,
  Flex,
  Spacer,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { Auth } from "./auth";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";

// Language: javascript

function App() {
  const { isAuthenticated, isAuthUndefined, user, logout} = useMoralis();

  return (
    <Container>
      <Flex my={6}>
        <Link to="/"><Heading>Home</>VRMC></Link>
        <Spacer />
        {isAuthenticated && <Link to="/profile"> <Avatar name={user.attributes.username} /></Link>}
        {isAuthenticated && <Button onClick={() => {logout()}} ml={3}>Logout</Button>}

      </Flex>
      <Heading margin={45} mb={6}>
        Welcome, {user ? user.attributes.username : "Please Login...."}
      </Heading>

      {isAuthenticated ? (
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      ) : (
        <>
          {!isAuthUndefined && <Redirect to="/" />}

          <Auth />
        </>
      )}
    </Container>
  );
}

export default App;
