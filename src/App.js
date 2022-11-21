import Layout from "./Components/Ui/Layout/Layout";
import RouteList from "./Components/Util/RouteList/RouteList";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";
import theme from "./helper/theme/theme";

function App() {
  return (
    <>
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Layout>
                    <RouteList />
                </Layout>
            </BrowserRouter>
        </MuiThemeProvider>
    </>
  );
}

export default App;
