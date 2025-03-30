import Image from "next/image";
import { useTranslations } from "next-intl";

import coverImage from "@/images/contact-cover.jpg";
import Title from "../title";

const ContactHeader = () => {
    const t = useTranslations("Header");

    return (
        <div className="gap-4 flex flex-col-reverse md:flex-row relative min-h-96">
            <div className="w-full lg:w-1/2 px-0 md:px-5 flex items-center justify-center">
                <Title title={t("getInTouch")} className="md:text-5xl text-primary uppercase" />
            </div>
            <div className="bg-primary/80 w-3/4 lg:w-1/2 h-96 rounded-t-full absolute -z-10 -top-[150px] -right-[20px] transform rotate-180" />
            <div className="w-full lg:w-1/2 px-0 md:px-5 hidden lg:block">
                <div className="w-full lg:w-3/4 xl:w-2/3 h-full rounded-t-full overflow-hidden">
                    <Image
                        src={coverImage}
                        alt={t("getInTouch")}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
};

export default ContactHeader;
