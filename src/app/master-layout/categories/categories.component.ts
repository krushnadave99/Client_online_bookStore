import { Component } from "@angular/core";
import { CommonserviceService } from "../../commonservice.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrl: "./categories.component.scss",
})
export class CategoriesComponent {
  bookList: any;
  bookCat: any;
  constructor(
    public Commonservice: CommonserviceService
  ) { }
  ngOnInit(): void {
    this.book()
    this.bookCate()
  }
  book() {
    this.Commonservice.getBook().subscribe((e: any) => {
      if (e.code == 0) {
        this.bookList = e.data;
      }
    })
  }
  bookCate() {
    this.Commonservice.getBookCat().subscribe((e: any) => {
      if (e.code == 0) {
        this.bookCat = e.data;
      }
    })
  }
  addtocart(item) {
    let addToCart = this.Commonservice.addtoCartList.push(item);
    // localStorage.setItem('addtocart', JSON.stringify(addToCart));
  }
  selectType(item){
    console.log(item);
  }
}
