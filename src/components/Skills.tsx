import Section from "@/components/Section";

type SkillCategory = {
    category: string;
    skills: string[];
};

const skillCategories: SkillCategory[] = [
    {
        category: "IT Operations",
        skills: [
            "Linux",
            "Networking",
            "Troubleshooting",
            "Hardware",
        ],
    },
    {
        category: "DevOps & Infrastructure",
        skills: [
            "Docker",
            "Kubernetes",
            "MicroK8s",
            "Git",
            "systemd",
        ],
    },
    {
        category: "Cloud & AI",
        skills: [
            "Microsoft Azure",
            "AI Engineering",
            "MCP",
        ],
    },
    {
        category: "Development",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
        ],
    },
];

export default function Skills() {
    return (
        <Section
            id="skills"
            eyebrow="Technical Toolkit"
            title="Skills"
        >
            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {skillCategories.map((skillCategory) => (
                    <div
                        key={skillCategory.category}
                        className="rounded-xl border bg-card p-6 text-card-foreground"
                    >
                        <h3 className="text-lg font-semibold tracking-tight">
                            {skillCategory.category}
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {skillCategory.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
