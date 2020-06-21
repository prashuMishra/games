import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { NewBoardComponent } from './new-board/new-board.component';


const routes: Routes = [{
  path:"board",
  component:BoardComponent
},
{
  path:"newboard",
  component:NewBoardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
