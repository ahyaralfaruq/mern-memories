import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";

const Index = ({ currentId, setCurrentId }) => {
   const PREFIX = "Form-style";

   const classes = {
      root: `${PREFIX}-root`,
      paper: `${PREFIX}-paper`,
      form: `${PREFIX}-form`,
      fileInput: `${PREFIX}-fileInput`,
      buttonSubmit: `${PREFIX}-buttonSubmit`,
   };

   const FormStyled = styled(Paper)(({ theme }) => ({
      [`& .${classes.root}`]: {
         "& .MuiTextField-root": {
            margin: theme.spacing(1),
         },
      },
      [`&.${classes.paper}`]: {
         padding: theme.spacing(2),
      },
      [`& .${classes.form}`]: {
         display: "flex",
         flexWrap: "wrap",
         justifyContent: "center",
      },
      [`& .${classes.fileInput}`]: {
         width: "97%",
         margin: "10px 0",
      },
      [`& .${classes.buttonSubmit}`]: {
         marginBottom: 10,
      },
   }));

   const [postData, setPostData] = useState({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
   });
   const post = useSelector((state) =>
      currentId ? state.posts.find((p) => p._id === currentId) : null
   );
   const dispatch = useDispatch();

   useEffect(() => {
      if (post) setPostData(post);
   }, [post]);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (currentId) {
         dispatch(updatePost(currentId, postData));
      } else {
         dispatch(createPost(postData));
      }
      clear();
   };

   const clear = () => {
      setCurrentId(null);
      setPostData({
         creator: "",
         title: "",
         message: "",
         tags: "",
         selectedFile: "",
      });
   };

   const creatorInput = (e) => {
      const text = e.target.value;

      setPostData({ ...postData, creator: text });
   };

   return (
      <FormStyled className={classes.paper}>
         <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
         >
            <Typography variant="h6">
               {currentId ? "Editing" : "Creating"} a Memory
            </Typography>
            <TextField
               name="Creator"
               variant="outlined"
               label="Creator"
               fullWidth
               value={postData.creator}
               onChange={(e) => creatorInput(e)}
            />
            <TextField
               name="Title"
               variant="outlined"
               label="Title"
               fullWidth
               value={postData.title}
               onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
               }
            />
            <TextField
               name="Message"
               variant="outlined"
               label="Message"
               fullWidth
               value={postData.message}
               onChange={(e) =>
                  setPostData({ ...postData, message: e.target.value })
               }
            />
            <TextField
               name="Tags"
               variant="outlined"
               label="Tags"
               fullWidth
               value={postData.tags}
               onChange={(e) =>
                  setPostData({
                     ...postData,
                     tags: e.target.value.split(","),
                  })
               }
            />
            <div className={classes.fileInput}>
               <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                     setPostData({ ...postData, selectedFile: base64 })
                  }
               />
            </div>
            <Button
               className={classes.buttonSubmit}
               variant="contained"
               color="primary"
               size="large"
               type="submit"
               fullWidth
            >
               Submit
            </Button>
            <Button
               variant="contained"
               color="secondary"
               size="small"
               fullWidth
               onClick={clear}
            >
               Clear
            </Button>
         </form>
      </FormStyled>
   );
};

export default Index;
