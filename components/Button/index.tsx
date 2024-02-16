import React from "react";

import * as S from './styles'


interface IButtonButton {
  children: React.ReactNode
  onClick: () => void
}

export default function Button({ children , onClick }: IButtonButton) {

  return (
    <S.ButtonContainer onClick={onClick}>
      {children}
    </S.ButtonContainer>
  )
}


