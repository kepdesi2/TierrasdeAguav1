import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Insertar } from '../models/Insertar';
import { AngularFireDatabase } from 'angularfire2/database';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
  rutaObservable: Observable<any[]>;
  prueba: any;
  constructor( private router: Router,private cookieService: CookieService,private db: AngularFireDatabase) { }

  ngOnInit() {
  this.rutaObservable = this.getRutas('/rutas');
}
  
getRutas(listPath): Observable<any[]> {
  return this.db.list(listPath).valueChanges();
}

/*onSelect(insertar: Insertar): void {
  this.selectedRuta = insertar;
}*/


}

