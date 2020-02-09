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
  showBackgroundMenu(){
    $(".background-setting").show();
  }
  closeBackgroundMenu(){
    $(".background-setting").fadeOut(200);
  }
  showEditButtonMenu(){
    $(".button-setting").show();
  }
  closeEditButtonMenu(){
    $(".button-setting").fadeOut(200);
  }
  showAddFieldMenu(){
    $(".field-setting").show();
  }
  closeFieldMenu(){
    $(".field-setting").fadeOut(200);
  }
  addfirstname(){
    $("form .form-group").last().after(`<div class="form-group">
    <label for="">First Name</label>
    <input type="text" name="first-name" id="" class="form-control" placeholder="First Name"
        aria-describedby="helpId">
</div>`)
  }
  addsecondname(){
    $("form .form-group").last().after(`<div class="form-group">
    <label for="">Second Name</label>
    <input type="text" name="second-name" id="" class="form-control" placeholder="Second Name"
        aria-describedby="helpId">
</div>`)
  }
  addpassword(){
    $("form .form-group").last().after(`<div class="form-group">
    <label for="">Password</label>
    <input type="password" name="password" id="" class="form-control" placeholder="password"
        aria-describedby="helpId">
</div>`)
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
      console.log(e.toElement.className);
      if(e.toElement.localName != "section"&&e.toElement.localName != "ul" &&e.toElement.localName != "li" &&e.toElement.localName !="input"&&e.toElement.classList[1]!="fa-times-circle" &&e.toElement.className !="color" && e.toElement.className !="col-6" && e.toElement.className !="overlay" && e.toElement.className !="container py-5" && e.toElement.className !="form-group" &&e.toElement.localName !="form" &&e.toElement.localName !="button"&&e.toElement.className !="field-setting"&& e.toElement.className !="setting-body p-3" && e.toElement.className !="text-setting"&&e.toElement.className != "setting-header p-3" &&e.toElement.className != "p-3" &&e.toElement.className != "first-name my-5"&&e.toElement.className != "second-name my-5"&&e.toElement.className != "password my-5"&&e.toElement.className != "socials"&&e.toElement.localName !="i"){
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
        
      }else if(e.toElement.localName == "section" || e.toElement.className == "overlay"){
        $(e.target).addClass("border-text");
        $(".edit-background").show();
        $(".edit-shape").css({
          "top":e.offsetX+$(elementclick).offset().top,
          "left":e.offsetY+$(elementclick).offset().left
        });
        var colors = $(".color");
        colors.eq(8).css("background-color","red");
        console.log(colors.eq(0).css("background-color","red"));
        colors.eq(9).css("background-color","blue");
        colors.eq(10).css("background-color","black");
        colors.eq(11).css("background-color","white");
        colors.eq(12).css("background-color","green");
        colors.eq(13).css("background-color","purple");
        colors.eq(14).css("background-color","orange");
        colors.eq(15).css("background-color","gray");
    
        colors.mouseover(function(){
          var currentColor = $(this).css("background-color");
          console.log(currentColor)
          $(e.target).css("background-color",currentColor);
        });
        colors.click(function(){
          var currentColor = $(this).css("background-color");
          console.log(currentColor)
          $(e.target).css("color",currentColor);
        });
      }else if(e.toElement.localName =="button"){
        $(e.target).addClass("border-text");
        $(".edit-button").show();
        $(".edit-shape").css({
          "top":e.offsetX+$(elementclick).offset().top,
          "left":e.offsetY+$(elementclick).offset().left
        });
        $(".button-input").val(e.target.innerText);
        $(".font-size-button").keyup(function(){
          var changeButtonSize=$(".font-size-button").val();
          console.log(e.target);
          $(e.target).css("font-size",changeButtonSize+"px");
        })
        $(".button-input").keyup(function(){
          var buttonInput=$(this).val();
          $(e.target).text(buttonInput.toString());
        })

        var colors = $(".color");
        var borderColors=$(".border-color");
        var textColors=$('.text-color');
        colors.eq(16).css("background-color","red");
        colors.eq(17).css("background-color","blue");
        colors.eq(18).css("background-color","black");
        colors.eq(19).css("background-color","white");
        colors.eq(20).css("background-color","green");
        colors.eq(21).css("background-color","purple");
        colors.eq(22).css("background-color","orange");
        colors.eq(23).css("background-color","gray");


        colors.mouseover(function(){
          var currentColor = $(this).css("background-color");
          console.log(currentColor)
          $(e.target).css({
            "background-color":currentColor,
          });
        });

        colors.click(function(){
          var currentColor = $(this).css("background-color");
          $(e.target).css({
            "background-color":currentColor,
          });
        });

        borderColors.eq(0).css({
          "border-color":"red",
          "background-color":"red"
        });
        
        borderColors.eq(1).css({
          "background-color":"blue",
          "border-color":"blue",
        });
        borderColors.eq(2).css({
          "background-color":"black",
          "border-color":"black"
        });
        borderColors.eq(3).css({
          "background-color":"cyan",
          "border-color":"cyan",
        });
        borderColors.eq(4).css({
          "background-color":"green",
          "border-color":"green"
        });
        borderColors.eq(5).css({
          "background-color":"purple",
          "border-color":"purple"
        });
        borderColors.eq(6).css({
          "background-color":"orange",
          "border-color":"orange"
        });
        borderColors.eq(7).css({
          "background-color":"gray",
          "border-color":"gray",
        });

        borderColors.mouseover(function(){
          var borderColor=$(this).css("border-color");
          $(e.target).css({
            "border-color":borderColor
          });
        });

        borderColors.click(function(){
          var borderColor=$(this).css("border-color");
          $(e.target).css({
            "border-color":borderColor
          });
        });


        textColors.eq(0).css({
          "background-color":"red",
          "color":"red"
        });
        
        textColors.eq(1).css({
          "color":"blue",
          "background-color":"blue",
        });
        textColors.eq(2).css({
          "color":"black",
          "background-color":"black",
        });
        textColors.eq(3).css({
          "color":"cyan",
          "background-color":"cyan",
        });
        textColors.eq(4).css({
          "color":"green",
          "background-color":"green",
        });
        textColors.eq(5).css({
          "color":"purple",
          "background-color":"purple",
        });
        textColors.eq(6).css({
          "color":"orange",
          "background-color":"orange",
        });
        textColors.eq(7).css({
          "color":"gray",
          "background-color":"gray",
        });

        textColors.mouseover(function(){
          var textColor=$(this).css("color");
          console.log(e.target.innerText);
          console.log(textColor);
          $(e.target).css({
            "color":textColor
          });
        });

        textColors.click(function(){
          var textColor=$(this).css("color");
          $(e.target).css({
            "color":textColor
          });
        });
    

      }else if(e.toElement.localName =="form"){
        $(e.target).addClass("border-text");
        $(".add-field").show();
        $(".add-shape").css({
          "top":e.offsetX+$(elementclick).offset().top,
          "left":e.offsetY+$(elementclick).offset().left
        });
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
