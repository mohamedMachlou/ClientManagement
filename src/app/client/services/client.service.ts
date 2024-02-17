import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  apiUrl = 'http://localhost:3000/client';
  http = inject(HttpClient);
  clientEditId: number = -1;
  clientEditStatus: boolean = false;
  constructor() {}

  // Get all clients
  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  // Get client by id
  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(this.apiUrl + `/${id}`);
  }

  // Persist new client
  createClient(data: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, data);
  }

  // UpdateClient by id
  updateClient(id: number, data: Client): Observable<Client> {
    return this.http.put<Client>(this.apiUrl + `/${id}`, data);
  }

  // Delete Client dy id
  deleteClient(id: number): Observable<Object> {
    return this.http.delete<Object>(this.apiUrl + `/${id}`);
  }

  // Get Client Editting ID and Share it with Edit Component
  setClientEditID(id: number) {
    this.clientEditId = id;
  }
  getClientEditID(): number {
    return this.clientEditId;
  }
}
