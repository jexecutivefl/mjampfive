import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Patient} from '../patient.model';
import {PatientService} from '../patient.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {

  private mode = 'create';
  private address: any;
  form: FormGroup;
  private patient: Patient;
  isLoading: boolean;
  imagePreview: string;
  private patientId: string;
  constructor(
    public patientService: PatientService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      patientFirstName: new FormControl(null, {
        validators:
          [Validators.minLength(3)]
      }),
      patientLastName: new FormControl(null, {
        validators:
          [Validators.minLength(3)]
      }),
      patientDob: new FormControl(null, {
        validators:
          [Validators.minLength(3)]
      }),
      patientEmail: new FormControl(null, {
        validators:
          [Validators.minLength(3)]
      }),
      patientPhone: new FormControl(null, {
        validators:
          [Validators.minLength(3)]
      }),
      patientPreferredContact: new FormControl(null, {
        validators:
          [Validators.minLength(3)]
      }),
      patientAddress1: new FormControl(null, {
        validators:
          [Validators.minLength(3)]
      }),
      patientAddress2: new FormControl(null, {
        validators:
          [Validators.minLength(3)]
      }),
      patientCity: new FormControl(null, {
        validators:
          [Validators.minLength(3)]
      }),
      patientState: new FormControl(null, {
        validators:
          [Validators.minLength(3)]
      }),
      patientZip: new FormControl(null, {
        validators:
          [Validators.minLength(3)]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('patientId')) {
        this.mode = 'edit';
        this.patientId = paramMap.get('patientId');
        this.isLoading = true;
        // todo: get patient
      } else {
        this.mode = 'create';
      }
    });
  }

  onSavePatient() {
    this.isLoading = true;
    const patientAddress1 = this.nullCheck(this.form.value.patientAddress1);
    const patientAddress2 = this.nullCheck(this.form.value.patientAddress2);
    const patientCity = this.nullCheck(this.form.value.patientCity);
    const patientState = this.nullCheck(this.form.value.patientState);
    const patientZip = this.nullCheck(this.form.value.patientZip);
    this.address = {
      patientAddress1,
      patientAddress2,
      patientCity,
      patientState,
      patientZip
    };
    if (this.mode === 'create') {}
  }
  nullCheck(formValue) {
    if (formValue === '') {
      formValue = null;
    }
    return formValue;
  }

}
