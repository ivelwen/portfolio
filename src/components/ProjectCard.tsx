type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    };

export default function ProjectCard({
    title,
    description,
    technologies,
}: ProjectCardProps) {
    return (
        <article className="rounded-xl border p-6 transition-all hover:border-gray-500 hover:shadow-lg">
            <h3 className="text-2xl font-semibold">{title}</h3>

            <p className="mt-4 leading-7">{description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span key={technology} className="rounded-full border px-3 py-1 text-sm">
                        {technology}
                    </span>
            ))}
        </div>
    </article>
    );
}