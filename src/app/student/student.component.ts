import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './services/student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(private student: StudentServiceService) {}
  students: any[] = null;
  title = 'Student List Works Without API Calling';
  ngOnInit() {
    this.students = this.student.students();
  }
}
