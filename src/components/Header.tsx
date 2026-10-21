"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-xl font-bold">
                    LW
                </Link>

                <button
                    type="button"
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {isMenuOpen ? "Close" : "Menu"}
                </button>

                <div className="hidden gap-6 md:flex">
                    <Link href="/#about" className="hover:underline">
                        About
                    </Link>
                    <Link href="/#projects" className="hover:underline">
                        Projects
                    </Link>
                    <Link href="/#skills" className="hover:underline">
                        Skills
                    </Link>
                    <Link href="/#certifications" className="hover:underline">
                        Certifications
                    </Link>
                    <Link href="/#contact" className="hover:underline">
                        Contact
                    </Link>
                </div>
            </nav>

            {isMenuOpen && (
                <nav
                    id="mobile-navigation"
                    className="border-t px-6 py-4 md:hidden"
                    aria-label="Mobile navigation"
                >
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/#about"
                            className="hover:underline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>

                        <Link
                            href="/#projects"
                            className="hover:underline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>

                        <Link
                            href="/#skills"
                            className="hover:underline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Skills
                        </Link>

                        <Link
                            href="/#certifications"
                            className="hover:underline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Certifications
                        </Link>

                        <Link
                            href="/#contact"
                            className="hover:underline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}
