import { styled } from "@mui/material/styles";

const PREFIX = "App";

const classes = {
   appBar: `${PREFIX}-appBar`,
   heading: `${PREFIX}-heading`,
   image: `${PREFIX}-image`,
   mainContainer: `${PREFIX}-mainContainer`,
};

export const AppStyled = styled()(({ theme }) => ({
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
