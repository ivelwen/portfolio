import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
    category: string;
    title: string;
    description: string;
    technologies: string[];
    href?: string;
};

export default function ProjectCard({
    category,
    title,
    description,
    technologies,
    href,
}: ProjectCardProps) {
    return (
        <article className="group flex h-full flex-col rounded-xl border bg-card p-6 text-card-foreground transition-all hover:border-primary/40 hover:shadow-lg">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-primary">
                {category}
            </p>
            <h3 className="text-2xl font-semibold">{title}</h3>

            <p className="mt-4 leading-7">{description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                        {technology}
                    </span>
                ))}
            </div>

            {href && (
                <Link
                    href={href}
                    className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                    View Project
                    <ArrowUpRight
                        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                    />
                </Link>
            )}
        </article>
    );
}
