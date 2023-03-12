import {Link} from 'react-router-dom'

function Navigation()
{
    return(
        <div className="navbar">
             <Link className="navlink" to="/">Popular</Link>
            <Link className="navlink" to="/">Politics</Link>
            <Link className="navlink" to="/">Economy</Link>
            <Link className="navlink" to="/">Sports</Link>
            <Link className="navlink" to="/">News</Link>
            <Link className="navlink" to="/">Gossip</Link>
            <Link className="navlink" to="/">Technology</Link>
            <Link className="navlink" to="/">All</Link>
            <Link className="navlink" to="/">Submit Your Question</Link>
            <Link className="navlink" to="/">Market</Link>
        </div>
    )
}

export default Navigation