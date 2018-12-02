import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseUrl';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient, private msgService: ProcessHTTPMsgService) { }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    const httpOpt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Feedback>(baseURL + 'feedback', feedback, httpOpt)
                    .pipe(catchError(this.msgService.handleError));
  }
}
