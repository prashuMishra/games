import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  isWhiteTurn=true;
  whiteKing = '&#9812;'
  whiteQueen = "&#9813;"
  whiteRook = "&#9814;";
  whiteBishop = "&#9815;";
  whiteKnight = "&#9816;";
  whitePawn = "&#9817;";

  blackKing = " &#9818;";
  blackQueen = "&#9819;";
  blackRook = "&#9820;";
  blackBishop = "&#9821;";
  blackKnight = "&#9822;";
  blackPawn = "&#9823;";
  whoseNextMoveis='';
  constructor() { }

  ngOnInit(): void {
  }
  blank(row) {
    if (row >= 2 && row <= 5) {
      return true;
    }
    return false;

  }
  whiteRookCon(row, col) {
    if (row === 0 && col === 0) {
      return true;
    }
    if (row === 0 && col === 7) {
      return true;
    }
    return false;
  }

  blackRookCon(row, col) {
    if (row === 7 && col === 0) {
      return true;
    }
    if (row === 7 && col === 7) {
      return true;
    }
    return false;
  }
  whitePawnCon(row, col) {
    if (row === 1) {
      return true;
    }
  }
  blackPawnCon(row, col) {
    if (row === 6) {
      return true;
    }
  }
  whiteKnightCon(row, col) {
    if (row === 0 && col === 1) {
      return true;
    }
    if (row === 0 && col === 6) {
      return true;
    }
  }
  whiteBishopCon(row, col) {
    if (row === 0 && col === 5) {
      return true;

    }
    if (row === 0 && col === 2) {
      return true;

    }
  }
  whiteQueenCon(row, col) {
    if (row == 0 && col === 3) {
      return true;
    }
  }
  whiteKingCon(row, col) {
    if (row == 0 && col === 4) {
      return true;
    }
  }

  blackBishopCon(row, col) {
    if (row === 7 && col === 5) {
      return true;
    }
    if (row === 7 && col === 2) {
      return true;
    }
  }
  blackKnightCon(row, col) {
    if (row === 7 && col === 1) {
      return true;
    }
    if (row === 7 && col === 6) {
      return true;
    }

  }
  blackQueenCon(row, col) {
    if (row == 7 && col === 3) {
      return true;
    }
  }
  blackKingCon(row, col) {
    if (row == 7 && col === 4) {
      return true;
    }
  }
  selectedItem(row, col) {
    let current: any = document.getElementById(`${row}${col}`);
    if(current.className.split(' ').filter(a => a ==='active').length>0){
      current.className = current.className.replace(' active', ``);
      return;
    }
    let prevActive:any = document.getElementsByClassName('active');

    if (prevActive.length > 0) {
      this.itemMoves(current, prevActive[0]);
      return;
    }
    if (current.name) {
      current.className = current.className.replace(current.className, `${current.className} active`);
    }

  }

  itemMoves(current, prevActive) {
    let key = prevActive.name;
    switch (key) {
      case "Black_queen":
      case "White_queen":
        if(this.canQueenMove(current, prevActive)){
          this.itemMoved(current, prevActive);
        }
        break;
      case "White_king":
      case "Black_king":
        if(this.canKingMove(current, prevActive)){
          this.itemMoved(current, prevActive);
        }
        break;
      case "White_pawn":
        if(this.canWhitePawnMove(current, prevActive)){
          this.itemMoved(current, prevActive);
        }
        break;
      case "Black_pawn":
        if(this.canBlackPawnMove(current, prevActive)){
          this.itemMoved(current, prevActive);
        }
        break;
      case "White_bishop":
      case "Black_bishop":
        if(this.canBishopMove(current, prevActive)){
          this.itemMoved(current, prevActive);
        }
        break;
      case "White_knight":
      case "Black_knight":
        if(this.canKnightMove(current, prevActive)){
          this.itemMoved(current, prevActive);
        }
        break;
      case "White_rook":
      case "Black_rook":
        if(this.canRookMove(current, prevActive)){
          this.itemMoved(current, prevActive);
        }
        break;
      default:
        break;
    }

  }

  canQueenMove(current, prevActive) {
    if (this.kingMoveIsValid(current, prevActive) ||
      this.horVerMove(current, prevActive) ||
      this.bishopMoveIsValid(current, prevActive)) {
        return true;
    }
    return false;
  }
  canKingMove(current, prevActive) {
    if (this.kingMoveIsValid(current, prevActive)) {
      return true;
    }
    return false;
  }
  kingMoveIsValid(current, prevActive) {
    let prePos = parseInt(prevActive.id);
    let curPos = parseInt(current.id);
    if (prePos + 1 === curPos || prePos - 1 === curPos ||
      prePos + 10 === curPos || prePos - 10 === curPos ||
      prePos + 9 === curPos || prePos - 9 === curPos ||
      prePos + 11 === curPos || prePos - 11 === curPos) {

      return true;
    }
    return false;
  }

  canBlackPawnMove(current, prevActive) {
    let prePos = parseInt(prevActive.id);
    let curPos = parseInt(current.id);
    // move one step
    if (prePos - 10 === curPos) {
      return true;
    }
    // For very first move with two steps
    if (prePos > 59 && prePos < 68 && prePos - 20 === curPos) {
      return true;
    }
    if (prePos - 9 === curPos || prePos - 11 === curPos && current.name) {
      let next: any =  document.getElementById(curPos.toString());
      if(next.name){
        return true;
      }
    }
    return false;
  }
  canWhitePawnMove(current, prevActive) {
    let prePos = parseInt(prevActive.id);
    let curPos = parseInt(current.id);
    if (prePos + 10 === curPos) {
      return true;
    }
    if (prePos > 9 && prePos < 18 && prePos + 20 === curPos) {
      return true;
    }
    if (prePos + 9 === curPos || prePos + 11 === curPos) {
      let next: any =  document.getElementById(curPos.toString());
      if(next.name){
        return true;
      }
    }
    return false;
  }
  canRookMove(current, prevActive) {
    if (this.horVerMove(current, prevActive)) {
      return true;
    }
    return false;

  }

  bishopMoveIsValid(current, prevActive) {
    let prePos = parseInt(prevActive.id);
    let curPos = parseInt(current.id);
    if ((prePos - curPos) % 11 === 0) {
      if(!this.isPlayerFound(current, prevActive,11)){
        return true;
      }
    }
    else if ((prePos - curPos) % 9 === 0) {
      if(!this.isPlayerFound(current, prevActive,9))
      {return true;}
    }
    return false;
  }
  isPlayerFound(current, prevActive, incrmentOrDecrmntBy){
    let prePos = parseInt(prevActive.id);
    let curPos = parseInt(current.id);
    if(prePos<curPos){
      for (let index = prePos+incrmentOrDecrmntBy; index <= curPos-incrmentOrDecrmntBy; index=index+incrmentOrDecrmntBy) {
        let next: any =  document.getElementById(index.toString());
        if(next.name){
          return true;
        }
      }
    }else{
      for (let index = prePos-incrmentOrDecrmntBy; index >= curPos+incrmentOrDecrmntBy; index=incrmentOrDecrmntBy-index) {
        let next: any =  document.getElementById(index.toString());
        if(next.name){
          return true;
        }
      }
    }
    return false;

  }
  canBishopMove(current, prevActive) {
    if (this.bishopMoveIsValid(current, prevActive)) {
      return true;
    }
    return false
  }
  canKnightMove(current, prevActive) {
    let prePos = parseInt(prevActive.id);
    let curPos = parseInt(current.id);
    if (prePos + 19 === curPos || prePos - 19 === curPos ||
      prePos + 21 === curPos || prePos - 21 === curPos ||
      prePos - 12 === curPos || prePos + 12 === curPos ||
      prePos - 8 === curPos || prePos + 8 === curPos) {
      return true;
    }else{
      return false;
    }
  }

  horVerMove(current, prevActive) {
    let prePos = parseInt(prevActive.id);
    let curPos = parseInt(current.id);
    let curPosRow: any = curPos / 10;
    let curPosCol: any = curPos % 10;
    let prePosRow: any = prePos / 10;
    let prePosCol: any = prePos % 10;
    if((parseInt(curPosRow) === parseInt(prePosRow))){
      if(!this.isIteminhrzntalCol(current, prevActive)){
        return true;
      }
    }
    if ((parseInt(curPosCol) === parseInt(prePosCol))) {
      if(!this.isIteminvertclCol(current, prevActive)){
        return true;
      }
    }
    return false;
  }
  itemMoved(current, prevActive) {
    let cItmColor = current.name.split("_")[0];
    let prItmColor = prevActive.name.split("_")[0];
    if (prItmColor === cItmColor) {
      return;
    }
    if(prItmColor === this.whoseNextMoveis){
      return;
    }
    current.name = prevActive.name;
    current.innerHTML = prevActive.innerHTML;
    prevActive.innerHTML = "";
    prevActive.name = "";
    prevActive.className = prevActive.className.replace(" active", ``);
    current.className = current.className.replace(" active", ``);
    if(prevActive.className.indexOf('whiteItem')>0){
      current.className=current.className.replace(current.className, `${current.className} whiteItem`);
    }
    if(prevActive.className.indexOf('blackItem')>0){
      current.className=current.className.replace(current.className, `${current.className} blackItem`);
    }
    prevActive.className=prevActive.className.replace(' whiteItem', ``);
    prevActive.className=prevActive.className.replace(' blackItem', ``);
    this.whoseNextMoveis=prItmColor;
    this.nextMove(this.whoseNextMoveis);
    // this.enableDisable();
  }
  nextMove(color){
    if(color==='White'){
      this.isWhiteTurn=false;
    }else{
      this.isWhiteTurn=true;
    }
  }
  enableDisable(){
    let blackite:any=document.getElementsByClassName('blackItem');
      let whiteite:any=document.getElementsByClassName('whiteItem');
    if(this.isWhiteTurn){
      for (let index = 0; index < blackite.length; index++) {
        const element = blackite[index];
        element.disabled=true;
        
      }
      for (let index = 0; index < whiteite.length; index++) {
        const element = whiteite[index];
        element.disabled=false;
        
      }
    }else{
      for (let index = 0; index < blackite.length; index++) {
        const element = blackite[index];
        element.disabled=false;
        
      }
      for (let index = 0; index < whiteite.length; index++) {
        const element = whiteite[index];
        element.disabled=true;
        
      }
    }
   
  }

  isIteminhrzntalCol(current, prevActive){
    let prePos = parseInt(prevActive.id);
    let curPos = parseInt(current.id);
    if(curPos<prePos){
      for (let index = prePos-1; index >= curPos+1; index--) {
        let next: any =  document.getElementById(index.toString());
        if(next.name){
          return true;
        }
      }
    }else{
      for (let index = prePos+1; index <= curPos-1; index++) {
        let next: any =  document.getElementById(index.toString());
        if(next.name){
          return true;
        }
      }
    }
    return false;
  }
  isIteminvertclCol(current, prevActive){
    let prePos = parseInt(prevActive.id);
    let curPos = parseInt(current.id);
    if(curPos<prePos){
      for (let index = prePos-10; index >= curPos+10; index=index-10) {
        let next: any =  document.getElementById(index.toString());
        if(next.name){
          return true;
        }
      }
    }else{
      for (let index = prePos+10; index <= curPos-10; index=index+10) {
        let next: any =  document.getElementById(index.toString());
        if(next.name){
          return true;
        }
      }
    }
  
    return false;
  }

}
