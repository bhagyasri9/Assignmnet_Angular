import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { MypipePipe } from './mypipe.pipe';
import { HobbiedemoComponent } from './hobbiedemo/hobbiedemo.component';
import { DataService } from './data.service';
import { HobbicmpComponent } from './hobbicmp/hobbicmp.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpdataComponent,
    MypipePipe,
    HobbiedemoComponent,
    HobbicmpComponent,
     ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
