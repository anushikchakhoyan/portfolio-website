import { SERVICES_CATEGORY } from "@/lib/constants";
import { Info, Service } from "@/lib/types";
import { useTranslations } from "next-intl";

export default function useInfoData(type: Service) {
    const t = useTranslations("MentorshipPlan");

    const info: Record<Service, Info[]> = {
        [SERVICES_CATEGORY.website]: [],
        [SERVICES_CATEGORY.collaboration]: [],
        [SERVICES_CATEGORY.mentorship]: [
            {
                title: t('whatIsMentorshipTitle'),
            },
            {
                description: t('whatIsMentorshipDescription'),
            },
            {
                title: t('mentorshipProgramTitle'),
            },
            {
                description: t('mentorshipProgramDescription'),
            },
            {
                title: t('whoCanParticipateTitle'),
                items: t.raw('whoCanParticipateItems') as string[],
            },
            {
                title: t('goalsTitle'),
                items: t.raw('goalsItems') as string[],
            },
            {
                title: t('mentorshipProgramBenefitsTitle'),
                items: t.raw('mentorshipProgramBenefitsItems') as string[],
            },
        ],
    }

    return info[type];
};
