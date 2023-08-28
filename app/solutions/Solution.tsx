import React from 'react'
import { MachineAttributes } from '../../types/types'

type SolutionProps = {
  machineAttributes: MachineAttributes
}

export function Solution({ machineAttributes }: SolutionProps) {
  console.log(machineAttributes.machineTitle)
  return <div>{machineAttributes.machineTitle}</div>
}
