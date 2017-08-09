export default (side = 'back', action) => {
  switch (action.type) {
    case 'FLIP':
      return ((side === 'back') ? 'front' : 'back');
    default:
      return side;
  }
}
