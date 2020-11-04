import { Component, OnInit } from '@angular/core';
import { MensajesService } from "../../services/mensajes.service";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

   mensajes = new Array();
   email;
   usuario;
   mensaje;

  constructor(private db: MensajesService, private auth : AuthService) { }

  ngOnInit(): void {
    this.email = this.auth.getUser();
    this.auth.traerUsuarioPorCorreo(this.email).subscribe(res => {
      let lista = res;
      lista.forEach(u=>this.usuario = u["usuario"]);
    });

    this.db.traerListaMensajes().subscribe(doc => {
      
      this.mensajes = doc;
      
      this.mensajes = this.mensajes.sort((a, b) => {
        let flag : number = 0;
        if (a.fechaMilisec < b.fechaMilisec) {
          flag = -1;
        }
        else if (a.fechaMilisec > b.fechaMilisec) {
          flag = 1;
        }
        return flag;
      });

      this.mensajes.forEach(m => {
        if (m.email == this.email){
          m.mio = true;
        }

        if (m.email != this.email){
          m.mio = false;
        }
      });

    });
  }

  enviarMensaje(){
    if(this.mensaje != undefined && this.mensaje != ""){
      let milisec = Date.now();
      let fecha = new Date(milisec);
      let fechaCompleta = fecha.toString().split(" ");
      let fechaTransformada = `${fechaCompleta[1]} ${fechaCompleta[2]} ${fechaCompleta[3]} ${fechaCompleta[4]}`;
      console.log(this.mensaje);
      console.log(fechaTransformada);
      console.log(this.email);
      console.log(this.usuario);
      console.log(milisec);
      this.db.guardarMensaje(this.mensaje, fechaTransformada, this.email, this.usuario, milisec);
      this.mensaje = "";
    }
  }

  
}
