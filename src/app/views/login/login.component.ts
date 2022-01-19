import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario!:FormGroup;
  isMensagem:Boolean = false;
  titleMensagem:String="";
  contentMensagem:String="";
  constructor(private formBuild:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.configurarLogin();
  }

  configurarLogin(){
    this.formulario = this.formBuild.group({
      email:[null,[Validators.email,Validators.required]],
      senha:[null,Validators.required]
    });
  }
  logar():void{
    if(this.formulario.value.email == "flavio@gmail.com" && this.formulario.value.senha == "123"){
      window.localStorage.setItem('status','logado');
      this.router.navigate(['/dashboard']);
      console.log("Logou!!!");
    }else{
      this.isMensagem = true;
      this.titleMensagem = "Aviso";
      this.contentMensagem = "Usuário invalido!";
    }

  }

}
