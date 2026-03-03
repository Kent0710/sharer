import AuthBlock from "../auth/auth-block";
import CreateNewSpaceDialog from "../spaces/create-new-space-dialog";
import { Button } from "../ui/button";

const AppHeader = () => {


    return (
        <div className="flex items-center justify-between px-12 py-8">
            <div className="flex gap-20 items-center">
                <p className="text-lg font-semibold">sharer</p>
                <ul className="flex gap-10">
                    <li>
                        <CreateNewSpaceDialog />
                    </li>
                </ul>
            </div>
            <AuthBlock />
        </div>
    );
};

export default AppHeader;
