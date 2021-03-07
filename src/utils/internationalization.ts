import { ReactNode } from 'react'

export interface MessageValues {
  [key: string]: string | number | boolean | Date | null | undefined | ReactNode
}
