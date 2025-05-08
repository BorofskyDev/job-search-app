import { HighPriorityIcon } from "./HighPriorityIcon";
import { LowPriorityIcon } from "./LowPriorityIcon";
import { MediumPriorityIcon } from "./MediumPriorityIcon";

export const PriorityIcons = {
    high: HighPriorityIcon,
    medium: MediumPriorityIcon,
    low: LowPriorityIcon,
    default: MediumPriorityIcon,
}

export type PriorityIconVariant = keyof typeof PriorityIcons