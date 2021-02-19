import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  showForm: boolean;

  toggleAptDisplay() {
    this.showForm = !this.showForm;
  }
  constructor() {
    this.showForm = true;
   }

  ngOnInit() {
  }

}
