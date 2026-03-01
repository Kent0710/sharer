import Space from "./space";
import SpacesWrapper from "./spaces-wrapper";

const SharesToYouSpaces = () => {
    const spaces = [
        {
            id: "abc123",
            name: "Space 1",
            description: "This is the first space",
            code: "ABC123",
            qrCode: "https://via.placeholder.com/150",
            expire: "Jan 14, 2025 | 12:00 PM",
        },
        {
            id: "def456",
            name: "Space 2",
            description: "This is the second space",
            code: "DEF456",
            qrCode: "https://via.placeholder.com/150",
            expire: "Jan 14, 2025 | 12:00 PM",
        },
        {
            id: "ghi789",
            name: "Space 3",
            description: "This is the third space",
            code: "GHI789",
            qrCode: "https://via.placeholder.com/150",
            expire: "Jan 14, 2025 | 12:00 PM",
        },
        {
            id: "abc123ds",
            name: "Space 4",
            description: "This is the first space",
            code: "ABC123",
            qrCode: "https://via.placeholder.com/150",
            expire: "Jan 14, 2025 | 12:00 PM",
        },
        {
            id: "def456dsa",
            name: "Space 5",
            description: "This is the second space",
            code: "DEF456",
            qrCode: "https://via.placeholder.com/150",
            expire: "Jan 14, 2025 | 12:00 PM",
        },
        {
            id: "ghi789dsadas",
            name: "Space 6",
            description: "This is the third space",
            code: "GHI789",
            qrCode: "https://via.placeholder.com/150",
            expire: "Jan 14, 2025 | 12:00 PM",
        },
    ];

    return (
        <SpacesWrapper
            title="Shared To You"
            description="View spaces shared to you by others."
        >
            <ul className="grid grid-cols-3 gap-4 mt-8">
                {spaces.map((space) => (
                    <Space key={space.id} {...space} />
                ))}
            </ul>
            <p className="mt-8 text-center underline underline-offset-4">
                {" "}
                View All{" "}
            </p>
        </SpacesWrapper>
    );
};

export default SharesToYouSpaces;
