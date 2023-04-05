import React, { ComponentProps, ReactNode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { MyComponent } from './MyComponent'

interface MonoCheckboxProps extends Omit<ComponentProps<'input'>, 'type'> {
  label?: ReactNode
}

const MonoCheckbox = ({ label = '', ...props }: MonoCheckboxProps) => {
  return (
    <label className="flex items-center font-mono">
      <input className="mr-2" type="checkbox" {...props} />
      {label}
    </label>
  )
}

const Example = () => {
  const [booleanProp, setBooleanProp] = useState(false)

  return (
    <main className="flex h-screen flex-col items-center p-4">
      <h3 className="flex-center mb-8 flex-col text-2xl text-primary-700">
        <span className="">&lt;MyComponent /&gt;</span>
        <span className="text-sm italic text-gray-300">from 8th Day Dev</span>
      </h3>
      <h3 className="mb-2 text-lg text-gray-500">Props Controls</h3>
      <div className="flex flex-wrap space-x-4">
        <MonoCheckbox checked={booleanProp} onChange={(e) => setBooleanProp(e.target.checked)} label="booleanProp" />
      </div>
      <hr className="my-8 w-full" />
      <MyComponent>{booleanProp ? 'on' : 'off'}</MyComponent>
    </main>
  )
}

const root = createRoot(document.getElementById('app')!)

root.render(<Example />)
