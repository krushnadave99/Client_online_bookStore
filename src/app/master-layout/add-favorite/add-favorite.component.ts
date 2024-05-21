import { Component } from '@angular/core';
import { CommonserviceService } from '../../commonservice.service';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrl: './add-favorite.component.scss'
})
export class AddFavoriteComponent {
  constructor(public Commonservice: CommonserviceService) { }
}
