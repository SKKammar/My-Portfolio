import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Contact() {
    return (
        <FadeIn>
            <section
                id="contact"
                className="mx-auto max-w-6xl px-6 py-32"
            >
                <SectionHeading>Contact</SectionHeading>

                <div className="grid gap-10 md:grid-cols-2">
                    <div>
                        <h3 className="mb-3 text-lg">Email</h3>

                        <a
                            href="mailto:your@email.com"
                            className="text-fog hover:text-paper transition"
                        >
                            your@email.com →
                        </a>
                    </div>

                    <div>
                        <h3 className="mb-3 text-lg">LinkedIn</h3>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-fog hover:text-paper transition"
                        >
                            linkedin.com →
                        </a>
                    </div>
                </div>
            </section>
        </FadeIn>
    );
}