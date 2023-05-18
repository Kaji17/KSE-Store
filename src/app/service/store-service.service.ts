import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IUser } from '../models/user';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/product';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})


export class StoreServiceService {

  host = environment.host

  constructor(private http: HttpClient) { }

  // Récupération de la liste des Products
  public getProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.host}/marchandise/getall`).pipe(
      catchError(this.handleError)
    )
  }

  //Création d'un nouvel product
  public addProduct(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.host}/marchandise/add?marchandise=&file=`, user, httpOptions)
  }

  //Modification d'une product
  public upDateProduct(id: number, user: IProduct): Observable<Object> {
    return this.http.put(`${this.host}/marchandise/update/${id}?marchandise=&file=`, user, httpOptions).pipe(
      tap(ele => console.log("modifier avec succès", ele))
    )
  }

  //Supprimer une product
  public deleteProduct(id: number): Observable<Object> {
    return this.http.delete(`${this.host}/marchandise/delete/${id}`, httpOptions).pipe(
      tap(ele => console.log("supprimer", ele))
    )
  }

  public login(user: IUser): void {
    const body = {
      utilisateuremail: user.utilisateuremail,
      utilisateurpassword: user.utilisateurpassword
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(`${this.host}/utilisateur/login`, body, { headers: headers, observe: 'response' }).subscribe(
      (response: HttpResponse<any>) => {
        // Récupérer le statut de la réponse
        const status = response.status;
        console.log('Statut de la requête :', status);
        this.saveStatus(status)
      },
      (error) => {
        // Erreur de la requête
        this.saveStatus(error)
        console.error('Erreur de connexion', error);
      }
    );


  }

  saveStatus(codeStatus: any): void {
    // Convertir l'objet en chaîne JSON
    const jsonData = JSON.stringify(codeStatus);

    // Sauvegarder la chaîne JSON dans le localStorage avec une clé spécifique
    localStorage.setItem('StatusCode', jsonData);
  }

  getStatus(): any {
    // Récupérer la chaîne JSON depuis le localStorage avec la clé spécifique
    const jsonData = localStorage.getItem('StatusCode');

    // Convertir la chaîne JSON en objet
    const data = JSON.parse(jsonData!);
    return data;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
