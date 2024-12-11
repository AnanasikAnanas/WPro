function NavLink ({text}) {
    return(
        <a href="#" className="px-4 py-2 hover:underline decoration-2">{text}</a>
    )
}

export default function Header(){
    return(
        <header className="h-24 flex items-center container justify-around">
            <a href="#" className="font-extrabold text-5xl">WPro</a>
            <nav className="flex gap-8 items-center font-medium text-3xl">
                <NavLink text={"Products"}/>
                <NavLink text={"About products"}/>
                <NavLink text={"FUQ"}/>
                <NavLink text={"Feedback"}/>
            </nav>
        </header>
    )
}