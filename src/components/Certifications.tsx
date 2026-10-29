import Section from "@/components/Section";

type Certification = {
    name: string;
    issuer: string;
};

const certifications: Certification[] = [
    {
        name: "Microsoft Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
    },
    {
        name: "Microsoft Azure AI Fundamentals (AI-901)",
        issuer: "Microsoft",
    },
    {
        name: "CompTIA A+",
        issuer: "CompTIA",
    },
    {
        name: "CompTIA Network+",
        issuer: "CompTIA",
    },
    {
        name: "CompTIA CISO",
        issuer: "CompTIA",
    },
];

export default function Certifications() {
    return (
        <Section
            id="certifications"
            eyebrow="Credentials"
            title="Certifications"
        >
            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {certifications.map((certification) => (
                    <article
                        key={certification.name}
                        className="rounded-xl border bg-card px-6 py-5 text-card-foreground"
                    >
                        <p className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-primary">
                            {certification.issuer}
                        </p>

                        <h3 className="text-lg font-semibold tracking-tight">
                            {certification.name}
                        </h3>
                    </article>
                ))}
            </div>
        </Section>
    );
}
