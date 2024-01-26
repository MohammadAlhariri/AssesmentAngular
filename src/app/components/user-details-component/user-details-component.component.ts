import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { User} from '../../shared/user.model';

@Component({
  selector: 'app-user-details-component',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './user-details-component.component.html',
  styleUrl: './user-details-component.component.css'
})
export class UserDetailsComponentComponent {

hide=false;
  user: User = { id: 0, first_name: "", last_name: "", email: "", avatar:"" };

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const url = `https://reqres.in/api/users/${id}`;
    this.http.get(url).subscribe((response: any) => {
      this.user = response.data;
    });
    this.hide=true;
  }

  goBack() {
    window.history.back();
  }
}
