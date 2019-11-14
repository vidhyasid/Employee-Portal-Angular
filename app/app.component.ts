import { Component , OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'employee Portal';

 constructor( private route: ActivatedRoute,
  private router: Router) { }

 ngOnInit() {
  this.router.navigate(['/login']); 
} 
  
}
