// lib/styles/jobStatusStyles.ts
export type BodyStyle =
  | 'default'
  | 'denied'
  | 'interview'
  | 'ghosted'
  | 'offer'
  | 'hired'
  | 'prospect'

export const jobStatusTextColorMap: Record<BodyStyle, string> = {
  default: 'text-slate-950',
  denied: 'text-red-950',
  interview: 'text-blue-950',
  ghosted: 'text-orange-950',
  offer: 'text-purple-950',
  hired: 'text-green-950',
  prospect: 'text-yellow-950',
}

export const bgMap: Record<BodyStyle, string> = {
  denied: 'bg-red-200 hover:bg-red-100',
  interview: 'bg-blue-200 hover:bg-blue-100',
  ghosted: 'bg-orange-200 hover:bg-orange-100',
  offer: 'bg-purple-200 hover:bg-purple-100',
  hired: 'bg-green-200 hover:bg-green-100',
  prospect: 'bg-yellow-200 hover:bg-yellow-100',
  default: 'bg-slate-200 hover:bg-slate-50',
}