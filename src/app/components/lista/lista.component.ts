import { Component, OnInit } from '@angular/core';

import {ConService} from '../../services/con.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items:any;
  itemEditar:any={
    name:'',
    description:''
};
  constructor(private con:ConService) { 
    this.con.retornaItems().subscribe(items=>{
      this.items = items;      
    })
  }

  ngOnInit(): void {
  }
  eliminar(id:any){    
    this.con.eliminar(id);
  }
  editar(item:any){  
    this.itemEditar=item;
  }
  editarForm(){
    this.con.editar(this.itemEditar);
  }
}
