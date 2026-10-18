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
        <Section id="certifications" title="Certifications">
            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {certifications.map((certification) => (
                    <article key={certification.name} className="rounded-xl border p-6">
                     <h3 className="text-xl font-semibold"> {certification.name}</h3>
                     <p className="mt-2"> {certification.issuer}</p>
                     </article>
                ))}
            </div>
        </Section>
    );
}