import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function matchingPassword(
    password: string,
    matchingPassword: string) {
    return (formGroup: FormGroup) => {
        let control = formGroup.controls[password];
        let matchingControl = formGroup.controls[matchingPassword];

        if (matchingControl && control.value !== matchingControl.value) {
            matchingControl.setErrors({ passwordMustMacth: true });
        }
    }
}



