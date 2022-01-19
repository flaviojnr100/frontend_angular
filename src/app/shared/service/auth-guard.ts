import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private router:Router){}

    canActivate(){

        if(window.localStorage.getItem("status") == "logado"){
            return true;
        }else{
            this.router.navigate(['/']);
            return false;
        }
        
    }

}