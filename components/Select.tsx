interface SelectProps {
  items?: []
  onChange?: (e: any) => void
  value?: any
  label?:string
}

export const Select = ({ items, onChange, value, label }: SelectProps) => {
  return (
    <div>
      <select onChange={onChange} value={value}>
        {label ?? <option>{label}</option>}
        {
          items?.map((item: any, i: number) => {
            return (
              <option key={i}>{item}</option>
            )
          })
        }
      </select>
    </div>
  )
}