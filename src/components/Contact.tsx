import Section from "@/components/Section";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <Section
            id="contact"
            eyebrow="Get in Touch"
            title="Contact"
        >
            <p className="mt-6 text-lg leading-8">
                I&apos;m always interested in discussing IT operations, DevOps, AI
                engineering, and new opportunities.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                    href="mailto:levi.wheaton@outlook.com"
                    className={buttonVariants({ variant: "default", size: "lg" })}
                >
                    Email Me
                </a>
                <a
                    href="https://github.com/ivelwen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                    GitHub
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <a
                    href="https://www.linkedin.com/in/levi-wheaton-532374438"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                    LinkedIn
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
            </div>
        </Section>
    );
}
