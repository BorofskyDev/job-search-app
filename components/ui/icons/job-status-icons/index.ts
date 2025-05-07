import { DefaultIcon } from "./DefaultIcon";
import { DeniedIcon } from "./DeniedIcon";
import { GhostedIcon } from "./GhostedIcon";
import { HiredIcon } from "./HiredIcon";
import { InterviewIcon } from "./InterviewIcon";
import { OfferIcon } from "./OfferIcon";
import { ProspectIcon } from "./ProspectIcon";

export const statusIcons = {
    default: DefaultIcon,
    denied: DeniedIcon,
    ghosted: GhostedIcon,
    hired: HiredIcon,
    interview: InterviewIcon,
    offer: OfferIcon,
    prospect: ProspectIcon,
}

export type StatusIconVariant = keyof typeof statusIcons