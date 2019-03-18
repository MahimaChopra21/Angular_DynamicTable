import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailsService {

  constructor() { }

  getEmployees(): any{
    return [{ firstname: "rahul", lastname: "sharma", id: 2, phoneno: 4647845356, email: "rahulsharma@gmail.com", designation: "trainee" },
        { firstname: "ashish", lastname: "singh", id: 3, phoneno: 9378445356, email: "ashishsingh@gmail.com", designation: "tester" },
        { firstname: "shubham", lastname: "chauhan", id: 4, phoneno: 7654835356, email: "shubhamchauhan@gmail.com", designation: "techlead" },
        { firstname: "pulkit", lastname: "jain", id: 5, phoneno: 7386145356, email: "pulkitjain@gmail.com", designation: "sales" },
        { firstname: "vaibhav", lastname: "aggrwal", id: 6, phoneno: 9052645356, email: "vaibhavaggrwal@gmail.com", designation: "pm" },
        { firstname: "pradeep", lastname: "kumar", id: 7, phoneno: 7671649036, email: "pradeepkumar@gmail.com", designation: "developer" },
        { firstname: "anuj", lastname: "pal", id: 8, phoneno: 9937487456, email: "anujpal@gmail.com", designation: "ba" },
         { firstname: "ankit", lastname: "mavi", id: 9, phoneno: 8374993290, email: "ankitmavi@gmail.com", designation: "manager" }];
    
      
      }
}
