import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { BlogService } from '../../Services/blog.service';
import * as moment from 'moment';

@Component({
  selector: 'app-blog',
  templateUrl:'./blog.component.html',
  styleUrls: ['./blog.component.css'],
})

export class BlogComponent implements OnInit {

  createBlog: FormGroup;
  allBlogs;

  public image: File;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
  ) { 
    this.validators()
  }

  public apiURL = this.blogService.apiURL

  ngOnInit(): void {
    this.blogAll()
  }
  
  validators(){
    this.createBlog = this.formBuilder.group({
      name:['', Validators.required],
      description:['', Validators.required],
      date:['', Validators.required],
      image: [null, Validators.required]
    })
  }

  saveBlog(){
    if(this.createBlog.valid){
      const blog = this.createBlog.value
      const formData = new FormData()

      formData.append('name', blog.name);
      formData.append('description', blog.description);
      formData.append('date', blog.date);
      formData.append('image', this.image);
      
      this.blogService.createBlog(formData).subscribe(
        (dataBlog)=>{
          console.log(dataBlog)
          this.createBlog.reset()
          alert('Blog creado exitosamente')
        },(error)=>{
          console.error('Error', error)
        }
      )

    }else{
      alert('Todos los campos deben estar llenos')
    }
  }
 
  blogAll(){
    this.blogService.blogAll().subscribe(
      (blogs)=>{
        this.allBlogs = blogs
        
      }, (error)=>{
        console.error('Error ', error)
      }
    )
  }

  prepareImage(event: any){
    this.image = <File>event.target.files[0]//el que recibe varios elementos
  }

}
