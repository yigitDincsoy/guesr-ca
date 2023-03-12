import {Link} from 'react-router-dom'

function Navigation()
{
    return(
        <div className="navbar">
            <Link className="navlink" to="/">Popular</Link>
            <Link className="navlink" to="/politics">Politics</Link>
            <Link className="navlink" to="/economy">Economy</Link>
            <Link className="navlink" to="/sports">Sports</Link>
            <Link className="navlink" to="/news">News</Link>
            <Link className="navlink" to="/gossip">Gossip</Link>
            <Link className="navlink" to="/tech">Technology</Link>
            <Link className="navlink" to="/all">All</Link>
            <Link className="navlink" to="/submit">Submit Your Question</Link>
            <Link className="navlink" to="/market">Market</Link>
        </div>
    )
}

export default Navigation