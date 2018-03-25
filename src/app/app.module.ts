import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { ApploginComponent } from './components/applogin/applogin.component';
import { AppcontentComponent } from './components/appcontent/appcontent.component';
import { AppbuttonComponent } from './components/appbutton/appbutton.component';
import { AppregisterComponent } from './components/appregister/appregister.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';



@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppheaderComponent,
    ApploginComponent,
    AppcontentComponent,
    AppbuttonComponent,
    AppregisterComponent,
    AppsettingComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
