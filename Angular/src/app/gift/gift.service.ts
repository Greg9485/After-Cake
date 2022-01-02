import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gift } from './gift';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class GiftService {
    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient){}

    public getGift(): Observable<Gift[]>{
        return this.http.get<Gift[]>(`${this.apiServerUrl}/gift/all`);
    }

    public addGift(gift: Gift): Observable<Gift>{
        return this.http.post<Gift>(`${this.apiServerUrl}/gift/add`, gift);
    }

    public updateGift(gift: Gift): Observable<Gift>{
        return this.http.put<Gift>(`${this.apiServerUrl}/gift/update`, gift);
    }

    public deleteGift(giftId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/gift/delete/${giftId}`);
    }
}