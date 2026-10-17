import type { ReactNode } from "react";

type SectionProps = {
    id: string;
    title: string;
    children: ReactNode;
};
export default function Section({
    id,
    title,
    children,
}: SectionProps) {
    return (
        <section id={id} className="scroll-mt-16 px-6 py-24">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold">{title}</h2>

                {children}
            </div>
        </section>
    );
}