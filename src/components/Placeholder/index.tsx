import React from 'react'

export interface Props {
  text?: string
}

export const Placeholder = ({ text = 'PLACEHOLDER' }: Props) => <div>{text}</div>
