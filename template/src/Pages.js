import {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import Loader from './components/Loader/Loader';

const Home = lazy( () => import('./views/HomePage/HomePage') );
const LogIn  = lazy( () => import('./views/LogInPage/LogInPage') );
const SignUp = lazy( () => import('./views/SignUpPage/SignUpPage') );
const NotFound = lazy( () => import('./views/NotFoundPage/NotFoundPage') );



export default function Pages(props){
  return(
    <Suspense fallback={<Loader />}>
      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route path="/log-in" component={LogIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="*" component={NotFound} />

      </Switch>
    </Suspense>
  )
}