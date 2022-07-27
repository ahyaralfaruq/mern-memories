import { styled } from "@mui/material/styles";

const PREFIX = "Form-style";

const classes = {
   root: `${PREFIX}-root`,
   paper: `${PREFIX}-paper`,
   form: `${PREFIX}-form`,
   fileInput: `${PREFIX}-fileInput`,
   buttonSubmit: `${PREFIX}-buttonSubmit`,
};

const FormStyled = styled("div")(({ theme }) => ({
   [`& .${classes.root}`]: {
      "& .MuiTextField-root": {
         margin: theme.spacing(1),
      },
   },
   [`& .${classes.paper}`]: {
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
