import React from "react";

interface SpacesWrapperProps {
    children: React.ReactNode;
    title: string;
    description: string;
}
const SpacesWrapper: React.FC<SpacesWrapperProps> = ({ children, title, description, }) => {
    return (
        <div className="px-8 py-4">
            <h2 className="text-xl font-medium"> {title} </h2>
            <p className="text-muted-foreground">
                {description}
            </p>
            <main>
                {children}
            </main>
        </div>
    );
};

export default SpacesWrapper;
