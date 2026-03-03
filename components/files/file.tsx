import { Download, Eye } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface FileProps {
    name: string;
    type: string;
    size: string;
    shared_by: string;
    shared_datetime: string;
}
const File: React.FC<FileProps> = ({ name, type, size, shared_by, shared_datetime }) => {
    return (
        <li>
            <div className="px-4 py-2 border rounded-lg w-full flex items-center justify-between">
                <section>
                    <Badge>
                        {type} - {size}
                    </Badge>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-sm text-muted-foreground">
                        Shared by: {shared_by} on {shared_datetime}
                    </p>
                </section>
                <section className="flex h-full gap-2 ">
                    <Button variant={"outline"}>
                        <Eye /> View
                    </Button>
                    <Button variant={"outline"}>
                        <Download /> Download
                    </Button>
                </section>
            </div>
        </li>
    );
};

export default File;
