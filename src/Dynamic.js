import * as React from "react";
import {
  Container,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { supabase } from "./supabaseClient";
import { useEffect } from "react";
import { useState } from "react";

const Dynamo = () => {

  const [myThoughts, setThoughts] = useState([]);
  const [thought, setThought] = useState([]);

  useEffect(()=>{
    (async function getThoughts() {
      const { data } = await supabase.from("Thoughts").select();
      setThoughts(data);
    })();
  }, [])

  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            {myThoughts.map((data)=>(
              <ListItem key={data.id}>
                <ListItemButton key={data.id}>
                  <ListItemText key={data.id} primary={data.thought} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </Container>
  );
};

export default Dynamo;
