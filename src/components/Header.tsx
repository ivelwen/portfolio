import Link from "next/link";
export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-xl font-bold">
                    LW
                </Link>

                <div className="hidden gap-6 md:flex">
                    <a href="#about" className="hover:underline">
                        About
                    </a>
                    <a href="#projects" className="hover:underline">
                        Projects
                    </a>
                    <a href="#skills" className="hover:underline">
                        Skills
                    </a>
                    <a href="#certifications" className="hover:underline">Certifications</a>
                    <a href="#contact" className="hover:underline">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
}