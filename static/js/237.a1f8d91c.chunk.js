"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[237],{8237:function(e,t,n){n.r(t),n.d(t,{default:function(){return we}});var r=n(2791),a=n(9434),o=n(5985),i=n(3634),s="NOT_FOUND";var c=function(e,t){return e===t};function l(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?c:r,o=n.maxSize,i=void 0===o?1:o,l=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),d=1===i?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:s},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return s}return{get:r,put:function(t,a){r(t)===s&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,u);function f(){var t=d.get(arguments);if(t===s){if(t=e.apply(null,arguments),l){var n=d.getEntries(),r=n.find((function(e){return l(e.value,t)}));r&&(t=r.value)}d.put(arguments,t)}return t}return f.clearCache=function(){return d.clear()},f}function u(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function d(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,i=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=s,d=l.memoizeOptions,f=void 0===d?n:d,v=Array.isArray(f)?f:[f],p=u(r),m=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(v)),h=e((function(){for(var e=[],t=p.length,n=0;n<t;n++)e.push(p[n].apply(null,arguments));return o=m.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:p,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var f=d(l),v=function(e){return e.contacts.contacts},p=function(e){return e.contacts.isLoading},m=function(e){return e.contacts.error},h=f([v,function(e){return e.filter.value}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),x=n(3360),b=n(2936),y=n(184),g=function(){var e=(0,a.I0)(),t=(0,a.v9)(v);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(b.Z,{id:"contact",onSubmit:function(n){n.preventDefault();var r=n.target,a={name:r.elements.name.value,number:r.elements.phone.value};if(t.some((function(e){return e.name.toLowerCase()===a.name.toLowerCase()})))return n.currentTarget.reset(),void o.Am.warn(" ".concat(a.name," is already in the contacts."),{position:"top-center",autoClose:!1,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,theme:"light"});e((0,i.yH)(a)),n.currentTarget.reset()},children:[(0,y.jsxs)(b.Z.Group,{className:"mb-3",children:[(0,y.jsx)(b.Z.Label,{children:"Name"}),(0,y.jsx)(b.Z.Control,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",className:"form-input",required:!0})]}),(0,y.jsxs)(b.Z.Group,{className:"mb-3",children:[(0,y.jsx)(b.Z.Label,{children:"Number"}),(0,y.jsx)(b.Z.Control,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",className:"form-input",required:!0})]}),(0,y.jsx)("div",{className:"btn-wrapper",children:(0,y.jsx)(x.Z,{variant:"primary",type:"submit",className:"btn-fit-space",children:"Submit"})})]})})},j=n(9439),C=n(383),Z=n(1286),w=(n(7632),n(4554)),N=n(1091),k=n(890),A=n(6899),S=function(e){var t=e.contactData,n=e.handleClose,r=(0,a.I0)(),s=(0,a.v9)(v);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(b.Z,{id:"contact",onSubmit:function(e){e.preventDefault();var a=e.target,c={name:a.elements.name.value,number:a.elements.phone.value};if(s.filter((function(e){return e.name.toLowerCase()!==t.name.toLowerCase()})).some((function(e){return e.name.toLowerCase()===c.name.toLowerCase()})))return e.currentTarget.reset(),void o.Am.warn(" ".concat(c.name," is already in the contacts."),{position:"top-center",autoClose:!1,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,theme:"light"});var l={id:t.id,newContact:c};r((0,i.KY)(l)),n()},children:[(0,y.jsxs)(b.Z.Group,{className:"mb-3",children:[(0,y.jsx)(b.Z.Label,{children:"Name"}),(0,y.jsx)(b.Z.Control,{defaultValue:t?t.name:"",style:{outline:"1px solid black"},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",className:"form-input",required:!0})]}),(0,y.jsxs)(b.Z.Group,{className:"mb-3",children:[(0,y.jsx)(b.Z.Label,{children:"Number"}),(0,y.jsx)(b.Z.Control,{defaultValue:t?t.number:"",style:{outline:"1px solid black"},type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",className:"form-input",required:!0})]}),(0,y.jsx)("div",{className:"btn-wrapper",children:(0,y.jsx)(x.Z,{variant:"primary",type:"submit",className:"btn-fit-space",children:"Submit"})})]})})},z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:326,bgcolor:"background.paper",p:2,boxShadow:24,borderRadius:2};function I(e){var t=e.open,n=e.handleClose,r=e.contactData,o=(0,a.I0)();return(0,y.jsx)("div",{children:(0,y.jsx)(N.Z,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r&&"delete"===r.action?(0,y.jsxs)(w.Z,{sx:z,children:[(0,y.jsxs)(k.Z,{id:"modal-modal-title",variant:"h6",component:"h2",sx:{textAlign:"center",marginBottom:"10px"},children:['Delete "',r.name,'" contact?']}),(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[(0,y.jsx)(A.r,{text:"Yes",onClick:function(){return e=r.id,o((0,i.xX)(e)),void n();var e}}),(0,y.jsx)(A.r,{text:"No",onClick:function(){n()}})]})]}):(0,y.jsx)(w.Z,{sx:z,children:(0,y.jsx)(S,{contactData:r,handleClose:n})})})})}var L=n(8389),_=n(1413),O=n(5987),D=n(1694),E=n.n(D),F=(n(2391),n(7462)),P=n(3366);n(2176);function K(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function R(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function q(e,t){return Object.keys(t).reduce((function(n,a){var o,i=n,s=i[K(a)],c=i[a],l=(0,P.Z)(i,[K(a),a].map(R)),u=t[a],d=function(e,t,n){var a=(0,r.useRef)(void 0!==e),o=(0,r.useState)(t),i=o[0],s=o[1],c=void 0!==e,l=a.current;return a.current=c,!c&&l&&i!==t&&s(t),[c?e:i,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(c,s,e[u]),f=d[0],v=d[1];return(0,F.Z)({},l,((o={})[a]=f,o[u]=v,o))}),e)}function M(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function B(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function G(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}M.__suppressDeprecationWarning=!0,B.__suppressDeprecationWarning=!0,G.__suppressDeprecationWarning=!0;var H=Function.prototype.bind.call(Function.prototype.call,[].slice);var T=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var V=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=T(e),r=T(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},U=r.createContext(null);U.displayName="NavContext";var J=U,W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},$=r.createContext(null),X=r.createContext(null);function Y(e){return"".concat("data-rr-ui-").concat(e)}var Q=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function ee(e){var t=Q(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var te=n(5341),ne=["as","active","eventKey"];function re(e){var t=e.key,n=e.onClick,a=e.active,o=e.id,i=e.role,s=e.disabled,c=(0,r.useContext)($),l=(0,r.useContext)(J),u=(0,r.useContext)(X),d=a,f={role:i};if(l){i||"tablist"!==l.role||(f.role="tab");var v=l.getControllerId(null!=t?t:null),p=l.getControlledId(null!=t?t:null);f[Y("event-key")]=t,f.id=v||o,!(d=null==a&&null!=t?l.activeKey===t:a)&&(null!=u&&u.unmountOnExit||null!=u&&u.mountOnEnter)||(f["aria-controls"]=p)}return"tab"===f.role&&(f["aria-selected"]=d,d||(f.tabIndex=-1),s&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=ee((function(e){s||(null==n||n(e),null!=t&&c&&!e.isPropagationStopped()&&c(t,e))})),[f,{isActive:d}]}var ae=r.forwardRef((function(e,t){var n=e.as,r=void 0===n?te.ZP:n,a=e.active,o=e.eventKey,i=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,ne),s=re(Object.assign({key:W(o,i.href),active:a},i)),c=(0,j.Z)(s,2),l=c[0],u=c[1];return l[Y("active")]=u.isActive,(0,y.jsx)(r,Object.assign({},i,l,{ref:t}))}));ae.displayName="NavItem";var oe=ae,ie=["as","onSelect","activeKey","role","onKeyDown"];var se=function(){},ce=Y("event-key"),le=r.forwardRef((function(e,t){var n,a,o=e.as,i=void 0===o?"div":o,s=e.onSelect,c=e.activeKey,l=e.role,u=e.onKeyDown,d=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,ie),f=(0,r.useReducer)((function(e){return!e}),!1)[1],v=(0,r.useRef)(!1),p=(0,r.useContext)($),m=(0,r.useContext)(X);m&&(l=l||"tablist",c=m.activeKey,n=m.getControlledId,a=m.getControllerId);var h=(0,r.useRef)(null),x=function(e){var t=h.current;if(!t)return null;var n,r,a=(n=t,r="[".concat(ce,"]:not([aria-disabled=true])"),H(n.querySelectorAll(r))),o=t.querySelector("[aria-selected=true]");if(!o||o!==document.activeElement)return null;var i=a.indexOf(o);if(-1===i)return null;var s=i+e;return s>=a.length&&(s=0),s<0&&(s=a.length-1),a[s]},b=function(e,t){null!=e&&(null==s||s(e,t),null==p||p(e,t))};(0,r.useEffect)((function(){if(h.current&&v.current){var e=h.current.querySelector("[".concat(ce,"][aria-selected=true]"));null==e||e.focus()}v.current=!1}));var g=V(t,h);return(0,y.jsx)($.Provider,{value:b,children:(0,y.jsx)(J.Provider,{value:{role:l,activeKey:W(c),getControlledId:n||se,getControllerId:a||se},children:(0,y.jsx)(i,Object.assign({},d,{onKeyDown:function(e){if(null==u||u(e),m){var t,n;switch(e.key){case"ArrowLeft":case"ArrowUp":t=x(-1);break;case"ArrowRight":case"ArrowDown":t=x(1);break;default:return}if(t)e.preventDefault(),b(t.dataset[(n="EventKey","".concat("rrUi").concat(n))]||null,e),v.current=!0,f()}},ref:g,role:l}))})})}));le.displayName="Nav";var ue=Object.assign(le,{Item:oe}),de=n(1349),fe=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],ve=r.forwardRef((function(e,t){var n=e.bsPrefix,r=e.active,a=e.disabled,o=e.eventKey,i=e.className,s=e.variant,c=e.action,l=e.as,u=(0,O.Z)(e,fe);n=(0,de.vE)(n,"list-group-item");var d=re((0,_.Z)({key:W(o,u.href),active:r},u)),f=(0,j.Z)(d,2),v=f[0],p=f[1],m=ee((function(e){if(a)return e.preventDefault(),void e.stopPropagation();v.onClick(e)}));a&&void 0===u.tabIndex&&(u.tabIndex=-1,u["aria-disabled"]=!0);var h=l||(c?u.href?"a":"button":"div");return(0,y.jsx)(h,(0,_.Z)((0,_.Z)((0,_.Z)({ref:t},u),v),{},{onClick:m,className:E()(i,n,p.isActive&&"active",a&&"disabled",s&&"".concat(n,"-").concat(s),c&&"".concat(n,"-action"))}))}));ve.displayName="ListGroupItem";var pe=ve,me=["className","bsPrefix","variant","horizontal","numbered","as"],he=r.forwardRef((function(e,t){var n,r=q(e,{activeKey:"onSelect"}),a=r.className,o=r.bsPrefix,i=r.variant,s=r.horizontal,c=r.numbered,l=r.as,u=void 0===l?"div":l,d=(0,O.Z)(r,me),f=(0,de.vE)(o,"list-group");return s&&(n=!0===s?"horizontal":"horizontal-".concat(s)),(0,y.jsx)(ue,(0,_.Z)((0,_.Z)({ref:t},d),{},{as:u,className:E()(a,f,i&&"".concat(f,"-").concat(i),n&&"".concat(f,"-").concat(n),c&&"".concat(f,"-numbered"))}))}));he.displayName="ListGroup";var xe=Object.assign(he,{Item:pe}),be="ContactList_item__Hx051",ye="ContactList_user__MbmIr";var ge=function(){var e=(0,r.useState)(!1),t=(0,j.Z)(e,2),n=t[0],o=t[1],s=(0,r.useState)(""),c=(0,j.Z)(s,2),l=c[0],u=c[1],d=(0,a.I0)(),f=(0,a.v9)(h),x=(0,a.v9)(v),b=(0,a.v9)(p),g=(0,a.v9)(m);(0,r.useEffect)((function(){d((0,i.XQ)())}),[d]);var w=function(e,t,n,r){var a={action:r,name:e,number:t,id:n};o(!0),u(a)};return(0,y.jsxs)(y.Fragment,{children:[b&&(0,y.jsx)(L.Z,{}),g&&(0,y.jsxs)("div",{children:["Error: ",g.message]}),x&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(xe,{children:f.map((function(e){return(0,y.jsxs)(xe.Item,{className:be,style:{padding:"8px"},children:[(0,y.jsxs)("div",{className:ye,children:[e.name,": ",e.number]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(Z.Z,{onClick:function(){return w(e.name,e.number,e.id,"edit")},sx:{cursor:"pointer",fontSize:20,marginRight:"5px",color:"#0A57CA","&:hover":{color:"#084197"}}}),(0,y.jsx)(C.Z,{onClick:function(){return w(e.name,e.number,e.id,"delete")},sx:{cursor:"pointer",fontSize:22,color:"#0A57CA","&:hover":{color:"#084197"}}})]})]},e.id)}))}),(0,y.jsx)(I,{contactData:l,open:n,handleClose:function(){o(!1)}})]})]})},je=n(6233),Ce=n(4808);function Ze(){var e=(0,a.I0)();return(0,y.jsxs)(b.Z.Group,{className:"mb-3",children:[(0,y.jsx)(b.Z.Label,{children:"Find contacts by name"}),(0,y.jsx)(b.Z.Control,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",className:"form-input",onChange:function(t){var n=t.target.value;e((0,Ce.x)(n))}})]})}var we=function(){return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(je.Z,{children:[(0,y.jsx)("h1",{className:"title ",children:"Phonebook"}),(0,y.jsx)(g,{}),(0,y.jsx)("h1",{className:"title title-not-first",children:"Contacts"}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Ze,{}),(0,y.jsx)(ge,{})]})]})})}},383:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");t.Z=i},1286:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=i},2176:function(e){e.exports=function(e,t,n,r,a,o,i,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,i,s],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}}}]);
//# sourceMappingURL=237.a1f8d91c.chunk.js.map