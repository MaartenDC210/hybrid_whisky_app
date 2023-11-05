import { FC, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { collection, orderBy, query } from 'firebase/firestore';
import { firestoreDB } from "../../Firebase/initialize";
import { useCollectionData } from "react-firebase-hooks/firestore"
import { AddWhiskyDialog } from '../../Components/addWhiskyDialog';
import { getAuth } from 'firebase/auth';
import { saveItem } from '../../Firebase/saveWhisky';
import { WhiskyCard } from './Partials/whiskyCard';

// eslint-disable-next-line @typescript-eslint/no-empty-interface


export const Inventory = () => {
  const collectionId = collection(firestoreDB, "whiskys");
  const queryItem = query(collectionId, orderBy("distillery"));
  const [ data ] = useCollectionData(queryItem);
  const [open, setOpen] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser

  const handleClickOpen = () => {
      setOpen(true);
  };
  
  const handleClose = () => {
      setOpen(false);
  };

  const addWhisky = (data) => {
    saveItem("whiskys", data);
  }
  const ownedWhiskys = data?.filter((whisky) => whisky.owned)
  
  return <Box>
    { user?.email === 'de-marre@hotmail.com' || user?.email === 'test@123.be'? 
    <Button hidden variant="outlined" onClick={handleClickOpen} style={{marginBottom:"5px"}}>
      Add whisky
    </Button> :
    <Box></Box>
    }
    <AddWhiskyDialog open={open} handleClose={handleClose} addWhisky={addWhisky} />
    {
      !ownedWhiskys ? 
        <Typography> no data </Typography> :
        <Grid container spacing={2}>
        {
        ownedWhiskys.map( (whisky, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <WhiskyCard whisky={whisky}></WhiskyCard>
          </Grid>
          )
        )
        }
        </Grid>
        
    }
    
  </Box>;
};
