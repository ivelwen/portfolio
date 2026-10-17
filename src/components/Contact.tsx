import Section from "@/components/Section";

export default function Contact() {
    return (
        <Section id="contact" title="Contact">
        <p className="mt-6 text-lg leading-8">I am always interested in discussing IT operations, DevOps, AI engineering, and new opportunities.</p>
        <div className="mt-8 flex flex-wrap gap-6">
            <a href="mailto:levi.wheaton@outlook.com" className="font-semibold underline underline-offset-4">Email Me</a>
            <a href="https://github.com/ivelwen" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">GitHub</a>
            <a href="https://www.linkedin.com/in/levi-wheaton-532374438" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">LinkedIn</a>

        </div>
        </Section>
    );
}