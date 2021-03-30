import{d as t,c as e,a,w as o,F as n,r as s,t as r,b as i,e as l,o as d,f as c,g as u,h as m,i as h,j as p}from"./vendor.38b158f4.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(a){const o=new URL(t,location),n=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((a,s)=>{const r=new URL(t,o);if(self[e].moduleMap[r])return a(self[e].moduleMap[r]);const i=new Blob([`import * as m from '${r}';`,`${e}.moduleMap['${r}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${t}`)),n(l)},onload(){a(self[e].moduleMap[r]),n(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("/30daysoftailwindcss/assets/");const f=t({data:()=>({showMenu:!1,showProfileMenu:!1,links:[{text:"Day 1",to:"/day1"},{text:"Day 2",to:"/day2"},{text:"Day 3",to:"/day3"},{text:"Day 4",to:"/day4"},{text:"Day 5",to:"/day5"},{text:"Day 6",to:"/day6"},{text:"Day 7",to:"/day7"},{text:"Day 8",to:"/day8"},{text:"Day 9",to:"/day9"},{text:"Day 10",to:"/day10"},{text:"Day 11",to:"/day11"},{text:"Day 12",to:"/day12"}]})}),g={class:"bg-gray-800 border-b border-gray-600"},b={class:"container"},x={class:"flex items-center justify-between h-16"},y={class:"flex items-center overflow-x-auto"},w={class:"flex-shrink-0"},v=a("svg",{class:"h-8 w-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 242.41 323.21"},[a("path",{d:"M161.6 80.8v80.8H80.8V80.8H0v242.41h80.8v-80.8h80.8v80.8h80.81V80.8H161.6zM80.8 0h80.8v80.8H80.8z"})],-1),k={class:"hidden md:block"},M={class:"ml-4 flex items-baseline"},_={class:"-mr-2 flex md:hidden"},C=a("svg",{class:"block h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1),j=a("svg",{class:"hidden h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),D={class:"px-2 pt-2 pb-3 sm:px-3"},R={key:0,class:"dark:bg-gray-800 dark:text-white"},A={class:"container py-6 px-4"},z={class:"text-4xl font-bold leading-tight mb-4"},K={key:0,class:"text-xl"},q={class:"container py-6"};f.render=function(t,c,u,m,h,p){const f=l("router-link"),F=l("router-view");return d(),e("div",null,[a("nav",g,[a("div",b,[a("div",x,[a("div",y,[a("div",w,[a(f,{class:"p-2 block fill-current text-gray-300 hover:bg-gray-700 rounded-md focus:outline-none focus:bg-gray-700 focus:text-white hover:text-whites",to:"/"},{default:o((()=>[v])),_:1})]),a("div",k,[a("div",M,[(d(!0),e(n,null,s(t.links,((t,n)=>(d(),e(f,{key:n,to:t.to,custom:""},{default:o((({navigate:e,href:o,isExactActive:s})=>[a("a",{href:o,onClick:e,class:["px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap",[s?"text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700":"text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",n>0&&"ml-4"]]},r(t.text),11,["href","onClick"])])),_:2},1032,["to"])))),128))])])]),a("div",_,[a("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white",onClick:c[1]||(c[1]=e=>t.showMenu=!t.showMenu)},[C,j])])])]),a("div",{class:["md:hidden",t.showMenu?"block":"hidden"]},[a("div",D,[(d(!0),e(n,null,s(t.links,((n,s)=>(d(),e(f,{key:s,to:n.to,custom:""},{default:o((({navigate:e,href:o,isExactActive:i})=>[a("a",{href:o,onClick:a=>e().then((()=>t.showMenu=!1)),class:["block px-3 py-2 rounded-md text-base font-medium",[i?"text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700":"text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",s>0&&"mt-1"]]},r(n.text),11,["href","onClick"])])),_:2},1032,["to"])))),128))])],2)]),t.$route.meta.title?(d(),e("header",R,[a("div",A,[a("h1",z,r(t.$route.meta.title)+" Challenge ",1),t.$route.meta.description?(d(),e("p",K,r(t.$route.meta.description),1)):i("",!0)])])):i("",!0),a("div",q,[a(F)])])};const F={},E=a("div",{class:"dark:text-white text-center"},[a("img",{class:"w-48 mx-auto animate-pulse",src:"/30daysoftailwindcss/img/claps.png",alt:"clap it up"}),a("h1",{class:"text-6xl font-bold leading-tight mb-4"},"30 Days of Tailwind CSS"),a("p",{class:"text-xl"}," A site to show all the challenge demos from the 30 days TailwindCSS challenge. ")],-1);F.render=function(t,a){return d(),e("main",null,[E])};const B={},S=a("div",{class:"demo-container"},[a("article",{class:"prose lg:prose-xl"},[a("p",null,[c(" Initially, I had set up this project without a framework more or less following "),a("a",{href:"https://flaviocopes.com/tailwind-setup/"},"this article"),c(". After getting this base project running and diving into TailwindCSS more I wanted to set up a quick boilerplate so I could have an easy way to showcase all of my demos that I would make for this challenge. ")])])],-1);B.render=function(t,a){return d(),e("main",null,[S])};const T={},L=u('<div class="demo-container"><article class="prose lg:prose-xl"><h1>Send weighed faces Dwarvish grant lowest lowly key-hole!</h1><p> For typography I opted to try out the <a href="https://github.com/tailwindlabs/tailwindcss-typography/">@tailwindcss/typography</a> package. It makes typography super simple and looks great. </p><p> It must be taken deep into Mordor and cast back into the fiery chasm from whence it came. Háma gives parasites possess resisted wise luck deepening tosses lordship 14th. Mice trinket quality Brave business fouler cook cruelty. </p><h2>Elfs root astride able-bodied skills faces.</h2><blockquote><p> Ought shield alerts Gloin and thick. Shelob&#39;s telling dungeons he&#39;s crochet? Towards Goblin-men season extra? Fundin has alive living? </p></blockquote><ol><li>Nearing flows heirloom minutes 13 Nûmenor injury throws everyone&#39;s?</li><li> Thorin Oakenshield relatives rejoin escape raspberry appears gold slaves absence allegiance. </li><li>Guards Westfarthing 10000 handy raining marry crowns.</li><li>Thought reads rip Fenmarch companions sends shore sack tollgate!</li><li>Needs gems sailed both Galadriel loose bit whithertos defeats.</li></ol><h3>Carcasses storm unsavory craftsmen Dori says furs fishes?</h3><p> Knew caution Mithrandir. Merry none standing house shepherd one&#39;s depends farming master neck repel. Bolger tend emptiness. I have no memory of this place. </p><div class="overflow-x-auto"><table><thead><tr><th></th><th>Seduced</th><th>Hastens</th><th>Meddle</th><th>Teaching</th><th>Negotiations</th></tr></thead><tbody><tr><td>Caught</td><td>numbers</td><td>hazel</td><td>marshland</td><td>joke</td><td>chance</td></tr><tr><td>Ones</td><td>he&#39;s</td><td>sway</td><td>worry</td><td>hard-won</td><td>filth</td></tr><tr><td>Run</td><td>bow</td><td>following</td><td>flurgaburburhobbit</td><td>wrong</td><td>feeling</td></tr><tr><td>Splash</td><td>grief</td><td>unfair</td><td>nearly</td><td>children</td><td>mix</td></tr><tr><td>Swamp</td><td>compositions</td><td>liar</td><td>lippy</td><td>bind</td><td>stopping</td></tr><tr><td>Day&#39;s</td><td>strain</td><td>paid</td><td>happy</td><td>stinker</td><td>reputation</td></tr></tbody></table></div><h4>Robbed gray 100 trusted pleaded otherwise stammer Háma?</h4><ul><li>Arwen Evenstar!</li><li>Grimbold?</li><li>Eorlingas?</li><li>Beorn.</li><li>Gon?</li></ul></article></div>',1);T.render=function(t,a,o,n,s,r){return d(),e("main",null,[L])};const U={},P=a("div",{class:"demo-container"},[a("div",{class:"flex flex-wrap"},[a("button",{type:"button",class:"rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out"}," Primary Button "),a("button",{type:"button",class:"rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-3 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out"}," Secondary Button "),a("button",{type:"button",class:"rounded-md border border-transparent px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-3 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out inline-flex justify-center"},[a("svg",{class:"-ml-1 mr-2 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[a("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd","aria-hidden":"true"})]),c(" Destructive Button ")]),a("button",{type:"button",class:"rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-3 md:mt-0 sm:ml-3 sm:w-auto sm:text-sm w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed",disabled:""}," Disabled Button ")])],-1);U.render=function(t,a){return d(),e("main",null,[P])};const Y=t({data:()=>({options:["Aragorn","Frodo Baggins","Gandalf","Legolas","Gollum","Arwen"]})}),I={class:"demo-container"},G=a("label",{for:"character-select",class:"block text-sm font-medium text-gray-700"}," Character ",-1),H={class:"relative w-full border-none text-gray-700"},W={name:"characters",id:"character-select",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none cursor-pointer"},$=a("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-5 w-5"},[a("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1);Y.render=function(t,o,i,l,c,u){return d(),e("main",null,[a("div",I,[G,a("div",H,[a("select",W,[(d(!0),e(n,null,s(t.options,(t=>(d(),e("option",{key:t},r(t),1)))),128))]),$])])])};const N=t({data:()=>({options:["Aragorn","Frodo Baggins","Gandalf","Legolas","Gollum","Arwen"]})}),O={class:"demo-container"},Q={action:"#",method:"POST",onsubmit:"return false;"},Z={class:"grid md:grid-cols-2 gap-4 form-container mx-auto"},V=a("div",null,[a("label",{for:"first-name-input",class:"block text-sm font-medium text-gray-700"}," First Name "),a("input",{name:"first-name-input",id:"first-name-input",type:"text",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none"})],-1),J=a("div",null,[a("label",{for:"last-name-input",class:"block text-sm font-medium text-gray-700"}," Last Name "),a("input",{name:"last-name-input",id:"last-name-input",type:"text",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none"})],-1),X=a("div",{class:"col-span-full"},[a("label",{for:"number-input",class:"block text-sm font-medium text-gray-700"}," Price "),a("input",{name:"number-input",id:"number-input",type:"number",inputMode:"numeric",placeholder:"$420.09",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none font-mono"})],-1),tt=a("div",{class:"col-span-full"},[a("label",{for:"text-area-input",class:"block text-sm font-medium text-gray-700"}," Comment "),a("textarea",{name:"text-area-input",id:"text-area-input",type:"text",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none"})],-1),et={class:"col-span-full"},at=a("label",{for:"character-select",class:"block text-sm font-medium text-gray-700"}," Character ",-1),ot={class:"relative w-full border-none text-gray-700"},nt={name:"character-select",id:"character-select",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none cursor-pointer"},st=a("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-5 w-5"},[a("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1),rt=a("div",{class:"flex flex-col-reverse mt-4 sm:block col-span-full sm:place-self-end"},[a("button",{type:"button",class:"rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-3 sm:mt-0 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out"}," Cancel "),a("button",{type:"submit",class:"rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:ml-3 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out"}," Submit ")],-1);N.render=function(t,o,i,l,c,u){return d(),e("main",null,[a("div",O,[a("form",Q,[a("div",Z,[V,J,X,tt,a("div",et,[at,a("div",ot,[a("select",nt,[(d(!0),e(n,null,s(t.options,(t=>(d(),e("option",{key:t},r(t),1)))),128))]),st])]),rt])])])])};const it={},lt=u('<div class="demo-container"><div class="bg-white relative shadow-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto mt-20"><div class="flex justify-center"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQF_5q1c_ikyqA/profile-displayphoto-shrink_100_100/0/1517032943510?e=1621468800&amp;v=beta&amp;t=MPR6YBkzWa9RvYb7zuqK1KKMglU_nKyE_ZlzFcpumRw" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white"></div><div class="mt-16"><h1 class="font-bold text-center text-3xl text-gray-900">Andrew Heinke</h1><p class="text-center text-sm text-gray-400 font-medium"> Front End Software Engineer </p><div class="my-5"><a href="javascript:;" class="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-blue-600">Connect with <span class="font-bold">@andrewheinke</span></a></div><div class="md:flex mb-5"><a href="javascript:;" class="bg font-bold text-sm text-blue-800 w-1/2 md:w-full text-center py-3 hover:bg-blue-800 hover:text-white hover:shadow-lg inline-block">Facebook</a><a href="javascript:;" class="bg font-bold text-sm text-blue-400 w-1/2 md:w-full text-center py-3 hover:bg-blue-400 hover:text-white hover:shadow-lg inline-block">Twitter</a><a href="javascript:;" class="bg font-bold text-sm text-yellow-600 w-1/2 md:w-full text-center py-3 hover:bg-yellow-600 hover:text-white hover:shadow-lg inline-block">Instagram</a><a href="javascript:;" class="bg font-bold text-sm text-gray-600 w-1/2 md:w-full text-center py-3 hover:bg-gray-600 hover:text-white hover:shadow-lg inline-block">Email</a></div><div class="w-full"><h3 class="font-bold text-gray-600 text-left px-4">Recent activites</h3><div class="mt-5 w-full"><a href="javascript:;" class="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQF_5q1c_ikyqA/profile-displayphoto-shrink_100_100/0/1517032943510?e=1621468800&amp;v=beta&amp;t=MPR6YBkzWa9RvYb7zuqK1KKMglU_nKyE_ZlzFcpumRw" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"> Updated his status <span class="text-gray-400 text-sm">24 min ago</span></a><a href="javascript:;" class="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQF_5q1c_ikyqA/profile-displayphoto-shrink_100_100/0/1517032943510?e=1621468800&amp;v=beta&amp;t=MPR6YBkzWa9RvYb7zuqK1KKMglU_nKyE_ZlzFcpumRw" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"> Added new profile picture <span class="text-gray-400 text-sm">42 min ago</span></a><a href="javascript:;" class="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQF_5q1c_ikyqA/profile-displayphoto-shrink_100_100/0/1517032943510?e=1621468800&amp;v=beta&amp;t=MPR6YBkzWa9RvYb7zuqK1KKMglU_nKyE_ZlzFcpumRw" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"> Posted new article in <span class="font-bold">Web Dev </span><span class="text-gray-400 text-sm">49 min ago</span></a><a href="javascript:;" class="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQF_5q1c_ikyqA/profile-displayphoto-shrink_100_100/0/1517032943510?e=1621468800&amp;v=beta&amp;t=MPR6YBkzWa9RvYb7zuqK1KKMglU_nKyE_ZlzFcpumRw" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"> Edited website settings <span class="text-gray-400 text-sm">1 day ago</span></a><a href="javascript:;" class="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQF_5q1c_ikyqA/profile-displayphoto-shrink_100_100/0/1517032943510?e=1621468800&amp;v=beta&amp;t=MPR6YBkzWa9RvYb7zuqK1KKMglU_nKyE_ZlzFcpumRw" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"> Added new rank <span class="text-gray-400 text-sm">5 days ago</span></a></div></div></div></div></div>',1);it.render=function(t,a){return d(),e("main",null,[lt])};const dt={},ct=a("div",{class:"demo-container"},"Check out the nav bar on this site :)",-1);dt.render=function(t,a){return d(),e("main",null,[ct])};const ut={},mt=u('<div class="demo-container"><div class="grid grid-cols-1 md:grid-cols-6 gap-4"><div class="bg-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"> 1 </div><div class="bg-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"> 2 </div><div class="bg-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"> 3 </div><div class="bg-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"> 4 </div><div class="bg-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"> 5 </div><div class="bg-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"> 6 </div><div class="bg-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"> 7 </div><div class="bg-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"> 8 </div><div class="bg-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"> 9 </div><div class="bg-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"> 10 </div><div class="bg-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"> 11 </div><div class="bg-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"> 12 </div></div></div>',1);ut.render=function(t,a){return d(),e("main",null,[mt])};const ht={},pt=a("div",{class:"demo-container"},"content to come ...",-1);ht.render=function(t,a){return d(),e("main",null,[pt])};const ft={},gt=a("div",{class:"demo-container"},"content to come ...",-1);ft.render=function(t,a){return d(),e("main",null,[gt])};const bt={},xt=a("div",{class:"demo-container"},"content to come ...",-1);bt.render=function(t,a){return d(),e("main",null,[xt])};const yt={},wt=a("div",{class:"demo-container"},"content to come ...",-1);yt.render=function(t,a){return d(),e("main",null,[wt])};const vt={},kt={class:"px-4 py-6 sm:px-0 mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},Mt=a("div",{class:"sm:text-center lg:text-left"},[a("h2",{class:"text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"}," Not found "),a("p",{class:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"}," The page you requested doesn't seem to exist... ")],-1);vt.render=function(t,a){return d(),e("div",kt,[Mt])};let _t=[{path:"/",component:F},{path:"/day1",component:B,meta:{title:"Day 1",description:"Install Tailwind CSS without any Javascript Framework locally with purgeCSS, enable the dark mode option, preferences or class is up to you."}},{path:"/day2",component:T,meta:{title:"Day 2",description:"Write some text including headings and subheadings, quotes, italics. Train your typography."}},{path:"/day3",component:U,meta:{title:"Day 3",description:"Create state buttons with a hover and a transition effect, like primary button, secondary and for example disable."}},{path:"/day4",component:Y,meta:{title:"Day 4",description:"Create and rework a select element including options and style it with only Tailwind."}},{path:"/day5",component:N,meta:{title:"Day 5",description:"Create a form with buttons, inputs and text areas. Remember the download and upload buttons, those can be also included. And center it in the middle. Make it responsive."}},{path:"/day6",component:it,meta:{title:"Day 6",description:"Create an avatar inside a card along with some text, and make it 100% responsive."}},{path:"/day7",component:dt,meta:{title:"Day 7",description:"Create a navigation bar with logo, links and a CTA. Make it fixed, sticky or normal."}},{path:"/day8",component:ut,meta:{title:"Day 8",description:"Create a grid with columns and rows, use tailwinds flexbox utilities make it responsive."}},{path:"/day9",component:ht,meta:{title:"Day 9",description:"Create a 5 widget and position them differently on the website."}},{path:"/day10",component:ft,meta:{title:"Day 10",description:"Make a card with and image and text. The text has to be on top of the image, use absolute and relative."}},{path:"/day11",component:bt,meta:{title:"Day 11",description:"Make some sections and a container within and give them different widths and heights."}},{path:"/day12",component:yt,meta:{title:"Day 12",description:"Create a section with an image, with text to the right, left or underneath or on top of it. Make it responsive."}},{path:"/:path(.*)",component:vt}],Ct=m(f),jt=h({history:p("/30daysoftailwindcss/"),routes:_t});Ct.use(jt),Ct.mount("#app");