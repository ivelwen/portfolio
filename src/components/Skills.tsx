type SkillCategory = {
    category: string;
    skills: string[];
};

const skillCategories: SkillCategory[] = [
    {
        category: "IT Operations",
        skills: [ "Linux", "Networking", "Troubleshooting", "Hardware", 
        ],
    },
  {
        category: "DevOps & Infrastructure",
        skills: [ "Docker", "Kubernetes", "MicroK8s", "Git", "systemd",
        ],
  },
   {
        category: "Cloud & AI", 
        skills: [ "Microsoft Azure", "AI Engineering", "MCP",
        ],
   },
  {
        category: "Development", 
        skills: [ "React", "Next.js", "TypeScript", "Tailwind CSS",
        ],
  },
];

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-16 px-6 py-24">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold">Skills</h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {skillCategories.map((skillCategory) => (
                        <div key={skillCategory.category} className="rounded-xl border p-6">
                            <h3 className="text-xl font-semibold">
                                {skillCategory.category}
                            </h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {skillCategory.skills.map((skill) => (
                                    <span key={skill} className="rounded-full border px-3 py-1 text-sm">
                                        {skill}
                                    </span>
                                ))};
                            </div>
                        </div>
                    ))}        
                </div>
            </div>
        </section>
    );
}