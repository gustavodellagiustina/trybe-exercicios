let pieceName = 'BiShOp';

switch (pieceName.toLowerCase()) {
    case 'pawn':
        console.log('PAWN: moves forward one or two squares in the first move and forward one square afterwards; captures diagonally one square.');
        break;
    case 'bishop':
        console.log('BISHOP: moves n-squares diagonally and captures diagonnaly.');
        break;
    case 'rook':
        console.log('ROOK: moves n-squares both in the x-axis and y-axis and captures also both in the x-axis and y-axis.');
        break;
    case 'knight':
        console.log('KNIGHT: moves two squares vertically or horizontally and then one more square at a right-angle, in a trajectory that resembles the uppercase letter L, capturing enemy pieces only when it lands on it.');
        break;
    case 'queen':
        console.log('QUEEN: moves and captures n-squares horizontally, vertically and also diagonally.');
        break;
    case 'king':
        console.log('KING: moves and captures in any direction, one square at a time, but cannot move to a destination where it will be endangered.');
        break;
    default:
        console.log('Insert a valid chess piece.');
}