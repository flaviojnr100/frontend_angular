import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {delay, take} from 'rxjs/operators';
import { Pessoa } from '../model/pessoa.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {
  endpoint = "http://127.0.0.1:8000/pessoas/";
  create = "http://127.0.0.1:8000/pessoa/create";
  edit = "http://127.0.0.1:8000/pessoa/edit";
  delete = "http://127.0.0.1:8000/pessoa/delete";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
    
  };
  constructor(private http:HttpClient) { }

  public fetchPessoas():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.endpoint,this.httpOptions,).pipe(
      delay(1000),
      take(1)
    );
  }
  public createPessoa(pessoa:any):Observable<Pessoa>{
    return this.http.post<Pessoa>(this.create,pessoa,this.httpOptions);

  }
  public editPessoa(pessoa:any,id:number):Observable<Pessoa>{
    return this.http.put<Pessoa>(this.edit+'/'+id,pessoa,this.httpOptions);
  }
  public deletePessoa(id:number):Observable<Pessoa>{
    return this.http.delete<Pessoa>(this.delete+"/"+id,this.httpOptions);
  }
}
