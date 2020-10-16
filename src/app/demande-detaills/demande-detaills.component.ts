import { Component, OnInit } from '@angular/core';
import { Demande } from '../demande';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-demande-detaills',
  templateUrl: './demande-detaills.component.html',
  styleUrls: ['./demande-detaills.component.css']
})
export class DemandeDetaillsComponent implements OnInit {

  id: number;
  demande: Demande;

  constructor(private route: ActivatedRoute,private router: Router,
    private demandeService: DemandeService) { }

  ngOnInit() {
    this.demande = new Demande();

    this.id = this.route.snapshot.params['id'];
    
    this.demandeService.getDemande(this.id)
      .subscribe(data => {
        console.log(data)
        this.demande = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['demandes']);
  }
}



