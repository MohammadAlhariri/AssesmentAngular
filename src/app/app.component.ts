import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { CardComponent } from './components/card/card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, FormsModule,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAssesment';




  
 
}



