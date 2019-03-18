import { Component, OnInit } from '@angular/core';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  employees;
  headings: string[];



  constructor(private _employeedetails: EmployeedetailsService) { }

  ngOnInit() {
    this.employees = this._employeedetails.getEmployees();
    this.headings = Object.keys(this.employees[0]);
  }


  sort(head) {
    console.log(head);
    switch (head) {
      case "id":   //when header 1 click for sort 
        this.employees.sort(function (a, b) {
          return a.id - b.id;
        });
        break;

      case "firstname":   //when header 1 is click for sort 
        this.employees.sort(function (a, b) {
          if (a.firstname < b.firstname)
            return -1;
          if (a.firstname > b.firstname) {
            return 1;
          }
          return 0;
        });
        break;
      case "lastname":   //when header 1 is click for sort 
        this.employees.sort(function (a, b) {
          if (a.lastname < b.lastname)
            return -1;
          if (a.lastname > b.lastname) {
            return 1;
          }
          return 0;
        });
        break;
      case 'email':    
// tslint:disable-next-line: only-arrow-functions
        this.employees.sort(function (a, b) {
          if (a.email < b.email) {
            return -1;
          }
          if (a.email > b.email) {
            return 1;
          }
          return 0;
        });
        break;
      case 'designation':
// tslint:disable-next-line: only-arrow-functions
        this.employees.sort(function (a, b) {
          if (a.designation < b.designation) {
            return -1;
          }
          if (a.designation > b.designation) {
            return 1;
          }
          return 0;
        });
        break;
      case 'phoneno':
// tslint:disable-next-line: only-arrow-functions
        this.employees.sort(function (a, b) {
          if (a.phoneno < b.phoneno) {
            return -1;
          }
          if (a.phoneno > b.phoneno) {
            return 1;
          }
          return 0;
        });
        break;
      default:

    }

  }

}
