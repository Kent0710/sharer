import YourSpaces from "@/components/spaces/your-spaces";
import SharesToYouSpaces from "@/components/spaces/shared-to-you-spaces";
import React from "react";

const HomePage = () => {
    return (
        <React.Fragment>
            <YourSpaces />
            <SharesToYouSpaces />
        </React.Fragment>
    );
};

export default HomePage;
