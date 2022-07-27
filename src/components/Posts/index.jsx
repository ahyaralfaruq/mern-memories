import { CircularProgress, Grid } from "@mui/material";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const Index = ({ setCurrentId }) => {
   const PREFIX = "Posts-style";

   const classes = {
      mainContainer: `${PREFIX}-mainContainer`,
      smMargin: `${PREFIX}-smMargin`,
      actionDiv: `${PREFIX}-actionDiv`,
   };

   const theme = createTheme();

   const PostsStyled = styled(Grid)(({ theme }) => ({
      [`& .${classes.mainContainer}`]: {
         display: "flex",
         alignItems: "center",
      },
      [`& .${classes.smMargin}`]: {
         margin: theme.spacing(1),
      },
      [`& .${classes.actionDiv}`]: {
         textAlign: "center",
      },
   }));

   const posts = useSelector((state) => state.posts);

   return !posts.length ? (
      <CircularProgress />
   ) : (
      <ThemeProvider theme={theme}>
         <PostsStyled
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
         >
            {posts.map((post) => (
               <Grid item key={post._id} xs={12} sm={6}>
                  <Post post={post} setCurrentId={setCurrentId} />
               </Grid>
            ))}
         </PostsStyled>
      </ThemeProvider>
   );
};

export default Index;
