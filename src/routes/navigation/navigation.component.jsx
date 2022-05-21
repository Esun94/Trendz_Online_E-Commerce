import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"
import { UserContext } from "../../components/contexts/user.context";
import { ReactComponent as ShoeLogo } from '../../assets/shoe.svg'
import { signOutUser } from "../../utils/firebase utils/firebase.utils";
import './navigation.styles.scss'


const Navigation = () => {
    //useContext to pass signed in user props, sign-in --> signed-in ;
    const { currentUser, setCurrentUser } = useContext(UserContext);
    // console.log(currentUser);

    const signOutHandler = async () => {
        const res = await signOutUser();
        console.log(res)
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <ShoeLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            Sign-In
                        </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}


export default Navigation;