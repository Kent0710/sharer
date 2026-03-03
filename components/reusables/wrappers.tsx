interface WrapperProps {
    children: React.ReactNode;
    title: string;
    description: string;
}

export const SectionWrapper: React.FC<WrapperProps> = ({
    children,
    title,
    description,
}) => {
    return (
        <div className="px-8 py-4">
            <h2 className="text-xl font-medium"> {title} </h2>
            <p className="text-muted-foreground">{description}</p>
            <main className="mt-4">{children}</main>
        </div>
    );
};
