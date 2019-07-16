import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { College } from '../../college';


@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'student', 'date'];
  constructor(private fb: FormBuilder) {
  }
  CollegeDetailsForm: FormGroup;
  CollegeSet: College [] = [];
  dataSource = this.CollegeSet;

  ngOnInit() {

    this.createform();

  }
  createform() {
    this.CollegeDetailsForm = this.fb.group({
      name: [''],
      student: [''],
      date: [''],
      ClassDetails: this.fb.array(this.CollegeSet)
    });
  }


  SaveData() {
    this.CollegeSet.push(this.CollegeDetailsForm.value);
    console.log(this.CollegeSet);
    this.createform();
  }

 


}

