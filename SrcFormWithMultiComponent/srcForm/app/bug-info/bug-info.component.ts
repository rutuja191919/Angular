import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})
export class BugInfoComponent {
  
  impact = ["low","medium","high"];

  @Output()
  formReady = new EventEmitter<FormGroup>();

  BugInfoForm = this.fb.group({
    bugimpact : ['low'],
    details: ['', [Validators.required]],
    bugdate : ['', [Validators.required]],
    bughours : ['', [Validators.required]],
    bugminutes : ['', [Validators.required]],
    bugseconds : ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder)
  {}
  
  ngOnInit() {
    this.formReady.emit(this.BugInfoForm);  
  }
}
