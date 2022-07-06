import { IItem } from './../../../models/i-item';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invalid-form',
  templateUrl: './invalid-form.component.html',
  styleUrls: ['./invalid-form.component.css']
})
export class InvalidFormComponent implements OnInit {
  @Input() formGroup!: FormGroup<any>
  @Input() nameControl!: string

  constructor() { }

  ngOnInit(): void {
  }

}
