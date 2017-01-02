var td = new Array();
			var playing = false;
			var score = 0;
			var beat = 0;
			var knock = 0;
			var countDown = 30;
			var interId = null,
				timeId = null;
function GameOver(){
				timeStop();
				playing = false;
				clearMouse();
				alert("攻略结束！\n少女的心動指數為："+score);
				if (score>=100)
					{
						document.getElementById('good').style.display='block'
					}
                else{
                	    document.getElementById('end').style.display='block'
                	}
				score = 0;
				knock = 0;
				beat = 0;
				countDown = 30;
			}

			
				
function timeShow(){
				document.form1.remtime.value = countDown;
				if(countDown == 0)
					{
						GameOver();
						return;
					}
				else
					{
						countDown = countDown-1;
						timeId = setTimeout("timeShow()",1000);
					}
			}
function timeStop(){
				clearInterval(interId);//clearInterval()方法返回setInterval()方法的id
				clearTimeout(timeId);//clearTime()方法返回setTimeout()的id
			}
				
function show(){
				if(playing)
				{
					var current = Math.floor(Math.random()*15);
					document.getElementById("td["+current+"]").innerHTML = '<img src="img/mou.png">';
					setTimeout("document.getElementById('td["+current+"]').innerHTML=''",1000);
				}
			}
function clearMouse(){
				for(var i=0;i<=14;i++)
				{
					document.getElementById("td["+i+"]").innerHTML="";
				}
			}
function hit(id){
				if(playing==false)
				{
					alert("請點擊開始游戲");
					return;
				}
				else
				{	
					 beat +=1;
                    if(document.getElementById("td["+id+"]").innerHTML!="")
					{
						score += 5;
						knock +=1;
						
						
						document.form1.score.value = score;
						document.getElementById("td["+id+"]").innerHTML="";
					}
                     else
					{
						score += -5;
						
						document.form1.score.value = score;
					}
				}
			}
function GameStart(){
				playing = true;
				interId = setInterval("show()",1000);
				document.form1.score.value = score;
				timeShow();
			}


