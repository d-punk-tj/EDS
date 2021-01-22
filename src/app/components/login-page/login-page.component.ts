import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent  {
  registerForm: any = FormGroup;
  submitted : any = false;

  @Input() error: string | null | undefined;
  @Output() submitEM = new EventEmitter();


  constructor(private formBuilder: FormBuilder, 
              private auth : AuthService, 
              private router : Router ,
              private _snackBar: MatSnackBar
              ){ }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
        email: ['Tejeshwarkumar321@gmail.com', [Validators.required, Validators.email]],
        password: ['asnebas', [Validators.required, Validators.minLength(6)]],
    });
}

onSubmit() {

  // stop here if form is invalid
  if (this.registerForm.invalid) {
    return;
}
  
  this.auth.authenticate("secretToken");
  this._snackBar.open("Token Generated", "Access Granted", {
    duration: 2000,
  });
  this.submitted = true;
  this.router.navigateByUrl('/employees');
  

  

  

  
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));

  }


  
  

}


