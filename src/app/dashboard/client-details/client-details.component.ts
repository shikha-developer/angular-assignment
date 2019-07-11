import { Component, OnInit, Input } from '@angular/core';
import { UserDetailsConfig } from 'src/app/shared/interfaces/users.config';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
})
export class ClientDetailsComponent implements OnInit {

  @Input() clientsData  : UserDetailsConfig;
  //input property from parent component
  constructor() { }

  ngOnInit() {
  }

}
