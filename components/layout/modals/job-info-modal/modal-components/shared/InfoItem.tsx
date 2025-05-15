import CardText from '@/components/ui/typography/CardText'
import { cn } from '@/lib/utils'

interface InfoItemProps {
  label: string
  children: React.ReactNode
  className?: string
}

export default function InfoItem({
  label,
  children,
  className,
}: InfoItemProps) {
  return (
    <CardText status='default' className={cn('capitalize flex items-center gap-2', className)}>
      <strong>{label}:</strong> {children}
    </CardText>
  )
}
