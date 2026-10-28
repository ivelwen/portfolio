"use client";
import { Menu, X } from "lucide-react";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="group flex items-center gap-3"
                    aria-label="Levi Wheaton home"
                >
                    <span className="flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        LW
                    </span>
                    <span className="hidden text-sm font-medium sm:block">
                        Levi Wheaton
                    </span>
                </Link>

                <button
                    type="button"
                    className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isMenuOpen ? (
                        <X className="size-4" aria-hidden="true" />
                    ) : (
                        <Menu className="size-4" aria-hidden="true" />
                    )}
                </button>

                <div className="hidden items-center gap-1 md:flex">
                    <Link href="/#about" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                        About
                    </Link>
                    <Link href="/#projects" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                        Projects
                    </Link>
                    <Link href="/#skills" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                        Skills
                    </Link>
                    <Link href="/#certifications" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                        Certifications
                    </Link>
                    <Link href="/#contact" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                        Contact
                    </Link>
                </div>
            </nav>

            {isMenuOpen && (
                <nav
                    id="mobile-navigation"
                    className="border-t bg-background/95 px-6 py-4 backdrop-blur md:hidden"
                    aria-label="Mobile navigation"
                >
                    <div className="mx-auto flex max-w-6xl flex-col gap-1">
                        <Link
                            href="/#about"
                            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>

                        <Link
                            href="/#projects"
                            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>

                        <Link
                            href="/#skills"
                            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Skills
                        </Link>

                        <Link
                            href="/#certifications"
                            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Certifications
                        </Link>

                        <Link
                            href="/#contact"
                            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
