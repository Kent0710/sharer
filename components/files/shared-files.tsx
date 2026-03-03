import { SectionWrapper } from "../reusables/wrappers";
import File from "./file";

const SharedFiles = () => {
    const sampleFiles = [
        {
            id: "1",
            name: "Project Plan.pdf",
            type: "PDF",
            size: "2 MB",
            shared_by: "Alice",
            shared_datetime: 'Jan 5 2025 | 11:59 PM'
        },
    ];

    return (
        <SectionWrapper
            title="Shared Files"
            description="View shared files here."
        >
            <ul>
                {sampleFiles.map((file) => (
                    <File key={file.id} {...file} />
                ))}
            </ul>
        </SectionWrapper>
    );
};

export default SharedFiles;
