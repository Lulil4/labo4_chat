import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  spinner:boolean;

  constructor(private auth : AuthService) { }

  ngOnInit(): void {   
  }

  cerrarSesion(){ 
    this.spinner=true;
    setTimeout(() => {
      this.auth.signOut();
      this.spinner=false;
    },3000);
  }
}
