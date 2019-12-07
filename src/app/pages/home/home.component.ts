import { Component, OnInit } from "@angular/core";
import {
  faCoffee,
  faMapMarked,
  faMars,
  faVenus,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import { ApiService } from "src/app/services/api.service";
import { People } from "src/app/model/people";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private service: ApiService) {}

  people: People[];
  faMapMarked = faMapMarked;
  faMars = faMars;
  faVenus = faVenus;
  faEnvelope = faEnvelope;

  ngOnInit() {
    this.peopletList();
  }

  peopletList() {
    this.service.list().subscribe(
      res => (this.people = res),
      err => {
        console.log(err);
      }
    );
  }
}
