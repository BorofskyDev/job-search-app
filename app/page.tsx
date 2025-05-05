import { CancelIcon, DeleteIcon, LinkIcon, PopupIcon, SaveIcon } from "@/components/ui/icons";

export default function Home() {
  return (
    <div className='w-full h-full'>
      <button className='focused relative overflow-hidden group min-w-fit py-4 px-10 border-2 border-slate-950 rounded-lg shadow-xl bg-blue-700 text-xl lg:text-2xl font-bold text-yellow-100 cursor-pointer transition-transform duration-200 hover:scale-105'>
        <span className='absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-gradient-to-bl from-blue-950 via-blue-900 to-blue-800' />
        <span className='relative z-10 transition-all duration-200 hover:text-shadow-yellow-400'>
          Primary Button
        </span>
      </button>

      <button className='focused relative overflow-hidden group  py-2 px-12 border-2 border-slate-950 rounded-lg shadow-xl bg-sky-100 text-xl lg:text-2xl font-bold text-slate-950 cursor-pointer transition-transform duration-200 hover:scale-105'>
        <span
          aria-hidden
          className='absolute inset-0 z-0 transform translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition-transform duration-300 ease-in-out bg-[linear-gradient(115deg,theme(colors.sky.100)_0%,theme(colors.sky.200)_75%,theme(colors.sky.300)_75%,theme(colors.sky.400)_100%)]'
        />

        <span className='relative z-10 transition-all duration-200'>
          Secondary Button
        </span>
      </button>

      <button className='focused relative overflow-hidden group min-w-fit py-4 px-8 border-2 border-slate-950 rounded-lg shadow-xl bg-red-100 text-xl lg:text-2xl font-bold text-slate-950 cursor-pointer transition-transform duration-200 hover:scale-105'>
        <span
          aria-hidden
          className='absolute inset-0 z-0 transform translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition-transform duration-300 ease-in-out bg-[linear-gradient(115deg,theme(colors.red.100)_0%,theme(colors.red.200)_75%,theme(colors.red.300)_75%,theme(colors.red.400)_100%)]'
        />
      
        <p className='relative flex items-center gap-2 z-10 transition-all duration-200'>
          Delete
        <DeleteIcon className='h-6 lg:h-10 w-6 lg:w-10' />
        </p>
      </button>

      <button className='focused relative overflow-hidden group min-w-fit py-4 px-8 border-2 border-slate-950 rounded-lg shadow-xl bg-green-100 text-xl lg:text-2xl font-bold text-slate-950 cursor-pointer transition-transform duration-200 hover:scale-105'>
        <span
          aria-hidden
          className='absolute inset-0 z-0 transform translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition-transform duration-300 ease-in-out bg-[linear-gradient(115deg,theme(colors.green.100)_0%,theme(colors.green.200)_75%,theme(colors.green.300)_75%,theme(colors.green.400)_100%)]'
        />
      
        <p className='relative flex items-center gap-2 z-10 transition-all duration-200'>
          Save
        <SaveIcon className='h-6 lg:h-10 w-6 lg:w-10' />
        </p>
      </button>

      <button className='focused relative overflow-hidden group min-w-fit py-4 px-8 border-2 border-slate-950 rounded-lg shadow-xl bg-slate-100 text-xl lg:text-2xl font-bold text-slate-950 cursor-pointer transition-transform duration-200 hover:scale-105'>
        <span
          aria-hidden
          className='absolute inset-0 z-0 transform translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition-transform duration-300 ease-in-out bg-[linear-gradient(115deg,theme(colors.slate.100)_0%,theme(colors.slate.200)_75%,theme(colors.slate.300)_75%,theme(colors.slate.400)_100%)]'
        />
      
        <p className='relative flex items-center gap-2 z-10 transition-all duration-200'>
          Cancel
        <CancelIcon className='h-6 lg:h-10 w-6 lg:w-10' />
        </p>
      </button>

      <button className='focused relative overflow-hidden group min-w-fit py-4 px-8 border-2 border-slate-950 rounded-lg shadow-xl bg-fuchsia-100 text-xl lg:text-2xl font-bold text-slate-950 cursor-pointer transition-transform duration-200 hover:scale-105'>
        <span
          aria-hidden
          className='absolute inset-0 z-0 transform translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition-transform duration-300 ease-in-out bg-[linear-gradient(115deg,theme(colors.fuchsia.100)_0%,theme(colors.fuchsia.200)_75%,theme(colors.fuchsia.300)_75%,theme(colors.fuchsia.400)_100%)]'
        />
      
        <p className='relative flex items-center gap-2 z-10 transition-all duration-200'>
         Link 
        <LinkIcon className='h-6 lg:h-10 w-6 lg:w-10' />
        </p>
      </button>

      <button className='focused relative overflow-hidden group min-w-fit py-4 px-8 border-2 border-slate-950 rounded-lg shadow-xl bg-fuchsia-100 text-xl lg:text-2xl font-bold text-slate-950 cursor-pointer transition-transform duration-200 hover:scale-105'>
        <span
          aria-hidden
          className='absolute inset-0 z-0 transform translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition-transform duration-300 ease-in-out bg-[linear-gradient(115deg,theme(colors.fuchsia.100)_0%,theme(colors.fuchsia.200)_75%,theme(colors.fuchsia.300)_75%,theme(colors.fuchsia.400)_100%)]'
        />
      
        <p className='relative flex items-center gap-2 z-10 transition-all duration-200'>
         Modal 
        <PopupIcon className='h-6 lg:h-10 w-6 lg:w-10' />
        </p>
      </button>
    </div>
  )
}
