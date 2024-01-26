import { Component, Input } from '@angular/core';
import { User} from '../../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() user: User = { id: 1, first_name: "", last_name: "", email: "", avatar:"" };

  constructor(private router: Router) { }

  navigateToUserDetails() {
    this.router.navigate(['/users', this.user.id]);

  }
}
