import { CSSProperties, ChangeEvent, ReactNode } from 'react'


import * as S from './styles'

interface ISelect {
  styled?: string
  style?: CSSProperties
  erro?: boolean
  label?: string
  id: string
  disabled?: boolean
  name?: string
  value: any
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  children: ReactNode
  className?: string
}

export default function Select({
  id,
  disabled,
  name = id,
  value,
  onChange,
  children,
  className
}: ISelect) {
  return (
    <S.SelectStyled
      disabled={disabled}
      id={id}
      name={name}
      className={className}
      value={value}
      onChange={onChange}
    >
      {children}
    </S.SelectStyled>

  )
}
