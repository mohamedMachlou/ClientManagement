import { Component, OnInit, inject, signal } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css',
})
export class ClientListComponent implements OnInit {
  clientService = inject(ClientService);
  clients = signal<Client[]>([]);
  clientsFilter = signal<Client[]>([]);
  clientStatus = signal<[]>([]);
  showClientInfos = signal<boolean>(false);
  clientEditId = signal<number>(0);
  client = signal<Client>({
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    grade: { id: 0, label: '' },
    status: [
      'Janvier',
      'Février',
      'Mars',
      'April',
      'Mai',
      'Juin',
      'Juilet',
      'Aout',
      'Septembre',
      'Octobre',
      'Nouvembre',
      'Décembre',
    ],
  });

  ngOnInit(): void {
    this.getAllClients();
    console.log(this.showClientInfos());
  }

  // Get All Clients
  getAllClients() {
    this.clientService.getAllClients().subscribe((clients) => {
      this.clients.set(clients);
    });
  }

  // Show and Hide Client Informations on click
  onClick(id: any) {
    this.setClientId(id);
    this.clientEditId.set(id);
    this.showClientInfos.set(true);
    this.clientsFilter.set(
      this.clients().filter((client: Client) => client.id == id)
    );
  }
  // Close More Infos Section Pop-up
  closeMoreInfos() {
    Swal.fire({
      title: 'Are you sure to close this ?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Close',
      // denyButtonText: `Stay a way`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.showClientInfos.set(false);
      }
    });
  }
  // Delete Client
  deleteClient() {
    Swal.fire({
      title: 'Are you sure to delete this client ?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('on delete fct : ', this.clientEditId());
        this.getAllClients();
        this.clientService
          .deleteClient(this.clientEditId())
          .subscribe((res) => {
            this.clients().filter(
              (client) => client.id !== this.clientEditId()
            );
            console.log('inside delete fct : ', this.clientEditId());
          });
        this.showClientInfos.set(false);
      }
    });
  }
  // Set Client Edit ID to database
  setClientId(id: number) {
    this.clientService.setClientEditID(id);
  }
}
