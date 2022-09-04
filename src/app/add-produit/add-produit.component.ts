import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProduitService } from 'src/app/produit.service'
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor(private router :Router,private _produit :ProduitService) { }
produit = {
  name : "", desc : "", prix : "", cat : ""
}

  ngOnInit(): void {
  }
  goToListProduit(){
    this.router.navigate(['/listproduit'])
  }
  addProduit(){
   // console.log(this.produit)
    this._produit.addProduitt(this.produit).subscribe((RES)=>{
      console.log('RESS',RES)
    })
  }
}
