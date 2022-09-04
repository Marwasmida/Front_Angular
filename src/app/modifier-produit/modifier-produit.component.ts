import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes,ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/produit.service'

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {

  constructor(private router :Router, private _produit :ProduitService,private route:ActivatedRoute) { }
  produit = {
    name : "", desc : "", prix : "", cat : ""
  }
  id :any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this._produit.getbyid(this.id).subscribe((res)=>{ console.log(res)
      this.produit.name=res.name;
      this.produit.desc=res.desc;
      this.produit.prix=res.prix;
      this.produit.cat=res.category
    
    })
   
  }
  goToListProduit(){
    this.router.navigate(['/listproduit'])
  }
  addProduit2(){
    console.log(this.produit)
  }
   updateProdui(){
     this._produit.update(this.id,this.produit).subscribe((res)=>{
       console.log(res)
     })
   }
}
