const technologies = [
    "Ubuntu Server",
    "Microk8s",
    "Kubernetes",
    "Docker",
    "Calico",
    "AdGuard Home",
    "systemd"
];

export default function Projects() {
    return (
        <section id="projects" className="px-6 py-24">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold">Projects</h2>

            <article className="mt-8">
                <h3 className="text-2xl font-semibold">Kubernetes Home Lab</h3>
                <p className="mt-4 leading-7">Built and operate a self-hosted Kubernetes home lab using Microk8s on Ubuntu Server that is running on a salvaged HP laptop that no longer had Windows support.  The environment provides a platform for containerized services, infrastructure experimentation, networking, monitoring, and DevOps automation.</p>
            <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span key={technology} className="rounded-full border px-3 py-1 text-sm">
                        {technology}
                    </span>
                ))}
            </div>
            </article>
            </div>
        </section>
    );
}