(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(32);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),s=a(149),l=a(158),d=a(153),c=a(154),u=a(150),f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,n=a.next;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:e.frontmatter.title,description:e.excerpt}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date," / ",e.frontmatter.category),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),o.a.createElement(l.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(s.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,n&&o.a.createElement(s.Link,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},t}(o.a.Component);t.default=f;var p="1863853224"},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(148),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(151),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),p=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(163),n=a.n(r),i=a(164),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new n.a(o.a);var l=s.rhythm,d=s.scale},151:function(e,t,a){var r;e.exports=(r=a(152))&&r.default||r},152:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},153:function(e,t,a){"use strict";a(32);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),s=a(149),l=a(150),d=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,n,o.a.createElement("footer",null,o.a.createElement("a",{href:"https://twitter.com/Beautifwhale",target:"_blank"},"twitter")," ","•"," ",o.a.createElement("a",{href:"https://github.com/beautifwhale",target:"_blank"},"github")," ","•"," ",o.a.createElement("a",{href:"https://stackoverflow.com/users/2600522/david-morton",target:"_blank"},"stackoverflow")," ","•"," ",o.a.createElement("a",{href:"https://beautifwhale.github.io/rss.xml",target:"_blank"},"rss")))},t}(o.a.Component);t.a=d},154:function(e,t,a){"use strict";var r=a(155),n=a(0),i=a.n(n),o=a(4),s=a.n(o),l=a(165),d=a.n(l),c=a(149);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return i.a.createElement(c.StaticQuery,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var f="1025518380"},155:function(e){e.exports={data:{site:{siteMetadata:{title:"beautifwhale.io 🐋",description:"Let's talk about that.",author:"David Morton"}}}}},158:function(e,t,a){"use strict";a(159);var r=a(161),n=a(0),i=a.n(n),o=a(149),s=a(162),l=a.n(s),d=a(150),c="3331024571";t.a=function(){return i.a.createElement(o.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata.author,a=e.site.siteMetadata.title;return i.a.createElement(i.a.Fragment,null,"/"!==location.pathname&&i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("div",null,"Personal blog by ",i.a.createElement("strong",null,t),".")))},data:r})}},159:function(e,t,a){"use strict";a(160)("fixed",function(e){return function(){return e(this,"tt","","")}})},160:function(e,t,a){var r=a(11),n=a(16),i=a(17),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},161:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEc0lEQVQ4y3WUe0yVZRzHX11bbW3NzWqrtbwiylVFZZoXYGikoCgImkIogvcj5ryBnGgLU0RULEnBoIm3paaJl3klnXbM/tCOJRoKnHPey7kCB7T116fnffEQuPrjs+d5t2ef9/c8z/f3SJpdxSnQZAWnrOJWXLhkJx7NQ1trB35fOx2tftpbn+HzPsPlbMeptXWPgXkAqVvoUNAUMZc1vJoXR7ONy2eOsbW4gHWbP6Wmcg93b15DkT24XR3/KzWE2guhKqp0qy5kITOvX0Z4VCivDQmi37Bg3g4NYW7qNK6dPYHH5e8lCsx1egkVhwO/109tdQXvjhiKNGA40sBggRjfD6Z/+EimzoijfNd2cRx/ofWsTh97ClW7jNvp5sGvFuI+msyIsVHMSYonZ14iGSkJJE+PZfiYKN4JiyA2bjz1V6/R6hNS1ddVnV6pvmXVphhCucXB87ZOynaXMjgyhKsHirAeLcV6uITfa0u4d2gb9Xs3sWL+DPoPC+Krr8vpbP8b1eHGqUsNcasu1KsT221ReC5uNDU7V1QWyx+nyrn9XQk/VxVjObiVXw6VcleIT5XkERk9inPnzuNvey7OXRd6u5GUFiG06UIHnT4/mwvzWblgOr+J6u7s/wxLRSG39pm5V1NMY10V9dXbSZwZz6OHDfg87SIZQigiZhAQ6sjNurCDQwf3U7A8lepNi5j0QTSFmUmcMWeTljCFrLSZnCzLZ+MGk8itJgSuLrQAbiS5WekSNsnGH6/U1lCVv4gdK1KIjIggb/ZULm1bQ+y4MUwcM5KqghxunfgWjyoqUpz/Sl9gCA2E0Kl4eWS5zfkda7i8YxVnNmTyw+YsLHsLOGaaz9ktuVhPV9J45yZuEX636Ci9s3oiOYRIJyDWq71/9UeulK2lbks2FwoX03BkFyc35XCpaCnW80dQRMScQqa3qFt29UKyP3HgeOqgS+wQMfDQaL3P8S1ZlKTHU7oggdLFqXyeNh1z0gQu1uzBI8KvGlK1B5oxSrZGO3YdIdaRm1WaHj6munAJu7ISKE6ehmnyBPJnxVG0cBqWKxfwOn2G0Oh/uTdSy+MWdGx/2mh+3IxNSNUmOwfMy/kiYyq1K+awL2MGxelxbF2Xa2w10Az/hfTk4VOeNjQJqQ2PXSxucWK9dZ2jRUtYNmsKeckxmGbGkDp5NKcrd4podb44cxmjKV5CcuqhFhl89KCB70+dJSEzlw0rP6Z+52q+yZtLTlIMiRPGsnv1PKwXD3P8ZJ1Yr+IRHeJoUnj5UqWyikpy1+cTlZjCq8ERSO8O5o2QCFZmzKLclMbu5bOpWJVCXbnooDwT45IXYS7dz/Wf7gixeJTFrjSbJo7KboglaVAI0mDBgGD6Dg3jlWHh3d+vDw/nrfBI3hsdxZujouk3OoaJ6UuJ/2Qts5du5MvyGsFB6ustuIVYvwepb1AYOn2ErM+QMKQhoWIeKuT6j0YgDRJvYVAkA2OTiU5ZwviUbOIXrmJSei4fZq4RmDCZd3Ljxl3jcv8BC5GzcE84DmkAAAAASUVORK5CYII=",width:50,height:50,src:"/static/44154671153fb186da2a0e6c931504e7/45876/profile_cropped.png",srcSet:"/static/44154671153fb186da2a0e6c931504e7/45876/profile_cropped.png 1x,\n/static/44154671153fb186da2a0e6c931504e7/eb85b/profile_cropped.png 1.5x,\n/static/44154671153fb186da2a0e6c931504e7/4f71c/profile_cropped.png 2x,\n/static/44154671153fb186da2a0e6c931504e7/9ec3e/profile_cropped.png 3x"}}},site:{siteMetadata:{author:"David Morton",title:"beautifwhale.io 🐋"}}}}},162:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),o=r(a(51)),s=r(a(156)),l=r(a(157)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.Tag,w=e.itemProp,S="boolean"==typeof b?"lightgray":b,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),x=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),L={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var k=h;return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&d.default.createElement(y,(0,l.default)({src:k.base64},L)),k.tracedSVG&&d.default.createElement(y,(0,l.default)({src:k.tracedSVG},L)),S&&d.default.createElement(v,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),d.default.createElement(y,{alt:a,title:t,src:k.src,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},k))}}))}if(m){var R=m,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},i);return"inherit"===i.display&&delete I.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(y,(0,l.default)({src:R.base64},L)),R.tracedSVG&&d.default.createElement(y,(0,l.default)({src:R.tracedSVG},L)),S&&d.default.createElement(v,{title:t,style:{backgroundColor:S,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(y,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=b;t.default=S}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-dd71df52fc7307a93461.js.map