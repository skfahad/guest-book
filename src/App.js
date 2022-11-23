import Layout from "./Components/Ui/Layout/Layout";
import RouteList from "./Components/Util/RouteList/RouteList";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";
import theme from "./helper/theme/theme";
import {Provider} from "react-redux";
import store from "./Store/store";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {authActions} from "./Store/Auth/slice";

function Main() {

    const dispatch = useDispatch();

    let isAuth = localStorage.getItem('auth');
    if (isAuth) {
        dispatch(authActions.setAuthenticated());
    }

    return (
        <Layout>
            <RouteList/>
        </Layout>
    );
}

function App() {

    return (
        <>
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <BrowserRouter>
                        <Main />
                    </BrowserRouter>
                </MuiThemeProvider>
            </Provider>
        </>
    );
}

export default App;
