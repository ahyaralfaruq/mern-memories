import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";

import { Form, Posts } from "./components";
import { getPosts } from "./actions/posts";
import memories from "./images/memories.png";

const PREFIX = "App";

const classes = {
   appBar: `${PREFIX}-appBar`,
   heading: `${PREFIX}-heading`,
   image: `${PREFIX}-image`,
   mainContainer: `${PREFIX}-mainContainer`,
};

// container by mui/material has used in here code to be new component

const AppStyled = styled(Container)(({ theme }) => ({
   [`& .${classes.appBar}`]: {
      borderRadius: 15,
      margin: "30px 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
   },
   [`& .${classes.heading}`]: {
      color: "rgba(0,183,255, 1)",
   },
   [`& .${classes.image}`]: {
      marginLeft: "15px",
   },
   [theme.breakpoints.down("sm")]: {
      [`& .${classes.mainContainer}`]: {
         flexDirection: "column-reverse",
      },
   },
}));

function App() {
   const [currentId, setCurrentId] = useState(null);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPosts());
   }, [currentId, dispatch]);

   return (
      <AppStyled maxWidth="lg">
         <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">
               Memories
            </Typography>
            <img
               className={classes.image}
               src={memories}
               alt="memories"
               height="60"
            />
         </AppBar>
         <Grow in>
            <Container>
               <Grid
                  className={classes.mainContainer}
                  container
                  justifyContent="space-between"
                  alignItems="stretch"
                  spacing={3}
               >
                  <Grid item xs={12} sm={7}>
                     <Posts setCurrentId={setCurrentId} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Form currentId={currentId} setCurrentId={setCurrentId} />
                  </Grid>
               </Grid>
            </Container>
         </Grow>
      </AppStyled>
   );
}

export default App;
