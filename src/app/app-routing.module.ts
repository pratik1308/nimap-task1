import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import{UpdateComponent} from './update/update.component';


const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"profile",component:ProfileComponent},
  {path:"update/:urlId",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
