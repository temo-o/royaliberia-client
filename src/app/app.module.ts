import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';

import {FormsModule} from "@angular/forms";
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import {HttpClientModule} from "@angular/common/http";
import { ImageSequenceAnimatorComponent } from './image-sequence-animator/image-sequence-animator.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    TreeNodeComponent,
    ImageSequenceAnimatorComponent,
    TimelineComponent,
    AppComponent,
    LeftSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
