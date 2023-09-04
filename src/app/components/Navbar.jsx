import Link from "next/link";

const Navbar = () => {

    const routes = [
        { "title": "New Post", "slug": "new" },
        // { "title": "404", "slug": "random-route" },
    ]

    return (
        <div className=" bg-slate-700 px-4">
            <nav className="flex place-content-between place-items-center text-slate-200 container mx-auto mb-5 py-4">
                <div id="logo" className="hover:text-slate-500 text-2xl font-bold">
                    <Link href={'/'}>
                        <h1>Next CRUD</h1>
                    </Link>
                </div>

                <ul className="flex gap-3" role="list">
                    {routes.map((route) => (
                        <li key={route.index} className="hover:text-slate-500">
                            <Link href={`/${route.slug}`}>{route.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
