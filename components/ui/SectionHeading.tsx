import React from "react";

export function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="font-sans text-xs text-fog uppercase tracking-[0.2em] mb-6">
            {children}
        </h2>
    );
}