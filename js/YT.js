$(function(){
	var weixin=$(".weixin")[0];
	var hidden_wei=$(".hidden_wei")[0];
     weixin.onmouseover=function(){
     	hidden_wei.style.display="block";
     	weixin.style.background="#fff";
     	
     }
     weixin.onmouseout=function(){
     	hidden_wei.style.display="none";
     	weixin.style.background="#eee";
     } 


    var phone=$(".phone")[0];
	var hidden_phone=$(".hidden_phone")[0];
    phone.onmouseover=function(){
     	hidden_phone.style.display="block";
     	phone.style.background="#fff";
     	
     }
     phone.onmouseout=function(){
     	hidden_phone.style.display="none";
     	phone.style.background="#eee";
     }


    var my=$(".my")[0];
	var hidden_my_yt=$(".hidden_my_yt")[0];
    my.onmouseover=function(){
     	hidden_my_yt.style.display="block";
     	my.style.background="#fff";
     	
     }
     my.onmouseout=function(){
     	hidden_my_yt.style.display="none";
     	my.style.background="#eee";
     }


    var shopping_car=$(".shopping_car")[0];
	var hidden_shopping_car=$(".hidden_shopping_car")[0];
    shopping_car.onmouseover=function(){
     	hidden_shopping_car.style.display="block";
     	
     }
     shopping_car.onmouseout=function(){
     	hidden_shopping_car.style.display="none";
     }



// banner轮播开始
     var box=$(".banner_sum")[0];
     var img=$(".banner_per");
     var left=$(".banner_lt")[0];
     var right=$(".banner_gt")[0];
     var dian=$(".dian");
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
    	clearInterval(t);
    }
    box.onmouseout=function(){
    	t=setInterval(move,2000);
    }
    for(var i=0;i<dian.length;i++){
    	dian[i].index=i;
        dian[i].onmouseover=function(){
    		for(var j=0;j<img.length;j++){
    			dian[j].style.background="#211616";
    			img[j].style.opacity=0;
    		}dian[this.index].style.background="#E5004F";
    		animate(img[n],{opacity:0},300);
    		animate(img[this.index],{opacity:1},300);
    		n=this.index;
    	}
    }


   var so_cheap_1=$(".so_cheap_1");
   var cheap_per=$(".cheap_per");
    for(var i=0;i<cheap_per.length;i++){
    cheap_per[i].index=i;             //添加标识 
    cheap_per[i].onmouseover=function(){        //将当前的值设为1
    for(var j=0;j<so_cheap_1.length;j++){
    so_cheap_1[j].style.display="none";       //当点击的时候 隐藏所有色块
    }
  so_cheap_1[this.index].style.display="block";    // 将当前色块显示出来
    }
  }

  var same_rt_per=$(".same_rt_per");      //题目
  var same_rt_cc=$(".same_rt_cc");         // 每一屏
  for(var i=0;i<same_rt_per.length;i++){   
    same_rt_per[i].index=i;      
    same_rt_per[i].onmouseover=function(){
        for(var j=0;j<same_rt_cc.length;j++){
           same_rt_cc[j].style.display="none";  
        }
        same_rt_cc[this.index].style.display="block"; 
    }
      }
// 一楼轮播开始
function lunbo(obj1){
var img1=$(".fashion_banner_img",obj1);
box1=obj1;
var dian1=$(".fdian_per",obj1);
var left1=$(".fashion_lt",obj1)[0];
var right1=$(".fashion_rt",obj1)[0];
var y=0;
var Y=0;
var width1=parseInt(getStyle(img1[0],"width"));   
    var c=setInterval(move2,2000)
    function move2(){
        Y=y+1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(Y>=img1.length){        //如果下个img1的下标大于等于图片的个数时让它又从头开始运行动画
            Y=0;
        }
    for(var i=0;i<img1.length;i++){            //循环将点的颜色全部设置为灰色
            dian1[i].style.background="#6E6E6E";
        }
        dian1[Y].style.background="#D2034C";
        img1[Y].style.left=width1+"px";            //保证当前图片的下一张始终在box的右边
        animate(img1[y],{left:-width1},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(img1[Y],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
       y=Y;
    }
        function move21(){
        Y=y-1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(Y<0){        //如果下个img1的下标大于等于图片的个数时让它又从头开始运行动画
            Y=img1.length-1;     //将最后一个又拉到最前面
        }
    for(var i=0;i<img1.length;i++){            //循环将点的颜色全部设置为灰色
            dian1[i].style.background="#6E6E6E";
        }
        dian1[Y].style.background="#D2034C";
        img1[Y].style.left=width1+"px";            //保证当前图片的下一张始终在box的右边
        animate(img1[y],{left:-width1},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(img1[Y],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        y=Y;
    }
box1.onmouseover=function(){            //鼠标移入时清除时间函数  停止运行
    clearInterval(c);
}
box1.onmouseout=function(){             //鼠标移出时 又将时间函数直接赋值给t  让动画继续运行
    c=setInterval(move2,2000)
}
left1.onclick=function(){              // 向左
    move21();
}
right1.onclick=function(){               //向右
    move2();
}
// 分三种情况 1.点击当前点 出现当前图片   2.点击2然后点1  3.点击2然后点3
for(var i=0;i<img1.length;i++){
    dian1[i].index=i;          //给每个点做标识
    dian1[i].onclick=function(){    //添加点击事件

           if(this.index==y){                             //第一种情况
            return;
           }
           else if(this.index>y){                        //第二种情况
              for(var i=0;i<img1.length;i++){                      //先把所有的点颜色默认
                dian1[i].style.background="#6E6E6E";                 
              }                                           
              dian1[this.index].style.background="#D2034C";      //把当前点的颜色改变
              img1[this.index].style.left=width1+"px";               
              animate(img1[y],{left:-width1},300);                           //当前图片向左移
              animate(img1[this.index],{left:0},300);                  //点击的图片放到box里
              y=this.index;
           }else if(this.index<y){                     //方向从右到左
                for(var i=0;i<img1.length;i++){
             dian1[i].style.background="#6E6E6E";
              }
              dian1[this.index].style.background="#D2034C";
              img1[this.index].style.left=-width1+"px";      
                    animate(img1[y],{left:width1},300);   
                    animate(img1[this.index],{left:0},300);
                    y=this.index;

              }
    }
}
}
var box1=$(".fashion_banner_box");
for(var i=0;i<box1.length;i++){
    lunbo(box1[i]);
}



// 小的
function aa(obj){
var img2=$(".index_fashion",obj);
var box2=obj;
var left2=$(".fashion_small_left",obj)[0];
var right2=$(".fashion_small_right",obj)[0];
var width2=parseInt(getStyle(img2[0],"width")); 
var e=0;
var E=0;
    var b=setInterval(move3,2000)
    function move3(){
        E=e+1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(E>=img2.length){        //如果下个img1的下标大于等于图片的个数时让它又从头开始运行动画
            E=0;
        }
        img2[E].style.left=width2+"px";            //保证当前图片的下一张始终在box的右边
        animate(img2[e],{left:-width2},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(img2[E],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
       e=E;
    }
        function move31(){
        E=e-1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(E<0){        //如果下个img1的下标大于等于图片的个数时让它又从头开始运行动画
            E=img2.length-1;     //将最后一个又拉到最前面
        }
        img2[E].style.left=width2+"px";            //保证当前图片的下一张始终在box的右边
        animate(img2[e],{left:-width2},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(img2[E],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        e=E;
    }
box2.onmouseover=function(){            //鼠标移入时清除时间函数  停止运行
    clearInterval(b);
}
box2.onmouseout=function(){             //鼠标移出时 又将时间函数直接赋值给t  让动画继续运行
    b=setInterval(move3,2000)
}
left2.onclick=function(){              // 向左
    move31();
}
right2.onclick=function(){               //向右
    move3();
}
}
var box2=$(".index_fashion_small");
for(var i=0;i<box2.length;i++){
    aa(box2[i]);
}











































})