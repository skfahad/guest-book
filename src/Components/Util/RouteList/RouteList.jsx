import ScrollToTop from "../ScrollToTop/ScrollToTop";
import {Route, Switch} from "react-router-dom";
import {AUTH, USER, ADMIN} from "../../../helper/routes";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

//Pages
import Login from '../../../Pages/Login';
import Index from '../../../Pages/Index';
import GuestList from '../../../Pages/GuestList';

const RouteList = () => {

    return (
        <>
            <ScrollToTop />

            <Switch>

                <Route path={AUTH.login} exact component={Login} />

                <Route path={USER.create} exact component={Index} />

                <ProtectedRoute path={ADMIN.show} exact component={GuestList} />

                <Route path='*' exact>
                    Nothing Found
                </Route>
            </Switch>
        </>
    );
}

export default RouteList;