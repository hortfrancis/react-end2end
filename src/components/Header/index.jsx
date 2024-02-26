import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <main>
                <header>
                    <nav>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='shows'>Shows</NavLink>
                        <NavLink to='search'>Search</NavLink>
                    </nav>
                </header>

                <Outlet />
            </main>
        </>
    )
}
