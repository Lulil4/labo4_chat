import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  constructor(private db: AngularFirestore) { }

  public guardarMensaje(mensaje, fecha, email, usuario, milisec){
    return this.db.collection("mensajes").add({
      mensaje: mensaje,
      fecha: fecha,
      email: email,
      usuario: usuario,
      fechaMilisec: milisec
    });
  }

  public traerListaMensajes(){
    return this.db.collection("mensajes").valueChanges();
  }
}
