import { Component } from "@angular/core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "mdc-people";
  faHeart = faHeart;
}
