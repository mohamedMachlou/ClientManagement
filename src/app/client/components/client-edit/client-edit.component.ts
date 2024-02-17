import { Component, OnInit, inject, signal } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { Grade } from '../../models/grade';
import { GradeService } from '../../services/grade.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrl: './client-edit.component.css',
})
export class ClientEditComponent implements OnInit {
  id = signal<number>(3);
  clientEditId = signal<number>(0);
  grades = signal<Grade[]>([]);
  clientEdit = signal<Client>({
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
  // Services
  clientService = inject(ClientService);
  gradeService = inject(GradeService);

  ngOnInit(): void {
    this.getAllGrades();
    this.getClientId();
    this.getClientById();
    console.log('this is my ID from EDIT : ', this.clientEditId());
  }
  // Reset Client Infos
  // resetClientInfos() {
  //   this.clientEdit.set({
  //     id: 0,
  //     firstName: '',
  //     lastName: '',
  //     phoneNumber: '',
  //     grade: { id: 0, label: '' },
  //     status: [
  //       'Janvier',
  //       'Février',
  //       'Mars',
  //       'April',
  //       'Mai',
  //       'Juin',
  //       'Juilet',
  //       'Aout',
  //       'Septembre',
  //       'Octobre',
  //       'Nouvembre',
  //       'Décembre',
  //     ],
  //   });
  // }
  // Get Client Edit Id from Database
  getClientId() {
    this.clientEditId.set(this.clientService.getClientEditID());
  }

  // Get All School Grades from database
  getAllGrades() {
    this.gradeService.getAllGrades().subscribe((grades) => {
      this.grades.set(grades);
    });
  }

  // Get Client by ID
  getClientById() {
    this.clientService.getClient(this.clientEditId()).subscribe((client) => {
      this.clientEdit.set(client);
      console.log(client);
    });
  }

  // Update Client Informations
  updateClientInfos() {
    this.clientService
      .updateClient(this.clientEditId(), this.clientEdit())
      .subscribe((clientEditing) => {
        console.log(clientEditing);
      });
  }
}
