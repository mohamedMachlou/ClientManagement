import { Component, OnInit, inject, signal } from '@angular/core';
import { Grade } from '../../models/grade';
import { GradeService } from '../../services/grade.service';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.css',
})
export class ClientCreateComponent implements OnInit {
  grades = signal<Grade[]>([]);
  newClient = signal<Client>({
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    grade: { id: 0, label: '' },
    status: false,
    subDate: new Date(),
  });
  // Injection of the services
  gradeService = inject(GradeService);
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.getAllGrades();
    console.log(this.newClient().subDate);
  }

  // Reset Client Information
  resetClientInfos() {
    this.newClient.set({
      id: 0,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      grade: { id: 0, label: '' },
      status: false,
      subDate: new Date(),
    });
  }

  // Get All Grades
  getAllGrades() {
    this.gradeService.getAllGrades().subscribe((grades) => {
      this.grades.set(grades);
    });
  }

  // Create New Client
  createNewClient() {
    this.clientService.createClient(this.newClient()).subscribe((response) => {
      console.log(response);
      this.resetClientInfos();
    });
  }
}
