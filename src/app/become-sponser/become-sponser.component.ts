import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { formatNumber } from '@angular/common';
import { Validator } from './validator';
@Component({
  selector: 'app-become-sponser',
  templateUrl: './become-sponser.component.html',
  styleUrls: ['./become-sponser.component.css']
})
export class BecomeSponserComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private validator: Validator) { }
  value: string = "frei";
  private sub: any;
  form = this.formBuilder.group({
    anonymous: false,
    name: '',
    address: '',
    email: '',
    listed: false
  },
  {
    validators : [this.validator.validate()]
  }
  );

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      if (params['value']){
        this.value = params['value'];
      }
    })
  }
  onSubmit(): void {
    console.warn("DANGGGGGGGE");
    console.log(this.form);
    //this.form.reset();
  }
  checkValid(): boolean {
    return this.form.value['anonymous'] == true || (this.form.value['name'] != '' && this.form.value['address'] != '' && this.form.value['email'] != '');
  }
}
