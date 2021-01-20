import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent  {
  registerForm: any = FormGroup;
  submitted : any = false;

  constructor(private formBuilder: FormBuilder, private auth : AuthService, private router : Router ){ }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
        email: ['Tejeshwarkumar321@gmail.com', [Validators.required, Validators.email]],
        password: ['asnebas', [Validators.required, Validators.minLength(6)]],
    });
}

onSubmit() {
  
  this.router.navigateByUrl('/employees');
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  

  this.auth.authenticate("secretToken");
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));

  }


  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

  

}


