import AuthBlock from "../auth/auth-block";

const AppHeader = () => {
    return (
        <div className="flex items-center justify-between px-12 py-8">
            <p className="text-lg font-semibold">sharer</p>
            <AuthBlock />
        </div>
    )
};

export default AppHeader;