import{d as t,c as e,a as o,w as a,F as n,r as s,t as r,b as i,e as l,o as d,f as c,g as u,h as m,i as p,j as h}from"./vendor.38b158f4.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(o){const a=new URL(t,location),n=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((o,s)=>{const r=new URL(t,a);if(self[e].moduleMap[r])return o(self[e].moduleMap[r]);const i=new Blob([`import * as m from '${r}';`,`${e}.moduleMap['${r}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${t}`)),n(l)},onload(){o(self[e].moduleMap[r]),n(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("/30daysoftailwindcss/assets/");const g=t({data:()=>({showMenu:!1,showProfileMenu:!1,links:[{text:"Day 1",to:"/day1"},{text:"Day 2",to:"/day2"},{text:"Day 3",to:"/day3"},{text:"Day 4",to:"/day4"},{text:"Day 5",to:"/day5"},{text:"Day 6",to:"/day6"},{text:"Day 7",to:"/day7"},{text:"Day 8",to:"/day8"},{text:"Day 9",to:"/day9"},{text:"Day 10",to:"/day10"},{text:"Day 11",to:"/day11"},{text:"Day 12",to:"/day12"}]})}),f={class:"bg-gray-800 border-b border-gray-600"},b={class:"container"},y={class:"flex items-center justify-between h-16"},w={class:"flex items-center overflow-x-auto"},x={class:"flex-shrink-0"},v=o("svg",{class:"h-8 w-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 242.41 323.21"},[o("path",{d:"M161.6 80.8v80.8H80.8V80.8H0v242.41h80.8v-80.8h80.8v80.8h80.81V80.8H161.6zM80.8 0h80.8v80.8H80.8z"})],-1),k={class:"hidden md:block"},C={class:"ml-4 flex items-baseline"},M={class:"-mr-2 flex md:hidden"},D=o("svg",{class:"block h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1),S=o("svg",{class:"hidden h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),T={class:"px-2 pt-2 pb-3 sm:px-3"},A={key:0,class:"dark:bg-gray-800 dark:text-white"},j={class:"container py-6 px-4"},B={class:"text-4xl font-bold leading-tight mb-4"},L={key:0,class:"text-xl"},F={class:"container py-6"};g.render=function(t,c,u,m,p,h){const g=l("router-link"),G=l("router-view");return d(),e("div",null,[o("nav",f,[o("div",b,[o("div",y,[o("div",w,[o("div",x,[o(g,{class:"p-2 block fill-current text-gray-300 hover:bg-gray-700 rounded-md focus:outline-none focus:bg-gray-700 focus:text-white hover:text-whites",to:"/"},{default:a((()=>[v])),_:1})]),o("div",k,[o("div",C,[(d(!0),e(n,null,s(t.links,((t,n)=>(d(),e(g,{key:n,to:t.to,custom:""},{default:a((({navigate:e,href:a,isExactActive:s})=>[o("a",{href:a,onClick:e,class:["px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap",[s?"text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700":"text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",n>0&&"ml-4"]]},r(t.text),11,["href","onClick"])])),_:2},1032,["to"])))),128))])])]),o("div",M,[o("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white",onClick:c[1]||(c[1]=e=>t.showMenu=!t.showMenu)},[D,S])])])]),o("div",{class:["md:hidden",t.showMenu?"block":"hidden"]},[o("div",T,[(d(!0),e(n,null,s(t.links,((n,s)=>(d(),e(g,{key:s,to:n.to,custom:""},{default:a((({navigate:e,href:a,isExactActive:i})=>[o("a",{href:a,onClick:o=>e().then((()=>t.showMenu=!1)),class:["block px-3 py-2 rounded-md text-base font-medium",[i?"text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700":"text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",s>0&&"mt-1"]]},r(n.text),11,["href","onClick"])])),_:2},1032,["to"])))),128))])],2)]),t.$route.meta.title?(d(),e("header",A,[o("div",j,[o("h1",B,r(t.$route.meta.title)+" Challenge ",1),t.$route.meta.description?(d(),e("p",L,r(t.$route.meta.description),1)):i("",!0)])])):i("",!0),o("div",F,[o(G)])])};const G={},I=o("div",{class:"dark:text-white text-center"},[o("img",{class:"w-48 mx-auto animate-pulse",src:"/30daysoftailwindcss/img/claps.png",alt:"clap it up"}),o("h1",{class:"text-6xl font-bold leading-tight mb-4"},"30 Days of Tailwind CSS"),o("p",{class:"text-xl"}," A site to show all the challenge demos from the 30 days TailwindCSS challenge. ")],-1);G.render=function(t,o){return d(),e("main",null,[I])};const H={},R=o("div",{class:"rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl"},[o("article",{class:"prose lg:prose-xl"},[o("p",null,[c(" Initially, I had set up this project without a framework more or less following "),o("a",{href:"https://flaviocopes.com/tailwind-setup/"},"this article"),c(". After getting this base project running and diving into TailwindCSS more I wanted to set up a quick boilerplate so I could have an easy way to showcase all of my demos that I would make for this challenge. ")])])],-1);H.render=function(t,o){return d(),e("main",null,[R])};const $={},z=u('<div class="rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl"><article class="prose lg:prose-xl"><h1>Send weighed faces Dwarvish grant lowest lowly key-hole!</h1><p> For typography I opted to try out the <a href="https://github.com/tailwindlabs/tailwindcss-typography/">@tailwindcss/typography</a> package. It makes typography super simple and looks great. </p><p> It must be taken deep into Mordor and cast back into the fiery chasm from whence it came. Háma gives parasites possess resisted wise luck deepening tosses lordship 14th. Mice trinket quality Brave business fouler cook cruelty. </p><h2>Elfs root astride able-bodied skills faces.</h2><blockquote><p> Ought shield alerts Gloin and thick. Shelob&#39;s telling dungeons he&#39;s crochet? Towards Goblin-men season extra? Fundin has alive living? </p></blockquote><ol><li>Nearing flows heirloom minutes 13 Nûmenor injury throws everyone&#39;s?</li><li> Thorin Oakenshield relatives rejoin escape raspberry appears gold slaves absence allegiance. </li><li>Guards Westfarthing 10000 handy raining marry crowns.</li><li>Thought reads rip Fenmarch companions sends shore sack tollgate!</li><li>Needs gems sailed both Galadriel loose bit whithertos defeats.</li></ol><h3>Carcasses storm unsavory craftsmen Dori says furs fishes?</h3><p> Knew caution Mithrandir. Merry none standing house shepherd one&#39;s depends farming master neck repel. Bolger tend emptiness. I have no memory of this place. </p><div class="overflow-x-auto"><table><thead><tr><th></th><th>Seduced</th><th>Hastens</th><th>Meddle</th><th>Teaching</th><th>Negotiations</th></tr></thead><tbody><tr><td>Caught</td><td>numbers</td><td>hazel</td><td>marshland</td><td>joke</td><td>chance</td></tr><tr><td>Ones</td><td>he&#39;s</td><td>sway</td><td>worry</td><td>hard-won</td><td>filth</td></tr><tr><td>Run</td><td>bow</td><td>following</td><td>flurgaburburhobbit</td><td>wrong</td><td>feeling</td></tr><tr><td>Splash</td><td>grief</td><td>unfair</td><td>nearly</td><td>children</td><td>mix</td></tr><tr><td>Swamp</td><td>compositions</td><td>liar</td><td>lippy</td><td>bind</td><td>stopping</td></tr><tr><td>Day&#39;s</td><td>strain</td><td>paid</td><td>happy</td><td>stinker</td><td>reputation</td></tr></tbody></table></div><h4>Robbed gray 100 trusted pleaded otherwise stammer Háma?</h4><ul><li>Arwen Evenstar!</li><li>Grimbold?</li><li>Eorlingas?</li><li>Beorn.</li><li>Gon?</li></ul></article></div>',1);$.render=function(t,o,a,n,s,r){return d(),e("main",null,[z])};const E={},N=o("div",{class:"rounded-lg p-4 md:p-8 bg-gray-100 shadow-2xl"},[o("div",{class:"flex flex-wrap"},[o("button",{type:"button",class:"rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out"}," Primary Button "),o("button",{type:"button",class:"rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-3 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out"}," Secondary Button "),o("button",{type:"button",class:"rounded-md border border-transparent px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-3 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out inline-flex justify-center"},[o("svg",{class:"-ml-1 mr-2 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd","aria-hidden":"true"})]),c(" Destructive Button ")]),o("button",{type:"button",class:"rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-3 md:mt-0 sm:ml-3 sm:w-auto sm:text-sm w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed",disabled:""}," Disabled Button ")])],-1);E.render=function(t,o){return d(),e("main",null,[N])};const O=t({data:()=>({options:["Aragorn","Frodo Baggins","Gandalf","Legolas","Gollum","Arwen"]})}),_={class:"rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl"},q=o("label",{for:"character-select",class:"block text-sm font-medium text-gray-700"}," Character ",-1),U={class:"relative w-full border-none text-gray-700"},P={name:"characters",id:"character-select",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none cursor-pointer"},V=o("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-5 w-5"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1);O.render=function(t,a,i,l,c,u){return d(),e("main",null,[o("div",_,[q,o("div",U,[o("select",P,[(d(!0),e(n,null,s(t.options,(t=>(d(),e("option",{key:t},r(t),1)))),128))]),V])])])};const W=t({data:()=>({options:["Aragorn","Frodo Baggins","Gandalf","Legolas","Gollum","Arwen"]})}),J={class:"rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl"},K={action:"#",method:"POST"},Q={class:"grid md:grid-cols-2 gap-4 form-container mx-auto"},X=o("div",null,[o("label",{for:"first-name-input",class:"block text-sm font-medium text-gray-700"}," First Name "),o("input",{name:"first-name-input",id:"first-name-input",type:"text",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none"})],-1),Y=o("div",null,[o("label",{for:"last-name-input",class:"block text-sm font-medium text-gray-700"}," Last Name "),o("input",{name:"last-name-input",id:"last-name-input",type:"text",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none"})],-1),Z=o("div",{class:"col-span-full"},[o("label",{for:"number-input",class:"block text-sm font-medium text-gray-700"}," Price "),o("input",{name:"number-input",id:"number-input",type:"number",inputMode:"numeric",placeholder:"$420.09",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none font-mono"})],-1),tt=o("div",{class:"col-span-full"},[o("label",{for:"text-area-input",class:"block text-sm font-medium text-gray-700"}," Comment "),o("textarea",{name:"text-area-input",id:"text-area-input",type:"text",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none"})],-1),et={class:"col-span-full"},ot=o("label",{for:"character-select",class:"block text-sm font-medium text-gray-700"}," Character ",-1),at={class:"relative w-full border-none text-gray-700"},nt={name:"character-select",id:"character-select",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none cursor-pointer"},st=o("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-5 w-5"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1),rt=o("div",{class:"flex flex-col-reverse mt-4 sm:block col-span-full sm:place-self-end"},[o("button",{type:"button",class:"rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-3 sm:mt-0 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out"}," Cancel "),o("button",{type:"submit",class:"rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:ml-3 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out"}," Submit ")],-1);W.render=function(t,a,i,l,c,u){return d(),e("main",null,[o("div",J,[o("form",K,[o("div",Q,[X,Y,Z,tt,o("div",et,[ot,o("div",at,[o("select",nt,[(d(!0),e(n,null,s(t.options,(t=>(d(),e("option",{key:t},r(t),1)))),128))]),st])]),rt])])])])};const it={},lt=o("div",{class:"rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl"},"content to come ...",-1);it.render=function(t,o){return d(),e("main",null,[lt])};const dt={},ct=o("div",{class:"rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl"}," Check out the nav bar on this site :) ",-1);dt.render=function(t,o){return d(),e("main",null,[ct])};const ut={},mt=o("div",{class:"rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl"},"content to come ...",-1);ut.render=function(t,o){return d(),e("main",null,[mt])};const pt={},ht=o("div",{class:"rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl"},"content to come ...",-1);pt.render=function(t,o){return d(),e("main",null,[ht])};const gt={},ft=o("div",{class:"rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl"},"content to come ...",-1);gt.render=function(t,o){return d(),e("main",null,[ft])};const bt={},yt=o("div",{class:"rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl"},"content to come ...",-1);bt.render=function(t,o){return d(),e("main",null,[yt])};const wt={},xt=o("div",{class:"rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl"},"content to come ...",-1);wt.render=function(t,o){return d(),e("main",null,[xt])};const vt={},kt={class:"px-4 py-6 sm:px-0 mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},Ct=o("div",{class:"sm:text-center lg:text-left"},[o("h2",{class:"text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"}," Not found "),o("p",{class:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"}," The page you requested doesn't seem to exist... ")],-1);vt.render=function(t,o){return d(),e("div",kt,[Ct])};let Mt=[{path:"/",component:G},{path:"/day1",component:H,meta:{title:"Day 1",description:"Install Tailwind CSS without any Javascript Framework locally with purgeCSS, enable the dark mode option, preferences or class is up to you."}},{path:"/day2",component:$,meta:{title:"Day 2",description:"Write some text including headings and subheadings, quotes, italics. Train your typography."}},{path:"/day3",component:E,meta:{title:"Day 3",description:"Create state buttons with a hover and a transition effect, like primary button, secondary and for example disable."}},{path:"/day4",component:O,meta:{title:"Day 4",description:"Create and rework a select element including options and style it with only Tailwind."}},{path:"/day5",component:W,meta:{title:"Day 5",description:"Create a form with buttons, inputs and text areas. Remember the download and upload buttons, those can be also included. And center it in the middle. Make it responsive."}},{path:"/day6",component:it,meta:{title:"Day 6",description:"Create an avatar inside a card along with some text, and make it 100% reponsive."}},{path:"/day7",component:dt,meta:{title:"Day 7",description:"Create a navigation bar with logo, links and a CTA. Make it fixed, sticky or normal."}},{path:"/day8",component:ut,meta:{title:"Day 8",description:"Create a navigation bar with logo, links and a CTA. Make it fixed, sticky or normal."}},{path:"/day9",component:pt,meta:{title:"Day 9",description:"Create a navigation bar with logo, links and a CTA. Make it fixed, sticky or normal."}},{path:"/day10",component:gt,meta:{title:"Day 10",description:"Create a navigation bar with logo, links and a CTA. Make it fixed, sticky or normal."}},{path:"/day11",component:bt,meta:{title:"Day 11",description:"Create a navigation bar with logo, links and a CTA. Make it fixed, sticky or normal."}},{path:"/day12",component:wt,meta:{title:"Day 12",description:"Create a navigation bar with logo, links and a CTA. Make it fixed, sticky or normal."}},{path:"/:path(.*)",component:vt}],Dt=m(g),St=p({history:h("/30daysoftailwindcss/"),routes:Mt});Dt.use(St),Dt.mount("#app");
