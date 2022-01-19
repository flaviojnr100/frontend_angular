import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaServiceService } from 'src/app/shared/service/pessoa-service.service';
import { SnackbarCustomComponent } from '../snackbar-custom/snackbar-custom.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  isMensagem:Boolean = false;
  titleMensagem:String="";
  contentMensagem:String="";
  formulario!: FormGroup;
  constructor(private formBuild:FormBuilder,private snack:MatSnackBar,public dialogRef: MatDialogRef<EditComponent>,private service:PessoaServiceService,@Inject(MAT_DIALOG_DATA) public data: Pessoa,) { }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario(){
    this.formulario = this.formBuild.group({
      nome:[this.data.nome,Validators.required],
      sobrenome:[this.data.sobrenome,Validators.required],
      email:[this.data.email,[Validators.email,Validators.required]],
      senha:[null,Validators.required],
      senhaAgain:[null,Validators.required],
    });
  }

  editar():void{
    
    if(this.formulario.value.senha == this.formulario.value.senhaAgain){
      
      this.formulario.removeControl('senhaAgain');
      this.service.editPessoa(this.formulario.value,this.data.id).subscribe(data=>{});
            
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
        verticalPosition:'bottom',
      });

  }

}
