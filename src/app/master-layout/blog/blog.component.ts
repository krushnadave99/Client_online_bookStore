import { Component } from "@angular/core";
import { CommonserviceService } from "../../commonservice.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrl: "./blog.component.scss",
})
export class BlogComponent {
  blogList: any;
  constructor(
    public Commonservice: CommonserviceService
  ) { }
  ngOnInit() {
    this.blogGet();
  }
  blogGet() {
    this.Commonservice.getBlog().subscribe((e: any) => {
      if (e.code == 0) {
        this.blogList = e.data;
      }
    })
  }
}
