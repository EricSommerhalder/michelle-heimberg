import { Injectable } from "@angular/core";
import { FormGroup, ValidatorFn } from "@angular/forms";

@Injectable({ providedIn : 'root'})
export class Validator {
    public validate(): any { // any = ValidatorFn aber kompiler motzt
        return ((formGroup: FormGroup) => {
          const anonym = formGroup.get('anonymous');
          const name = formGroup.get('name');
          const email = formGroup.get('email');
          const address = formGroup.get('address');
          if (!anonym || !anonym.value){
            if (!name || name.value === ''){
                return {invalidName: true}
            }
            if (!email || email.value === ''){
                return {invalidEmail: true}
            }
            if (!address || address.value === ''){
                return {invalidAddress: true}
            }
          }
          return null;
        });
    }
}