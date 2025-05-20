import { useTranslations } from "next-intl";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import Link from "next/link";
import { LINKEDIN_URL } from "@/lib/constants";

import PageLayout from "../page-layout";
import meImage from "@/images/about/me4.jpg";
import Title from "../title";

const OurFounders: React.FC = () => {
    const t = useTranslations("About");

    return (
        <PageLayout className="grid gap-18">
            <Title
                title={t("ourFounders")}
                className="font-bold text-start font-italiana text-primary mx-auto"
            />
            <Carousel className="w-full mx-auto max-w-5xl">
                <CarouselContent>
                    {Array.from({ length: 1 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="flex flex-col flex-1 max-w-xl gap-4 mx-auto">
                                <p className="text-justify">{t('foundersQuote1')}</p>
                                <p className="text-justify">{t('foundersQuote2')}</p>
                                <div className="flex items-center gap-4 justify-end pt-6">
                                    <div className="grid text-end">
                                        <Link href={LINKEDIN_URL} target="_blank" className="text-base hover:text-primary">
                                            {t('anushChakhoyan')}
                                        </Link>
                                        <p className="text-xs">{t('coFounder')}</p>
                                    </div>
                                    <Image
                                        src={meImage}
                                        alt="Profile picture"
                                        className="w-16 h-16 object-cover rounded-full"
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </PageLayout>
    )
}

export default OurFounders;
