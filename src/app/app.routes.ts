import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailsComponentComponent } from './components/user-details-component/user-details-component.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponentComponent }];
