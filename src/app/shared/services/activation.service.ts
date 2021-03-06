import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {HttpHeaders} from '@angular/common/http';
import {Activation} from 'app/models/activation';

@Injectable()
export class ActivationService {

    constructor(private http: HttpClient, private authService: AuthService) {
    }

    getActivation = (id): Observable<Activation> => {
        return this.http.get<Activation>(`${environment.api.activation.getOne}/${id}`);
    }
}
