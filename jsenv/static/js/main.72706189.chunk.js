(this["webpackJsonpesbuild-browser-transpiler"]=this["webpackJsonpesbuild-browser-transpiler"]||[]).push([[0],{111:function(e,n,t){},112:function(e,n,t){},152:function(e,n){},189:function(e,n,t){},212:function(e,n,t){},221:function(e,n,t){},223:function(e,n,t){},224:function(e,n,t){"use strict";t.r(n);var r,o=t(0),a=t(34),c=t.n(a),i=t(4),s=t(9),u=t(10),l=(t(111),t(112),t(51)),d=t.n(l),p=t(100),f=t.n(p),b=t(101),m=t.n(b),h=t(102),j=t.n(h),v=t(103),w=t.n(v),O=t(2),g=function(e){var n=e.onChange,t=e.initialValue,r=Object(o.useState)("Share"),a=Object(u.a)(r,2),c=a[0],i=a[1],s=Object(o.useRef)();return Object(O.jsxs)("div",{className:"editor-wrapper",children:[Object(O.jsx)("button",{className:"button button-format is-primary is-small",onClick:function(){var e=s.current.getModel().getValue(),n=f.a.format(e,{parser:"babel",plugins:[m.a],useTabs:!1,semi:!0,singleQuote:!0}).replace(/\n$/,"");s.current.setValue(n)},children:"Format"}),Object(O.jsx)("button",{className:"button button-share is-primary is-small",onClick:function(){navigator.clipboard.writeText(window.location.href),i("Copied!"),setTimeout((function(){i("Share")}),1e3)},children:c}),Object(O.jsx)(d.a,{editorDidMount:function(e,t){var r;s.current=t,t.onDidChangeModelContent((function(){n(e())})),null===(r=t.getModel())||void 0===r||r.updateOptions({tabSize:2}),new w.a(window.monaco,j.a,t).highLightOnDidChangeModelContent((function(){}),(function(){}),void 0,(function(){}))},value:t,theme:"dark",language:"javascript",height:"100%",options:{wordWrap:"on",minimap:{enabled:!1},showUnused:!1,folding:!1,lineNumbersMinChars:3,fontSize:16,scrollBeyondLastLine:!1,automaticLayout:!0}})]})},x=(t(189),"\n    <html>\n      <head></head>\n      <body>\n        <div id=\"root\"></div>\n        <script>\n          const handleError = (err) => {\n            const root = document.querySelector('#root');\n            root.innerHTML = '<div style=\"color: red;\"><h4>Runtime Error</h4>' + err + '</div>';\n            console.error(err);\n          };\n\n          window.addEventListener('error', (event) => {\n            event.preventDefault();\n            handleError(event.error);\n          });\n\n          window.addEventListener('message', (event) => {\n            try {\n              eval(event.data);\n            } catch (err) {\n              handleError(err);\n            }\n          }, false);\n        <\/script>\n      </body>\n    </html>\n  "),y=function(e){var n=e.code,t=e.err,r=Object(o.useRef)();return Object(o.useEffect)((function(){r.current.srcdoc=x,setTimeout((function(){r.current.contentWindow.postMessage(n,"*")}),50)}),[n]),Object(O.jsxs)("div",{className:"preview-wrapper",children:[Object(O.jsx)("iframe",{title:"preview",ref:r,sandbox:"allow-scripts",srcDoc:x}),t&&Object(O.jsx)("div",{className:"preview-error",children:t})]})},k=t(104),C=t(52),L=t.n(C),E=t(105),R=t.n(E).a.createInstance({name:"filecache"}),S=function(e){return{name:"fetch-plugin",setup:function(n){n.onLoad({filter:/(^index\.js$)/},(function(){return{loader:"jsx",contents:e}})),n.onLoad({filter:/.*/},function(){var e=Object(s.a)(Object(i.a)().mark((function e(n){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.getItem(n.path);case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.onLoad({filter:/.css$/},function(){var e=Object(s.a)(Object(i.a)().mark((function e(n){var t,r,o,a,c,s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get(n.path);case 2:return t=e.sent,r=t.data,o=t.request,a=r.replace(/\n/g,"").replace(/"/g,'\\"').replace(/'/g,"\\'"),c="\n          const style = document.createElement('style');\n          style.innerText = '".concat(a,"';\n          document.head.appendChild(style);\n        "),s={loader:"jsx",contents:c,resolveDir:new URL("./",o.responseURL).pathname},e.next=10,R.setItem(n.path,s);case 10:return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.onLoad({filter:/.*/},function(){var e=Object(s.a)(Object(i.a)().mark((function e(n){var t,r,o,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get(n.path);case 2:return t=e.sent,r=t.data,o=t.request,a={loader:"jsx",contents:r,resolveDir:new URL("./",o.responseURL).pathname},e.next=8,R.setItem(n.path,a);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}}},T=function(){var e=Object(s.a)(Object(i.a)().mark((function e(n){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=4;break}return e.next=3,k.startService({worker:!0,wasmURL:"https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm"});case 3:r=e.sent;case 4:return e.prev=4,e.next=7,r.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[{name:"unpkg-path-plugin",setup:function(e){e.onResolve({filter:/(^index\.js$)/},(function(){return{path:"index.js",namespace:"a"}})),e.onResolve({filter:/^\.+\//},(function(e){return{namespace:"a",path:new URL(e.path,"https://unpkg.com"+e.resolveDir+"/").href}})),e.onResolve({filter:/.*/},function(){var e=Object(s.a)(Object(i.a)().mark((function e(n){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespace:"a",path:"https://unpkg.com/".concat(n.path)});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}},S(n)],define:{"process.env.NODE_ENV":'"production"',global:"window"}});case 7:return t=e.sent,e.abrupt("return",{code:t.outputFiles[0].text,err:""});case 11:if(e.prev=11,e.t0=e.catch(4),!(e.t0 instanceof Error)){e.next=15;break}return e.abrupt("return",{code:"",err:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n){return e.apply(this,arguments)}}(),W=T,z=t(53),D=(t(212),t(106)),M=function(e){var n=e.children,t=Object(o.useState)(window.innerWidth),r=Object(u.a)(t,2),a=r[0],c=r[1],i=Object(o.useState)(.75*window.innerWidth),s=Object(u.a)(i,2),l=s[0],d=s[1];Object(o.useEffect)((function(){var e,n=function(){e&&clearTimeout(e),e=setTimeout((function(){c(window.innerWidth),.75*window.innerWidth<l&&d(.75*window.innerWidth)}),100)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[l]);var p={className:"resize-horizontal",minConstraints:[.2*a,1/0],maxConstraints:[.75*a,1/0],height:1/0,width:l,resizeHandles:["e"],onResizeStop:function(e,n){d(n.size.width)}};return Object(O.jsx)(D.ResizableBox,Object(z.a)(Object(z.a)({},p),{},{children:n}))},N=(t(221),"import React, { useEffect, useState } from 'react';\nimport ReactDOM from 'react-dom';\n// fonts\nimport WebFont from 'webfontloader';\n// css-in-js\nimport styled, { ThemeProvider } from 'styled-components';\n// Radix https://www.radix-ui.com/\nimport { blue, green } from '@radix-ui/colors';\nimport { FaceIcon } from '@radix-ui/react-icons';\n\n// styled-components global styles don't work in the preview iframe\n// so you need to set styles on the body directly\ndocument.body.style = `margin: 0; font-family: 'Atkinson Hyperlegible';`;\n\nWebFont.load({\n  google: {\n    families: ['Atkinson Hyperlegible'],\n  },\n});\n\nconst theme = {\n  colors: {\n    ...blue,\n    ...green,\n  },\n};\n\nconst Title = styled.h1`\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n`;\n\nconst Wrapper = styled.section`  \n  padding: 4em;\n  background: papayawhip;\n`;\n\nconst Counter = styled.div`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n`;\n\nconst CountValue = styled.div`\n  font-size: 2em;\n`;\n\nconst Button = styled.button`\n  font-family: inherit;\n  background-color: ${(props) => props.theme.colors.blue4};\n  color: ${(props) => props.theme.colors.blue11};\n  border-color: ${(props) => props.theme.colors.blue7};\n  &:hover {\n    background-color: ${(props) => props.theme.colors.green5};\n    border-color: ${(props) => props.theme.colors.green8};\n  }\n`;\n\nconst useCounter = () => {\n  const [count, setCount] = useState(0);\n\n  function increment() {\n    setCount(count + 1);\n  }\n  return {\n    count,\n    increment,\n  };\n};\n\nconst Count = () => {\n  const { count, increment } = useCounter();\n  return (\n    <Counter>\n      <CountValue>{count}</CountValue>\n      <Button onClick={() => increment()}>Click me</Button>\n    </Counter>\n  );\n};\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Wrapper>\n        <Title>\n          Hello World!\n          <FaceIcon />\n        </Title>\n        <Count />\n      </Wrapper>\n    </ThemeProvider>\n  );\n};\n\nReactDOM.render(<App />, document.getElementById('root'));"),$=function(){var e=Object(o.useState)(""),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(o.useState)(""),c=Object(u.a)(a,2),l=c[0],d=c[1],p=Object(o.useState)(""),f=Object(u.a)(p,2),b=f[0],m=f[1],h=Object(o.useState)(""),j=Object(u.a)(h,2),v=j[0],w=j[1];return Object(o.useEffect)((function(){var e=setTimeout(Object(s.a)(Object(i.a)().mark((function e(){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.history.replaceState(null,"","?data=".concat(btoa(b))),e.next=3,W(b);case 3:(n=e.sent)&&(r(n.code),d(n.err));case 5:case"end":return e.stop()}}),e)}))),2e3);return function(){clearTimeout(e)}}),[b]),Object(o.useEffect)((function(){var e=window.location.search.split("data=")[1];if(e){var n=atob(e);w(n),m(n)}else w(N),m(N)}),[]),Object(O.jsxs)("div",{id:"code-cell",children:[Object(O.jsx)(M,{children:Object(O.jsx)(g,{initialValue:v,onChange:function(e){return m(e)}})}),Object(O.jsx)(y,{code:t,err:l})]})},V=(t(222),t(223),function(){return Object(O.jsx)($,{})});c.a.render(Object(O.jsx)(V,{}),document.querySelector("#root"))}},[[224,1,2]]]);
//# sourceMappingURL=main.72706189.chunk.js.map