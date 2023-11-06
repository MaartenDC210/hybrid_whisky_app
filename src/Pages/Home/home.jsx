import { Box } from '@mui/material';
import { getAuth } from "firebase/auth";
// eslint-disable-next-line @typescript-eslint/no-empty-interface

export const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  
  return (
      user ? 
      <Box>{user.email}</Box> :
      <Box>Home</Box>
  );
};
