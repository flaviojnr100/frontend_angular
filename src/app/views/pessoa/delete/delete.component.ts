import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaServiceService } from 'src/app/shared/service/pessoa-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteComponent>,private service:PessoaServiceService,@Inject(MAT_DIALOG_DATA) public data: Pessoa) { }

  ngOnInit(): void {
  }

  deletar(){
    this.service.deletePessoa(this.data.id).subscribe(res=>{});
    window.location.reload();
  }

  onNoClick():void{
    this.dialogRef.close();
  }

}
