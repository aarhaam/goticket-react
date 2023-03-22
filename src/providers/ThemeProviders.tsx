import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#161629'
        },
        secondary: {
            main: '#f3f4f6'
        },
        info: {
            main: '#1FBAD6'
        },
        warning: {
            main: '#FEDE00'
        },
        error: {
            main: '#FF0000'
        }
    },
    typography: {
        fontFamily: [
            'koulen',
            'roboto'
        ].join(',')
    }
})

const ThemeProviders = (props: any) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default ThemeProviders