import { MagnifyingGlass } from 'phosphor-react'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: any
  onChange?: (e: any) => void
  icon?: any
}

export const InputSearch = ({ value, onChange, ...rest }: InputProps) => {
  return (
    <div className="flex my-5 justify-start items-center border-b-2 border-red-600 dark:border-transparent dark:bg-gray-400 w-2/4 h-12 py-2.5 pl-2 gap-2">
      <MagnifyingGlass className="w-6 h-6" />
      <input value={value} onChange={onChange} {...rest} />
    </div>
  )
}
