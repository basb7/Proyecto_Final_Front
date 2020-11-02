import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from '../models/Blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  apiURL= 'http://localhost:3000'

  constructor(
    private http: HttpClient,
    
  ) { }

  createBlog(formdata){
    return this.http.post<Blog>(`${this.apiURL}/blog/create`, formdata)
  }

  blogAll(){
    return this.http.get(`${this.apiURL}/blog/all`)
  }
}
