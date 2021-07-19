import { Component, OnInit } from '@angular/core';
import { ApiClienteService } from '../services/api-cliente.service';
import { Response } from '../Interfase/response';
import { DialogClienteComponent } from './dialog/dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; 
import { Clientes } from '../Interfase/Cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.sass']
})
export class ClienteComponent implements OnInit {

  public lst: any[] = [];
  public cols: string[]= ['Id','Nombre','Action'];
readonly width: string = '255px' 
  constructor(
    private apiClient: ApiClienteService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    
    this.getCliente();
  
  }

  /* Aqui ejecuto los los metodos para hacer request al servidor, pasandoles los datos necesarios*/

  getCliente(){
    this.apiClient.getCliente().subscribe(response => {
      this.lst = response.data;
    })
  }

  addClients(){
    const dialogRef = this.dialog.open(DialogClienteComponent,{
      width:this.width
    });
    dialogRef.afterClosed().subscribe(response => {
      this.getCliente();
    });
  }

  edithClients(clientes: Clientes ){
    const dialogRef = this.dialog.open(DialogClienteComponent,{
      width:this.width,
      data:clientes
    });
    dialogRef.afterClosed().subscribe(response => {
      this.getCliente();
    });
  }
  
}
