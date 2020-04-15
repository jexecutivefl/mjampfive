import {Component, OnInit, ViewChild} from '@angular/core';
import {DayPilot, DayPilotSchedulerComponent} from 'daypilot-pro-angular';
import SchedulerPropsAndEvents = DayPilot.SchedulerPropsAndEvents;

@Component({
  selector: 'app-schedular',
  templateUrl: './schedular.component.html',
  styleUrls: ['./schedular.component.scss']
})
export class SchedularComponent implements OnInit {
  @ViewChild('scheduler', {static: false})
  scheduler: DayPilotSchedulerComponent;

  events: any[] = [];

  config: SchedulerPropsAndEvents = {
    timeHeaders: [{groupBy: 'Month'}, {groupBy: 'Day', format: 'd'}],
    scale: 'Day',
    days: 30,
    startDate: '2019-09-01',
    treeEnabled: true,
  };
  constructor() { }

  ngOnInit() {
  }

}
