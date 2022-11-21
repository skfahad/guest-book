import ScrollToTop from "../ScrollToTop/ScrollToTop";
import {Route, Switch} from "react-router-dom";

//Pages
import Login from '../../../Pages/Login';
import Index from '../../../Pages/Index';

const RouteList = () => {

    return (
        <>
            <ScrollToTop />

            <Switch>

                <Route exact path="/" component={Index}/>

                <Route path='/login' exact component={Login} />

                <Route path='*' exact>
                    Nothing Found
                </Route>
            </Switch>
        </>
    );
}

export default RouteList;