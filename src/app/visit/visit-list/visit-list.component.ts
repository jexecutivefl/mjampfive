import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Visit} from '../visit.model';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.scss']
})
export class VisitListComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, {
      static: true
    }) mdbTable:
    MdbTableDirective;
  elements: any = [];
  previous: any = [];
  headElements = ['Id', 'Date', 'First Name'];
  searchText = '';
  @Output() visitElements = [
    {
      id: '12346',
      // tslint:disable-next-line:max-line-length
      visitType: 'NEWAPPLICATION',
      // tslint:disable-next-line:max-line-length
      patientImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg',
      scheduledDate: '2020-04-20T11:45:00-05:00',
      amountPaid: null,
      patientFirstName: 'John',
      patientLastName: 'Doe',
      patientEmail: 'john@gmail.com',
      patientPhone: '727 555-5555'
    },
    {
      id: '12345',
      // tslint:disable-next-line:max-line-length
      visitType: '210Day',
      // tslint:disable-next-line:max-line-length
      patientImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg',
      scheduledDate: '2020-04-21T12:45:00-05:00',
      amountPaid: null,
      patientFirstName: 'bob',
      patientLastName: 'Doe',
      patientEmail: 'bob@gmail.com',
      patientPhone: '727 555-5555'
    },
    {
      id: '12347',
      // tslint:disable-next-line:max-line-length
      visitType: 'Renewal',
      // tslint:disable-next-line:max-line-length
      patientImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg',
      scheduledDate: '2020-04-22T13:45:00-05:00',
      amountPaid: null,
      patientFirstName: 'Jane',
      patientLastName: 'Doe',
      patientEmail: 'jane@gmail.com',
      patientPhone: '727 555-5551'
    },
    {
      id: '12346',
      // tslint:disable-next-line:max-line-length
      visitType: 'NEWAPPLICATION',
      // tslint:disable-next-line:max-line-length
      patientImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg',
      scheduledDate: '2020-05-20T11:45:00-05:00',
      amountPaid: null,
      patientFirstName: 'John',
      patientLastName: 'Doe',
      patientEmail: 'john@gmail.com',
      patientPhone: '727 555-5555'
    },
    {
      id: '12345',
      // tslint:disable-next-line:max-line-length
      visitType: '210Day',
      // tslint:disable-next-line:max-line-length
      patientImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg',
      scheduledDate: '2020-05-21T12:45:00-05:00',
      amountPaid: null,
      patientFirstName: 'bob',
      patientLastName: 'Doe',
      patientEmail: 'bob@gmail.com',
      patientPhone: '727 555-5555'
    },
    {
      id: '12347',
      // tslint:disable-next-line:max-line-length
      visitType: 'Renewal',
      // tslint:disable-next-line:max-line-length
      patientImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg',
      scheduledDate: '2020-05-22T13:45:00-05:00',
      amountPaid: null,
      patientFirstName: 'Jane',
      patientLastName: 'Doe',
      patientEmail: 'jane@gmail.com',
      patientPhone: '727 555-5551'
    },
    {
      id: '12347',
      // tslint:disable-next-line:max-line-length
      visitType: 'Renewal',
      // tslint:disable-next-line:max-line-length
      patientImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg',
      scheduledDate: '2020-05-22T13:45:00-05:00',
      amountPaid: null,
      patientFirstName: 'Jane',
      patientLastName: 'Doe',
      patientEmail: 'jane@gmail.com',
      patientPhone: '727 555-5551'
    },
    {
      id: '12347',
      // tslint:disable-next-line:max-line-length
      visitType: 'Renewal',
      // tslint:disable-next-line:max-line-length
      patientImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg',
      scheduledDate: '2020-05-22T13:45:00-05:00',
      amountPaid: null,
      patientFirstName: 'Jane',
      patientLastName: 'Doe',
      patientEmail: 'jane@gmail.com',
      patientPhone: '727 555-5551'
    },
    {
      id: '12347',
      // tslint:disable-next-line:max-line-length
      visitType: 'Renewal',
      // tslint:disable-next-line:max-line-length
      patientImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg',
      scheduledDate: '2020-05-22T13:45:00-05:00',
      amountPaid: null,
      patientFirstName: 'Jane',
      patientLastName: 'Doe',
      patientEmail: 'jane@gmail.com',
      patientPhone: '727 555-5551'
    }
  ];
  visit: Visit;
  private i: number;
  @HostListener('input') oninput() {
    this.searchItems();
  }
  // todo: organize by date
  constructor(private cdRef: ChangeDetectorRef) { }
  ngOnInit() {
    this.i = 0;
    this.visitElements.forEach(element => {
      this.i++;
      this.elements.push({
        id: this.i,
        patientFirstName: element.patientFirstName,
        patientLastName: element.patientLastName,
        scheduledDate: element.scheduledDate
      });
    });
    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }
  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
  searchItems() {
    const prev =
      this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements =
        this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.elements =
        this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }
  onVisitCreated(visitData: {
    visitType: string,
    scheduledDate: string,
    amountPaid: string,
    patientFirstName: string,
    patientImage: string,
    patientLastName: string,
    patientEmail: string,
    patientPhone: string
  }) {
    // @ts-ignore
    this.visitElements.push({
      visitType: visitData.visitType,
      scheduledDate: visitData.scheduledDate,
      amountPaid: visitData.amountPaid,
      patientFirstName: visitData.patientFirstName,
      // tslint:disable-next-line:max-line-length
      patientImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg',
      patientEmail: visitData.patientEmail,
      // tslint:disable-next-line:max-line-length
      patientLastName: visitData.patientLastName,
      patientPhone: visitData.patientPhone
    });
  }
}
