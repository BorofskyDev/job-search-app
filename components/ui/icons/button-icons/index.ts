import { CancelIcon } from './CancelIcon'
import { DeleteIcon } from './DeleteIcon'
import { LinkIcon } from './LinkIcon'
import { PlusIcon } from './PlusIcon'
import { PopupIcon } from './PopupIcon'
import { SaveIcon } from './SaveIcon'
import { UploadIcon } from './UploadIcon'

export const buttonIcons = {
    delete: DeleteIcon,
    save: SaveIcon,
    cancel: CancelIcon,
    link: LinkIcon,
    modal: PopupIcon,
    add: PlusIcon,
    upload: UploadIcon,
} as const

export type IconVariant = keyof typeof buttonIcons