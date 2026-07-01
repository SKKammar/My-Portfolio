export function Button({
                           children,
                           onClick,
                           type = 'button',
                           disabled = false,
                           className = '',
                       }: {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit';
    disabled?: boolean;
    className?: string;
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`border border-ink-border py-2 px-4 font-sans text-xs text-paper hover:bg-ink-card transition disabled:opacity-50 ${className}`}
        >
            {children}
        </button>
    );
}