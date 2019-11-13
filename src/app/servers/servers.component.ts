import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverCreationStatus = 'The server wasn\'t created';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  // username = '';
  secretContent = 'Secret Content';
  showSecretContent = false;
  clicks = [];
  currentClick = 0;

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onDisplayDetails() {
    this.showSecretContent = !this.showSecretContent;
    this.clicks = [...this.clicks, { current: ++this.currentClick, date: new Date() }]
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
