import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaServiceService } from 'src/app/shared/service/pessoa-service.service';
import { SnackbarCustomComponent } from '../snackbar-custom/snackbar-custom.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  isMensagem:Boolean = false;
  titleMensagem:String="";
  contentMensagem:String="";
  formulario!: FormGroup;
  constructor(private formBuild:FormBuilder,private snack:MatSnackBar,public dialogRef: MatDialogRef<CreateComponent>,private service:PessoaServiceService) {
    
   }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario(){
    this.formulario = this.formBuild.group({
      nome:[null,Validators.required],
      sobrenome:[null,Validators.required],
      email:[null,[Validators.email,Validators.required]],
      senha:[null,Validators.required],
      senhaAgain:[null,Validators.required],
    });
  }

  criar():void{
    
    if(this.formulario.value.senha == this.formulario.value.senhaAgain){
      
      this.formulario.removeControl('senhaAgain');
      this.service.createPessoa(this.formulario.value).subscribe(res=>{});
            
      this.openSnackbar();
      window.location.reload();
    }else{
      this.isMensagem = true;
      this.titleMensagem = "Senhas diferentes!";
      this.contentMensagem = "Você deve digitar as mesmas senhas";
    }
    
    
    
    
  }
  
  onNoClick():void{
    this.dialogRef.close();
  }

  openSnackbar(){
    this.snack.openFromComponent(
      SnackbarCustomComponent,{
        duration:5000,
        panelClass:'alerta',
        horizontalPosition:'right',
        verticalPosition:'bottom'
      });

  }

}
