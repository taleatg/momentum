(()=>{"use strict";const e=document.querySelector(".quote"),t=document.querySelector(".author");async function n(){let n;n="en"===z?"./script/data-en.json":"./script/data-ru.json";const o=await fetch(n),i=await o.json();let c=Math.ceil(0),l=Math.floor(19),r=Math.floor(Math.random()*(l-c+1))+c;e.textContent=i[r].text,t.textContent=i[r].author}document.querySelector(".change-quote").addEventListener("click",n);const o=document.querySelector(".todo-list"),i=document.querySelector(".todo"),c=document.querySelector(".todo-title"),l=document.querySelector(".the-whole-list"),r=document.querySelector(".todo-icon");let a=document.querySelectorAll(".one-point"),s=document.querySelectorAll(".one-point-done"),d=document.querySelectorAll(".list-icon");const u=document.querySelector(".input-add"),y=document.querySelector(".add"),m=document.querySelector(".todo-text");let g=!1,h=[];function p(){"en"===z?(r.textContent="Todo",c.textContent="Todo list",y.textContent="Enter"):(r.textContent="Список дел",c.textContent="Список дел",y.textContent="Ввод")}function v(){o.style.opacity="0",o.style.visibility="hidden",i.style.zIndex="1",g=!1}function S(e){h[e]?(s[e].style.opacity=1,s[e].style.visibility="visible",s[e].classList.remove("one-point-done__active"),h[e]=!1):(s[e].style.opacity=.1,s[e].classList.add("one-point-done__active"),h[e]=!0)}function k(){let e,t=document.createElement("li"),n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("button");t.className="one-point",l.appendChild(t),n.className="one-point-done",n.innerHTML=u.value,t.append(n),o.className="list-icon",t.append(o),i.innerHTML="X",l.appendChild(t),o.appendChild(i),u.value="",l.scrollTo(0,t.offsetTop),a=document.querySelectorAll(".one-point"),s=document.querySelectorAll(".one-point-done"),d=document.querySelectorAll(".list-icon"),a.length>0&&(m.style.opacity="0",m.style.visibility="hidden"),e=a.length-1,t.addEventListener("click",(function(){S(e)})),o.addEventListener("click",(function(){f(e)}))}function f(e){l.removeChild(a[e]),1===a.length&&(m.style.opacity="1",m.style.visibility="visible")}a.forEach(((e,t)=>{e.addEventListener("click",(function(){S(t)}))})),d.forEach(((e,t)=>{e.addEventListener("click",(function(){f(t)}))})),r.addEventListener("click",(function(){g?v():(o.style.opacity="1",o.style.visibility="visible",i.style.zIndex="10",g=!0)})),y.addEventListener("click",k),u.addEventListener("keypress",(function(e){"Enter"===e.code&&k()}));const L=document.querySelector(".settings"),b=document.querySelector(".list-settings-container"),q=document.querySelector(".settings-icon"),C=document.querySelector(".hide-elem"),E=document.querySelector(".language"),I=document.querySelector(".collection-img"),w=document.querySelectorAll(".teg"),M=document.querySelector(".hide-time"),T=document.querySelector(".hide-date"),H=document.querySelector(".hide-greeting"),x=document.querySelector(".hide-quotes"),$=document.querySelector(".hide-weather"),O=document.querySelector(".hide-audio"),D=document.querySelector(".hide-todo"),_=document.querySelector(".overlay");let j=!1;function A(){"en"===z?(E.innerHTML="Language:",I.innerHTML="Collection of images:",w[0].innerHTML=w[1].innerHTML="Enter teg:",C.innerHTML="Show:",M.innerHTML="Time",T.innerHTML="Date",H.innerHTML="Greeting",x.innerHTML="Quotes",$.innerHTML="Weather",O.innerHTML="Audio player",D.innerHTML="ToDo list"):(E.innerHTML="Язык:",I.innerHTML="Коллекция изображений:",w[0].innerHTML=w[1].innerHTML="Введите тег:",C.innerHTML="Показать:",M.innerHTML="Время",T.innerHTML="Дата",H.innerHTML="Приветствие",x.innerHTML="Цитаты",$.innerHTML="Погода",O.innerHTML="Аудиоплеер",D.innerHTML="Список дел")}function U(){b.style.opacity="0",b.style.visibility="hidden",L.style.zIndex="1",j=!1,_.style.display="none"}q.addEventListener("click",(function(){j?U():(A(),b.style.opacity="1",b.style.visibility="visible",L.style.zIndex="15",j=!0,_.style.display="block")})),_.addEventListener("click",U);const F=document.querySelector(".lan-en"),G=document.querySelector(".lan-ru"),N=document.querySelector(".name"),W=document.querySelector(".my-name");let z="en";function Q(){z="en",F.checked=!0,G.checked=!1,ke(),J(),n(),p(),N.placeholder="[Enter name]",W.innerHTML="Tatsiana Dashuk",localStorage.setItem("lan","en"),localStorage.setItem("isCheckedEn","true"),A()}function K(){z="ru",F.checked=!1,G.checked=!0,ke(),J(),n(),p(),N.placeholder="[Введите имя]",W.innerHTML="Татьяна Дашук",localStorage.setItem("lan","ru"),localStorage.setItem("isCheckedEn","false"),A()}F.addEventListener("click",(function(){"en"===z?F.checked=!0:Q()})),G.addEventListener("click",(function(){"ru"===z?G.checked=!0:K()})),window.addEventListener("load",(function(){"false"===localStorage.getItem("isCheckedEn")?(G.checked=!0,localStorage.setItem("isCheckedEn","false"),K()):(F.checked=!0,localStorage.setItem("isCheckedEn","true"),Q())}));const P=document.querySelector(".weather-icon"),R=document.querySelector(".temperature"),X=document.querySelector(".weather-description"),Y=document.querySelector(".weather-error"),Z=document.querySelector(".humidity"),B=document.querySelector(".city");async function J(){let e;localStorage.getItem("city")?B.value=localStorage.getItem("city"):B.value=localStorage.setItem("city","Minsk"),Y.innerHTML="","en"===z?e=`https://api.openweathermap.org/data/2.5/weather?q=${B.value}&lang=en&appid=2c511c66b2223a48419eb95dbe8ca344&units=metric`:"ru"===z&&(e=`https://api.openweathermap.org/data/2.5/weather?q=${B.value}&lang=ru&appid=2c511c66b2223a48419eb95dbe8ca344&units=metric`);const t=await fetch(e),n=await t.json();if(404===t.status||400===t.status)return Y.innerHTML="en"===z?"City not found":"Город не найден",P.style.display="none",R.textContent="",X.textContent="",Z.textContent="",void("en"===z?localStorage.setItem("city","Minsk"):localStorage.setItem("city","Минск"));"ru"===z&&"Minsk"===localStorage.getItem("city")?B.value="Минск":"en"===z&&"Минск"===localStorage.getItem("city")&&(B.value="Minsk"),P.style.display="block",P.className="weather-icon owf",P.classList.add(`owf-${n.weather[0].id}`),R.textContent=`${Math.round(n.main.temp)}°C ${n.weather[0].description}`,"en"===z?(X.textContent=`Wind speed: ${Math.round(n.wind.speed)} m/s`,Z.textContent=`Humidity: ${n.main.humidity} %`):(X.textContent=`Скорость ветра: ${Math.round(n.wind.speed)} м/с`,Z.textContent=`Влажность: ${n.main.humidity} %`)}Y.innerHTML="",B.onblur=function(){if(""===B.value)return P.style.display="none",R.textContent="",X.textContent="",Z.textContent="",Y.innerHTML="en"===z?"City not found":"Город не найден",void("en"===z?localStorage.setItem("city","Minsk"):localStorage.setItem("city","Минск"));localStorage.setItem("city",B.value),J()},document.addEventListener("DOMContentLoaded",J),B.addEventListener("click",(function(){B.style.color="white",B.value=""})),B.addEventListener("keypress",(function(e){"Enter"===e.code&&(localStorage.setItem("city",B.value),J(),B.blur())}));const V=document.querySelector(".github-collection"),ee=document.querySelector(".unsplash-collection"),te=document.querySelector(".flickr-collection"),ne=(document.querySelector(".enter-teg-unsplash"),document.querySelector(".enter-teg-flickr"),document.querySelector(".text-teg-unsplash")),oe=document.querySelector(".text-teg-flickr");let ie=localStorage.getItem("isGitHubCollection"),ce=localStorage.getItem("isUnsplashCollection"),le=localStorage.getItem("isFlickrCollection");function re(){"true"===ie?(ne.disabled=!0,oe.disabled=!0,ie=!0,V.checked=!0,ee.checked=!1,te.checked=!1,Le()):"true"===ce?(ne.disabled=!1,oe.disabled=!0,ce=!0,V.checked=!1,ee.checked=!0,te.checked=!1,be()):"true"===le?(ne.disabled=!0,oe.disabled=!1,le=!0,V.checked=!1,ee.checked=!1,te.checked=!0,qe()):(ie=!0,localStorage.setItem("isGitHubCollection",ie),V.checked=!0,Le())}function ae(e,t,n){localStorage.setItem("isGitHubCollection",e),localStorage.setItem("isUnsplashCollection",t),localStorage.setItem("isFlickrCollection",n)}ne.value=localStorage.getItem("teg")||"",ne.value=localStorage.getItem("tegUnsplash")||"",oe.value=localStorage.getItem("tegFlickr")||"",ne.disabled=!0,oe.disabled=!0,ne.onblur=function(){if(localStorage.setItem("tegUnsplash",ne.value),!0===ce){if(""===ne.value)return;be()}ne.blur()},oe.onblur=function(){if(localStorage.setItem("tegFlickr",oe.value),!0===le){if(""===oe.value)return;qe()}oe.blur()},window.addEventListener("beforeunload",(function(){ae(ie,ce,le)})),window.onload=function(){localStorage.getItem("isGitHubCollection"),localStorage.getItem("isUnsplashCollection"),localStorage.getItem("isFlickrCollection"),re()},V.addEventListener("click",(function(){ne.disabled=!0,oe.disabled=!0,ie=!0,ce=!1,le=!1,V.checked=!0,ee.checked=!1,te.checked=!1,ae(ie,ce,le),Le()})),ee.addEventListener("click",(function(){"true"===localStorage.getItem("isUnsplashCollection")?ee.checked=!0:(ne.disabled=!1,oe.disabled=!0,ie=!1,ce=!0,le=!1,V.checked=!1,ee.checked=!0,te.checked=!1,ae(ie,ce,le),be())})),te.addEventListener("click",(function(){"true"===localStorage.getItem("isFlickrCollection")?te.checked=!0:(ne.disabled=!0,oe.disabled=!1,ie=!1,ce=!1,le=!0,V.checked=!1,ee.checked=!1,te.checked=!0,ae(ie,ce,le),qe())})),ne.addEventListener("click",(function(){ne.value=""})),ne.addEventListener("keypress",(function(e){"Enter"===e.code&&(localStorage.setItem("tegUnsplash",ne.value),!0===ce&&be(),ne.blur())})),oe.addEventListener("click",(function(){oe.value=""})),oe.addEventListener("keypress",(function(e){"Enter"===e.code&&(localStorage.setItem("tegFlickr",oe.value),!0===le&&qe(),oe.blur())}));const se=document.querySelector(".time"),de=document.querySelector(".date"),ue=document.querySelector(".greeting"),ye=document.querySelector(".name"),me=document.querySelector("body"),ge=document.querySelector(".slide-next"),he=document.querySelector(".slide-prev");let pe,ve="Good";const Se={en:["night","morning","afternoon","evening"],ru:["ночи","утро","день","вечер"]};function ke(){const e=fe(z);ue.textContent="en"===z?`Good ${e},`:ve+" "+e+","}function fe(e){let t=(new Date).getHours();return t>=0&&t<6?("ru"===e&&(ve="Доброй"),Se[e][0]):t>5&&t<12?("ru"===e&&(ve="Доброе"),Se[e][1]):t>11&&t<18?("ru"===e&&(ve="Добрый"),Se[e][2]):t>17&&t<24?("ru"===e&&(ve="Добрый"),Se[e][3]):void 0}function Le(){if(!ie)return;const e=new Image;let t=fe("en"),n=pe.toString().padStart(2,"0");e.src=`https://raw.githubusercontent.com/taleatg/stage1-tasks/assets/images/${t}/${n}.jpg`,e.onload=()=>{me.style.backgroundImage=`url('https://raw.githubusercontent.com/taleatg/stage1-tasks/assets/images/${t}/${n}.jpg')`}}async function be(){if(!ce)return;const e=new Image;let t;t=""!==ne.value?ne.value:fe("en");const n=`https://api.unsplash.com/photos/random?query=${t}&client_id=2SKD7e_vbpcwEtEj43Hu3rKLu6_rCUYWZxnryigev48`,o=await fetch(n),i=await o.json();e.src=i.urls.regular,e.onload=()=>{me.style.backgroundImage=`url(${i.urls.regular})`}}async function qe(){if(!le)return;const e=new Image;let t;t=""!==oe.value?oe.value:fe("en");let n=pe;const o=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0243e2f827147a38f02ee8b1ec5f02ac&tags=${t}&extras=url_l&format=json&nojsoncallback=1`,i=await fetch(o),c=await i.json();e.src=me.style.backgroundImage=c.photos.photo[n].url_l,e.onload=()=>{me.style.backgroundImage=`url(${c.photos.photo[n].url_l})`}}window.addEventListener("beforeunload",(function(){localStorage.setItem("name",ye.value)})),window.addEventListener("load",(function(){localStorage.getItem("name")&&(ye.value=localStorage.getItem("name"))})),function(){let e=Math.ceil(1),t=Math.floor(20);pe=Math.floor(Math.random()*(t-e+1))+e}(),ye.addEventListener("click",(function(){ye.value=""})),ge.addEventListener("click",(function(){pe++,pe>20&&(pe=1),!0===ie?Le():!0===ce?be():!0===le&&qe()})),he.addEventListener("click",(function(){pe--,pe<1&&(pe=20),!0===ie?Le():!0===ce?be():!0===le&&qe()}));const Ce=[{title:"Carmen Suite No. 2",src:"../assets/sounds/1.mp3",duration:"00:55"},{title:"Nocturne in E Flat N2 Op. 9",src:"../assets/sounds/2.mp3",duration:"01:32"},{title:"String Quintet In e Major, Op. 13",src:"../assets/sounds/3.mp3",duration:"01:06"},{title:"The Four Seasons, Op. 8",src:"../assets/sounds/4.mp3",duration:"01:01"},{title:"Minuet Orchestral Suite №2",src:"../assets/sounds/5.mp3",duration:"01:26"}],Ee=document.querySelector(".play-prev"),Ie=document.querySelector(".play-next"),we=document.querySelector(".play"),Me=document.querySelector(".volume"),Te=document.querySelector(".progress-bar"),He=document.querySelector(".volume-bar"),xe=document.querySelector(".current-time");let $e=document.querySelector(".name-audio"),Oe=document.querySelector(".general-time");const De=document.querySelector(".play-list");let _e,je;const Ae=new Audio;let Ue=!1,Fe=0,Ge=0;function Ne(e){let t=Ce[e].title;Oe.innerHTML=Ce[e].duration,$e.innerHTML=Ce[e].title,Ae.src=`./assets/sounds/${t}.mp3`,Ae.currentTime=Ge,Ae.play(),Ue=!0,_e.forEach(((t,n)=>{n===e?t.classList.add("play-item_active"):t.classList.remove("play-item_active")})),je.forEach(((t,n)=>{n===e?t.classList.toggle("pause"):t.classList.remove("pause")}))}function We(){Ue?(Ge=Ae.currentTime,Ae.pause(),Ue=!1):Ne(Fe),Ue||je.forEach((e=>{e.classList.remove("pause")})),we.classList.toggle("pause")}function ze(){Fe++,Ge=0,Fe>4&&(Fe=0),we.classList.add("pause"),Ne(Fe),Qe()}function Qe(){Te.value=Ae.currentTime/Ae.duration*100||0,Te.style.background=`linear-gradient(to right, darkgreen 0%, darkgreen ${Te.value}%, #C4C4C4 ${Te.value}%, #C4C4C4 100%)`;let e=Math.round(Ae.currentTime);Ge=e,e<10?xe.innerHTML=`00:0${e}`:e>9&&e<60?xe.innerHTML=`00:${e}`:e>59&&(xe.innerHTML=e%60<10?`0${Math.floor(e/60)}:0${e%60}`:`0${Math.floor(e/60)}:${e%60}`)}Ae.volume=.5,Te.style.background="#C4C4C4",$e.innerHTML=Ce[0].title,function(){for(let e=0;e<Ce.length;e++){const t=document.createElement("div"),n=document.createElement("li"),o=document.createElement("button");let i=["play","player-icon","li-icon"];t.classList.add("li-container"),n.classList.add("play-item"),n.textContent=Ce[e].title,o.classList.add(...i),De.append(t),t.append(o),t.append(n)}_e=document.querySelectorAll(".play-item")}(),je=document.querySelectorAll(".li-icon"),je.forEach(((e,t)=>{Ge=0,e.addEventListener("click",(function(){e.classList.contains("pause")?(We(),e.classList.remove("pause")):t===Fe?(Ne(t),we.classList.add("pause")):(Fe=t,Ge=0,Ne(t),we.classList.add("pause"))}))})),Ae.addEventListener("ended",ze),Me.addEventListener("click",(function(){let e=Ae.volume;Ae.muted&&0!==e?(Ae.muted=!1,Me.style.backgroundImage="url(./assets/svg/volume.svg)",He.value=e,He.style.background=`linear-gradient(to right, darkgreen 0%, darkgreen ${100*e}%, #C4C4C4 ${100*e}%, #C4C4C4 100%)`):(Ae.muted=!0,Me.style.backgroundImage="url(./assets/svg/mute.svg)",He.value=0,He.style.background="linear-gradient(to right, #C4C4C4 0%, #C4C4C4 100%)")})),He.addEventListener("input",(function(){Ae.volume=He.value,"0"===He.value?Me.style.backgroundImage="url(./assets/svg/mute.svg)":(Me.style.backgroundImage="url(./assets/svg/volume.svg)",Ae.muted=!1)})),He.addEventListener("input",(function(){const e=this.value;this.style.background=`linear-gradient(to right, darkgreen 0%, darkgreen ${100*e}%, #C4C4C4 ${100*e}%, #C4C4C4 100%)`})),Ae.addEventListener("timeupdate",Qe),Te.addEventListener("input",(function(e){Ae.currentTime=e.target.value*Ae.duration/100,Qe()})),Te.addEventListener("input",(function(){const e=this.value;this.style.background=`linear-gradient(to right, darkgreen 0%, darkgreen ${e}%, #C4C4C4 ${e}%, #C4C4C4 100%)`})),we.addEventListener("click",We),Ie.addEventListener("click",ze),Ee.addEventListener("click",(function(){Fe--,Ge=0,Fe<0&&(Fe=4),we.classList.add("pause"),Ne(Fe),Qe()}));const Ke=document.querySelector(".time"),Pe=document.querySelector(".input-time"),Re=document.querySelector(".date"),Xe=document.querySelector(".input-date"),Ye=document.querySelector(".greeting-container"),Ze=document.querySelector(".input-greeting"),Be=document.querySelector(".quote-container"),Je=document.querySelector(".input-quotes"),Ve=document.querySelector(".weather"),et=document.querySelector(".input-weather"),tt=document.querySelector(".player"),nt=document.querySelector(".input-audio"),ot=document.querySelector(".todo"),it=document.querySelector(".input-todo");let ct=!1,lt=!1,rt=!1,at=!1,st=!1,dt=!1,ut=!1;window.onload=function(){"true"===localStorage.getItem("hideOrShowTime")&&(Ke.style.opacity="0",Ke.style.visibility="hidden",Pe.checked=!1,ct=!0),"true"===localStorage.getItem("hideOrShowDate")&&(Re.style.opacity="0",Re.style.visibility="hidden",Xe.checked=!1,lt=!0),"true"===localStorage.getItem("hideOrShowGreeting")&&(Ye.style.opacity="0",Ye.style.visibility="hidden",Ze.checked=!1,rt=!0),"true"===localStorage.getItem("hideOrShowQuotes")&&(Be.style.opacity="0",Be.style.visibility="hidden",Je.checked=!1,at=!0),"true"===localStorage.getItem("hideOrShowWeather")&&(Ve.style.opacity="0",Ve.style.visibility="hidden",et.checked=!1,st=!0),"true"===localStorage.getItem("hideOrShowPlayer")&&(tt.style.opacity="0",tt.style.visibility="hidden",nt.checked=!1,dt=!0),"true"===localStorage.getItem("hideOrShowTodo")&&(ot.style.opacity="0",ot.style.visibility="hidden",it.checked=!1,ut=!0)},Pe.addEventListener("click",(function(){ct?(Ke.style.opacity="1",Ke.style.visibility="visible",Pe.checked=!0,ct=!1):(Ke.style.opacity="0",Ke.style.visibility="hidden",ct=!0),localStorage.setItem("hideOrShowTime",ct)})),Xe.addEventListener("click",(function(){lt?(Re.style.opacity="1",Re.style.visibility="visible",Xe.checked=!0,lt=!1):(Re.style.opacity="0",Re.style.visibility="hidden",lt=!0),localStorage.setItem("hideOrShowDate",lt)})),Ze.addEventListener("click",(function(){rt?(Ye.style.opacity="1",Ye.style.visibility="visible",Ze.checked=!0,rt=!1):(Ye.style.opacity="0",Ye.style.visibility="hidden",rt=!0),localStorage.setItem("hideOrShowGreeting",rt)})),Je.addEventListener("click",(function(){at?(Be.style.opacity="1",Be.style.visibility="visible",Je.checked=!0,at=!1):(Be.style.opacity="0",Be.style.visibility="hidden",at=!0),localStorage.setItem("hideOrShowQuotes",at)})),et.addEventListener("click",(function(){st?(Ve.style.opacity="1",Ve.style.visibility="visible",et.checked=!0,st=!1):(Ve.style.opacity="0",Ve.style.visibility="hidden",st=!0),localStorage.setItem("hideOrShowWeather",st)})),nt.addEventListener("click",(function(){dt?(tt.style.opacity="1",tt.style.visibility="visible",nt.checked=!0,dt=!1):(tt.style.opacity="0",tt.style.visibility="hidden",dt=!0),localStorage.setItem("hideOrShowPlayer",dt)})),it.addEventListener("click",(function(){ut?(ot.style.opacity="1",ot.style.visibility="visible",it.checked=!0,ut=!1):(ot.style.opacity="0",ot.style.visibility="hidden",ut=!0),localStorage.setItem("hideOrShowTodo",ut)})),function e(){const t=(new Date).toLocaleTimeString();se.textContent=t,function(){const e=new Date,t={weekday:"long",month:"long",day:"numeric"};let n;n="en"===z?e.toLocaleDateString("en-US",t):e.toLocaleDateString("ru-Ru",t).charAt(0).toUpperCase()+e.toLocaleDateString("ru-Ru",t).slice(1),de.textContent=n}(),ke(),setTimeout(e,1e3)}(),J(),n(),U(),re(),v()})();