import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
    const id: number = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((queryParams: Params) => {
      // this.server = this.serversService.getServer(+params['id']);
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.fragment.subscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
