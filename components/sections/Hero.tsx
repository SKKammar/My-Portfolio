import { Button } from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <p className="mb-4 font-sans text-gold">
                    Software Engineer
                </p>

                <h1 className="font-display text-3xl text-white">
                    Building Elegant
                    <br />
                    Digital Experiences
                </h1>

                <p className="mx-auto mt-6 max-w-xl font-sans text-white/70">
                    Passionate about creating beautiful, scalable and meaningful web
                    applications.
                </p>

                <div className="mt-10">
                    <Button>View Projects</Button>
                </div>
            </div>
        </section>
    );
}