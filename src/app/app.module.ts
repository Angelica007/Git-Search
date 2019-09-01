import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { GitService } from './git-service/git.service';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GitService],
  bootstrap: [AppComponent],
})
export class AppModule { }
