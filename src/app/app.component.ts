import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {
    $('body').css("min-height",$(window).height());
    $('.wrap-box').css("min-height",$(window).height());
    setTimeout(function(){
      $('.wrap-box').css("min-height",$(window).height());
    },0);
    window.onresize = function() {
      $('body').css("min-height",$(window).height());
      $('.wrap-box').css("min-height",$(window).height());
    }
  }
}
