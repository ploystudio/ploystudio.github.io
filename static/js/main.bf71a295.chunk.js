(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,t,r){},34:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),o=r(19),i=r.n(o),s=(r(18),r(6));function a(){var e=Object(s.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var l=r(2),h=r(3),d=r(5),j=r(4),m=(r(34),r(21)),u=r.n(m),b=r(0),O=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).state={position:{x:0,y:0},hidden:!0,scale:1,picture:null},n}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("mousemove",(function(t){return e.onMouseMove(t)})),document.addEventListener("mouseenter",(function(){return e.onMouseEnter()})),document.addEventListener("mouseleave",(function(){return e.onMouseLeave()})),null!=document.querySelector(".experience-text")&&(document.querySelector(".experience-text").addEventListener("mouseover",(function(){return e.onMouseOver(35,"/img/experience.gif")})),document.querySelector(".experience-text").addEventListener("mouseout",(function(){return e.onMouseOut()})),document.querySelector(".research-text").addEventListener("mouseover",(function(){return e.onMouseOver(35,"/img/research.gif")})),document.querySelector(".research-text").addEventListener("mouseout",(function(){return e.onMouseOut()})),document.querySelector(".interactive-text").addEventListener("mouseover",(function(){return e.onMouseOver(35,"/img/interactive-art.gif")})),document.querySelector(".interactive-text").addEventListener("mouseout",(function(){return e.onMouseOut()})),document.querySelector(".home-famapp").addEventListener("mouseover",(function(){return e.onMouseOver(35,"/img/famapp/famapp-home.png")})),document.querySelector(".home-famapp").addEventListener("mouseout",(function(){return e.onMouseOut()})),document.querySelector(".home-link").addEventListener("mouseover",(function(){return e.onMouseOver(35,"/img/link/link-home.png")})),document.querySelector(".home-link").addEventListener("mouseout",(function(){return e.onMouseOut()})),document.querySelector(".home-scansit").addEventListener("mouseover",(function(){return e.onMouseOver(35,"/img/scansit/scansit-home.png")})),document.querySelector(".home-scansit").addEventListener("mouseout",(function(){return e.onMouseOut()})),document.querySelector(".home-waparks").addEventListener("mouseover",(function(){return e.onMouseOver(35,"/img/waparks/waparks-home.png")})),document.querySelector(".home-waparks").addEventListener("mouseout",(function(){return e.onMouseOut()})))}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("mousemove",(function(t){return e.onMouseMove(t)})),document.removeEventListener("mouseenter",(function(){return e.onMouseEnter()})),document.removeEventListener("mouseleave",(function(){return e.onMouseLeave()}))}},{key:"onMouseMove",value:function(e){this.setState((function(t){return{position:{x:e.clientX,y:e.clientY},hidden:!1}}))}},{key:"onMouseEnter",value:function(){this.setState((function(e){return{hidden:!1}}))}},{key:"onMouseLeave",value:function(){this.setState((function(e){return{hidden:!0}}))}},{key:"onMouseOver",value:function(e,t){this.setState((function(r){return{scale:e,picture:t}}))}},{key:"onMouseOut",value:function(){this.setState((function(e){return{scale:1,picture:null}}))}},{key:"render",value:function(){var e=u()("cursor",{"cursor--hidden":this.state.hidden,"cursor--media":null!=this.state.picture}),t={left:"".concat(this.state.position.x,"px"),top:"".concat(this.state.position.y,"px"),width:"".concat(7*this.state.scale,"px"),height:"".concat(7*this.state.scale,"px")};return null!=this.state.picture&&(t.backgroundImage="url(".concat(this.state.picture,")")),Object(b.jsx)("div",{id:"cursor",className:e,style:t})}}]),r}(c.a.Component),x=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"column-left project-column",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/",className:"current-page",children:"Ploy Pruekcharoen"})}),Object(b.jsxs)("p",{children:["Digital Interaction Design",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/embroiderme",children:"embrioder.me"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/misinfoescaperoom",children:"Misinformation Escape Room"})})]})]}),Object(b.jsxs)("p",{children:["Interactive Art",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/makeitbloom",children:"Make It Bloom"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/soundofhearthand",children:"The Sound of Heart and Hand"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/vestmemories",children:"The Vest of Memories"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/worldfrommyhands",children:"The World from My Hands"})})]})]}),Object(b.jsxs)("p",{children:["Research/Writing",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/hmongembroidery",children:"Learn the Heart of Hmong Culture through Hmong Embroidery"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/colorofnature",children:"Computer as a Medium for Human-Environment Interaction"})})]})]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/playground",children:"Playground"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"https://medium.com/@ploypp",target:"_blank",children:"Medium Posts \u2192"})})]}),Object(b.jsxs)("div",{className:"column-right",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Ploypilin (Ploy) Pruekcharoen"})," (she/her) is a dedicated educator and artist who is passionate about the integration of ",Object(b.jsx)("b",{children:"art, technology, nature, and social justice"}),". She is currently pursuing a Bachelor degree in Human Centered Design & Engineering at the University of Washington. She likes to create meaningful experiences through design and art. Growing up in a remote area in Thailand, she is also interested in ",Object(b.jsx)("b",{children:"environmental values and cultural diversity"}),". Her personal background majorly drives herself to work on creative projects and research related to humans and the environment."]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/Ploypilin_Pruekcharoen_Resume.pdf",target:"_blank",rel:"noreferrer",children:"See my resume \u2192"})}),Object(b.jsx)("img",{src:"img/me.gif",alt:"My Portrait"}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["check out my ",Object(b.jsx)("a",{href:"https://open.spotify.com/playlist/1VRyoaF9WgAZnEoUgE2Bgl?si=4f0oB-2kQqWJh4D7_qvZ3Q",target:"_blank",rel:"noreferrer",children:"spotify playlist"}),Object(b.jsx)("b",{children:" / now reading: "})," Beartown ",Object(b.jsx)("i",{children:"by Fredrik Backman"}),", \u0e02\u0e2d\u0e1d\u0e31\u0e19\u0e43\u0e1d\u0e48\u0e43\u0e19\u0e1d\u0e31\u0e19\u0e2d\u0e31\u0e19\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e40\u0e0a\u0e37\u0e48\u0e2d ",Object(b.jsx)("i",{children:"by \u0e13\u0e31\u0e10\u0e1e\u0e25 \u0e43\u0e08\u0e08\u0e23\u0e34\u0e07"})]})})]})]})]})}}]),r}(n.Component),f=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"componentDidMount",value:function(){document.title="embroider.me | Ploy Pruekcharoen"}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"column-left project-column",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/",children:"Ploy Pruekcharoen"})}),Object(b.jsxs)("p",{children:["Digital Interaction Design",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/embroiderme",className:"current-page",children:"embrioder.me"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/misinfoescaperoom",children:"Misinformation Escape Room"})})]})]}),Object(b.jsxs)("p",{children:["Interactive Art",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/makeitbloom",children:"Make It Bloom"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/soundofhearthand",children:"The Sound of Heart and Hand"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/vestmemories",children:"The Vest of Memories"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/worldfrommyhands",children:"The World from My Hands"})})]})]}),Object(b.jsxs)("p",{children:["Research/Writing",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/hmongembroidery",children:"Learn the Heart of Hmong Culture through Hmong Embroidery"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/colorofnature",children:"Computer as a Medium for Human-Environment Interaction"})})]})]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/playground",children:"Playground"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"https://medium.com/@ploypp",target:"_blank",children:"Medium Posts \u2192"})})]}),Object(b.jsx)("div",{className:"column-right"})]})})}}]),r}(n.Component),p=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"componentDidMount",value:function(){document.title="Misinformation Escape Room | Ploy Pruekcharoen"}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"column-left project-column",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/",children:"Ploy Pruekcharoen"})}),Object(b.jsxs)("p",{children:["Digital Interaction Design",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/embroiderme",children:"embrioder.me"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/misinfoescaperoom",className:"current-page",children:"Misinformation Escape Room"})})]})]}),Object(b.jsxs)("p",{children:["Interactive Art",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/makeitbloom",children:"Make It Bloom"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/soundofhearthand",children:"The Sound of Heart and Hand"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/vestmemories",children:"The Vest of Memories"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/worldfrommyhands",children:"The World from My Hands"})})]})]}),Object(b.jsxs)("p",{children:["Research/Writing",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/hmongembroidery",children:"Learn the Heart of Hmong Culture through Hmong Embroidery"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/colorofnature",children:"Computer as a Medium for Human-Environment Interaction"})})]})]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/playground",children:"Playground"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"https://medium.com/@ploypp",target:"_blank",children:"Medium Posts \u2192"})})]}),Object(b.jsx)("div",{className:"column-right"})]})})}}]),r}(n.Component),y=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"componentDidMount",value:function(){document.title="Make It Bloom | Ploy Pruekcharoen"}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"column-left project-column",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/",children:"Ploy Pruekcharoen"})}),Object(b.jsxs)("p",{children:["Digital Interaction Design",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/embroiderme",children:"embrioder.me"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/misinfoescaperoom",children:"Misinformation Escape Room"})})]})]}),Object(b.jsxs)("p",{children:["Interactive Art",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/makeitbloom",className:"current-page",children:"Make It Bloom"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/soundofhearthand",children:"The Sound of Heart and Hand"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/vestmemories",children:"The Vest of Memories"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/worldfrommyhands",children:"The World from My Hands"})})]})]}),Object(b.jsxs)("p",{children:["Research/Writing",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/hmongembroidery",children:"Learn the Heart of Hmong Culture through Hmong Embroidery"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/colorofnature",children:"Computer as a Medium for Human-Environment Interaction"})})]})]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/playground",children:"Playground"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"https://medium.com/@ploypp",target:"_blank",children:"Medium Posts \u2192"})})]}),Object(b.jsxs)("div",{className:"column-right",children:[Object(b.jsx)("h2",{children:"Make It Bloom"}),Object(b.jsx)("p",{children:"This project was created with a goal to help people reconnect to nature, using machine learning of hand gestures and flower photos to control the handcrafted flower."}),Object(b.jsx)("iframe",{width:"100%",height:"70%",src:"https://www.youtube.com/embed/0-Ngf4_q-EA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})]})})}}]),r}(n.Component),g=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"componentDidMount",value:function(){document.title="The Sound of Heart and Hand | Ploy Pruekcharoen"}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"column-left project-column",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/",children:"Ploy Pruekcharoen"})}),Object(b.jsxs)("p",{children:["Digital Interaction Design",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/embroiderme",children:"embrioder.me"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/misinfoescaperoom",children:"Misinformation Escape Room"})})]})]}),Object(b.jsxs)("p",{children:["Interactive Art",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/makeitbloom",children:"Make It Bloom"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/soundofhearthand",className:"current-page",children:"The Sound of Heart and Hand"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/vestmemories",children:"The Vest of Memories"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/worldfrommyhands",children:"The World from My Hands"})})]})]}),Object(b.jsxs)("p",{children:["Research/Writing",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/hmongembroidery",children:"Learn the Heart of Hmong Culture through Hmong Embroidery"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/colorofnature",children:"Computer as a Medium for Human-Environment Interaction"})})]})]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/playground",children:"Playground"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"https://medium.com/@ploypp",target:"_blank",children:"Medium Posts \u2192"})})]}),Object(b.jsx)("div",{className:"column-right"})]})})}}]),r}(n.Component),v=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"componentDidMount",value:function(){document.title="The Vest of Memories | Ploy Pruekcharoen"}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"column-left project-column",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/",children:"Ploy Pruekcharoen"})}),Object(b.jsxs)("p",{children:["Digital Interaction Design",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/embroiderme",children:"embrioder.me"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/misinfoescaperoom",children:"Misinformation Escape Room"})})]})]}),Object(b.jsxs)("p",{children:["Interactive Art",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/makeitbloom",children:"Make It Bloom"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/soundofhearthand",children:"The Sound of Heart and Hand"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/vestmemories",className:"current-page",children:"The Vest of Memories"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/worldfrommyhands",children:"The World from My Hands"})})]})]}),Object(b.jsxs)("p",{children:["Research/Writing",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/hmongembroidery",children:"Learn the Heart of Hmong Culture through Hmong Embroidery"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/colorofnature",children:"Computer as a Medium for Human-Environment Interaction"})})]})]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/playground",children:"Playground"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"https://medium.com/@ploypp",target:"_blank",children:"Medium Posts \u2192"})})]}),Object(b.jsxs)("div",{className:"column-right",children:[Object(b.jsx)("h2",{children:"The Vest of Memories"}),Object(b.jsx)("p",{children:'With the concept of "sentience" and my interest in exploring the human\'s state of feelings and mind, I worked on this project with the idea of nostalgia. The pandemic world makes it difficult for people to communicate and gather, so I created a wearable piece that brings the old memories back to me when I interact with it.'}),Object(b.jsx)("iframe",{width:"100%",height:"70%",src:"https://www.youtube.com/embed/l7tdk8AF210",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(b.jsx)("p",{children:"I would like to become a part of the project, so my idea is to make myself a \u2018canvas\u2019 that illustrates those memories. I started by sewing the vest and attached an LED at the center of it. I used conductive threads to connect the LED and the ultrasonic sensor to the breadboard. The way I interact with this vest is to move my hand near the ultrasonic sensor, which has been placed next to where the heart is supposed to locate inside the body. If the distance between my hand and the ultrasonic sensor is close enough, the LED will light up and the video containing my memories will be triggered to play."}),Object(b.jsx)("p",{children:"For the coding part, I use Arduino and Python. I received the serial data of distance between my hand and the ultrasonic sensor from Arduino and used the Pyserial library in Python to read it. I then wrote the code to control the LED and the video in Python. If the distance is less than 10 cm, the LED and the video will be on. On the other hand, if the distance is more than 10 cm, the LED will be off and the video will be paused. This gesture highlights the fact that these memories have been triggered by heart, and I intend to use this interaction to convey the message."})]})]})})}}]),r}(n.Component),k=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"componentDidMount",value:function(){document.title="The World from My Hands | Ploy Pruekcharoen"}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"column-left project-column",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/",children:"Ploy Pruekcharoen"})}),Object(b.jsxs)("p",{children:["Digital Interaction Design",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/embroiderme",children:"embrioder.me"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/misinfoescaperoom",children:"Misinformation Escape Room"})})]})]}),Object(b.jsxs)("p",{children:["Interactive Art",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/makeitbloom",children:"Make It Bloom"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/soundofhearthand",children:"The Sound of Heart and Hand"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/vestmemories",children:"The Vest of Memories"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/worldfrommyhands",className:"current-page",children:"The World from My Hands"})})]})]}),Object(b.jsxs)("p",{children:["Research/Writing",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/hmongembroidery",children:"Learn the Heart of Hmong Culture through Hmong Embroidery"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/colorofnature",children:"Computer as a Medium for Human-Environment Interaction"})})]})]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/playground",children:"Playground"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"https://medium.com/@ploypp",target:"_blank",children:"Medium Posts \u2192"})})]}),Object(b.jsxs)("div",{className:"column-right",children:[Object(b.jsx)("h2",{children:"The World from My Hands"}),Object(b.jsx)("p",{children:"This interactive installation responds to the fictional world where people cannot go outside to see people, nature, and even the sky. I made a project by having the concept of \u201cmaking my own world\u201d in mind. Realizing how COVID-19 and environmental issues around the world affect the way people interact and live their lives, I think of the place where people can be with their own selves, enjoying the world created from their hands."}),Object(b.jsx)("iframe",{width:"100%",height:"70%",src:"https://www.youtube.com/embed/wv0huFyQkLE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(b.jsx)("p",{children:"The way people can interact with this installation is to move their hand near the ultrasonic sensor attached to the wall. The distance between the hand and the sensor will trigger the animation of raindrops and animated circles, which appear separately depending on how close the hand is to the sensor. The hand movement makes me think of a scene when a magician casting a spell in movies I have seen, which is always satisfying for me."}),Object(b.jsx)("p",{children:"I created the animations using the Pygame library in Python and use the Pyserial library to read the serial data received from the ultrasonic sensor in Arduino IDLE."})]})]})})}}]),r}(n.Component),w=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"componentDidMount",value:function(){document.title="Learn the Heart of Hmong Culture through Hmong Embroidery | Ploy Pruekcharoen"}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"column-left project-column",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/",children:"Ploy Pruekcharoen"})}),Object(b.jsxs)("p",{children:["Digital Interaction Design",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/embroiderme",children:"embrioder.me"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/misinfoescaperoom",children:"Misinformation Escape Room"})})]})]}),Object(b.jsxs)("p",{children:["Interactive Art",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/makeitbloom",children:"Make It Bloom"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/soundofhearthand",children:"The Sound of Heart and Hand"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/vestmemories",children:"The Vest of Memories"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/worldfrommyhands",children:"The World from My Hands"})})]})]}),Object(b.jsxs)("p",{children:["Research/Writing",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/hmongembroidery",className:"current-page",children:"Learn the Heart of Hmong Culture through Hmong Embroidery"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/colorofnature",children:"Computer as a Medium for Human-Environment Interaction"})})]})]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/playground",children:"Playground"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"https://medium.com/@ploypp",target:"_blank",children:"Medium Posts \u2192"})})]}),Object(b.jsx)("div",{className:"column-right"})]})})}}]),r}(n.Component),M=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"componentDidMount",value:function(){document.title="Color of Nature | Ploy Pruekcharoen"}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"column-left project-column",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/",children:"Ploy Pruekcharoen"})}),Object(b.jsxs)("p",{children:["Digital Interaction Design",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/embroiderme",children:"embrioder.me"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/misinfoescaperoom",children:"Misinformation Escape Room"})})]})]}),Object(b.jsxs)("p",{children:["Interactive Art",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/makeitbloom",children:"Make It Bloom"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/soundofhearthand",children:"The Sound of Heart and Hand"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/vestmemories",children:"The Vest of Memories"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/worldfrommyhands",children:"The World from My Hands"})})]})]}),Object(b.jsxs)("p",{children:["Research/Writing",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/hmongembroidery",children:"Learn the Heart of Hmong Culture through Hmong Embroidery"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/colorofnature",className:"current-page",children:"Computer as a Medium for Human-Environment Interaction"})})]})]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/playground",children:"Playground"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"https://medium.com/@ploypp",target:"_blank",children:"Medium Posts \u2192"})})]}),Object(b.jsx)("div",{className:"column-right"})]})})}}]),r}(n.Component),H=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"componentDidMount",value:function(){document.title="Playground | Ploy Pruekcharoen"}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"column-left project-column",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/",children:"Ploy Pruekcharoen"})}),Object(b.jsxs)("p",{children:["Digital Interaction Design",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/embroiderme",children:"embrioder.me"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/misinfoescaperoom",children:"Misinformation Escape Room"})})]})]}),Object(b.jsxs)("p",{children:["Interactive Art",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/makeitbloom",children:"Make It Bloom"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/soundofhearthand",children:"The Sound of Heart and Hand"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/vestmemories",children:"The Vest of Memories"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/worldfrommyhands",children:"The World from My Hands"})})]})]}),Object(b.jsxs)("p",{children:["Research/Writing",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/hmongembroidery",children:"Learn the Heart of Hmong Culture through Hmong Embroidery"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/colorofnature",children:"Computer as a Medium for Human-Environment Interaction"})})]})]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"/playground",className:"current-page",children:"Playground"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"https://medium.com/@ploypp",target:"_blank",children:"Medium Posts \u2192"})})]}),Object(b.jsx)("div",{className:"column-right"})]})})}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=r(15);i.a.render(Object(b.jsxs)(P.a,{basename:"",children:[Object(b.jsx)(a,{}),Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{exact:!0,path:"/",component:x}),Object(b.jsx)(s.a,{path:"/embroiderme",component:f}),Object(b.jsx)(s.a,{path:"/misinfoescaperoom",component:p}),Object(b.jsx)(s.a,{path:"/makeitbloom",component:y}),Object(b.jsx)(s.a,{path:"/soundofhearthand",component:g}),Object(b.jsx)(s.a,{path:"/vestmemories",component:v}),Object(b.jsx)(s.a,{path:"/worldfrommyhands",component:k}),Object(b.jsx)(s.a,{path:"/hmongembroidery",component:w}),Object(b.jsx)(s.a,{path:"/colorofnature",component:M}),Object(b.jsx)(s.a,{path:"/playground",component:H})]})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.bf71a295.chunk.js.map