import React from "react";
import {
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Button,
   Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import moment from "moment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/posts";

const PREFIX = "post-style";

const classes = {
   media: `${PREFIX}-media`,
   border: `${PREFIX}-border`,
   fullHeightCard: `${PREFIX}-fullHeightCard`,
   card: `${PREFIX}-card`,
   overlay: `${PREFIX}-overlay`,
   overlay2: `${PREFIX}-overlay2`,
   grid: `${PREFIX}-grid`,
   details: `${PREFIX}-details`,
   title: `${PREFIX}-title`,
   cardActions: `${PREFIX}-cardActions`,
};

const PostStyled = styled(Card)(() => ({
   [`& .${classes.media}`]: {
      height: 0,
      paddingTop: "56.25%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backgroundBlendMode: "darken",
   },
   [`& .${classes.border}`]: {
      border: "solid",
   },
   [`& .${classes.fullHeightCard}`]: {
      height: "100%",
   },
   [`&.${classes.card}`]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "15px",
      height: "100%",
      position: "relative",
   },
   [`& .${classes.overlay}`]: {
      position: "absolute",
      top: "20px",
      left: "20px",
      color: "white",
   },
   [`& .${classes.overlay2}`]: {
      position: "absolute",
      top: "20px",
      right: "20px",
      color: "white",
   },
   [`& .${classes.grid}`]: {
      display: "flex",
   },
   [`& .${classes.details}`]: {
      display: "flex",
      justifyContent: "space-between",
      margin: "20px",
   },
   [`& .${classes.title}`]: {
      padding: "0 16px",
   },
   [`& .${classes.cardActions}`]: {
      padding: "0 16px 8px 16px",
      display: "flex",
      justifyContent: "space-between",
   },
}));

const Index = ({ post, setCurrentId }) => {
   const dispatch = useDispatch();

   return (
      <PostStyled className={classes.card}>
         <CardMedia
            className={classes.media}
            image={post.selectedFile}
            title={post.title}
         />
         <div className={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">
               {moment(post.createdAt).fromNow()}
            </Typography>
         </div>
         <div className={classes.overlay2}>
            <Button
               style={{ color: "white" }}
               size="small"
               onClick={() => setCurrentId(post._id)}
            >
               <MoreHorizIcon fontSize="medium" />
            </Button>
         </div>
         <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">
               {post.tags.map((tag) => `#${tag} `)}
            </Typography>
         </div>
         <Typography className={classes.title} variant="h5" gutterBottom>
            {post.title}
         </Typography>
         <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
               {post.message}
            </Typography>
         </CardContent>
         <CardActions className={classes.cardActions}>
            <Button
               size="small"
               color="primary"
               onClick={() => dispatch(likePost(post._id))}
            >
               <ThumbUpAltIcon fontSize="small" />
               &nbsp; Like &nbsp;
               {post.likeCount}
            </Button>
            <Button
               size="small"
               color="primary"
               onClick={() => dispatch(deletePost(post._id))}
            >
               <DeleteIcon fontSize="small" />
               &nbsp; Delete &nbsp;
            </Button>
         </CardActions>
      </PostStyled>
   );
};

export default Index;
