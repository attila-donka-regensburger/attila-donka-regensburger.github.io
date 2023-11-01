import { children } from "react"

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                <p>Attila Donka</p>
                <p>Regensburger</p>
            </a>
            <ul>
                <CustomLink href="/about" >About</CustomLink>
                <CustomLink href="/resume" >Resume</CustomLink>
            </ul>
        </nav>
    )    
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>  
        </li>
    )
}