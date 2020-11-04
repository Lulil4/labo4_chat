import { Component, OnInit } from '@angular/core';
import { ItemsToolbarService } from "../../services/items-toolbar.service";

interface MenuItem{
texto : string;
icono : string;
ruta : string;
}

@Component({
  selector: 'app-mi-toolbar',
  templateUrl: './mi-toolbar.component.html',
  styleUrls: ['./mi-toolbar.component.scss']
})
export class MiToolbarComponent implements OnInit {

  menuItems: MenuItem[] = this.items.menuItems;
  
  constructor(private items : ItemsToolbarService) { }

  ngOnInit(): void {
  }

}
