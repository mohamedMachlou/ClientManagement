import { Component, OnInit, inject, signal } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  months = signal<[]>([]);

  router = inject(Router);
  client = signal<Client>({
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    grade: { id: 0, label: '' },
    status: false,
    subDate: new Date(),
    months: [
      {
        title: 'January',
        active: true,
      },
      {
        title: 'February',
        active: true,
      },
      {
        title: 'March',
        active: false,
      },
      {
        title: 'April',
        active: false,
      },
      {
        title: 'May',
        active: false,
      },
      {
        title: 'June',
        active: false,
      },
      {
        title: 'July',
        active: false,
      },
      {
        title: 'August',
        active: false,
      },
      {
        title: 'September',
        active: false,
      },
      {
        title: 'October',
        active: false,
      },
      {
        title: 'November',
        active: false,
      },
      {
        title: 'December',
        active: false,
      },
    ],
  });

  ngOnInit(): void {
    this.getAllClients();
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
    console.log(this.clientsFilter());
  }

  // Manage Month
  monthManagement(month: string) {
    console.log(month);
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
            this.router.navigate(['clientlist']);
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
