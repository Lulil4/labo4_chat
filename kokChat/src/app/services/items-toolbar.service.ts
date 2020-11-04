import { Injectable } from '@angular/core';

interface MenuItem{
  texto : string;
  icono : string;
  ruta : string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsToolbarService {

  menuItems: MenuItem[] = [
    {
      texto: "Iniciar sesion",
      icono: "sentiment_satisfied_alt",
      ruta: "login"
    },
    {
      texto: "Registrarse",
      icono: "person_add_alt_1",
      ruta: "registro"
    }
  ];

  constructor() { 
  }

  cambiarToolbarLogueado(){
    let itemChat ={
      texto: "Chat",
      icono: "chat_bubble_outline",
      ruta: "chat"
    };

    let itemCerrarSesion = {
      texto: "Cerrar Sesion",
      icono: "outlet",
      ruta: "logout"
    };
    this.menuItems.pop();
    this.menuItems.pop();
    this.menuItems.push(itemChat);
    this.menuItems.push(itemCerrarSesion);
  }

  cambiarToolbarSinSesion(){
    let itemIniciarSesion = {
      texto: "Iniciar sesion",
      icono: "sentiment_satisfied_alt",
      ruta: "login"
    };

    let itemRegistro = {
      texto: "Registrarse",
      icono: "person_add_alt_1",
      ruta: "registro"
    };

    this.menuItems.pop();
    this.menuItems.pop();
    this.menuItems.push(itemIniciarSesion);
    this.menuItems.push(itemRegistro);
  }
}
