import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  constructor() { }
   Names: any[] = [
    {
      Id: 11,
      FirstName: 'Shohag',
      LastName: 'Mia',
      ContactNo: '0192602900'
    },
    {
      Id: 12,
      FirstName: 'Shohag',
      LastName: 'Mia',
      ContactNo: '0192602900'
    },
    {
      Id: 13,
      FirstName: 'Shohag',
      LastName: 'Mia',
      ContactNo: '0192602900'
    },
    {
      Id: 14,
      FirstName: 'Shohag',
      LastName: 'Mia',
      ContactNo: '0192602900'
    }
  ];

  students(): any[] {
    return this.Names;
  }
}
