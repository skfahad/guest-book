import ScrollToTop from "../ScrollToTop/ScrollToTop";
import {Route, Switch} from "react-router-dom";
import {AUTH, USER, ADMIN} from "../../../helper/routes";

//Pages
import Login from '../../../Pages/Login';
import CreateGuest from '../../../Pages/CreateGuest';

const RouteList = () => {

    return (
        <>
            <ScrollToTop />

            <Switch>

                <Route path={AUTH.login} exact component={Login} />

                <Route path={USER.create} exact component={CreateGuest} />

                <Route path='*' exact>
                    Nothing Found
                </Route>
            </Switch>
        </>
    );
}

export default RouteList;