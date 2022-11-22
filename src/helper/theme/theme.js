import {alpha, createTheme, fade, responsiveFontSizes} from '@material-ui/core/styles';
import palette from "./palette";
import typography from "./typography";

let theme = createTheme({
    palette,
    breakpoints: {
        values: {
            //xxs: 399
            xs: 0,
            sm: 450,
            md: 768,//250
            lg: 992,
            xl: 1200,
        },
    },
    typography,
    spacing: 4,
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: '#FFF',
                    color: '#373f47',
                },
            },
        },
        MuiTextField: {
            root: {
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    //backgroundColor: '#FFF',
                    //color: 'green'
                },
            },
        }
    }
});

//theme = responsiveFontSizes(theme);

export default theme;
