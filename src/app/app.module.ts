import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BlogComponent } from './Components/blog/blog.component';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';
import { from } from 'rxjs';
import { LoginComponent } from './Components/login/login.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';


const routesApp: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Singup', component: SingUpComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BlogComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    SingUpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
