(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/portrait2.71bf3896.jpg"},28:function(e,t,a){e.exports=a(43)},38:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},39:function(e,t,a){e.exports=a.p+"static/media/portrait1.06868dd6.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/project1.54977214.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/autolab.85c224d7.gif"},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(24),o=a.n(r),l=a(14),s=a(10),c=a(3),m=a(4),d=a(5),u=a(6),v=a(2),p=function(e){var t=e.component,a=e.layout,i=Object(v.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(l.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},h=a(20),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={viewportHeight:window.innerHeight,revealEl:[]},e.checkComplete=function(){return e.state.revealEl.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},e.elementIsVisible=function(t,a){return t.getBoundingClientRect().top<=e.state.viewportHeight-a},e.revealElements=function(){if(!e.checkComplete())for(var t=function(t){var a=e.state.revealEl[t],i=a.getAttribute("data-reveal-delay"),n=a.getAttribute("data-reveal-offset")?a.getAttribute("data-reveal-offset"):"200",r=a.getAttribute("data-reveal-container")?a.closest(a.getAttribute("data-reveal-container")):a;e.elementIsVisible(r,n)&&!a.classList.contains("is-revealed")&&(i&&0!==i?setTimeout((function(){a.classList.add("is-revealed")}),i):a.classList.add("is-revealed"))},a=0;a<e.state.revealEl.length;a++)t(a)},e.init=function(){setTimeout((function(){e.setState({revealEl:document.querySelectorAll("[class*=reveal-]")},(function(){e.checkComplete()||(window.addEventListener("scroll",e.handleScroll),window.addEventListener("resize",e.handleResize)),e.revealElements()}))}),100)},e.handleListeners=function(){e.checkComplete()&&(window.removeEventListener("scroll",e.handleScroll),window.removeEventListener("resize",e.handleResize))},e.handleScroll=Object(h.throttle)((function(){e.handleListeners(),e.revealElements()}),30),e.handleResize=Object(h.throttle)((function(){e.setState({viewportHeight:window.innerHeight},(function(){e.handleListeners(),e.revealElements()}))}),30),e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,this.props.children())}}]),a}(n.a.Component),f=a(16),g=a(1),E=a.n(g),N=a(11),y={src:void 0,width:void 0,height:void 0,alt:void 0},O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoaded:!1},e.image=n.a.createRef(),e.placeholderSrc=function(e,t){return'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(e," ").concat(t,'"%3E%3C/svg%3E')},e.handlePlaceholder=function(t,a){t.style.display="none",t.before(a),a.src=e.placeholderSrc(t.getAttribute("width")||0,t.getAttribute("height")||0),a.width=t.getAttribute("width"),a.height=t.getAttribute("height"),a.style.opacity="0",t.className&&a.classList.add(t.className),t.addEventListener("load",(function(){a.remove(),t.style.display="",e.setState({isLoaded:!0})}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("img");this.handlePlaceholder(this.image.current,e)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.src,i=e.width,r=e.height,o=e.alt,l=Object(v.a)(e,["className","src","width","height","alt"]);return n.a.createElement("img",Object.assign({},l,{ref:this.image,className:t,src:a,width:i,height:r,alt:o}))}}]),a}(n.a.Component);O.defaultProps=y;var w=O,j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isActive:!1},e.nav=n.a.createRef(),e.hamburger=n.a.createRef(),e.openMenu=function(){document.body.classList.add("off-nav-is-active"),e.nav.current.style.maxHeight=e.nav.current.scrollHeight+"px",e.setState({isActive:!0})},e.closeMenu=function(){document.body.classList.remove("off-nav-is-active"),e.nav.current&&(e.nav.current.style.maxHeight=null),e.setState({isActive:!1})},e.keyPress=function(t){e.state.isActive&&27===t.keyCode&&e.closeMenu()},e.clickOutside=function(t){e.nav.current&&e.state.isActive&&!e.nav.current.contains(t.target)&&t.target!==e.hamburger.current&&e.closeMenu()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.active&&this.openMenu(),document.addEventListener("keydown",this.keyPress),document.addEventListener("click",this.clickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyPress),document.addEventListener("click",this.clickOutside),this.closeMenu()}},{key:"render",value:function(){var e=this.props,t=e.className,a=(e.active,e.navPosition),i=e.hideNav,r=e.hideSignin,o=e.bottomOuterDivider,l=e.bottomDivider,s=Object(v.a)(e,["className","active","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),c=E()("site-header",o&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},s,{className:c}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E()("site-header-inner",l&&"has-bottom-divider")},!i&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{ref:this.hamburger,className:"header-nav-toggle",onClick:this.state.isActive?this.closeMenu:this.openMenu},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:this.nav,className:E()("header-nav",this.state.isActive&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(N.a,{to:"#0",onClick:this.closeMenu},"Documentation"))),!r&&n.a.createElement("ul",{className:"list-reset header-nav-right"},n.a.createElement("li",null,n.a.createElement(N.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:this.closeMenu},"Sign up")))))))))}}]),a}(n.a.Component);j.defaultProps={active:!1,navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(v.a)(e,["className","topOuterDivider","topDivider"]),o=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:o}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"}),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement("div",{className:"footer-copyright"},"Template made by ",n.a.createElement("a",{href:"https://cruip.com"},"Cruip")," and modified by Tam Nguyen. All right reserved")))))}}]),a}(n.a.Component);k.defaultProps={topOuterDivider:!1,topDivider:!1};var D=k,C=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement("main",{className:"site-content"},t),n.a.createElement(D,null))},x=a(9),A=a(7),P=a.n(A),S={types:{topOuterDivider:P.a.bool,bottomOuterDivider:P.a.bool,topDivider:P.a.bool,bottomDivider:P.a.bool,hasBgColor:P.a.bool,invertColor:P.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},M={types:Object(x.a)({},S.types),defaults:Object(x.a)({},S.defaults)},L={types:Object(x.a)({},S.types,{invertMobile:P.a.bool,invertDesktop:P.a.bool,alignTop:P.a.bool,imageFill:P.a.bool}),defaults:Object(x.a)({},S.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},T={types:Object(x.a)({},S.types,{pushLeft:P.a.bool}),defaults:Object(x.a)({},S.defaults,{pushLeft:!1})},F=function(e){var t=e.className,a=Object(v.a)(e,["className"]),i=E()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:i}))},H=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,o=e.loading,l=e.wide,s=e.wideMobile,c=e.disabled,m=Object(v.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),d=E()("button",i&&"button-".concat(i),r&&"button-".concat(r),o&&"is-loading",l&&"button-block",s&&"button-wide-mobile",t),u=a;return n.a.createElement(u,Object.assign({},m,{className:d,disabled:c}))};H.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var B=H,I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={},e.handleBodyClass=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},e.keyPress=function(t){27===t.keyCode&&e.props.handleClose(t)},e.stopProgagation=function(e){e.stopPropagation()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyPress),document.addEventListener("click",this.stopProgagation)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyPress),document.removeEventListener("click",this.stopProgagation)}},{key:"componentDidUpdate",value:function(e){e.show!==this.props.show&&this.handleBodyClass()}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,i=e.handleClose,r=e.show,o=e.closeHidden,l=e.video,s=e.videoTag,c=Object(v.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]),m=E()("modal",r&&"is-active",l&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,r&&n.a.createElement("div",Object.assign({},c,{className:m,onClick:i}),n.a.createElement("div",{className:"modal-inner",onClick:this.stopProgagation},l?n.a.createElement("div",{className:"responsive-video"},"iframe"===s?n.a.createElement("iframe",{title:"video",src:l,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:l})):n.a.createElement(n.a.Fragment,null,!o&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:i}),n.a.createElement("div",{className:"modal-content"},a)))))}}]),a}(n.a.Component);I.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};a(39);var R=a(27),z=a.n(R),W=Object(x.a)({},M.defaults),_=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={videoModalActive:!1},e.openModal=function(t){t.preventDefault(),e.setState({videoModalActive:!0})},e.closeModal=function(t){t.preventDefault(),e.setState({videoModalActive:!1})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,l=e.hasBgColor,s=e.invertColor,c=Object(v.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),m=E()("hero section center-content",a&&"has-top-divider",i&&"has-bottom-divider",l&&"has-bg-color",s&&"invert-color",t),d=E()("hero-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},c,{className:m}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:d},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Welcome ",n.a.createElement("span",{className:"text-color-primary"},"Recruiters")," and ",n.a.createElement("span",{className:"text-color-primary"},"Friends")),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Welcome to my portfolio website! First, I want to thank you for being interested and visiting! Below are buttons to quickly access my resume and Github page."),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},n.a.createElement(F,null,n.a.createElement(B,{tag:"a",color:"primary",wideMobile:!0,href:"https://www.dropbox.com/s/c637tksw4ez1tiq/July%20Resume.pdf?dl=0"},"Resume"),n.a.createElement(B,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/tamnguyen98"},"Visit Github"))))),n.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},n.a.createElement(w,{className:"has-shadow",src:z.a,alt:"Hero",width:896})))))}}]),a}(n.a.Component);_.defaultProps=W;var U=_,G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.data,i=e.children,r=e.tag,o=Object(v.a)(e,["className","data","children","tag"]),l=E()("section-header",t),s=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},o,{className:l}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(s,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))}}]),a}(n.a.Component);G.defaultProps={children:null,tag:"h2"};var q=G,J=Object(x.a)({},T.defaults),V=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,l=e.hasBgColor,s=e.invertColor,c=e.pushLeft,m=Object(v.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),d=E()("features-tiles section",a&&"has-top-divider",i&&"has-bottom-divider",l&&"has-bg-color",s&&"invert-color",t),u=E()("features-tiles-inner section-inner pt-0",r&&"has-top-divider",o&&"has-bottom-divider"),p=E()("tiles-wrap center-content",c&&"push-left");return n.a.createElement("section",Object.assign({},m,{className:d}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement(q,{data:{title:"Get to know me",paragraph:"I'm a graduate at Washington State University with a Bachelor of Science in Computer Science and an Associate of Science in Computer Science at Clark College.      Some of my skills includes (but not limited to)..."},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"})),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8 text-color-primary"},"Java"),n.a.createElement("p",{className:"m-0 text-sm"},"With Java, I have build a variety of projects, ranging from Android App Dev. to file tracking and manipulation apps.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"})),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8 text-color-primary"},"C"),n.a.createElement("p",{className:"m-0 text-sm"},"The projects I've built some projects using C consists of low-level data parsing to telecommunication via TCP connections with the ability of file transfer.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"})),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8 text-color-primary"},"Python"),n.a.createElement("p",{className:"m-0 text-sm"},"With Python, I've made some of the most useful tools (for myself) more often than other languages, such as a browser automation tool to automatically clock me in and out of work everyday.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"})),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8 text-color-primary"},"C#"),n.a.createElement("p",{className:"m-0 text-sm"},"The things I've spent programming in C# were only for Game Development using Unity Engine and self-teaching myself ASP.NET (MVC/API).")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"})),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8 text-color-primary"},"HTML/CSS/JS"),n.a.createElement("p",{className:"m-0 text-sm"},"Although I do not favor Front End Web Dev. I have the right amount of experience under my belt, such as Web Dev for a client as a freelancer, and working on this website using React.JS"))))))))}}]),a}(n.a.Component);V.defaultProps=J;var K=V,Y=Object(x.a)({},L.defaults),$=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){var e=this.props,t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.invertMobile,d=e.invertDesktop,u=e.alignTop,p=e.imageFill,h=Object(v.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=E()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),f=E()("features-split-inner section-inner",o&&"has-top-divider",l&&"has-bottom-divider"),g=E()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",u&&"align-top");return n.a.createElement("section",Object.assign({},h,{className:b}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:f},n.a.createElement(q,{data:{title:"Some awesome works",paragraph:"Below are some works that I'm proud of. They're not in any specific order, and some may be a lot newer than others. Additionally, if they're open source, you can click the title to visit the git repository."},className:"center-content"}),n.a.createElement("div",{className:g},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Independent Project"),n.a.createElement("h3",{className:"mt-0 mb-12"},n.a.createElement("a",{href:"https://github.com/tamnguyen98/Update-Transfer-Only",target:"_blank"},"Transfer app's update only tool")),n.a.createElement("p",{className:"m-0"},"This tool was made in Java so that it can work cross-platform, and what it does is it scans through an old copy of the application, keeps track of every file's last modified date and then compares it to a recently updated directory and see what was changed (update) in the application's directory. From there, it copies ",n.a.createElement("u",null,"only")," the changes to the destination.")),n.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(w,{src:a(40),alt:"Features split 01",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Group Project (2)"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Skin Care Analyzer"),n.a.createElement("p",{className:"m-0"},"As seen from the video, this app lets the user take a picture of their ",n.a.createElement("i",null,"skin care product"),"'s ingredients, which will grab the text using an OCR to analyze and calculate the quality of the product.")),n.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement("iframe",{width:"560",height:"335",src:"https://www.youtube-nocookie.com/embed/4pR0RKU0lqs",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Independent Work"),n.a.createElement("h3",{className:"mt-0 mb-12"},n.a.createElement("a",{href:"https://github.com/autolab/Autolab/pull/1139",target:"_blank"},"Autolab dark theme implementation")),n.a.createElement("p",{className:"m-0"},"For my capstone project at WSU, I was working on implementing ",n.a.createElement("a",{href:"http://www.autolabproject.com/",target:"_blank"},"Autolab"),"'s latest update onto the school system. During that time, one of my big projects was implementing a dark mode theme that users can toggle on and off and have it reload the theme when they signed in again. Because of the success, I decide to make a PR to the original repo.")),n.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(w,{src:a(41),alt:"Features split 03",width:528,height:396})))))))}}]),i}(n.a.Component);$.defaultProps=Y;var Q=$,X=Object(x.a)({},T.defaults),Z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,l=e.hasBgColor,s=e.invertColor,c=e.pushLeft,m=Object(v.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),d=E()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",l&&"has-bg-color",s&&"invert-color",t),u=E()("testimonial-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider"),p=E()("tiles-wrap",c&&"push-left");return n.a.createElement("section",Object.assign({},m,{className:d}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement(q,{data:{title:"Recommendations",paragraph:""},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 He is a passionate programmer and always is the first to figure out any bugs with code in a team project... Tam is also very keen with problem solving and is very quick with his thinking which will make a fantastic addition to any team he joins in the future")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Amanda S."),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},"Co-worker")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Needed a new website for our business and Tam delivered. Additionally, he taught us how to keep our website up for cheap!")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"LGD Professional Painting"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"https://lgdprofessionalpainting.expert/",target:"_blank"},"Client")))))))))}}]),a}(n.a.Component);Z.defaultProps=X;var ee=Z,te=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,o=Object(v.a)(e,["className","children","labelHidden","id"]),l=E()("form-label",i&&"screen-reader",t);return n.a.createElement("label",Object.assign({},o,{className:l,htmlFor:r}),a)};te.defaultProps={children:null,labelHidden:!1,id:null};var ae=te,ie=function(e){var t=e.children,a=e.className,i=e.status,r=Object(v.a)(e,["children","className","status"]),o=E()("form-hint",i&&"text-color-".concat(i),a);return n.a.createElement("div",Object.assign({},r,{className:o}),t)};ie.defaultProps={children:null,status:!1};var ne=ie,re=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,o=e.type,l=e.name,s=e.status,c=e.disabled,m=e.value,d=e.formGroup,u=e.hasIcon,p=e.size,h=e.placeholder,b=e.rows,f=e.hint,g=Object(v.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=E()(d&&""!==d&&("desktop"===d?"form-group-desktop":"form-group"),u&&""!==u&&"has-icon-"+u),y=E()("form-input",p&&"form-input-".concat(p),s&&"form-".concat(s),t),O="textarea"===o?"textarea":"input";return n.a.createElement(n.a.Fragment,null,i&&n.a.createElement(ae,{labelHidden:r,id:g.id},i),n.a.createElement("div",{className:N},n.a.createElement(O,Object.assign({},g,{type:"textarea"!==o?o:null,className:y,name:l,disabled:c,value:m,placeholder:h,rows:"textarea"===o?b:null})),a),f&&n.a.createElement(ne,{status:s},f))};re.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var oe=re,le=Object(x.a)({},M.defaults,{split:!1}),se=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,l=e.hasBgColor,s=e.invertColor,c=e.split,m=Object(v.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),d=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",l&&"has-bg-color",s&&"invert-color",t),u=E()("cta-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider",c&&"cta-split");return n.a.createElement("section",Object.assign({},m,{className:d}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement("div",{className:"cta-slogan"},n.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),n.a.createElement("div",{className:"cta-action"},n.a.createElement(oe,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},n.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))}}]),a}(n.a.Component);se.defaultProps=le;var ce=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={videoModalActive:!1},e.openModal=function(t){t.preventDefault(),e.setState({videoModalActive:!0})},e.closeModal=function(t){t.preventDefault(),e.setState({videoModalActive:!1})},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(U,{className:"illustration-section-01"}),n.a.createElement(K,null),n.a.createElement(Q,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),n.a.createElement(ee,{topDivider:!0}))}}]),a}(n.a.Component);f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var me=function(e){f.a.set({page:e}),f.a.pageview(e)},de=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname;document.body.classList.add("is-loaded"),this.refs.scrollReveal.init(),me(e)}},{key:"componentDidUpdate",value:function(e){var t=e.location.pathname+e.location.search,a=this.props.location.pathname+this.props.location.search;t!==a&&(this.refs.scrollReveal.init(),me(a))}},{key:"render",value:function(){return n.a.createElement(b,{ref:"scrollReveal",children:function(){return n.a.createElement(l.c,null,n.a.createElement(p,{exact:!0,path:"/",component:ce,layout:C}))}})}}]),a}(n.a.Component),ue=Object(l.f)((function(e){return n.a.createElement(de,e)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42);var ve=Object(s.a)();o.a.render(n.a.createElement(l.b,{history:ve},n.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.108144a1.chunk.js.map