import { Component, OnInit, Input } from '@angular/core';
import { UserDetailsConfig } from 'src/app/users.config';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
})
export class ClientDetailsComponent implements OnInit {

  @Input() clientsData  : UserDetailsConfig;

  constructor() { }

  ngOnInit() {
  }

}
