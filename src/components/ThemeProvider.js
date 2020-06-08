import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Branding } from "../branding";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: Branding.colors.green2,
            main: Branding.colors.green4
        },
        secondary: {
            main: Branding.colors.orange2,
        },
    },
});


export default function ThemeProvider(props) {
    return (
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    );
}