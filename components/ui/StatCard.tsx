import { Card } from '@/components/ui/Card';

type StatCardProps = {
    value: string;
    label: string;
    sublabel?: string;
};

export function StatCard({ value, label, sublabel }: StatCardProps) {
    return (
        <Card className="flex flex-col justify-center p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/5">
            <div className="font-display text-2xl tracking-tight text-white md:text-3xl">
                {value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
                {label}
            </div>
            {sublabel && (
                <div className="mt-1 text-xs text-neutral-500">
                    {sublabel}
                </div>
            )}
        </Card>
    );
}
