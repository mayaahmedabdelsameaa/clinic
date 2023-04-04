import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctor } from '../models/idoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
private baseUrl = 'http://localhost:3000/doctors';
  constructor(public http: HttpClient) { }

  getAllDoctors() {
    return this.http.get<IDoctor[]>(this.baseUrl);
  }
  getDoctorById(id:number){
    return this.http.get<IDoctor>(`${this.baseUrl}/${id}`)
  }
  deleteDoctor(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  updateDoctor(udoctor:any){
    return this.http.patch(`${this.baseUrl}/${udoctor.Doc_id}`,udoctor)
  }
  addDoctor(doctor:FormData):Observable<any>{
    return this.http.post<any>(this.baseUrl,doctor);
  }
}
