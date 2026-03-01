import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import QRSAMPLE from '@/public/images/qrcode-sample.png'
import Image from "next/image";

interface SpaceProps {
    qrCode: string;
    code: string;
    id: string;
    name: string;
    description: string;
    expire: string;
}
const Space: React.FC<SpaceProps> = ({
    qrCode,
    code,
    id,
    name,
    description,
    expire,
}) => {
    return (
        <Link
            href={`/space/123`}
            className="flex items-start gap-4 hover:bg-neutral-200/50 p-4 rounded-lg transition-colors hover:cursor-pointer"
        >
            {/* QR Placeholder  */}
            <section>
                <Image 
                    src={QRSAMPLE}
                    alt={`${name} QR Code`}
                    width={150}
                    height={150}
                    className="h-[7rem] w-[7rem]"
                />
                <div className="text-center tracking-widest font-medium mt-1">
                    {" "}
                    {code}{" "}
                </div>
            </section>
            {/* Content  */}
            <section className="pt-4">
                <Badge className="mb-2">{expire}</Badge>
                <h3 className="text-lg"> {name} </h3>
                <p className="text-muted-foreground"> {description} </p>
            </section>
        </Link>
    );
};

export default Space;
