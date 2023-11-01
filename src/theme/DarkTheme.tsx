import { createTheme } from "@mui/material";




export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#e91e63",
        },
        secondary: {
            main: "#5A20CB"
        },
        background: {
            default: "#0D0D0D",
            paper: "#0D0D0D"
        },
    },
    typography:{
        fontFamily:"Nunito"
    },
    components:{
        MuiMenu:{
            styleOverrides:{
                list:{
                    '&[role="menu"]':{
                        backgroundColor:  "#e91e63",
                    }
                }
            }
        }
    }
})