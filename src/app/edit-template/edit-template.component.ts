import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss']
})
export class EditTemplateComponent implements OnInit {
  closeMenu(){
    $(".text-setting").fadeOut(200);
  }
  showMenu(){
    $(".text-setting").show();
  }
  constructor() { 
    
    // window.onclick=function(e){
    //   console.log(e.toElement.innerText);
    // }

    
    

  }

  ngOnInit() {
    $(".setting-body input").keyup(function(){
     console.log($(this).val());
    });
    $("body").click(function(e){
      var elementclick=e.target;
      console.log(elementclick);
      //toElement.localName
      console.log(e);
      if(e.toElement.localName != "section"&&e.toElement.localName != "ul" &&e.toElement.localName != "li" &&e.toElement.localName !="input"&&e.toElement.classList[1]!="fa-times-circle" &&e.toElement.className !="color" ){
        $(".edit").show();
      $(".edit-shape").css({
        "top":e.offsetX+$(elementclick).offset().top,
        "left":e.offsetY+$(elementclick).offset().left
      });
      $(".text-input").val(e.target.innerText);
      var colors = $(".color");
      colors.eq(0).css("background-color","red");
      colors.eq(1).css("background-color","blue");
      colors.eq(2).css("background-color","black");
      colors.eq(3).css("background-color","white");
      colors.eq(4).css("background-color","green");
      colors.eq(5).css("background-color","purple");
      colors.eq(6).css("background-color","orange");
      colors.eq(7).css("background-color","gray");
  
      colors.mouseover(function(){
        var currentColor = $(this).css("background-color");
        console.log(currentColor)
        $(e.target).css("color",currentColor);
      });
      colors.click(function(){
        var currentColor = $(this).css("background-color");
        console.log(currentColor)
        $(e.target).css("color",currentColor);
      });
      

     $(e.target).addClass("border-text");
      $(".font-size").keyup(function(){
        var changeSize=$(".font-size").val();
        console.log(e.target);
        $(e.target).css("font-size",changeSize+"px");
      })
      $(".text-input").keyup(function(){
        var textInput=$(this).val();
        $(e.target).text(textInput.toString());
      })
        
      }
      // $(e.target).dblclick(function(){
      //  console.log(e.target.innerText);
      //   $(this).replaceWith('<input type="text" value='+$.trim(e.target.innerText)+'>')
      // })
      
      
    });
    // $(document).keyup(function(e){
    //   if(e.keyCode==13){
    //     $(e.target).replaceWith('<p>'+e.target.innerText+'</p>')
    //   }
    // })
  }

}
