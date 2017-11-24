export const flipCard = (card) => {
  return {
    type: 'FLIP',
    card
  }
}

export const allBack = () => {
  return {
    type: 'ALL_BACK'
  }
}

export const count = () => {
  return {
    type: 'COUNT'
  }
}
