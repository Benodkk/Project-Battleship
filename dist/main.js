(()=>{"use strict";let e=!0;const s=()=>{const e=new Array(100).fill(!1);let s=[];return{board:e,myShips:s,placeShips:function(t){let l=s.length+1;s.push(l),t.forEach((s=>e[s]=l))},receiveAttack:function(s){let t;return 0==e[s]?e[s]="missed":"HIT!"!==e[s]&&"missed"!==e[s]&&!1!==e[s]?e[s]="HIT!":t="error",t},AllShipsSunk:function(){return e.every((e=>"missed"==e||"HIT!"==e||0==e))}}};let t=(()=>{let s=[];return{playerChoice:function(){e=!1},computerChoice:function t(){let l;return 0==e&&(l=Math.floor(100*Math.random()),1==s.some((e=>e==l))?t():(s.push(l),e=!0)),l},computerMoves:s}})(),l=s(),i=[],h=s(),o=[];function p(){for(let e=0;e<o.length;e++)1==o[e].isSunk()&&console.log("The ship has been sunk")}function n(){1==l.AllShipsSunk()?console.log("koniec komp wygral"):1==h.AllShipsSunk()&&console.log("koniec janusz wygral")}const a=(e,s,t)=>{const l=new Array(s).fill(!1);return{id:e,long:s,fields:t,oneShip:l,shipHit:function(e){let s=t.indexOf(e);l[s]=!0},isSunk:function(){return l.every((e=>!0===e))}}};let u,d=document.querySelector(".playerBoard"),r=document.querySelector(".computerBoard"),c=document.querySelector(".add1pole"),f=document.querySelector(".add2pole"),m=document.querySelector(".add3pole"),g=document.querySelector(".add4pole"),k=[],S=[],M=1,L=2,b=3,v=4;function y(){let e=l.board[t.computerMoves[t.computerMoves.length-1]];l.receiveAttack(t.computerMoves[t.computerMoves.length-1]),d.textContent="";for(let s=0;s<=99;s++){let t=document.createElement("div");d.appendChild(t),t.classList.add("pixel");for(let e=0;e<k.length;e++)k[e]==s&&t.classList.add("ship");if(t.addEventListener("click",(()=>{if(1==u&&(0==S.length&&(S.push(s),k.push(s),t.classList.add("ship")),1==S.length)){let e=a(i.length+1,u,S);i.push(e),l.placeShips(e.fields),S=[],u=0,v-=1}if(2==u&&(0==S.length&&(S.push(s),k.push(s),t.classList.add("ship")),s!=S[0]-1&&s!=S[0]+1&&s!=S[0]+10&&s!=S[0]-10||(S.push(s),k.push(s),t.classList.add("ship")),2==S.length)){let e=a(i.length+1,u,S);i.push(e),l.placeShips(e.fields),S=[],u=0,b-=1}if(3==u&&(0==S.length&&(S.push(s),k.push(s),t.classList.add("ship")),1==S.length&&(s!=S[0]-1&&s!=S[0]+1&&s!=S[0]+10&&s!=S[0]-10||(S.push(s),k.push(s),t.classList.add("ship"))),2==S.length&&(S[0]-S[1]==10&&s==S[1]-10||S[0]-S[1]==10&&s==S[0]+10||S[1]-S[0]==10&&s==S[0]-10||S[1]-S[0]==10&&s==S[1]+10||S[0]-S[1]==1&&s==S[1]-1||S[0]-S[1]==1&&s==S[0]+1||S[1]-S[0]==1&&s==S[0]-1||S[1]-S[0]==1&&s==S[1]+1)&&(S.push(s),k.push(s),t.classList.add("ship")),3==S.length)){let e=a(i.length+1,u,S);i.push(e),l.placeShips(e.fields),S=[],u=0,L-=1}if(4==u&&(0==S.length&&(S.push(s),k.push(s),t.classList.add("ship")),1==S.length&&(s!=S[0]-1&&s!=S[0]+1&&s!=S[0]+10&&s!=S[0]-10||(S.push(s),k.push(s),t.classList.add("ship"))),2==S.length&&(S[0]-S[1]==10&&s==S[1]-10||S[0]-S[1]==10&&s==S[0]+10||S[1]-S[0]==10&&s==S[0]-10||S[1]-S[0]==10&&s==S[1]+10||S[0]-S[1]==1&&s==S[1]-1||S[0]-S[1]==1&&s==S[0]+1||S[1]-S[0]==1&&s==S[0]-1||S[1]-S[0]==1&&s==S[1]+1)&&(S.push(s),k.push(s),t.classList.add("ship")),3==S.length&&(S[0]-S[2]==20&&s==S[2]-10||S[0]-S[2]==20&&s==S[0]+10||S[0]-S[2]==10&&s==S[2]-10||S[0]-S[2]==10&&s==S[1]+10||S[2]-S[0]==20&&s==S[2]+10||S[2]-S[0]==20&&s==S[0]-10||S[2]-S[0]==10&&s==S[0]-20||S[2]-S[0]==10&&s==S[2]+10||S[0]-S[2]==2&&s==S[2]-1||S[0]-S[2]==2&&s==S[0]+1||S[0]-S[2]==1&&s==S[2]-1||S[0]-S[2]==1&&s==S[1]+1||S[2]-S[0]==2&&s==S[2]+1||S[2]-S[0]==2&&s==S[0]-1||S[2]-S[0]==1&&s==S[0]-2||S[2]-S[0]==1&&s==S[2]+1)&&(S.push(s),k.push(s),t.classList.add("ship")),4==S.length)){let e=a(i.length+1,u,S);i.push(e),l.placeShips(e.fields),S=[],u=0,M-=1}})),"missed"==l.board[s])t.classList.add("missed");else if("HIT!"==l.board[s]){t.classList.remove("ship"),t.classList.add("hit");for(let t=0;t<i.length;t++)if(e==i[t].id&&(i[t].shipHit(s),1==i[t].isSunk()))for(let e=0;e<=i[t].long;e++)l.board[i[t].fields[e]]="sunk"}"sunk"==l.board[s]&&(t.classList.remove("ship"),t.classList.add("sunk"))}!function(){for(let e=0;e<i.length;e++)if(1==i[e].isSunk()){console.log("Janusz ship has been sunk");for(let s=0;s<i[e].length;s++)console.log("okej")}}(),n()}c.addEventListener("click",(()=>{v>0&&(u=1)})),f.addEventListener("click",(()=>{b>0&&(u=2)})),m.addEventListener("click",(()=>{L>0&&(u=3)})),g.addEventListener("click",(()=>{M>0&&(u=4)})),y(),function(){for(let s=0;s<=99;s++){let l=document.createElement("div");r.appendChild(l),l.classList.add("pixelC"),l.setAttribute("idd",s),1==e&&l.addEventListener("click",(()=>{if(1==e&&0==M&&0==L&&0==b&&0==v){let e=h.board[s];if(h.receiveAttack(s),"missed"==h.board[s])l.classList.add("missed");else if("HIT!"==h.board[s]){l.classList.add("hit");for(let t=0;t<o.length;t++)if(e==o[t].id&&(o[t].shipHit(s),1==o[t].isSunk()))for(let e=0;e<=o[t].long;e++){let s=document.querySelector(`[idd="${o[t].fields[e]}"`);console.log(s),console.log(o[t].long)}}p(),n(),t.playerChoice(),t.computerChoice(),y()}}))}!function(){let e,s,t,l,i=[],p=[];e=10*Math.floor(7*Math.random()),s=Math.floor(7*Math.random()),t=e+s,p.push(t),i.push(t),l=Math.floor(2*Math.random()),0==l?(p.push(t+10),i.push(t+10),p.push(t+20),i.push(t+20),p.push(t+30),i.push(t+30)):1==l&&(p.push(t+1),i.push(t+1),p.push(t+2),i.push(t+2),p.push(t+3),i.push(t+3));let n=a(1,4,p);o.push(n),h.placeShips(n.fields);let u=[];!function h(){u=[];for(let o=0;o<2;o++)if(e=10*Math.floor(8*Math.random()),s=Math.floor(8*Math.random()),t=e+s,l=Math.floor(2*Math.random()),0==l){if(1==i.some((e=>e==t))){h();break}if(u.push(t),i.push(t),1==i.some((e=>e==t+10))){h();break}if(u.push(t+10),i.push(t+10),1==i.some((e=>e==t+20))){h();break}u.push(t+20),i.push(t+20)}else if(1==l){if(1==i.some((e=>e==t))){h();break}if(u.push(t),i.push(t),1==i.some((e=>e==t+1))){h();break}if(u.push(t+1),i.push(t+1),1==i.some((e=>e==t+2))){h();break}u.push(t+2),i.push(t+2)}}();let d=a(2,3,[u[0],u[1],u[2]]);o.push(d),h.placeShips(d.fields);let r=a(3,3,[u[3],u[4],u[5]]);o.push(r),h.placeShips(r.fields);let c=[];!function h(){c=[];for(let o=0;o<3;o++)if(e=10*Math.floor(9*Math.random()),s=Math.floor(9*Math.random()),t=e+s,l=Math.floor(2*Math.random()),0==l){if(1==i.some((e=>e==t))){h();break}if(c.push(t),i.push(t),1==i.some((e=>e==t+10))){h();break}c.push(t+10),i.push(t+10)}else if(1==l){if(1==i.some((e=>e==t))){h();break}if(c.push(t),i.push(t),1==i.some((e=>e==t+1))){h();break}c.push(t+1),i.push(t+1)}}();let f=a(4,2,[c[0],c[1]]);o.push(f),h.placeShips(f.fields);let m=a(5,2,[c[2],c[3]]);o.push(m),h.placeShips(m.fields);let g=a(6,2,[c[4],c[5]]);o.push(g),h.placeShips(g.fields);let k=[];!function e(){k=[];for(let s=0;s<4;s++){if(t=Math.floor(100*Math.random()),1==i.some((e=>e==t))){e();break}k.push(t),i.push(t)}}();let S=a(7,1,[k[0]]);o.push(S),h.placeShips(S.fields);let M=a(8,1,[k[1]]);o.push(M),h.placeShips(M.fields);let L=a(9,1,[k[2]]);o.push(L),h.placeShips(L.fields);let b=a(10,1,[k[3]]);o.push(b),h.placeShips(b.fields)}()}()})();