import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm!:FormGroup
  [x:string]:any;
  loaderStatus :boolean = false;

  constructor(private authService:AuthService,private router:Router , private messageService: MessageService) {
    let token = sessionStorage.getItem('token')
    if(token){
      this.router.navigate(['/home'])
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'firstName':new FormControl('',[Validators.required]),
      'lastName':new FormControl('',[Validators.required]),
      'userName':new FormControl('',[Validators.required, Validators.email]),
      'userPass':new FormControl('',[Validators.required , Validators.minLength(6)]),
      'mobile':new FormControl('' , [Validators.maxLength(11) , Validators.pattern(/^[0-9]{11}$/)]),
      'country':new FormControl('')
    })

  }

//   {
//     "name":"marina",
//    "lastName":"melad",
//    "email":"marinamelad.com",
//    "password":"123456",
//    "country":1,
//    "mobile":"0100000000"
// }

  onSubmit(){
    this.showErrorMessage = "";
    this.loaderStatus = true ;
    console.log(this.loginForm.value)
    this.obj ={
      "name": this.loginForm.value.firstName ,
      "lastName": this.loginForm.value.lastName ,
      "email": this.loginForm.value.userName ,
      "password":this.loginForm.value.userPass,
      "mobile":this.loginForm.value.mobile,
      "country":this.loginForm.value.country,
  }
    this.authService.signin(this.obj).subscribe((result:any)=>{
      console.log(result)
      if(result.statusCode == 0){
        this.loaderStatus = false ;
        this.messageService.add({severity:'success', summary: 'Success', detail: result.message});
        this.router.navigate(['/login'])

      }else{
        this.loaderStatus = false ;
        this.showErrorMessage = "Invalid username or password";
        this.messageService.add({severity:'error', summary: 'Error', detail: this.showErrorMessage});

      }


    },(error:any)=>{
      console.log(error)
      // this.router.navigate(['/signup'])
      this.loaderStatus = false ;
      this.showErrorMessage = error?.error.message;
      this.messageService.add({severity:'error', summary: 'Error', detail: this.showErrorMessage});

    })
  }


  limitInputLength(event:any){
    const maxLength = 11;

    if (event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
      this.loginForm.get('mobile')?.setValue(event.target.value);
    }else{
      this.loginForm.get('mobile')?.setValue(event.target.value);

    }

  }

}
