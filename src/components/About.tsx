import Section from "@/components/Section";

export default function About() {
    return (
        <Section
            id="about"
            eyebrow="Background"
            title="About Me"
        >
            <div className="mt-6 space-y-5 text-lg leading-8">
                <p>
                    My background is rooted in operations, technical problem-solving,
                    and leadership, with experience managing teams, complex equipment,
                    vendors, and business-critical systems. I now bring that operational
                    mindset to IT, where I focus on building reliable infrastructure and
                    understanding the systems I deploy from the ground up.
                </p>

                <p>
                    Through hands-on projects and continued technical training, I am developing
                    deeper expertise in Linux, networking, containers, Kubernetes,
                    cloud technologies, software development, and AI engineering. My home
                    lab serves as a practical environment where I can design, deploy, troubleshoot,
                    secure, and operate real systems rather than learning concepts only in isolation.
                </p>

                <p>
                    I am especially interested in the intersection of IT operations, DevOps, and
                    AI engineering—using strong operational fundamentals alongside automation
                    and modern infrastructure to build systems that are reliable, scalable, and useful.
                </p>
            </div>
        </Section>
    );
}
