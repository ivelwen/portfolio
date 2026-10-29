import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

type Project = {
    category: string;
    title: string;
    description: string;
    technologies: string[];
    href?: string;
};

const projects: Project[] = [
    {
        category: "Infrastructure",
        title: "Kubernetes Home Lab",
        description:
           "Built and operate a self-hosted Kubernetes home lab using MicroK8s on Ubuntu Server.",
        technologies: [
           "Ubuntu Server",
           "MicroK8s",
           "Kubernetes",
           "Docker",
           "Calico",
           "AdGuard Home",
           "systemd",
        ],
        href: "/projects/home-lab",
    },
    {
        category: "Software Engineering",
        title: "Developer Portfolio",
        description:
            "Designed and built a personal portfolio using Next.js, React, TypeScript, and Tailwind CSS with a focus on responsive design and reusable components.",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Git",
        ],
    },
];


export default function Projects() {
    return (
        <Section
            id="projects"
            eyebrow="Selected Work"
            title="Projects"
        >
            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        category={project.category}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        href={project.href}
                    />
                ))}
            </div>
        </Section>
    );
}
