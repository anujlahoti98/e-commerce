import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor() { }

  public ngOnInit()
  {
    $(document).ready(function()
    {
      // $("button").click(function()
      // {
      //   var a=$("#one")
      //   a.animate({marginLeft:'100px'},"slow")
      //   a.animate({fontSize:'5em'},"slow")
      // })
    
      $("#onea").show()
      $("#twoa").hide()
      $("#threea").hide()
     
      $("#one").click(function()
      {
        
        $("#onea").slideToggle(function()
        {
          $("#continue").click(function()
          {
            $("#two").click(function()
           {

             $("#twoa").slideDown()
        
           })
            $("#three").click(function()
              {
        
                $("#threea").slideToggle()
             })
          
        
           })
      
        })
        
      })
      
    
    })
    }
  
  }
