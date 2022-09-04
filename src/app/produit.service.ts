import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http :HttpClient, ) { }
  public url = environment.apiUrl
   

  addProduitt(produit:any){
//console.log("service",produit,this.url + '/produit/addproduit')
  return this.http.post<any>('http://localhost:5000/produit/addproduit' ,produit); //send data on th body (,)
  }
getallproduit(){
  return this.http.get<any>('http://localhost:5000/produit/getall');
}
getbyid(id:any){
  return this.http.get<any>('http://localhost:5000/produit/getid/'+id); //send data on the url (+)
}
delete(id:any){
  return this.http.delete<any>('http://localhost:5000/produit/delete/'+id); //send data on the url (+)
}
update(id:any,produit:any){
  return this.http.put<any>('http://localhost:5000/produit/'+id,produit); //send data on the url (+)
}
}
