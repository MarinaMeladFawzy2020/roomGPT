import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
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
      'userName':new FormControl('',[Validators.required , Validators.email]),
      'userPass':new FormControl('',[Validators.required])
    })


    if(sessionStorage.getItem('userName')){
      this.loginForm.get('userName')?.setValue(sessionStorage.getItem('userName'));
    }

  }

//   {
//     "email":"test4@test.com",
//     "password":"123456"
// }
  onSubmit(){
    this.showErrorMessage = "";
    this.loaderStatus = true ;
    this.obj ={
      "email": this.loginForm.value.userName ,
      "password":this.loginForm.value.userPass
  }
    this.authService.login(this.obj).subscribe((result:any)=>{
      console.log(result)
      if(result.statusCode == 0){
        this.loaderStatus = false ;
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Done successfully'});
        this.router.navigate(['/home'])

      }else{
        this.loaderStatus = false ;
        this.showErrorMessage = "Invalid username or password";
        this.messageService.add({severity:'error', summary: 'Error', detail: this.showErrorMessage});

      }


    },(error:any)=>{
      console.log(error)
      this.router.navigate(['/login'])
      this.loaderStatus = false ;
      this.showErrorMessage = "Invalid username or password";
      this.messageService.add({severity:'error', summary: 'Error', detail: this.showErrorMessage});

    })
  }




}
