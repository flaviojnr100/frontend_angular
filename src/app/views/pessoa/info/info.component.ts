import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pessoa } from 'src/app/shared/model/pessoa.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InfoComponent>,@Inject(MAT_DIALOG_DATA) public data: Pessoa,) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onClose():void{
    this.dialogRef.close();
  }
}
