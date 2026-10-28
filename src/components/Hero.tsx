import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="min-h-screen px-6 flex flex-col items-center justify-center text-center">
            <p className="mb-4 font-mono text-sm font-medium uppercase tracking-[0.18em] text-primary">
                IT Operations | DevOps | AI Engineering
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Levi Wheaton
            </h1>

            <h2 className="mt-6 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                Building reliable systems.
                <span className="block text-muted-foreground">
                    Engineering what comes next.
                </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 sm:text-lg">
                I build and operate reliable technology systems while expanding my expertise in cloud infrastructure, DevOps, and AI engineering through hands-on projects and continuing education.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    href="#projects"
                    className={buttonVariants({ variant: "default", size: "lg" })}
                >
                    View Projects
                </a>

                <a
                    href="#contact"
                    className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}