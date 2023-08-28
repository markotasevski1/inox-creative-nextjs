export interface StaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
  blurWidth?: number
  blurHeight?: number
}
export interface StaticRequire {
  default: StaticImageData
}
export type StaticImport = StaticRequire | StaticImageData
export type Machine = {
  id?: string
  attributes: MachineAttributes
}
export type MachineAttributes = {
  machineTitle?: string
  machineManufacturedDate?: string
  machineSummary?: string
  machineContent?: string
  createdAt?: string
  machineImageUrl?: string
}
