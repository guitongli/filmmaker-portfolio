
import {HashLink as Link} from 'react-router-hash-link'
import {HashRouter} from 'hash-router-react';

export default function Nav (){
return(
    <div>
       <h2>Jan Ost</h2> 
        <h1>this stays above.</h1>
        <HashRouter>
        <Link to ='#sec-1'>Home</Link>
        <Link to ='#sec-2'>Portfolio</Link>
        <Link to ='#sec-3'>Contact</Link>
        </HashRouter>
    </div>
)
}