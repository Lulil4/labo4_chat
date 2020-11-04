import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from "./components/chat/chat.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { TokenGuard } from "../app/guards/token.guard";
import { NoTokenGuard } from "../app/guards/no-token.guard";
const routes: Routes = [{
  path:"chat",
  component: ChatComponent,
  canActivate:[TokenGuard]
},
{
  path:"login",
  component: LoginComponent,
  //canActivate:[NoTokenGuard]
},
{
  path:"logout",
  component: LogoutComponent,
  canActivate:[TokenGuard]
},
{
  path:"registro",
  component: RegistroComponent,
//  canActivate:[NoTokenGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
