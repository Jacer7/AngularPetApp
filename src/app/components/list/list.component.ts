import { Component,Input, Output,  OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() aptList;
  @Output() deleteEvt = new EventEmitter();
  
  
  handleDelete(theApt: object) {
    console.log(theApt);
    this.deleteEvt.emit(theApt);
  }
  constructor() { }

  ngOnInit() {
  }

}
