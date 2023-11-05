import { Box } from '@mui/material';
import { getAuth } from "firebase/auth";
import { getMessaging, onMessage } from "firebase/messaging";
// eslint-disable-next-line @typescript-eslint/no-empty-interface

export const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const message = "";

  const messaging = getMessaging();
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  });
  
  return (
    
    <Box>
      {
      user ? 
      <Box>{user.email}</Box> :
      <Box>Home</Box>
      }
      <Box>
        {{ message }}
      </Box>
    </Box>
  );
};
