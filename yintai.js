$(function(){
	// 头部下拉
	var bian=$(".bian");
	var hidden=$(".xlk");
	// console.log(xlk.length)
	for(var j=0;j<bian.length;j++){
		    bian[j].index=j;
		    bian[j].onmouseover=function(){
          for(var i=0;i<hidden.length;i++){
         hidden[i].style.display="none";
         
    }
         hidden[this.index].style.display="block";
			   }
          bian[j].onmouseout=function(){
            hidden[this.index].style.display="none";
          }
      	}

      	// 购物车下拉
      	var shop=$(".shopping")[0];
      	var sla=$(".sla")[0];
      	shop.onmouseover=function(){
      		sla.style.display="block";
      	}
      	shop.onmouseout=function(){
      		sla.style.display="none";
      	}
      // banner页的轮播
     var box=$(".box")[0];
     var img=$(".banner-box");

     var left=$(".banner-zuo")[0];

     var right=$(".banner-you")[0];
      // console.log(right)
     var dian=$(".dianlis");
     var n=0;
     var next=0;
     var t=setInterval(move,2000);
     function move(){
    	next=n+1;
    	if(next>=img.length){
    		next=0;
    	}
    	for(var i=0;i<img.length;i++){
    		img[i].style.opacity=0;
    		dian[i].style.background="#211616";
    	}
    	dian[next].style.background="#E5004F";
       img[n].style.opacity=1;
    	animate(img[n],{opacity:0},300);
    	animate(img[next],{opacity:1},300);
    	n=next;
    }
    function move1(){
    	next=n-1;
    	if(next<0){
    		next=img.length-1;

    	}for(var i=0;i<img.length;i++){
    		img[i].style.opacity=0;
    		dian[i].style.background="#211616";
    	}
    	dian[next].style.background="#E5004F";
      img[n].style.opacity=1;
    	animate(img[n],{opacity:0},300);
    	animate(img[next],{opacity:1},300);
    	n=next;
    }
     
    left.onclick=function(){
    	move1();
    }
    right.onclick=function(){
    	move();
    }
    box.onmouseover=function(){
    	left.style.opacity=1;
    	right.style.opacity=1;
    	clearInterval(t);
    }
    box.onmouseout=function(){
    	t=setInterval(move,2000);
    	left.style.opacity=0;
    	right.style.opacity=0;
    }
    for(var i=0;i<dian.length;i++){
    	dian[i].index=i;
        dian[i].onmouseover=function(){
    		for(var j=0;j<img.length;j++){
    			dian[j].style.background="#211616";
    			img[j].style.opacity=0;
    		}dian[this.index].style.background="#E5004F";
        img[n].style.opacity=1;
    		animate(img[n],{opacity:0},300);
    		animate(img[this.index],{opacity:1},300);
    		n=this.index;
    	}
    }
// banner左侧选项卡
   var bannerli=$(".bnl");
   // console.log(bannerli.length)
    var bannerla=$(".banner-la");
    // console.log(bannerla.length)
    for(var j=0;j<bannerli.length;j++){
		    bannerli[j].index=j;
		    bannerli[j].onmouseover=function(){
          for(var i=0;i<bannerla.length;i++){
         bannerla[i].style.display="none";
    }
         bannerla[this.index].style.display="block";
		 }
          bannerli[j].onmouseout=function(){
            bannerla[this.index].style.display="none";
          }
      	}
    // 超值选项卡
    var f=$(".f1-per");
    var f1box=$(".cheap");
    var sanjiao=$(".threejiao");
    for(var j=0;j<f.length;j++){
      f[j].index=j;
      f[j].onmouseover=function(){
        for(var i=0;i<f1box.length;i++){
          f1box[i].style.display="none";
          f[i].style.borderBottom="5px solid #333";
          sanjiao[i].style.display="none";
        }
        f1box[this.index].style.display="block";
        f[this.index].style.borderBottom="5px solid #E5004F";
        f[this.index].style.zIndex="99";
        sanjiao[this.index].style.display="block";
      }
    }
   // 二层选项卡
      var f2=$(".f2-per");
      var threejiaos=$(".threejiaos");
    var f2box=$(".f2r1");
    // console.log(f1box.length)
    for(var j=0;j<f2.length;j++){
            f2[j].index=j;
            f2[j].onmouseover=function(){
          for(var i=0;i<f2box.length;i++){
        f2box[i].style.display="none";
        f2[i].style.borderBottom="#333";
        threejiaos[i].style.display="none";
    }
         f2box[this.index].style.display="block";
         f2[this.index].style.borderBottom="3px solid #E5004F";
         f2[this.index].style.zIndex="99";
         threejiaos[this.index].style.display="block"
         }
          // f[j].onmouseout=function(){
          //   f1box[this.index].style.display="none";
          // }
        }

        // 时尚轮播




function lunbo1(obj){
        var imgt=$(".fashion-banner",obj);
        var boxt=obj;
        var leftt=$(".fashion-lt",obj)[0];
        var rightt=$(".fashion-rt",obj)[0];
        var diant=$(".fdian",obj);
        var nt=0;       //定义当前图片的初始值
        var nextt=0;    //定义下一张图片的初始值
        var widtht=parseInt(getStyle(imgt[0],"width"));//获取图片的宽度 
        // var tt6=setInterval(movet,2000);
        function movet(){
            nextt=nt+1;
            if(nextt>=imgt.length){   //      
                nextt=0;
            }   
            for(var i=0;i<imgt.length;i++){
                diant[i].style.background="#6E6E6E";
            }
            diant[nextt].style.background="#D2034C";
            imgt[nextt].style.left=widtht+"px";      //保持后一张图片一直在width位置。
            animate(imgt[nt],{left:-widtht},500);   //当前图片位置为0；动画时向左移动一个width
            animate(imgt[nextt],{left:0},500);      //后一张图片得移动到当前图片的位置 为0；
            nt=nextt;
        }
        function movet1(){            //右点击图片移动的方向时----从左到右
            nextt=nt-1;
            if(nextt<0){          
                nextt=imgt.length-1;
            }
            for(var i=0;i<imgt.length;i++){
                diant[i].style.background="#6E6E6E";
            }
            diant[nextt].style.background="#D2034C";
            imgt[nextt].style.left=-widtht+"px";      //保持后一张图片一直在width位置。
            animate(imgt[nt],{left:widtht},500);   //当前图片位置为0；动画时向左移动一个width
            animate(imgt[nextt],{left:0},500);      //后一张图片得移动到当前图片的位置 为0；
            nt=nextt;
            // n=this.index;
        }
        boxt.onmouseover=function(){     //鼠标效果
                // clearInterval(tt6);
                 leftt.style.opacity=1;
                 rightt.style.opacity=1;
        }
        boxt.onmouseout=function(){
                 // tt6=setInterval(movet,2000);
                 leftt.style.opacity=0;
                 rightt.style.opacity=0;
        }
        // 左右点击
        leftt.onclick=function(){        //右点击事件         
                movet1();
        }
        rightt.onclick=function(){
                movet();
        }
        //小圆的选项卡操作
        for(var i=0;i<diant.length;i++){    //对选项卡进行标识。给它添加一个属性 
                diant[i].index=i;
                diant[i].onclick=function(){     //通过点击事件进行操作
                    if(this.index==nt){
                        return;
                    }else if(this.index>nt){                 //方向从左到右
                        for(var i=0;i<imgt.length;i++){
                           diant[i].style.background="#6E6E6E";
                        }
                        diant[this.index].style.background="#D2034C";
                        imgt[this.index].style.left=widtht+"px";      //保持后一张图片一直在width位置。
                        animate(imgt[nt],{left:-widtht},500);   //当前图片位置为0；动画时向左移动一个width
                        animate(imgt[this.index],{left:0},500);
                        nt=this.index;
                    }else if(this.index<nt){                     //方向从右到左
                        for(var i=0;i<imgt.length;i++){
                           diant[i].style.background="#6E6E6E";
                        }
                        diant[this.index].style.background="#D2034C";
                        imgt[this.index].style.left=-widtht+"px";      //保持后一张图片一直在width位置。
                        animate(imgt[nt],{left:widtht},500);   //当前图片位置为0；动画时向左移动一个width
                        animate(imgt[this.index],{left:0},500);
                        nt=this.index;

                    }
                }
        } 
    }
    var box6=$(".fashion-middle");
  
         lunbo1(box6[0]);
         lunbo1(box6[3]);
         lunbo1(box6[4]);
         lunbo1(box6[5]);
         lunbo1(box6[6]);
         lunbo1(box6[7]);

// 小轮播

 
 
function xiaolun(obj){       
       var next=$(".lunbox",obj)[0];
       
       var nBox=$(".fashlun",obj);
      
       var zuo=$(".san",obj)[0];
       var you=$(".san2",obj)[0];
       var a=0;
       var b=0; 
       var w=next.offsetWidth; 
       var dong=function(){
        b=a+1;
        if(b>=nBox.length){
          b=0;
        }
         nBox[a].style.left=0;
        nBox[b].style.left=w+"px";
        animate(nBox[a],{left:-w},500);
        animate(nBox[b],{left:0},500);
        a=b;
       }
       var dong1=function(){
        b=a-1;
        if(b<0){
          b=nBox.length-1;
        }
         nBox[a].style.left=0;
        nBox[b].style.left=-w+"px";
        animate(nBox[a],{left:w},500);
        animate(nBox[b],{left:0},500);
        a=b;
       }
       zuo.onclick=function(){
        dong();
       }
       you.onclick=function(){
        dong1();
       }
     }
    var box1=$(".fashion-box");
    for (var i = 0; i < box1.length; i++) {
       xiaolun(box1[i]);
    };
      // xiaolun(box1[0]);
      // xiaolun(box1[1]);

      // 银泰卡的选项卡
      var card=$(".card-a");
      // console.log(card.length)
      var cardZ=$(".card-z");
      // console.log(cardZ.length)
      for(var j=0;j<card.length;j++){
            card[j].index=j;
            card[j].onmouseover=function(){
          for(var i=0;i<card.length;i++){
        cardZ[i].style.display="none";
       
    }
         cardZ[this.index].style.display="block";
         
         card[this.index].style.zIndex="99";
         }
          card[j].onmouseout=function(){
            cardZ[this.index].style.display="none";
          }
        }


 var lou=$(".lou")[0];
    var fx=$(".floor");
    var num=$(".num");
    var sign=true;
    var ww=document.documentElement.clientWidth;
    var hh=document.documentElement.clientHeight;
        for(var i=0;i<num.length;i++){
            num[i].index=i;
            num[i].onclick=function(){
                sign=false;
               // 查看浏览器是否能用document.body来获取滚动条的高度？不能则用document.documentElement;
              var obj=document.body.scrollTop?document.body:document.documentElement;
              // 定义top为点击的楼层距离body的距离
              var top=fx[this.index].offsetTop;
              // 让滚动条高度变化当前楼层距离body的距离的高度即top
              animate(obj,{scrollTop:top},300,function(){sign=true});
              for (var i = 0; i < num.length; i++) {
                num[i].classList.remove("active");
              };
              num[this.index].style.fontSize= 18 + "px";
              num[this.index].classList.add("active");
              }
         }
       for(var i=0;i<num.length;i++){
        num[i].index=i
       num[i].onmouseover=function(){
        for(var j=0;j<num.length;j++){
                 // num[j].style.color="#625351";
                 num[j].style.background="transparent";
                 num[j].innerHTML="";
            }
             num[this.index].style.background="#E5004F";
             num[this.index].style.color="#FFF";
             var aa=num[this.index].getAttribute("aa");
             num[this.index].innerHTML=aa;

      }
    }  
        // 添加滚动事件，让小框随着楼层的移动进行换色
        window.onscroll=function(){
            if(!sign){
              return;
            }
            // 定义开关来控制box的当前楼层颜色的出现和消失
            var flag=true;
            var flag1=true;
            var obj=document.body.scrollTop?document.body:document.documentElement;
            // 循环取得每一层楼
            for(var i=0;i<fx.length;i++){
                // 当滚动条移动的距离大于楼层到body的距离减去浏览器的距离时,（即滚动条变大
                // body出去的多，元素就会显露出来
                if(obj.scrollTop>=fx[i].offsetTop-hh+200){
                    // 当元素显露出来的时候让每个小框的颜色进行变化
                    for(var j=0;j<num.length;j++){
               // lis[j].index=j;
                  num[j].style.background=" transparent";
                  num[j].style.color=" #fff";
                  num[j].innerHTML="";
              }
              
               num[i].style.background="#E5004F";
               // num[i].style.color=" #C81623";
               var aa=num[i].getAttribute("aa");
               num[i].innerHTML=aa;
              
                }
            }
             // 实现小框的出现和消失
             
             // 当滚动条的高度大于第一层楼到body的高度减去浏览器的高度时即一层显出来的时候
             // 让小框出现
           if(obj.scrollTop>=fx[0].offsetTop-hh+100){
           
            if(flag){
                flag=false;
                animate(lou,{opacity:1},300,function(){flag1=true})
            }

            }else{
                if(flag1){
                    flag1=false;
                    animate(lou,{opacity:0},300,function(){flag=true})
                }
            }
         }

})
