import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import{EmployeedetailsService} from './employeedetails.service';
  import { from } from 'rxjs';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeedetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
