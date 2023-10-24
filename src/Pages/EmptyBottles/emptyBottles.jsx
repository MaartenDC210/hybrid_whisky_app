import { FC, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { collection, orderBy, query } from 'firebase/firestore';
import { firestoreDB } from '../../Firebase/initialize';
import { useCollectionData } from "react-firebase-hooks/firestore"
import { AddWhiskyDialog } from '../../Components/addWhiskyDialog';
import { getAuth } from 'firebase/auth';
import { saveItem } from '../../Firebase/saveWhisky';
import { WhiskyCard } from '../Inventory/Partials/whiskyCard';

export const EmptyBottles = () => {
  const collectionId = collection(firestoreDB, "whiskys");
  const queryItem= query(collectionId, orderBy("distillery"));
  const [ data ] = useCollectionData(queryItem);
  const emptyWhiskys = data?.filter((whisky) => whisky.empty)
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
  
  
  return <Box>
    { user?.email === 'de-marre@hotmail.com' ? 
    <Button hidden variant="outlined" onClick={handleClickOpen} style={{marginBottom:"5px"}}>
      Add empty bottle
    </Button> :
    <Box></Box>
    }
    <AddWhiskyDialog open={open} handleClose={handleClose} addWhisky={addWhisky} />
    {
      !emptyWhiskys ? 
        <Typography> no data </Typography> :
        emptyWhiskys.map( (whisky) => (
          <WhiskyCard whisky={whisky}></WhiskyCard>
          )
        )
    }
  </Box>;
};