import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './+counter-component/counter-component';
import { ImageUploaderComponent } from './+image-uploader-component/image-uploader-component';

import { FileSizePipe } from './pipes/filzesize-pipe'


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ImageUploaderComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
