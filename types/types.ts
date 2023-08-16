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
