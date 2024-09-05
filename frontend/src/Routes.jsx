import {useContext} from "react";
import {UserContext} from "./context";
import { RegisterForm} from "./components";


export default function Routes() {
  const {username, id} = useContext(UserContext);

  if (username) {
    return "lOGGED iN";
  }

  return (
    <RegisterForm />
  );
}