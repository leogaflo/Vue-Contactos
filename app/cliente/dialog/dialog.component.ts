import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ApiClienteService } from "src/app/services/api-cliente.service";
import { Clientes } from "src/app/Interfase/Cliente"
import { inject } from "@angular/core/testing";
@Component({
    templateUrl: 'dialog.component.html'
})

export class DialogClienteComponent{
    public nombre! :string;
    public id!: number;

    constructor(
        public dialogRef: MatDialogRef<DialogClienteComponent>,
        public apiCliente: ApiClienteService,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public cliente : Clientes
    ){ 
        if(this.cliente !== null){
            this.nombre = cliente.Name;
        }
    }

    close(){
        this.dialogRef.close();
    }

    addCliente(){
        const cliente: Clientes = {Name: this.nombre , id: 0 }
        this.apiCliente.addCliente(cliente).subscribe(response => {
            if(response.code === 1){

                this.dialogRef.close();
                this.snackBar.open('Cliente '+cliente.Name+' Agregado con Exito','',{
                    duration: 2000});
                }else{
                    this.snackBar.open('Error al Agregar registro')
                }
            })
    }

    edithCliente() {
        const cliente: Clientes = {Name: this.nombre , id: this.cliente.id }
        this.apiCliente.editCliente(cliente).subscribe(response=>{
            if(response.code === 1 ){
                this.dialogRef.close();
                this.snackBar.open('Ha sido cambiado el nombre','',{
                    duration: 2000
                });
            }else{
                this.snackBar.open('Error al editar registro')
            }
        })
    }
}