(()=>{"use strict";const e=()=>{let e=!0,t=[];return{playerChoice:function(t){let l;return 1==e&&(l=t,e=!1),l},computerChoice:function l(){let o;return 0==e&&(o=Math.floor(100*Math.random()),1==t.some((e=>e==o))?l():(t.push(o),e=!0)),o},computerMoves:t}},t=()=>{const e=new Array(100).fill(!1);let t=[];return{board:e,myShips:t,placeShips:function(l){let o=t.length+1;t.push(o),l.forEach((t=>e[t]=o))},receiveAttack:function(t){let l;return 0==e[t]?e[t]="missed":"HIT!"!==e[t]&&"missed"!==e[t]&&!1!==e[t]?e[t]="HIT!":l="error",l},AllShipsSunk:function(){return e.every((e=>"missed"==e||"HIT!"==e||0==e))}}},l=(e,t,l)=>{const o=new Array(t).fill(!1);return{id:e,long:t,fields:l,oneShip:o,shipHit:function(e){let t=l.indexOf(e);o[t]=!0},isSunk:function(){return o.every((e=>!0===e))}}};e();let o=t(),i=[],s=l(1,4,[1,2,3,4]);i.push(s);let n=l(2,3,[21,22,23]);i.push(n),e();let r=t();function c(){for(let e=0;e<o.myShips.length;e++)i[e].id,o.myShips[e],1==i[e].isSunk()&&console.log("koniec statku")}o.placeShips(s.fields),o.placeShips(n.fields);let d=document.querySelector(".playerBoard"),a=document.querySelector(".computerBoard");!function(){for(let e=0;e<=99;e++){let t=document.createElement("div");d.appendChild(t),t.classList.add("pixel"),t.addEventListener("click",(()=>{let l=o.board[e];if(o.receiveAttack(e),"missed"==o.board[e])t.classList.toggle("missed");else{t.classList.toggle("hit");for(let t=0;t<i.length;t++)l==i[t].id&&(i[t].shipHit(e),console.log(i[t].id),console.log(i[t].shipHit(e)))}c(),console.log(o.board),console.log(i[0].oneShip),console.log(i[1].oneShip),1==o.AllShipsSunk()&&console.log("koniec")}))}}(),function(){r.board[99]=1;for(let e=0;e<=99;e++){let t=document.createElement("div");a.appendChild(t),t.classList.add("pixel"),t.addEventListener("click",(()=>{r.receiveAttack(e),"missed"==r.board[e]?t.classList.toggle("missed"):t.classList.toggle("hit")}))}}()})();