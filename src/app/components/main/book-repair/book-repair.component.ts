import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Snackbar, SpacesValidator} from "../../../shared-values/functions";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-repair',
  templateUrl: './book-repair.component.html',
  styleUrls: ['./book-repair.component.scss']
})
export class BookRepairComponent {

  items: any[]=[
    {id:1, name: 'Fridge'},
    {id:1, name: 'Water Dispenser'},
    {id:1, name: 'Television'},
    {id:1, name: 'Cooker'}
  ];

  repair_form = new FormGroup({
    first_name: new FormControl('', [Validators.required, SpacesValidator()]),
    last_name: new FormControl('', [Validators.required, SpacesValidator()]),
    email: new FormControl('', [Validators.required, SpacesValidator(), Validators.email]),
    residence: new FormControl('', [Validators.required, SpacesValidator()]),
    device: new FormControl('', [Validators.required, SpacesValidator()]),
    phone_number: new FormControl('', [Validators.required, SpacesValidator()]),
    description: new FormControl('', [Validators.required, SpacesValidator()])
  })
  shared_functions = new Snackbar(this.snackBar)
  constructor( private snackBar: MatSnackBar,
               private router: Router
  ) {
    this.shared_functions = new Snackbar(this.snackBar)
  }

}
