import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-visit-item',
  templateUrl: './visit-item.component.html',
  styleUrls: ['./visit-item.component.scss']
})
export class VisitItemComponent implements OnInit {
  @Input() itemElement: {
    id: string,
    patientFirstName: string,
    patientLastName: string,
    patientImage: string,
    scheduledDate: string,
    patient: string
  };
  constructor() { }

  ngOnInit() {
  }

}
