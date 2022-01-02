import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friend } from './friend';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class FriendService {
    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient){}

    public getFriends(): Observable<Friend[]>{
        return this.http.get<Friend[]>(`${this.apiServerUrl}/friend/all`);
    }

    public addFriend(friend: Friend): Observable<Friend>{
        return this.http.post<Friend>(`${this.apiServerUrl}/friend/add`, friend);
    }

    public updateFriend(friend: Friend): Observable<Friend>{
        return this.http.put<Friend>(`${this.apiServerUrl}/friend/update`, friend);
    }

    public deleteFriend(friendId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/friend/delete/${friendId}`);
    }
}