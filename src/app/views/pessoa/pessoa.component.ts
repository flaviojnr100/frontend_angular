import { DataSource } from '@angular/cdk/table';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaServiceService } from 'src/app/shared/service/pessoa-service.service';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { InfoComponent } from './info/info.component';




@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  pessoas:Pessoa[]=[];
  displayColuna:string[] = ["nome","sobrenome","email","acoes"];
  dataSource:ExampleDataSource = new ExampleDataSource(this.pessoas);   
  constructor(
    public pessoaService:PessoaServiceService,
    public dialog:MatDialog,
    
  ) {
    
  }

  ngOnInit(): void {
    this.getPessoas();
  }
  getPessoas(){
    this.pessoaService.fetchPessoas().subscribe(data =>{
    this.pessoas = data;  
    this.dataSource.setData(this.pessoas);   
  },erro=>{
    console.log(erro.status);
  },
  );
  
  }

  openDialog(){
    const dialogRef = this.dialog.open(CreateComponent,{width:'250px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogInfo(pessoa:Pessoa){
    const dialogRef = this.dialog.open(InfoComponent,{width:'250px',data:pessoa});

  }
  openDialogEdit(pessoa:Pessoa){
    const dialogRef = this.dialog.open(EditComponent,{width:'250px',data:pessoa});

  }
  openDialogDelete(pessoa:Pessoa){
    const dialogRef = this.dialog.open(DeleteComponent,{width:'250px',data:pessoa});

  }
  
  
  
}


class ExampleDataSource extends DataSource<Pessoa> {
  private _dataStream = new ReplaySubject<Pessoa[]>();
  private pessoas:Pessoa[] = [];
  constructor(initialData: Pessoa[]) {
    super();
    this.pessoas = initialData;
    this.setData(this.pessoas);
  }
  
  connect(): Observable<Pessoa[]> {
    return this._dataStream;
  }

  addData(pessoa:Pessoa){
    this.pessoas.push(pessoa);
    
  }

  disconnect() {}

  setData(data: Pessoa[]) {
    this._dataStream.next(data);
  }
}

