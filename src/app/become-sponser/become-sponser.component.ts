import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { formatNumber } from '@angular/common';
import { Validator } from './validator';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-become-sponser',
  templateUrl: './become-sponser.component.html',
  styleUrls: ['./become-sponser.component.css']
})
export class BecomeSponserComponent implements OnInit {
  
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private validator: Validator, private http: HttpClient) { }
  value: string = "frei";
  private sub: any;
  form = this.formBuilder.group({
    name: '',
    address: '',
    email: '' ,
    amount: '',
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
        if (this.value !== "frei"){
          this.form.patchValue({amount: this.value});
        }
        
      }
    })
  }
  onSubmit(): void {
    let message = "Sali Michelle, Es het grad öpper s Formular uf de Websitte usgfüllt. Do sind d agaabe:";
    for (const key in this.form.value){
      message += "\n" + key + ": " + this.form.value[key];
    }
    this.testEmail("Michelle", "wichtelfuerwalthers@gmail.com", message);
    //this.sendEmail("Michelle", "wichtelfuerwalthers@gmail.com", message);
    //this.form.reset();
  }
  testEmail(name: String, email: String, message: String){
    console.log("Name", name);
    console.log("Email", email);
    console.log("Message", message);
    this.router.navigateByUrl('/thankyou');
  }
  sendEmail(name: String, email: String, message: String) {
    
    //Set the url with your secretKey from formspree.io
    let url = "https://formspree.io/f/mlekgokw";

    //Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `name=${name}&email=${email}&message=${message}`;
    let errorMessage: string = "";

    this.http.post<any>(url, data, httpOptions).subscribe({
        next: data => {
            console.log("email sent" + JSON.stringify(data));
            this.router.navigateByUrl('/thankyou');
        },
        error: error => {
            errorMessage = error.message;
            console.log('error!', errorMessage);
        }
    })

    //DEBUG
    // console.log("url is ", url);
    // console.log("data", name, email, message);
  }
}