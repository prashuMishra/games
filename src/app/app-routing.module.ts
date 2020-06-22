import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { NewBoardComponent } from './new-board/new-board.component';


const routes: Routes = [{
  path:"chess",
  component:BoardComponent
},
{
  path:"tictac",
  component:NewBoardComponent
},
{
  path:"**",
  redirectTo:"chess"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
