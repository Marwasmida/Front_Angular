import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProduitService } from 'src/app/produit.service'
@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  tabProduit:any;
  constructor(private router :Router,private _produit :ProduitService) { }

  ngOnInit(): void {
    this._produit.getallproduit().subscribe((res)=>{console.log(res)
    this.tabProduit=res})
  }
 viewAff(p :any){
   this.router.navigate(['/modifierproduit',p._id])
   console.log("hi",p.id);
 }

 viewAff2(p :any){
  console.log("hi",p.name);
}
deleteproduit(p:any){
  console.log('hi',p._id)
  this._produit.delete(p._id).subscribe((res)=>{console.log(res)
  if(res){
    this.ngOnInit()
  }})
}
}
