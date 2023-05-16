"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[884],{1884:function(e,t,n){n.r(t),n.d(t,{default:function(){return we}});n(7632);var r=n(3360),a=n(2936),o=n(9434),i=n(5985),c=n(3634),u="NOT_FOUND";var l=function(e,t){return e===t};function s(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?l:r,o=n.maxSize,i=void 0===o?1:o,c=n.resultEqualityCheck,s=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),f=1===i?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:u},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(s):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return u}return{get:r,put:function(t,a){r(t)===u&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,s);function d(){var t=f.get(arguments);if(t===u){if(t=e.apply(null,arguments),c){var n=f.getEntries(),r=n.find((function(e){return c(e.value,t)}));r&&(t=r.value)}f.put(arguments,t)}return t}return d.clearCache=function(){return f.clear()},d}function f(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function d(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,i=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,s=l.memoizeOptions,d=void 0===s?n:s,v=Array.isArray(d)?d:[d],p=f(r),m=e.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(v)),h=e((function(){for(var e=[],t=p.length,n=0;n<t;n++)e.push(p[n].apply(null,arguments));return o=m.apply(null,e)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:m,dependencies:p,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var v=d(s),p=function(e){return e.contacts.contacts},m=function(e){return e.contacts.isLoading},h=function(e){return e.contacts.error},x=v([p,function(e){return e.filter.value}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),y=n(184),b=function(e){var t=e.contactData,n=e.handleClose,u=(0,o.I0)(),l=(0,o.v9)(p);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(a.Z,{id:"contact",onSubmit:function(e){e.preventDefault();var r=e.target,a={name:r.elements.name.value,number:r.elements.phone.value};if(l.filter((function(e){return e.name!==t.name})).some((function(e){return e.name.toLowerCase()===a.name.toLowerCase()})))return e.currentTarget.reset(),void i.Am.warn(" ".concat(a.name," is already in the contacts."),{position:"top-center",autoClose:!1,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,theme:"light"});if(t){var o={id:t.id,newContact:a};return u((0,c.KY)(o)),void n()}if(l.some((function(e){return e.name.toLowerCase()===a.name.toLowerCase()})))return e.currentTarget.reset(),void i.Am.warn(" ".concat(a.name," is already in the contacts."),{position:"top-center",autoClose:!1,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,theme:"light"});u((0,c.yH)(a))},children:[(0,y.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,y.jsx)(a.Z.Label,{style:t?{color:"black"}:{},children:"Name"}),(0,y.jsx)(a.Z.Control,{defaultValue:t?t.name:"",style:t?{outline:"1px solid black"}:{},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",className:"form-input",required:!0})]}),(0,y.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,y.jsx)(a.Z.Label,{style:t?{color:"black"}:{},children:"Number"}),(0,y.jsx)(a.Z.Control,{defaultValue:t?t.number:"",style:t?{outline:"1px solid black"}:{},type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",className:"form-input",required:!0})]}),(0,y.jsx)("div",{className:"btn-wrapper",children:(0,y.jsx)(r.Z,{variant:"primary",type:"submit",className:"btn-fit-space",children:"Submit"})})]})})},g=n(9439),j=n(383),C=n(1286),w=n(2791),Z=n(4554),k=n(890),N=n(1091),A=n(6899),S={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:326,bgcolor:"background.paper",p:2,boxShadow:24,borderRadius:2};function _(e){var t=e.open,n=e.handleClose,r=e.contactData,a=(0,o.I0)();(0,w.useEffect)((function(){return function(){a((0,c.XQ)())}}),[a,r]);return(0,y.jsx)("div",{children:(0,y.jsx)(N.Z,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r&&"delete"===r.action?(0,y.jsxs)(Z.Z,{sx:S,children:[(0,y.jsxs)(k.Z,{id:"modal-modal-title",variant:"h6",component:"h2",sx:{textAlign:"center",marginBottom:"10px"},children:['Delete "',r.name,'" contact?']}),(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[(0,y.jsx)(A.r,{text:"Yes",onClick:function(){return e=r.id,a((0,c.xX)(e)),void n();var e}}),(0,y.jsx)(A.r,{text:"No",onClick:function(e){n()}})]})]}):(0,y.jsx)(Z.Z,{sx:S,children:(0,y.jsx)(b,{contactData:r,handleClose:n})})})})}var I=n(8389),z=n(1413),O=n(5987),E=n(1694),L=n.n(E),D=(n(2391),n(7462)),P=n(3366);n(2176);function F(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function K(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function R(e,t){return Object.keys(t).reduce((function(n,r){var a,o=n,i=o[F(r)],c=o[r],u=(0,P.Z)(o,[F(r),r].map(K)),l=t[r],s=function(e,t,n){var r=(0,w.useRef)(void 0!==e),a=(0,w.useState)(t),o=a[0],i=a[1],c=void 0!==e,u=r.current;return r.current=c,!c&&u&&o!==t&&i(t),[c?e:o,(0,w.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),i(e)}),[n])]}(c,i,e[l]),f=s[0],d=s[1];return(0,D.Z)({},u,((a={})[r]=f,a[l]=d,a))}),e)}function M(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function q(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function B(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}M.__suppressDeprecationWarning=!0,q.__suppressDeprecationWarning=!0,B.__suppressDeprecationWarning=!0;var H=Function.prototype.bind.call(Function.prototype.call,[].slice);var V=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var G=function(e,t){return(0,w.useMemo)((function(){return function(e,t){var n=V(e),r=V(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},T=w.createContext(null);T.displayName="NavContext";var U=T,X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},Q=w.createContext(null),W=w.createContext(null);function J(e){return"".concat("data-rr-ui-").concat(e)}var Y=function(e){var t=(0,w.useRef)(e);return(0,w.useEffect)((function(){t.current=e}),[e]),t};function $(e){var t=Y(e);return(0,w.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var ee=n(5341),te=["as","active","eventKey"];function ne(e){var t=e.key,n=e.onClick,r=e.active,a=e.id,o=e.role,i=e.disabled,c=(0,w.useContext)(Q),u=(0,w.useContext)(U),l=(0,w.useContext)(W),s=r,f={role:o};if(u){o||"tablist"!==u.role||(f.role="tab");var d=u.getControllerId(null!=t?t:null),v=u.getControlledId(null!=t?t:null);f[J("event-key")]=t,f.id=d||a,!(s=null==r&&null!=t?u.activeKey===t:r)&&(null!=l&&l.unmountOnExit||null!=l&&l.mountOnEnter)||(f["aria-controls"]=v)}return"tab"===f.role&&(f["aria-selected"]=s,s||(f.tabIndex=-1),i&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=$((function(e){i||(null==n||n(e),null!=t&&c&&!e.isPropagationStopped()&&c(t,e))})),[f,{isActive:s}]}var re=w.forwardRef((function(e,t){var n=e.as,r=void 0===n?ee.ZP:n,a=e.active,o=e.eventKey,i=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,te),c=ne(Object.assign({key:X(o,i.href),active:a},i)),u=(0,g.Z)(c,2),l=u[0],s=u[1];return l[J("active")]=s.isActive,(0,y.jsx)(r,Object.assign({},i,l,{ref:t}))}));re.displayName="NavItem";var ae=re,oe=["as","onSelect","activeKey","role","onKeyDown"];var ie=function(){},ce=J("event-key"),ue=w.forwardRef((function(e,t){var n,r,a=e.as,o=void 0===a?"div":a,i=e.onSelect,c=e.activeKey,u=e.role,l=e.onKeyDown,s=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,oe),f=(0,w.useReducer)((function(e){return!e}),!1)[1],d=(0,w.useRef)(!1),v=(0,w.useContext)(Q),p=(0,w.useContext)(W);p&&(u=u||"tablist",c=p.activeKey,n=p.getControlledId,r=p.getControllerId);var m=(0,w.useRef)(null),h=function(e){var t=m.current;if(!t)return null;var n,r,a=(n=t,r="[".concat(ce,"]:not([aria-disabled=true])"),H(n.querySelectorAll(r))),o=t.querySelector("[aria-selected=true]");if(!o||o!==document.activeElement)return null;var i=a.indexOf(o);if(-1===i)return null;var c=i+e;return c>=a.length&&(c=0),c<0&&(c=a.length-1),a[c]},x=function(e,t){null!=e&&(null==i||i(e,t),null==v||v(e,t))};(0,w.useEffect)((function(){if(m.current&&d.current){var e=m.current.querySelector("[".concat(ce,"][aria-selected=true]"));null==e||e.focus()}d.current=!1}));var b=G(t,m);return(0,y.jsx)(Q.Provider,{value:x,children:(0,y.jsx)(U.Provider,{value:{role:u,activeKey:X(c),getControlledId:n||ie,getControllerId:r||ie},children:(0,y.jsx)(o,Object.assign({},s,{onKeyDown:function(e){if(null==l||l(e),p){var t,n;switch(e.key){case"ArrowLeft":case"ArrowUp":t=h(-1);break;case"ArrowRight":case"ArrowDown":t=h(1);break;default:return}if(t)e.preventDefault(),x(t.dataset[(n="EventKey","".concat("rrUi").concat(n))]||null,e),d.current=!0,f()}},ref:b,role:u}))})})}));ue.displayName="Nav";var le=Object.assign(ue,{Item:ae}),se=n(1349),fe=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],de=w.forwardRef((function(e,t){var n=e.bsPrefix,r=e.active,a=e.disabled,o=e.eventKey,i=e.className,c=e.variant,u=e.action,l=e.as,s=(0,O.Z)(e,fe);n=(0,se.vE)(n,"list-group-item");var f=ne((0,z.Z)({key:X(o,s.href),active:r},s)),d=(0,g.Z)(f,2),v=d[0],p=d[1],m=$((function(e){if(a)return e.preventDefault(),void e.stopPropagation();v.onClick(e)}));a&&void 0===s.tabIndex&&(s.tabIndex=-1,s["aria-disabled"]=!0);var h=l||(u?s.href?"a":"button":"div");return(0,y.jsx)(h,(0,z.Z)((0,z.Z)((0,z.Z)({ref:t},s),v),{},{onClick:m,className:L()(i,n,p.isActive&&"active",a&&"disabled",c&&"".concat(n,"-").concat(c),u&&"".concat(n,"-action"))}))}));de.displayName="ListGroupItem";var ve=de,pe=["className","bsPrefix","variant","horizontal","numbered","as"],me=w.forwardRef((function(e,t){var n,r=R(e,{activeKey:"onSelect"}),a=r.className,o=r.bsPrefix,i=r.variant,c=r.horizontal,u=r.numbered,l=r.as,s=void 0===l?"div":l,f=(0,O.Z)(r,pe),d=(0,se.vE)(o,"list-group");return c&&(n=!0===c?"horizontal":"horizontal-".concat(c)),(0,y.jsx)(le,(0,z.Z)((0,z.Z)({ref:t},f),{},{as:s,className:L()(a,d,i&&"".concat(d,"-").concat(i),n&&"".concat(d,"-").concat(n),u&&"".concat(d,"-numbered"))}))}));me.displayName="ListGroup";var he=Object.assign(me,{Item:ve}),xe="ContactList_item__Hx051",ye="ContactList_user__MbmIr";var be=function(){var e=(0,w.useState)(!1),t=(0,g.Z)(e,2),n=t[0],r=t[1],a=(0,w.useState)(""),i=(0,g.Z)(a,2),u=i[0],l=i[1],s=(0,o.I0)(),f=(0,o.v9)(x),d=(0,o.v9)(p),v=(0,o.v9)(m),b=(0,o.v9)(h);return(0,w.useEffect)((function(){s((0,c.XQ)()),n||s((0,c.XQ)())}),[s,n]),(0,y.jsxs)(y.Fragment,{children:[v&&(0,y.jsx)(I.Z,{}),b&&(0,y.jsxs)("div",{children:["Error: ",b.message]}),d&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(he,{children:f.map((function(e){return(0,y.jsxs)(he.Item,{className:xe,style:{padding:"8px"},children:[(0,y.jsxs)("div",{className:ye,children:[e.name,": ",e.number]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(C.Z,{onClick:function(){return function(e,t,n){var a={action:"edit",name:e,number:t,id:n};r(!0),l(a)}(e.name,e.number,e.id)},sx:{cursor:"pointer",fontSize:20,marginRight:"5px",color:"#0A57CA","&:hover":{color:"#084197"}}}),(0,y.jsx)(j.Z,{onClick:function(){return function(e,t,n){var a={action:"delete",name:e,number:t,id:n};console.log(a),r(!0),l(a)}(e.name,e.number,e.id)},sx:{cursor:"pointer",fontSize:22,color:"#0A57CA","&:hover":{color:"#084197"}}})]})]},e.id)}))}),(0,y.jsx)(_,{contactData:u,open:n,handleClose:function(){r(!1)}})]})]})},ge=n(6233),je=n(4808);function Ce(){var e=(0,o.I0)();return(0,y.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,y.jsx)(a.Z.Label,{children:"Find contacts by name"}),(0,y.jsx)(a.Z.Control,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",className:"form-input",onChange:function(t){var n=t.target.value;e((0,je.x)(n))}})]})}var we=function(){return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(ge.Z,{children:[(0,y.jsx)("h1",{className:"title ",children:"Phonebook"}),(0,y.jsx)(b,{}),(0,y.jsx)("h1",{className:"title title-not-first",children:"Contacts"}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Ce,{}),(0,y.jsx)(be,{})]})]})})}},383:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");t.Z=i},1286:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=i},2176:function(e){e.exports=function(e,t,n,r,a,o,i,c){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,i,c],s=0;(u=new Error(t.replace(/%s/g,(function(){return l[s++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}}}]);
//# sourceMappingURL=884.c83bd24e.chunk.js.map