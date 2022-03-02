import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { TicTac } from './new-board/tic-tac.component';


const routes: Routes = [{
  path:"chess",
  component:BoardComponent
},
{
  path:"tictac",
  component:TicTac
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
