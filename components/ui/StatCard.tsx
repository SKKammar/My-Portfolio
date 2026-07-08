import { Card } from '@/components/ui/Card';
import { useCountUp } from '@/lib/hooks';

type StatCardProps = {
    value?: string;
    countEnd?: number;
    countDecimals?: number;
    countSuffix?: string;
    label: string;
    sublabel?: string;
};

export function StatCard({ value, countEnd, countDecimals = 0, countSuffix = '', label, sublabel }: StatCardProps) {
    const { count, ref } = useCountUp(countEnd || 0, 2);

    const displayValue = countEnd !== undefined 
        ? `${(count / Math.pow(10, countDecimals)).toFixed(countDecimals)}${countSuffix}`
        : value;

    return (
        <Card className="flex flex-col justify-center p-6 transition-all duration-100 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-lg hover:bg-white/5">
            <div ref={ref} className="font-display text-2xl tracking-tight text-white md:text-3xl">
                {displayValue}
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
