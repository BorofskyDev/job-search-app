import { CancelIcon } from './CancelIcon'
import { DeleteIcon } from './DeleteIcon'
import { LinkIcon } from './LinkIcon'
import { PopupIcon } from './PopupIcon'
import { SaveIcon } from './SaveIcon'

export const buttonIcons = {
    delete: DeleteIcon,
    save: SaveIcon,
    cancel: CancelIcon,
    link: LinkIcon,
    modal: PopupIcon,

} as const

export type IconVariant = keyof typeof buttonIcons