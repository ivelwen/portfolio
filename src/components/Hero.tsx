export default function Hero() {
    return (
        <section className="min-h-screen px-6 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Levi Wheaton</h1>
                <p className="mt-6 text-lg font-medium sm:text-xl">IT Operations | DevOps | AI Engineering</p>
                <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg">I build and operate reliable technology systems while expanding my expertise in cloud infrastructure, DevOps, and AI engineering through hands-on projects and continuing education.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="#projects" className="rounded-lg border px-6 py-3 font-semibold transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2">View Projects</a>
                <a href="#contact" className="rounded-lg border px-6 py-3 font-semibold transition-colors hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2">Contact Me</a>
            </div>
        </section>
    );
}