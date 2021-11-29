(this["webpackJsonpcauseway-app"]=this["webpackJsonpcauseway-app"]||[]).push([[0],{28:function(t,e,a){},48:function(t,e,a){},50:function(t,e,a){"use strict";a.r(e);var s=a(2),n=a.n(s),i=a(17),c=a.n(i),r=(a(28),a(8)),o=a.n(r),h=a(6),m=a(18),u=a(19),l=a(20),g=a(3),j=a(23),p=a(22),b=a(21),d=a.n(b).a.create({baseURL:"https://api.data.gov.sg/v1/transport/traffic-images"}),f=(a(48),"stage"),O={baseUrl:"https://chiamtj.github.io/causeway-app/"};switch(f.toUpperCase()){case"STAGE":O.baseUrl="https://chiamtj.github.io/causeway-stage/";break;case"PRODUCTION":O.baseUrl="https://chiamtj.github.io/causeway-app/final/"}var v=a(0),I=function(t){Object(j.a)(a,t);var e=Object(p.a)(a);function a(){var t;return Object(u.a)(this,a),(t=e.call(this)).fetchLatestImage=t.fetchLatestImage.bind(Object(g.a)(t)),t.filterImages=t.filterImages.bind(Object(g.a)(t)),t.state={cameraNo:"2702",retImage:"",timeStamp:""},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchLatestImage(),console.log("First Mount")}},{key:"fetchLatestImage",value:function(){var t=Object(m.a)(o.a.mark((function t(){var e,a,s,n,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.get();case 2:for(n in e=t.sent,console.log("Checking API data: ",e),a=[],200===e.status&&(a=e.data),s=a.items[0].cameras)s[n].camera_id===this.state.cameraNo&&(i=new Date(s[n].timestamp).toTimeString(),this.setState({retImage:s[n].image,timeStamp:i}),console.log("Current Image: ",this.state.retImage));this.setState(Object(h.a)({},this.state));case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"filterImages",value:function(t){t.preventDefault();var e=t.target.value;console.log(e),this.setState(Object(h.a)(Object(h.a)({},this.state),{},{cameraNo:e})),this.fetchLatestImage()}},{key:"render",value:function(){return console.log("In Render",this.state.retImage,this.state.timeStamp),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{children:"CausewayCam"}),Object(v.jsx)("div",{children:Object(v.jsx)("form",{children:Object(v.jsxs)("select",{onChange:this.filterImages,children:[Object(v.jsx)("option",{value:"2702",children:"Woodlands Checkpoint"}),Object(v.jsx)("option",{value:"2701",children:"Causeway Camera"}),Object(v.jsx)("option",{value:"2704",children:"BKE Toward Checkpoint"})]})})}),Object(v.jsx)("hr",{}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"timestamp",children:["Time taken: ",this.state.timeStamp]}),Object(v.jsx)("img",{src:this.state.retImage,alt:"",height:"540",width:"960"})]})]})}}]),a}(n.a.Component),x=I,w=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),s(t),n(t),i(t),c(t)}))};c.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(x,{})}),document.getElementById("root")),w()}},[[50,1,2]]]);
//# sourceMappingURL=main.6c567d58.chunk.js.map