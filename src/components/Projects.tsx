import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

type Project = {
    title: string;
    description: string;
    technologies: string[];
};

const projects: Project[] = [
    {
    title: "Kubernetes Home Lab",
    description: "Built and operate a self-hosted Kubernetes home lab using MicroK8s on Ubuntu Server.",
    technologies: [
          "Ubuntu Server",
          "MicroK8s",
          "Kubernetes",
          "Docker",
          "Calico",
          "AdGuard Home",
          "systemd",
        ],
    },
    {
        title: "Developer Portfolio",
        description: "Designed and built a personal portolio using Next.js, React, Typescript, and Tailwind CSS with a focus on responsive design and reusable components.",
        technologies: [
            "Next.js",
            "React",
            "Typescript",
            "Tailwind CSS",
            "Git",
        ],
    },
];


export default function Projects() {
    return (
        <Section id="projects" title="Projects">
                <div className="mt-8 flex flex-col gap-6">
                  {projects.map((project) => (
                <ProjectCard key={project.title} title={project.title} description={project.description} technologies={project.technologies} />
               ))}
                </div>
        </Section>
            );
        }