import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MenuComponent } from './views/menu/menu.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { PessoaComponent } from './views/pessoa/pessoa.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateComponent } from './views/pessoa/create/create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarCustomComponent } from './views/pessoa/snackbar-custom/snackbar-custom.component';
import { InfoComponent } from './views/pessoa/info/info.component';
import { EditComponent } from './views/pessoa/edit/edit.component';
import { DeleteComponent } from './views/pessoa/delete/delete.component';
import { AuthGuard } from './shared/service/auth-guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    PessoaComponent,
    CreateComponent,
    SnackbarCustomComponent,
    InfoComponent,
    EditComponent,
    DeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
