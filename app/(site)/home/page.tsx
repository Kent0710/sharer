import AppHeader from "@/components/reusables/app-header";
import YourSpaces from "@/components/spaces/your-spaces";
import SharesToYouSpaces from "@/components/spaces/shared-to-you-spaces";

const HomePage = () => {
    return (
        <div>
            <AppHeader />
            <main className="px-[8rem] flex flex-col gap-4 pb-[4rem]">
                <YourSpaces />
                <SharesToYouSpaces />
            </main>
        </div>
    );
};

export default HomePage;
