import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Functions} from "../../../shared-values/functions";

@Component({
  selector: 'app-reactive-select',
  templateUrl: './reactive-select.component.html',
  styleUrls: ['./reactive-select.component.scss']
})
export class ReactiveSelectComponent {
  @Input() form?: FormGroup;
  @Input() label: string="";
  @Input() key: string="";
  @Input() placeholder: string=""
  @Input() type: string="text"
  @Input() id: string="";
  @Input() name: string="";
  @Input() disabled: boolean=false;
  @Input() choices: any[] =[]
  @Input() multiple: boolean=false;

  shared_functions= new Functions()

  constructor() { }

  ngOnInit(): void {

  }

  allSpacesError(): boolean {
    return this.shared_functions.allSpacesError(this.form,this.key);
  }

  hasFieldError(): boolean {
    return this.shared_functions.hasFieldError(this.form,this.key);
  }
  hasFieldRequiredError(): boolean {
    return this.shared_functions.hasFieldRequiredError(this.form,this.key);
  }

  showError(): boolean {
    const hasRequiredError = this.hasFieldRequiredError();
    const hasSpacesError = this.allSpacesError();

    return (hasRequiredError || hasSpacesError);
  }
}
