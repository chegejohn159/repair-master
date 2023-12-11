import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Functions} from "../../../shared-values/functions";

@Component({
  selector: 'app-reactive-text-area',
  templateUrl: './reactive-text-area.component.html',
  styleUrls: ['./reactive-text-area.component.scss']
})
export class ReactiveTextAreaComponent implements OnInit {

  @Input() form?: FormGroup;
  @Input() type: string="text"
  @Input() label: string="";
  @Input() key: string="";
  @Input() placeholder: string=""
  @Input() pattern: string="[\\s\\S]+"
  @Input() id: string="";
  @Input() name: string="";
  @Input() required_field: boolean=false;
  @Input() disabled: boolean=false;
  @Input() rows: number=2;
  @Input() maxLength: number=150;
  @Input() input_width: string="w-full";
  shared_functions= new Functions()

  constructor() { }

  ngOnInit(): void {
  }

  hasPatternError(): boolean {
    return this.shared_functions.hasPatternError(this.form,this.key);
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
    const hasPatternError = this.hasPatternError();

    return (hasRequiredError || hasSpacesError) && !hasPatternError;
  }

}
