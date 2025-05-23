
type Props = {
  className?: string
}

export function UploadIcon({ className, ...props }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 50 50'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      {...props}
    >
      <path d='M 7 2 L 7 48 L 36 48 L 36 46 L 9 46 L 9 4 L 28 4 L 28 16.984375 L 41 16.984375 L 41 27.199219 L 43 29.679688 L 43 15.601562 L 42.757812 15.359375 A 1.0001 1.0001 0 0 0 42.601562 15.203125 A 1.0001 1.0001 0 0 0 42.587891 15.191406 L 29.398438 2 L 7 2 z M 30 5.3984375 L 39.585938 14.984375 L 30 14.984375 L 30 5.3984375 z M 13 22 L 13 24 L 33 24 L 33 22 L 13 22 z M 13 28 L 13 30 L 29 30 L 29 28 L 13 28 z M 41.496094 31 L 33 41 L 38 41 L 38 50 L 45 50 L 45 41 L 50 41 L 41.496094 31 z M 13 34 L 13 36 L 33 36 L 33 34 L 13 34 z M 41.496094 34 L 45.601562 39 L 43 39 L 43 48 L 40 48 L 40 39 L 37.398438 39 L 41.496094 34 z' />
    </svg>
  )
}
