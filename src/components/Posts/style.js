import { styled } from "@mui/material/styles";

const PREFIX = "Posts-style";

const classes = {
   mainContainer: `${PREFIX}-mainContainer`,
   smMargin: `${PREFIX}-smMargin`,
   actionDiv: `${PREFIX}-actionDiv`,
};

const PostsStyled = styled("div")(({ theme }) => ({
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
