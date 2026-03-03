import React from "react";

interface SingleSpacePageProps {
    params: Promise<{
        spaceId: string;
    }>
}
const SingleSpacePage : React.FC<SingleSpacePageProps> = async ({
    params
}) => {
    const spaceId = (await params).spaceId;

    return (
        <React.Fragment>
            
        </React.Fragment>
    )
};

export default SingleSpacePage;