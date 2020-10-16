import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Observable } from 'rxjs';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
 clients: Observable<Client[]>;

  constructor(private clientService: ClientService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clients = this.clientService.getClientsList();
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  clientDetails(id: number){
    this.router.navigate(['details', id]);
  }
  updateClient(id: number){
    this.router.navigate(['update', id]);
  }
}
