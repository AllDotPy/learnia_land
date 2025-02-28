// FORM VALIDATION UTILS

import { FormGroup, ValidationErrors } from "@angular/forms";

// FORM ERRORS ACCESSOR
export function getFormValidationErrors(form: FormGroup): string[] {
    const errorMessages: string[] = [];

    Object.keys(form.controls).forEach(key => {
      const controlErrors: ValidationErrors | null | undefined = form.get(key)?.errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
            let msg: string = `Key: ${key}, Error: ${keyError}, Value: ${controlErrors[keyError]}`
            // REQUIRED MESSAGE
            if(keyError.includes('required')){
                msg = `Vous devez renseigner ce champ ${key}.`
            }

            // PATTERN MESSAGE
            if(keyError.includes('pattern')){
                msg = `Informations incorectes pour le champ ${key}.`
            }
            // `Key: ${key}, Error: ${keyError}, Value: ${controlErrors[keyError]}`
          errorMessages.push(msg);
        });
      }
    });

    return errorMessages;
}
