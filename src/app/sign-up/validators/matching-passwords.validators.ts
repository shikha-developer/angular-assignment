import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function matchingPassword(
    password: string,
    matchingPassword: string) {
    return (formGroup: FormGroup) => {
        let control = formGroup.controls[password];
        let matchingControl = formGroup.controls[matchingPassword];
        // Compares the two fiels only if second comapring field exist
        if (matchingControl.value && control.value !== matchingControl.value) {
            matchingControl.setErrors({ passwordmustmatch: true });
        }
    }
}



