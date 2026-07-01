export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-10 py-6">
            <h1 className="font-display text-xl text-gold">
                Portfolio
            </h1>

            <div className="flex gap-8 font-sans text-sm text-white">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}