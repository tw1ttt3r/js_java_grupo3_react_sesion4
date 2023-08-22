import { forwardRef } from "react"

const InputCustom = forwardRef((props, ref) => {

  return (
    <>
      <label>{props.label}</label>
      <input ref={ref} />
    </>
  )
})

export default InputCustom