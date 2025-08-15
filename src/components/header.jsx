function Header({ search, setSearch }) {
return (
    <div
        className="w-full p-4 rounded-md shadow-md header"
    >
        <div className="container mx-auto flex items-center justify-between">
            <div className="text-white font-bold text-xl tracking-wider w-full h-12 md:w-4/5">
                <img className="h-full" src="src/components/logo.png" alt="" />
            </div>

            {/* Search input */}
            <div className="relative">
                <i className="absolute top-3 left-3 fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-gray-300 rounded-lg pl-9 py-2 w-60 md:w-80 max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    </div>
);
}

export default Header;
