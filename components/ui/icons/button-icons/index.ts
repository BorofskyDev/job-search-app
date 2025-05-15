import { CancelIcon } from './CancelIcon'
import { DeleteIcon } from './DeleteIcon'
import { EditIcon } from './EditIcon'
import { LinkIcon } from './LinkIcon'
import { PlusIcon } from './PlusIcon'
import { PopupIcon } from './PopupIcon'
import { SaveIcon } from './SaveIcon'
import { UploadIcon } from './UploadIcon'

export const buttonIcons = {
    cancel: CancelIcon,
    delete: DeleteIcon,
    edit: EditIcon,
    link: LinkIcon,
    add: PlusIcon,
    modal: PopupIcon,
    save: SaveIcon,
    upload: UploadIcon,
} as const

export type IconVariant = keyof typeof buttonIcons