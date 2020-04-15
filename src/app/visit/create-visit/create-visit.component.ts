import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Visit} from '../visit.model';
import {Patient} from '../../patient/patient.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {split} from 'ts-node';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PatientService} from '../../patient/patient.service';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.scss']
})
export class CreateVisitComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean;
  private visitId: string;
  private visit: Visit;
  private patient: Patient;
  private pushToCalendar = false;
  private sendToSquare = false;
  private mode = 'create';
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.form = new FormGroup({
      patientFirstName: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      patientLastName: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      patientDob: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      patientEmail: new FormControl(null, {
        validators:
          [Validators.minLength(3)]
      }),
      patientPhone: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      patientPreferredContact: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
       }),
      patientImage: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      patientAddress1: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      patientAddress2: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      patientCity: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      patientState: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      patientZip: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      visitType: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      scheduledDate: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      timeIn: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      timeOut: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      amountOwed: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      amountPaid: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      pushToCalendar: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      }),
      sendToSquare: new FormControl(null, {
        validators:
          [Validators.minLength(0)]
      })
    });
    console.log(this.patient.id);
    const addressArray = this.patient.addressJson.split(',');

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('visitId')) {
        this.mode = 'edit';
        this.visitId = paramMap.get('visitId');
        this.isLoading = true;
        this.form.setValue({
          visitType: this.visit.visitType,
          scheduledDate: this.visit.scheduledDate,
          timeIn: this.visit.timeIn,
          timeOut: this.visit.timeOut,
          patientFirstName: this.patient.firstName,
          patientLastName: this.patient.lastName,
          patientDob: this.patient.dob,
          patientEmail: this.patient.email,
          patientPhone: this.patient.phone,
          patientPreferredContact: this.patient.preferredContact,
          patientAddress1: addressArray[0],
          patientAddress2: addressArray[1],
          patientCity: addressArray[2],
          patientState: addressArray[3],
          patientZip: addressArray[4],
          amountOwed: 0,
          amountPaid: 0,
          pushToCalendar: false,
          sendToSquare: false
        });
      } else {
        this.mode = 'create';
      }
    });
  }
  onSaveVisit() {
    console.log('saving visit');
  }
}
