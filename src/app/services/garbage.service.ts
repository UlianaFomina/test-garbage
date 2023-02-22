import { IGarbageModel } from './../models/garbage.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GarbageService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IGarbageModel[]> {
    return this.http.get<IGarbageModel[]>(
      'https://garbage-api.onrender.com/api/get-garbages'
    );
  }
  postGarbage(body: object) {
    return this.http.post<IGarbageModel>(
      'https://garbage-api.onrender.com/api/create-garbage',
      body
    );
  }
  removeById(id: string) {
    return this.http.get<IGarbageModel[]>(
      `http://garbage-api.onrender.com/api/remove-garbage/${id}`
    );
  }
  updateById(id: string, body: object) {
    return this.http.post<IGarbageModel>(
      `https://garbage-api.onrender.com/api/update-garbage/${id}`,
      body
    );
  }
}
