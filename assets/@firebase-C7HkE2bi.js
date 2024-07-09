import{o as Pu}from"./idb-BXWtuYvb.js";var Ri={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Su=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],h=n[e++],d=((i&7)<<18|(o&63)<<12|(u&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Ao={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,h=u?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,_=o>>2,w=(o&3)<<4|h>>4;let R=(h&15)<<2|f>>6,P=f&63;d||(P=64,u||(R=64)),r.push(e[_],e[w],e[R],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Io(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Su(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],h=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||h==null||f==null||w==null)throw new bu;const R=o<<2|h>>4;if(r.push(R),f!==64){const P=h<<4&240|f>>2;if(r.push(P),w!==64){const k=f<<6&192|w;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vu=function(n){const t=Io(n);return Ao.encodeByteArray(t,!0)},Fn=function(n){return Vu(n).replace(/\./g,"")},Du=function(n){try{return Ao.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=()=>ku().__FIREBASE_DEFAULTS__,Ou=()=>{if(typeof process>"u"||typeof Ri>"u")return;const n=Ri.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Du(n[1]);return t&&JSON.parse(t)},rs=()=>{try{return Nu()||Ou()||xu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mu=n=>{var t,e;return(e=(t=rs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},wo=n=>{const t=Mu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ro=()=>{var n;return(n=rs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fn(JSON.stringify(e)),Fn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uu(){var n;const t=(n=rs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bu(){return!Uu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qu(){try{return typeof indexedDB=="object"}catch{return!1}}function ju(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="FirebaseError";class oe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=$u,Object.setPrototypeOf(this,oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?zu(o,r):"Error",h=`${this.serviceName}: ${u} (${i}).`;return new oe(i,h,r)}}function zu(n,t){return n.replace(Hu,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Hu=/\{\$([^}]+)}/g;function Fr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(Ci(o)&&Ci(u)){if(!Fr(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ci(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n){return n&&n._delegate?n._delegate:n}class _e{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Lu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qu(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&u.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ku(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ku(n){return n===Xt?void 0:n}function Qu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Gu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const Xu={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Yu=U.INFO,Ju={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Zu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Ju[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class So{constructor(t){this.name=t,this._logLevel=Yu,this._logHandler=Zu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ec(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ec(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ur="@firebase/app",Pi="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new So("@firebase/app"),nc="@firebase/app-compat",rc="@firebase/analytics-compat",sc="@firebase/analytics",ic="@firebase/app-check-compat",oc="@firebase/app-check",ac="@firebase/auth",uc="@firebase/auth-compat",cc="@firebase/database",hc="@firebase/database-compat",lc="@firebase/functions",dc="@firebase/functions-compat",fc="@firebase/installations",pc="@firebase/installations-compat",gc="@firebase/messaging",mc="@firebase/messaging-compat",_c="@firebase/performance",yc="@firebase/performance-compat",Ec="@firebase/remote-config",vc="@firebase/remote-config-compat",Tc="@firebase/storage",Ic="@firebase/storage-compat",Ac="@firebase/firestore",wc="@firebase/vertexai-preview",Rc="@firebase/firestore-compat",Cc="firebase",Pc="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]",Sc={[Ur]:"fire-core",[nc]:"fire-core-compat",[sc]:"fire-analytics",[rc]:"fire-analytics-compat",[oc]:"fire-app-check",[ic]:"fire-app-check-compat",[ac]:"fire-auth",[uc]:"fire-auth-compat",[cc]:"fire-rtdb",[hc]:"fire-rtdb-compat",[lc]:"fire-fn",[dc]:"fire-fn-compat",[fc]:"fire-iid",[pc]:"fire-iid-compat",[gc]:"fire-fcm",[mc]:"fire-fcm-compat",[_c]:"fire-perf",[yc]:"fire-perf-compat",[Ec]:"fire-rc",[vc]:"fire-rc-compat",[Tc]:"fire-gcs",[Ic]:"fire-gcs-compat",[Ac]:"fire-fst",[Rc]:"fire-fst-compat",[wc]:"fire-vertex","fire-js":"fire-js",[Cc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Map,bc=new Map,qr=new Map;function Si(n,t){try{n.container.addComponent(t)}catch(e){ne.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function tn(n){const t=n.name;if(qr.has(t))return ne.debug(`There were multiple attempts to register component ${t}.`),!1;qr.set(t,n);for(const e of Un.values())Si(e,n);for(const e of bc.values())Si(e,n);return!0}function bo(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Po("app","Firebase",Vc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=Pc;function kc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Br,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(e||(e=Ro()),!e)throw qt.create("no-options");const o=Un.get(i);if(o){if(Fr(e,o.options)&&Fr(r,o.config))return o;throw qt.create("duplicate-app",{appName:i})}const u=new Wu(i);for(const d of qr.values())u.addComponent(d);const h=new Dc(e,r,u);return Un.set(i,h),h}function Do(n=Br){const t=Un.get(n);if(!t&&n===Br&&Ro())return kc();if(!t)throw qt.create("no-app",{appName:n});return t}function Jt(n,t,e){var r;let i=(r=Sc[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const h=[`Unable to register library "${i}" with version "${t}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ne.warn(h.join(" "));return}tn(new _e(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="firebase-heartbeat-database",Oc=1,en="firebase-heartbeat-store";let Dr=null;function ko(){return Dr||(Dr=Pu(Nc,Oc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(en)}catch(e){console.warn(e)}}}}).catch(n=>{throw qt.create("idb-open",{originalErrorMessage:n.message})})),Dr}async function xc(n){try{const e=(await ko()).transaction(en),r=await e.objectStore(en).get(No(n));return await e.done,r}catch(t){if(t instanceof oe)ne.warn(t.message);else{const e=qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ne.warn(e.message)}}}async function bi(n,t){try{const r=(await ko()).transaction(en,"readwrite");await r.objectStore(en).put(t,No(n)),await r.done}catch(e){if(e instanceof oe)ne.warn(e.message);else{const r=qt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ne.warn(r.message)}}}function No(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=1024,Lc=30*24*60*60*1e3;class Fc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Bc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Vi();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const h=new Date(u.date).valueOf();return Date.now()-h<=Lc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vi(),{heartbeatsToSend:r,unsentEntries:i}=Uc(this._heartbeatsCache.heartbeats),o=Fn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Vi(){return new Date().toISOString().substring(0,10)}function Uc(n,t=Mc){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),Di(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Di(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Bc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qu()?ju().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await xc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return bi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return bi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Di(n){return Fn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n){tn(new _e("platform-logger",t=>new tc(t),"PRIVATE")),tn(new _e("heartbeat",t=>new Fc(t),"PRIVATE")),Jt(Ur,Pi,n),Jt(Ur,Pi,"esm2017"),Jt("fire-js","")}qc("");var ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,Oo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function m(){}m.prototype=p.prototype,v.D=p.prototype,v.prototype=new m,v.prototype.constructor=v,v.C=function(y,E,I){for(var g=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)g[Dt-2]=arguments[Dt];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,m){m||(m=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(E=0;16>E;++E)y[E]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=v.g[0],m=v.g[1],E=v.g[2];var I=v.g[3],g=p+(I^m&(E^I))+y[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[3]+3250441966&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[7]+4249261313&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[11]+2304563134&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[15]+1236535329&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(E^I&(m^E))+y[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[0]+3921069994&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[4]+3889429448&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[8]+1163531501&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[12]+2368359562&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(m^E^I)+y[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[14]+4259657740&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[10]+3200236656&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[6]+76029189&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[2]+3299628645&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(E^(m|~I))+y[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[5]+4237533241&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[1]+2240044497&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[13]+1309151649&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var m=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=m;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var m=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=m&255,m/=256;for(this.u(v),v=Array(16),p=m=0;4>p;++p)for(var y=0;32>y;y+=8)v[m++]=this.g[p]>>>y&255;return v};function o(v,p){var m=h;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=p(v)}function u(v,p){this.h=p;for(var m=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(m[E]=I,y=!1)}this.g=m}var h={};function d(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return V(f(-v));for(var p=[],m=1,y=0;v>=m;y++)p[y]=v/m|0,m*=4294967296;return new u(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return V(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),y=w,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(g))):(y=y.j(m),y=y.add(f(g)))}return y}var w=d(0),R=d(1),P=d(16777216);n=u.prototype,n.m=function(){if(x(this))return-V(this).m();for(var v=0,p=1,m=0;m<this.g.length;m++){var y=this.i(m);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(x(this))return"-"+V(this).toString(v);for(var p=f(Math.pow(v,6)),m=this,y="";;){var E=$(m,p).g;m=H(m,E.j(p));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(v);if(m=E,k(m))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=H(this,v),x(v)?-1:k(v)?0:1};function V(v){for(var p=v.g.length,m=[],y=0;y<p;y++)m[y]=~v.g[y];return new u(m,~v.h).add(R)}n.abs=function(){return x(this)?V(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,m[E]=g<<16|I}return new u(m,m[m.length-1]&-2147483648?-1:0)};function H(v,p){return v.add(V(p))}n.j=function(v){if(k(this)||k(v))return w;if(x(this))return x(v)?V(this).j(V(v)):V(V(this).j(v));if(x(v))return V(this.j(V(v)));if(0>this.l(P)&&0>v.l(P))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,m=[],y=0;y<2*p;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,Dt=v.i(E)>>>16,Pe=v.i(E)&65535;m[2*y+2*E]+=g*Pe,W(m,2*y+2*E),m[2*y+2*E+1]+=I*Pe,W(m,2*y+2*E+1),m[2*y+2*E+1]+=g*Dt,W(m,2*y+2*E+1),m[2*y+2*E+2]+=I*Dt,W(m,2*y+2*E+2)}for(y=0;y<p;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=p;y<2*p;y++)m[y]=0;return new u(m,0)};function W(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function G(v,p){this.g=v,this.h=p}function $(v,p){if(k(p))throw Error("division by zero");if(k(v))return new G(w,w);if(x(v))return p=$(V(v),p),new G(V(p.g),V(p.h));if(x(p))return p=$(v,V(p)),new G(V(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var m=R,y=p;0>=y.l(v);)m=Et(m),y=Et(y);var E=J(m,1),I=J(y,1);for(y=J(y,2),m=J(m,2);!k(y);){var g=I.add(y);0>=g.l(v)&&(E=E.add(m),I=g),y=J(y,1),m=J(m,1)}return p=H(v,E.j(p)),new G(E,p)}for(E=w;0<=v.l(p);){for(m=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(m),g=I.j(p);x(g)||0<g.l(v);)m-=y,I=f(m),g=I.j(p);k(I)&&(I=R),E=E.add(I),v=H(v,g)}return new G(E,v)}n.A=function(v){return $(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)&v.i(y);return new u(m,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)|v.i(y);return new u(m,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)^v.i(y);return new u(m,this.h^v.h)};function Et(v){for(var p=v.g.length+1,m=[],y=0;y<p;y++)m[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(m,v.h)}function J(v,p){var m=p>>5;p%=32;for(var y=v.g.length-m,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+m)>>>p|v.i(I+m+1)<<32-p:v.i(I+m);return new u(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Oo=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Zt=u}).apply(typeof ki<"u"?ki:typeof self<"u"?self:typeof window<"u"?window:{});var bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xo,Mo,Ge,Lo,On,jr,Fo,Uo,Bo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof bn=="object"&&bn];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var l=0;l<s.length-1;l++){var T=s[l];if(!(T in c))break t;c=c[T]}s=s[s.length-1],l=c[s],a=a(l),a!=l&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,l=!1,T={next:function(){if(!l&&c<s.length){var A=c++;return{value:a(A,s[A]),done:!1}}return l=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,c){return s.call.apply(s.bind,arguments)}function w(s,a,c){if(!s)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,l),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function R(s,a,c){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,R.apply(null,arguments)}function P(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var l=c.slice();return l.push.apply(l,arguments),s.apply(this,l)}}function k(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(l,T,A){for(var S=Array(arguments.length-2),K=2;K<arguments.length;K++)S[K-2]=arguments[K];return a.prototype[T].apply(l,S)}}function x(s){const a=s.length;if(0<a){const c=Array(a);for(let l=0;l<a;l++)c[l]=s[l];return c}return[]}function V(s,a){for(let c=1;c<arguments.length;c++){const l=arguments[c];if(d(l)){const T=s.length||0,A=l.length||0;s.length=T+A;for(let S=0;S<A;S++)s[T+S]=l[S]}else s.push(l)}}class H{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function W(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function $(s){return $[" "](s),s}$[" "]=function(){};var Et=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function J(s,a,c){for(const l in s)a.call(c,s[l],l,s)}function v(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function p(s){const a={};for(const c in s)a[c]=s[c];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,l;for(let T=1;T<arguments.length;T++){l=arguments[T];for(c in l)s[c]=l[c];for(let A=0;A<m.length;A++)c=m[A],Object.prototype.hasOwnProperty.call(l,c)&&(s[c]=l[c])}}function E(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function I(s){h.setTimeout(()=>{throw s},0)}function g(){var s=ar;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Dt{constructor(){this.h=this.g=null}add(a,c){const l=Pe.get();l.set(a,c),this.h?this.h.next=l:this.g=l,this.h=l}}var Pe=new H(()=>new Ga,s=>s.reset());class Ga{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,be=!1,ar=new Dt,Rs=()=>{const s=h.Promise.resolve(void 0);Se=()=>{s.then(Ka)}};var Ka=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){I(c)}var a=Pe;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}be=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ut(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var Qa=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};h.addEventListener("test",c,a),h.removeEventListener("test",c,a)}catch{}return s}();function Ve(s,a){if(ut.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,l=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Et){t:{try{$(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Wa[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ve.aa.h.call(this)}}k(Ve,ut);var Wa={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),Xa=0;function Ya(s,a,c,l,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!l,this.ha=T,this.key=++Xa,this.da=this.fa=!1}function dn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function fn(s){this.src=s,this.g={},this.h=0}fn.prototype.add=function(s,a,c,l,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var S=cr(s,a,l,T);return-1<S?(a=s[S],c||(a.fa=!1)):(a=new Ya(a,this.src,A,!!l,T),a.fa=c,s.push(a)),a};function ur(s,a){var c=a.type;if(c in s.g){var l=s.g[c],T=Array.prototype.indexOf.call(l,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(l,T,1),A&&(dn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function cr(s,a,c,l){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==a&&A.capture==!!c&&A.ha==l)return T}return-1}var hr="closure_lm_"+(1e6*Math.random()|0),lr={};function Cs(s,a,c,l,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Cs(s,a[A],c,l,T);return null}return c=bs(c),s&&s[ln]?s.K(a,c,f(l)?!!l.capture:!!l,T):Ja(s,a,c,!1,l,T)}function Ja(s,a,c,l,T,A){if(!a)throw Error("Invalid event type");var S=f(T)?!!T.capture:!!T,K=fr(s);if(K||(s[hr]=K=new fn(s)),c=K.add(a,c,l,S,A),c.proxy)return c;if(l=Za(),c.proxy=l,l.src=s,l.listener=c,s.addEventListener)Qa||(T=S),T===void 0&&(T=!1),s.addEventListener(a.toString(),l,T);else if(s.attachEvent)s.attachEvent(Ss(a.toString()),l);else if(s.addListener&&s.removeListener)s.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Za(){function s(c){return a.call(s.src,s.listener,c)}const a=tu;return s}function Ps(s,a,c,l,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)Ps(s,a[A],c,l,T);else l=f(l)?!!l.capture:!!l,c=bs(c),s&&s[ln]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],c=cr(A,c,l,T),-1<c&&(dn(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=fr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=cr(a,c,l,T)),(c=-1<s?a[s]:null)&&dr(c))}function dr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[ln])ur(a.i,s);else{var c=s.type,l=s.proxy;a.removeEventListener?a.removeEventListener(c,l,s.capture):a.detachEvent?a.detachEvent(Ss(c),l):a.addListener&&a.removeListener&&a.removeListener(l),(c=fr(a))?(ur(c,s),c.h==0&&(c.src=null,a[hr]=null)):dn(s)}}}function Ss(s){return s in lr?lr[s]:lr[s]="on"+s}function tu(s,a){if(s.da)s=!0;else{a=new Ve(a,this);var c=s.listener,l=s.ha||s.src;s.fa&&dr(s),s=c.call(l,a)}return s}function fr(s){return s=s[hr],s instanceof fn?s:null}var pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function bs(s){return typeof s=="function"?s:(s[pr]||(s[pr]=function(a){return s.handleEvent(a)}),s[pr])}function ct(){xt.call(this),this.i=new fn(this),this.M=this,this.F=null}k(ct,xt),ct.prototype[ln]=!0,ct.prototype.removeEventListener=function(s,a,c,l){Ps(this,s,a,c,l)};function mt(s,a){var c,l=s.F;if(l)for(c=[];l;l=l.F)c.push(l);if(s=s.M,l=a.type||a,typeof a=="string")a=new ut(a,s);else if(a instanceof ut)a.target=a.target||s;else{var T=a;a=new ut(l,s),y(a,T)}if(T=!0,c)for(var A=c.length-1;0<=A;A--){var S=a.g=c[A];T=pn(S,l,!0,a)&&T}if(S=a.g=s,T=pn(S,l,!0,a)&&T,T=pn(S,l,!1,a)&&T,c)for(A=0;A<c.length;A++)S=a.g=c[A],T=pn(S,l,!1,a)&&T}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],l=0;l<c.length;l++)dn(c[l]);delete s.g[a],s.h--}}this.F=null},ct.prototype.K=function(s,a,c,l){return this.i.add(String(s),a,!1,c,l)},ct.prototype.L=function(s,a,c,l){return this.i.add(String(s),a,!0,c,l)};function pn(s,a,c,l){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var S=a[A];if(S&&!S.da&&S.capture==c){var K=S.listener,it=S.ha||S.src;S.fa&&ur(s.i,S),T=K.call(it,l)!==!1&&T}}return T&&!l.defaultPrevented}function Vs(s,a,c){if(typeof s=="function")c&&(s=R(s,c));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(s,a||0)}function Ds(s){s.g=Vs(()=>{s.g=null,s.i&&(s.i=!1,Ds(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class eu extends xt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ds(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(s){xt.call(this),this.h=s,this.g={}}k(De,xt);var ks=[];function Ns(s){J(s.g,function(a,c){this.g.hasOwnProperty(c)&&dr(a)},s),s.g={}}De.prototype.N=function(){De.aa.N.call(this),Ns(this)},De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gr=h.JSON.stringify,nu=h.JSON.parse,ru=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function mr(){}mr.prototype.h=null;function Os(s){return s.h||(s.h=s.i())}function xs(){}var ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _r(){ut.call(this,"d")}k(_r,ut);function yr(){ut.call(this,"c")}k(yr,ut);var Gt={},Ms=null;function gn(){return Ms=Ms||new ct}Gt.La="serverreachability";function Ls(s){ut.call(this,Gt.La,s)}k(Ls,ut);function Ne(s){const a=gn();mt(a,new Ls(a))}Gt.STAT_EVENT="statevent";function Fs(s,a){ut.call(this,Gt.STAT_EVENT,s),this.stat=a}k(Fs,ut);function _t(s){const a=gn();mt(a,new Fs(a,s))}Gt.Ma="timingevent";function Us(s,a){ut.call(this,Gt.Ma,s),this.size=a}k(Us,ut);function Oe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},a)}function xe(){this.g=!0}xe.prototype.xa=function(){this.g=!1};function su(s,a,c,l,T,A){s.info(function(){if(s.g)if(A)for(var S="",K=A.split("&"),it=0;it<K.length;it++){var j=K[it].split("=");if(1<j.length){var ht=j[0];j=j[1];var lt=ht.split("_");S=2<=lt.length&&lt[1]=="type"?S+(ht+"="+j+"&"):S+(ht+"=redacted&")}}else S=null;else S=A;return"XMLHTTP REQ ("+l+") [attempt "+T+"]: "+a+`
`+c+`
`+S})}function iu(s,a,c,l,T,A,S){s.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+T+"]: "+a+`
`+c+`
`+A+" "+S})}function ae(s,a,c,l){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+au(s,c)+(l?" "+l:"")})}function ou(s,a){s.info(function(){return"TIMEOUT: "+a})}xe.prototype.info=function(){};function au(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var l=c[s];if(!(2>l.length)){var T=l[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var S=1;S<T.length;S++)T[S]=""}}}}return gr(c)}catch{return a}}var mn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Er;function _n(){}k(_n,mr),_n.prototype.g=function(){return new XMLHttpRequest},_n.prototype.i=function(){return{}},Er=new _n;function Mt(s,a,c,l){this.j=s,this.i=a,this.l=c,this.R=l||1,this.U=new De(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qs}function qs(){this.i=null,this.g="",this.h=!1}var js={},vr={};function Tr(s,a,c){s.L=1,s.v=Tn(kt(a)),s.m=c,s.P=!0,$s(s,null)}function $s(s,a){s.F=Date.now(),yn(s),s.A=kt(s.v);var c=s.A,l=s.R;Array.isArray(l)||(l=[String(l)]),ri(c.i,"t",l),s.C=0,c=s.j.J,s.h=new qs,s.g=Ti(s.j,c?a:null,!s.m),0<s.O&&(s.M=new eu(R(s.Y,s,s.g),s.O)),a=s.U,c=s.g,l=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(ks[0]=T.toString()),T=ks);for(var A=0;A<T.length;A++){var S=Cs(c,T[A],l||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Ne(),su(s.i,s.u,s.A,s.l,s.R,s.m)}Mt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Nt(s)==3?a.j():this.Y(s)},Mt.prototype.Y=function(s){try{if(s==this.g)t:{const lt=Nt(this.g);var a=this.g.Ba();const he=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||hi(this.g)))){this.J||lt!=4||a==7||(a==8||0>=he?Ne(3):Ne(2)),Ir(this);var c=this.g.Z();this.X=c;e:if(zs(this)){var l=hi(this.g);s="";var T=l.length,A=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),Me(this);var S="";break e}this.h.i=new h.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(l[a],{stream:!(A&&a==T-1)});l.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=c==200,iu(this.i,this.u,this.A,this.l,this.R,lt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var K,it=this.g;if((K=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(K)){var j=K;break e}}j=null}if(c=j)ae(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ar(this,c);else{this.o=!1,this.s=3,_t(12),Kt(this),Me(this);break t}}if(this.P){c=!0;let It;for(;!this.J&&this.C<S.length;)if(It=uu(this,S),It==vr){lt==4&&(this.s=4,_t(14),c=!1),ae(this.i,this.l,null,"[Incomplete Response]");break}else if(It==js){this.s=4,_t(15),ae(this.i,this.l,S,"[Invalid Chunk]"),c=!1;break}else ae(this.i,this.l,It,null),Ar(this,It);if(zs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||S.length!=0||this.h.h||(this.s=1,_t(16),c=!1),this.o=this.o&&c,!c)ae(this.i,this.l,S,"[Invalid Chunked Response]"),Kt(this),Me(this);else if(0<S.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),br(ht),ht.M=!0,_t(11))}}else ae(this.i,this.l,S,null),Ar(this,S);lt==4&&Kt(this),this.o&&!this.J&&(lt==4?_i(this.j,this):(this.o=!1,yn(this)))}else Ru(this.g),c==400&&0<S.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Kt(this),Me(this)}}}catch{}finally{}};function zs(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function uu(s,a){var c=s.C,l=a.indexOf(`
`,c);return l==-1?vr:(c=Number(a.substring(c,l)),isNaN(c)?js:(l+=1,l+c>a.length?vr:(a=a.slice(l,l+c),s.C=l+c,a)))}Mt.prototype.cancel=function(){this.J=!0,Kt(this)};function yn(s){s.S=Date.now()+s.I,Hs(s,s.I)}function Hs(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Oe(R(s.ba,s),a)}function Ir(s){s.B&&(h.clearTimeout(s.B),s.B=null)}Mt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(ou(this.i,this.A),this.L!=2&&(Ne(),_t(17)),Kt(this),this.s=2,Me(this)):Hs(this,this.S-s)};function Me(s){s.j.G==0||s.J||_i(s.j,s)}function Kt(s){Ir(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ns(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Ar(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||wr(c.h,s))){if(!s.K&&wr(c.h,s)&&c.G==3){try{var l=c.Da.g.parse(a)}catch{l=null}if(Array.isArray(l)&&l.length==3){var T=l;if(T[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Cn(c),wn(c);else break t;Sr(c),_t(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=Oe(R(c.Za,c),6e3));if(1>=Qs(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Wt(c,11)}else if((s.K||c.g==s)&&Cn(c),!W(a))for(T=c.Da.g.parse(a),a=0;a<T.length;a++){let j=T[a];if(c.T=j[0],j=j[1],c.G==2)if(j[0]=="c"){c.K=j[1],c.ia=j[2];const ht=j[3];ht!=null&&(c.la=ht,c.j.info("VER="+c.la));const lt=j[4];lt!=null&&(c.Aa=lt,c.j.info("SVER="+c.Aa));const he=j[5];he!=null&&typeof he=="number"&&0<he&&(l=1.5*he,c.L=l,c.j.info("backChannelRequestTimeoutMs_="+l)),l=c;const It=s.g;if(It){const Sn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sn){var A=l.h;A.g||Sn.indexOf("spdy")==-1&&Sn.indexOf("quic")==-1&&Sn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Rr(A,A.h),A.h=null))}if(l.D){const Vr=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Vr&&(l.ya=Vr,Q(l.I,l.D,Vr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),l=c;var S=s;if(l.qa=vi(l,l.J?l.ia:null,l.W),S.K){Ws(l.h,S);var K=S,it=l.L;it&&(K.I=it),K.B&&(Ir(K),yn(K)),l.g=S}else gi(l);0<c.i.length&&Rn(c)}else j[0]!="stop"&&j[0]!="close"||Wt(c,7);else c.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Wt(c,7):Pr(c):j[0]!="noop"&&c.l&&c.l.ta(j),c.v=0)}}Ne(4)}catch{}}var cu=class{constructor(s,a){this.g=s,this.map=a}};function Gs(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ks(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Qs(s){return s.h?1:s.g?s.g.size:0}function wr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Rr(s,a){s.g?s.g.add(a):s.h=a}function Ws(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Gs.prototype.cancel=function(){if(this.i=Xs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Xs(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return x(s.i)}function hu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],c=s.length,l=0;l<c;l++)a.push(s[l]);return a}a=[],c=0;for(l in s)a[c++]=s[l];return a}function lu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const l in s)a[c++]=l;return a}}}function Ys(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=lu(s),l=hu(s),T=l.length,A=0;A<T;A++)a.call(void 0,l[A],c&&c[A],s)}var Js=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function du(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var l=s[c].indexOf("="),T=null;if(0<=l){var A=s[c].substring(0,l);T=s[c].substring(l+1)}else A=s[c];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Qt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Qt){this.h=s.h,En(this,s.j),this.o=s.o,this.g=s.g,vn(this,s.s),this.l=s.l;var a=s.i,c=new Ue;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),Zs(this,c),this.m=s.m}else s&&(a=String(s).match(Js))?(this.h=!1,En(this,a[1]||"",!0),this.o=Le(a[2]||""),this.g=Le(a[3]||"",!0),vn(this,a[4]),this.l=Le(a[5]||"",!0),Zs(this,a[6]||"",!0),this.m=Le(a[7]||"")):(this.h=!1,this.i=new Ue(null,this.h))}Qt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Fe(a,ti,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Fe(a,ti,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Fe(c,c.charAt(0)=="/"?gu:pu,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Fe(c,_u)),s.join("")};function kt(s){return new Qt(s)}function En(s,a,c){s.j=c?Le(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function vn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Zs(s,a,c){a instanceof Ue?(s.i=a,yu(s.i,s.h)):(c||(a=Fe(a,mu)),s.i=new Ue(a,s.h))}function Q(s,a,c){s.i.set(a,c)}function Tn(s){return Q(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Le(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Fe(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,fu),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function fu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ti=/[#\/\?@]/g,pu=/[#\?:]/g,gu=/[#\?]/g,mu=/[#\?@]/g,_u=/#/g;function Ue(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Lt(s){s.g||(s.g=new Map,s.h=0,s.i&&du(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Ue.prototype,n.add=function(s,a){Lt(this),this.i=null,s=ue(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function ei(s,a){Lt(s),a=ue(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function ni(s,a){return Lt(s),a=ue(s,a),s.g.has(a)}n.forEach=function(s,a){Lt(this),this.g.forEach(function(c,l){c.forEach(function(T){s.call(a,T,l,this)},this)},this)},n.na=function(){Lt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let l=0;l<a.length;l++){const T=s[l];for(let A=0;A<T.length;A++)c.push(a[l])}return c},n.V=function(s){Lt(this);let a=[];if(typeof s=="string")ni(this,s)&&(a=a.concat(this.g.get(ue(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},n.set=function(s,a){return Lt(this),this.i=null,s=ue(this,s),ni(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function ri(s,a,c){ei(s,a),0<c.length&&(s.i=null,s.g.set(ue(s,a),x(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var l=a[c];const A=encodeURIComponent(String(l)),S=this.V(l);for(l=0;l<S.length;l++){var T=A;S[l]!==""&&(T+="="+encodeURIComponent(String(S[l]))),s.push(T)}}return this.i=s.join("&")};function ue(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function yu(s,a){a&&!s.j&&(Lt(s),s.i=null,s.g.forEach(function(c,l){var T=l.toLowerCase();l!=T&&(ei(this,l),ri(this,T,c))},s)),s.j=a}function Eu(s,a){const c=new xe;if(h.Image){const l=new Image;l.onload=P(Ft,c,"TestLoadImage: loaded",!0,a,l),l.onerror=P(Ft,c,"TestLoadImage: error",!1,a,l),l.onabort=P(Ft,c,"TestLoadImage: abort",!1,a,l),l.ontimeout=P(Ft,c,"TestLoadImage: timeout",!1,a,l),h.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=s}else a(!1)}function vu(s,a){const c=new xe,l=new AbortController,T=setTimeout(()=>{l.abort(),Ft(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:l.signal}).then(A=>{clearTimeout(T),A.ok?Ft(c,"TestPingServer: ok",!0,a):Ft(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ft(c,"TestPingServer: error",!1,a)})}function Ft(s,a,c,l,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),l(c)}catch{}}function Tu(){this.g=new ru}function Iu(s,a,c){const l=c||"";try{Ys(s,function(T,A){let S=T;f(T)&&(S=gr(T)),a.push(l+A+"="+encodeURIComponent(S))})}catch(T){throw a.push(l+"type="+encodeURIComponent("_badmap")),T}}function Be(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Be,mr),Be.prototype.g=function(){return new In(this.l,this.j)},Be.prototype.i=function(s){return function(){return s}}({});function In(s,a){ct.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(In,ct),n=In.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,je(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qe(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;si(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function si(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?qe(this):je(this),this.readyState==3&&si(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,qe(this))},n.Qa=function(s){this.g&&(this.response=s,qe(this))},n.ga=function(){this.g&&qe(this)};function qe(s){s.readyState=4,s.l=null,s.j=null,s.v=null,je(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function je(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(In.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ii(s){let a="";return J(s,function(c,l){a+=l,a+=":",a+=c,a+=`\r
`}),a}function Cr(s,a,c){t:{for(l in c){var l=!1;break t}l=!0}l||(c=ii(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):Q(s,a,c))}function Y(s){ct.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Y,ct);var Au=/^https?$/i,wu=["POST","PUT"];n=Y.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,c,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Er.g(),this.v=this.o?Os(this.o):Os(Er),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){oi(this,A);return}if(s=c||"",c=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var T in l)c.set(T,l[T]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const A of l.keys())c.set(A,l.get(A));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),T=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(wu,a,void 0))||l||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,S]of c)this.g.setRequestHeader(A,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ci(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){oi(this,A)}};function oi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,ai(s),An(s)}function ai(s){s.A||(s.A=!0,mt(s,"complete"),mt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,mt(this,"complete"),mt(this,"abort"),An(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),An(this,!0)),Y.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ui(this):this.bb())},n.bb=function(){ui(this)};function ui(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Nt(s)!=4||s.Z()!=2)){if(s.u&&Nt(s)==4)Vs(s.Ea,0,s);else if(mt(s,"readystatechange"),Nt(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var l;if(l=S===0){var T=String(s.D).match(Js)[1]||null;!T&&h.self&&h.self.location&&(T=h.self.location.protocol.slice(0,-1)),l=!Au.test(T?T.toLowerCase():"")}c=l}if(c)mt(s,"complete"),mt(s,"success");else{s.m=6;try{var A=2<Nt(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",ai(s)}}finally{An(s)}}}}function An(s,a){if(s.g){ci(s);const c=s.g,l=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||mt(s,"ready");try{c.onreadystatechange=l}catch{}}}function ci(s){s.I&&(h.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Nt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),nu(a)}};function hi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ru(s){const a={};s=(s.g&&2<=Nt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<s.length;l++){if(W(s[l]))continue;var c=E(s[l]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=a[T]||[];a[T]=A,A.push(c)}v(a,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $e(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function li(s){this.Aa=0,this.i=[],this.j=new xe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$e("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$e("baseRetryDelayMs",5e3,s),this.cb=$e("retryDelaySeedMs",1e4,s),this.Wa=$e("forwardChannelMaxRetries",2,s),this.wa=$e("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Gs(s&&s.concurrentRequestLimit),this.Da=new Tu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=li.prototype,n.la=8,n.G=1,n.connect=function(s,a,c,l){_t(0),this.W=s,this.H=a||{},c&&l!==void 0&&(this.H.OSID=c,this.H.OAID=l),this.F=this.X,this.I=vi(this,null,this.W),Rn(this)};function Pr(s){if(di(s),s.G==3){var a=s.U++,c=kt(s.I);if(Q(c,"SID",s.K),Q(c,"RID",a),Q(c,"TYPE","terminate"),ze(s,c),a=new Mt(s,s.j,a),a.L=2,a.v=Tn(kt(c)),c=!1,h.navigator&&h.navigator.sendBeacon)try{c=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&h.Image&&(new Image().src=a.v,c=!0),c||(a.g=Ti(a.j,null),a.g.ea(a.v)),a.F=Date.now(),yn(a)}Ei(s)}function wn(s){s.g&&(br(s),s.g.cancel(),s.g=null)}function di(s){wn(s),s.u&&(h.clearTimeout(s.u),s.u=null),Cn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function Rn(s){if(!Ks(s.h)&&!s.s){s.s=!0;var a=s.Ga;Se||Rs(),be||(Se(),be=!0),ar.add(a,s),s.B=0}}function Cu(s,a){return Qs(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Oe(R(s.Ga,s,a),yi(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Mt(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var l=this.i[c];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break e}l=void 0}if(l===void 0)break;if(a+=l,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=pi(this,T,a),c=kt(this.I),Q(c,"RID",s),Q(c,"CVER",22),this.D&&Q(c,"X-HTTP-Session-Id",this.D),ze(this,c),A&&(this.O?a="headers="+encodeURIComponent(String(ii(A)))+"&"+a:this.m&&Cr(c,this.m,A)),Rr(this.h,T),this.Ua&&Q(c,"TYPE","init"),this.P?(Q(c,"$req",a),Q(c,"SID","null"),T.T=!0,Tr(T,c,null)):Tr(T,c,a),this.G=2}}else this.G==3&&(s?fi(this,s):this.i.length==0||Ks(this.h)||fi(this))};function fi(s,a){var c;a?c=a.l:c=s.U++;const l=kt(s.I);Q(l,"SID",s.K),Q(l,"RID",c),Q(l,"AID",s.T),ze(s,l),s.m&&s.o&&Cr(l,s.m,s.o),c=new Mt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=pi(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Rr(s.h,c),Tr(c,l,a)}function ze(s,a){s.H&&J(s.H,function(c,l){Q(a,l,c)}),s.l&&Ys({},function(c,l){Q(a,l,c)})}function pi(s,a,c){c=Math.min(s.i.length,c);var l=s.l?R(s.l.Na,s.l,s):null;t:{var T=s.i;let A=-1;for(;;){const S=["count="+c];A==-1?0<c?(A=T[0].g,S.push("ofs="+A)):A=0:S.push("ofs="+A);let K=!0;for(let it=0;it<c;it++){let j=T[it].g;const ht=T[it].map;if(j-=A,0>j)A=Math.max(0,T[it].g-100),K=!1;else try{Iu(ht,S,"req"+j+"_")}catch{l&&l(ht)}}if(K){l=S.join("&");break t}}}return s=s.i.splice(0,c),a.D=s,l}function gi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Se||Rs(),be||(Se(),be=!0),ar.add(a,s),s.v=0}}function Sr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Oe(R(s.Fa,s),yi(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,mi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Oe(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),wn(this),mi(this))};function br(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function mi(s){s.g=new Mt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=kt(s.qa);Q(a,"RID","rpc"),Q(a,"SID",s.K),Q(a,"AID",s.T),Q(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Q(a,"TO",s.ja),Q(a,"TYPE","xmlhttp"),ze(s,a),s.m&&s.o&&Cr(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Tn(kt(a)),c.m=null,c.P=!0,$s(c,s)}n.Za=function(){this.C!=null&&(this.C=null,wn(this),Sr(this),_t(19))};function Cn(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function _i(s,a){var c=null;if(s.g==a){Cn(s),br(s),s.g=null;var l=2}else if(wr(s.h,a))c=a.D,Ws(s.h,a),l=1;else return;if(s.G!=0){if(a.o)if(l==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;l=gn(),mt(l,new Us(l,c)),Rn(s)}else gi(s);else if(T=a.s,T==3||T==0&&0<a.X||!(l==1&&Cu(s,a)||l==2&&Sr(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),T){case 1:Wt(s,5);break;case 4:Wt(s,10);break;case 3:Wt(s,6);break;default:Wt(s,2)}}}function yi(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function Wt(s,a){if(s.j.info("Error code "+a),a==2){var c=R(s.fb,s),l=s.Xa;const T=!l;l=new Qt(l||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||En(l,"https"),Tn(l),T?Eu(l.toString(),c):vu(l.toString(),c)}else _t(2);s.G=0,s.l&&s.l.sa(a),Ei(s),di(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Ei(s){if(s.G=0,s.ka=[],s.l){const a=Xs(s.h);(a.length!=0||s.i.length!=0)&&(V(s.ka,a),V(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function vi(s,a,c){var l=c instanceof Qt?kt(c):new Qt(c);if(l.g!="")a&&(l.g=a+"."+l.g),vn(l,l.s);else{var T=h.location;l=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new Qt(null);l&&En(A,l),a&&(A.g=a),T&&vn(A,T),c&&(A.l=c),l=A}return c=s.D,a=s.ya,c&&a&&Q(l,c,a),Q(l,"VER",s.la),ze(s,l),l}function Ti(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Y(new Be({eb:c})):new Y(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ii(){}n=Ii.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Pn(){}Pn.prototype.g=function(s,a){return new Tt(s,a)};function Tt(s,a){ct.call(this),this.g=new li(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!W(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!W(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ce(this)}k(Tt,ct),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Pr(this.g)},Tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=gr(s),s=c);a.i.push(new cu(a.Ya++,s)),a.G==3&&Rn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Pr(this.g),delete this.g,Tt.aa.N.call(this)};function Ai(s){_r.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(Ai,_r);function wi(){yr.call(this),this.status=1}k(wi,yr);function ce(s){this.g=s}k(ce,Ii),ce.prototype.ua=function(){mt(this.g,"a")},ce.prototype.ta=function(s){mt(this.g,new Ai(s))},ce.prototype.sa=function(s){mt(this.g,new wi)},ce.prototype.ra=function(){mt(this.g,"b")},Pn.prototype.createWebChannel=Pn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Bo=function(){return new Pn},Uo=function(){return gn()},Fo=Gt,jr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mn.NO_ERROR=0,mn.TIMEOUT=8,mn.HTTP_ERROR=6,On=mn,Bs.COMPLETE="complete",Lo=Bs,xs.EventType=ke,ke.OPEN="a",ke.CLOSE="b",ke.ERROR="c",ke.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ge=xs,Mo=Be,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,xo=Y}).apply(typeof bn<"u"?bn:typeof self<"u"?self:typeof window<"u"?window:{});const Ni="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let we="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new So("@firebase/firestore");function He(){return re.logLevel}function D(n,...t){if(re.logLevel<=U.DEBUG){const e=t.map(ss);re.debug(`Firestore (${we}): ${n}`,...e)}}function Ot(n,...t){if(re.logLevel<=U.ERROR){const e=t.map(ss);re.error(`Firestore (${we}): ${n}`,...e)}}function ye(n,...t){if(re.logLevel<=U.WARN){const e=t.map(ss);re.warn(`Firestore (${we}): ${n}`,...e)}}function ss(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n="Unexpected state"){const t=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: `+n;throw Ot(t),new Error(t)}function nt(n,t){n||L()}function q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends oe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class jc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ft.UNAUTHENTICATED))}shutdown(){}}class $c{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class zc{constructor(t){this.t=t,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new te;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new te,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},h=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(d=>h(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?h(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new te)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string"),new qo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string"),new ft(t)}}class Hc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Hc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(nt(typeof e.token=="string"),this.R=e.token,new Kc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Wc(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function z(n,t){return n<t?-1:n>t?1:0}function Ee(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new vt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new vt(0,0))}static max(){return new M(new vt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(),r===void 0?r=t.length-e:r>t.length-e&&L(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return nn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof nn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends nn{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Xc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends nn{construct(t,e,r){return new yt(t,e,r)}static isValidIdentifier(t){return Xc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else h==="`"?(u=!u,i++):h!=="."||u?(r+=h,i++):(o(),i++)}if(o(),u)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(X.fromString(t))}static fromName(t){return new O(X.fromString(t).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new X(t.slice()))}}function Yc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=M.fromTimestamp(r===1e9?new vt(e+1,0):new vt(e,r));return new $t(i,O.empty(),t)}function Jc(n){return new $t(n.readTime,n.key,-1)}class $t{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new $t(M.min(),O.empty(),-1)}static max(){return new $t(M.max(),O.empty(),-1)}}function Zc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:z(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==th)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let i=0,o=0,u=!1;t.forEach(h=>{++i,h.next(()=>{++o,u&&o===i&&e()},d=>r(d))}),u=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(i=>i?C.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,i)=>{const o=t.length,u=new Array(o);let h=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{u[f]=_,++h,h===o&&r(u)},_=>i(_))}})}static doWhile(t,e){return new C((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function nh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function an(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}os.oe=-1;function Wn(n){return n==null}function $r(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Xn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function rh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.comparator=t,this.root=e||ot.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Vn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Vn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Vn(this.root,t,this.comparator,!0)}}class Vn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ot(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,r,i,o){return this}insert(t,e,r){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xi(this.data.getIterator())}getIteratorFrom(t){return new xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Ut([])}unionWith(t){let e=new at(yt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ee(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new $o("Invalid base64 string: "+o):o}}(t);return new gt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const sh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(n){if(nt(!!n),typeof n=="string"){let t=0;const e=sh.exec(n);if(nt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function se(n){return typeof n=="string"?gt.fromBase64String(n):gt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function us(n){const t=n.mapValue.fields.__previous_value__;return as(t)?us(t):t}function rn(n){const t=zt(n.mapValue.fields.__local_write_time__.timestampValue);return new vt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,e,r,i,o,u,h,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f}}class sn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof sn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ie(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?as(n)?4:oh(n)?9007199254740991:10:L()}function Pt(n,t){if(n===t)return!0;const e=ie(n);if(e!==ie(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return rn(n).isEqual(rn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=zt(i.timestampValue),h=zt(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return se(i.bytesValue).isEqual(se(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return et(i.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return et(i.integerValue)===et(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=et(i.doubleValue),h=et(o.doubleValue);return u===h?$r(u)===$r(h):isNaN(u)&&isNaN(h)}return!1}(n,t);case 9:return Ee(n.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:return function(i,o){const u=i.mapValue.fields||{},h=o.mapValue.fields||{};if(Oi(u)!==Oi(h))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(h[d]===void 0||!Pt(u[d],h[d])))return!1;return!0}(n,t);default:return L()}}function on(n,t){return(n.values||[]).find(e=>Pt(e,t))!==void 0}function ve(n,t){if(n===t)return 0;const e=ie(n),r=ie(t);if(e!==r)return z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,t.booleanValue);case 2:return function(o,u){const h=et(o.integerValue||o.doubleValue),d=et(u.integerValue||u.doubleValue);return h<d?-1:h>d?1:h===d?0:isNaN(h)?isNaN(d)?0:-1:1}(n,t);case 3:return Mi(n.timestampValue,t.timestampValue);case 4:return Mi(rn(n),rn(t));case 5:return z(n.stringValue,t.stringValue);case 6:return function(o,u){const h=se(o),d=se(u);return h.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const h=o.split("/"),d=u.split("/");for(let f=0;f<h.length&&f<d.length;f++){const _=z(h[f],d[f]);if(_!==0)return _}return z(h.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const h=z(et(o.latitude),et(u.latitude));return h!==0?h:z(et(o.longitude),et(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,u){const h=o.values||[],d=u.values||[];for(let f=0;f<h.length&&f<d.length;++f){const _=ve(h[f],d[f]);if(_)return _}return z(h.length,d.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,u){if(o===Dn.mapValue&&u===Dn.mapValue)return 0;if(o===Dn.mapValue)return 1;if(u===Dn.mapValue)return-1;const h=o.fields||{},d=Object.keys(h),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let w=0;w<d.length&&w<_.length;++w){const R=z(d[w],_[w]);if(R!==0)return R;const P=ve(h[d[w]],f[_[w]]);if(P!==0)return P}return z(d.length,_.length)}(n.mapValue,t.mapValue);default:throw L()}}function Mi(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return z(n,t);const e=zt(n),r=zt(t),i=z(e.seconds,r.seconds);return i!==0?i:z(e.nanos,r.nanos)}function Te(n){return zr(n)}function zr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=zt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return se(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=zr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${zr(e.fields[u])}`;return i+"}"}(n.mapValue):L()}function Hr(n){return!!n&&"integerValue"in n}function cs(n){return!!n&&"arrayValue"in n}function Li(n){return!!n&&"nullValue"in n}function Fi(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function kr(n){return!!n&&"mapValue"in n}function Xe(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Xn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Xe(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Xe(n.arrayValue.values[e]);return t}return Object.assign({},n)}function oh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!kr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xe(e)}setAll(t){let e=yt.emptyPath(),r={},i=[];t.forEach((u,h)=>{if(!e.isImmediateParentOf(h)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=h.popLast()}u?r[h.lastSegment()]=Xe(u):i.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());kr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];kr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Xn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Rt(Xe(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e,r,i,o,u,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new pt(t,0,M.min(),M.min(),M.min(),Rt.empty(),0)}static newFoundDocument(t,e,r,i){return new pt(t,1,e,M.min(),r,i,0)}static newNoDocument(t,e){return new pt(t,2,e,M.min(),M.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new pt(t,3,e,M.min(),M.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,e){this.position=t,this.inclusive=e}}function Ui(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(u.referenceValue),e.key):r=ve(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bi(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e="asc"){this.field=t,this.dir=e}}function ah(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{}class rt extends zo{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ch(t,e,r):e==="array-contains"?new dh(t,r):e==="in"?new fh(t,r):e==="not-in"?new ph(t,r):e==="array-contains-any"?new gh(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new hh(t,r):new lh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ve(e,this.value)):e!==null&&ie(this.value)===ie(e)&&this.matchesComparison(ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends zo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new St(t,e)}matches(t){return Ho(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ho(n){return n.op==="and"}function Go(n){return uh(n)&&Ho(n)}function uh(n){for(const t of n.filters)if(t instanceof St)return!1;return!0}function Gr(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Te(n.value);if(Go(n))return n.filters.map(t=>Gr(t)).join(",");{const t=n.filters.map(e=>Gr(e)).join(",");return`${n.op}(${t})`}}function Ko(n,t){return n instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&Pt(r.value,i.value)}(n,t):n instanceof St?function(r,i){return i instanceof St&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,u,h)=>o&&Ko(u,i.filters[h]),!0):!1}(n,t):void L()}function Qo(n){return n instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Te(e.value)}`}(n):n instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(Qo).join(" ,")+"}"}(n):"Filter"}class ch extends rt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class hh extends rt{constructor(t,e){super(t,"in",e),this.keys=Wo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class lh extends rt{constructor(t,e){super(t,"not-in",e),this.keys=Wo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Wo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class dh extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return cs(e)&&on(e.arrayValue,this.value)}}class fh extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&on(this.value.arrayValue,e)}}class ph extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(on(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!on(this.value.arrayValue,e)}}class gh extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!cs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>on(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e=null,r=[],i=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=h,this.ue=null}}function qi(n,t=null,e=[],r=[],i=null,o=null,u=null){return new mh(n,t,e,r,i,o,u)}function hs(n){const t=q(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Gr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Wn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Te(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Te(r)).join(",")),t.ue=e}return t.ue}function ls(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ah(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ko(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Bi(n.startAt,t.startAt)&&Bi(n.endAt,t.endAt)}function Kr(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e=null,r=[],i=[],o=null,u="F",h=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _h(n,t,e,r,i,o,u,h){return new Yn(n,t,e,r,i,o,u,h)}function Jn(n){return new Yn(n)}function ji(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yh(n){return n.collectionGroup!==null}function Ye(n){const t=q(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new at(yt.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(h=h.add(f.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new qn(o,r))}),e.has(yt.keyField().canonicalString())||t.ce.push(new qn(yt.keyField(),r))}return t.ce}function Ct(n){const t=q(n);return t.le||(t.le=Eh(t,Ye(n))),t.le}function Eh(n,t){if(n.limitType==="F")return qi(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new qn(i.field,o)});const e=n.endAt?new Bn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Bn(n.startAt.position,n.startAt.inclusive):null;return qi(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Qr(n,t,e){return new Yn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Zn(n,t){return ls(Ct(n),Ct(t))&&n.limitType===t.limitType}function Xo(n){return`${hs(Ct(n))}|lt:${n.limitType}`}function le(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Qo(i)).join(", ")}]`),Wn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Te(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Te(i)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function tr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Ye(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(u,h,d){const f=Ui(u,h,d);return u.inclusive?f<=0:f<0}(r.startAt,Ye(r),i)||r.endAt&&!function(u,h,d){const f=Ui(u,h,d);return u.inclusive?f>=0:f>0}(r.endAt,Ye(r),i))}(n,t)}function vh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yo(n){return(t,e)=>{let r=!1;for(const i of Ye(n)){const o=Th(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Th(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,u,h){const d=u.data.field(o),f=h.data.field(o);return d!==null&&f!==null?ve(d,f):L()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Xn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return rh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=new Z(O.comparator);function Ht(){return Ih}const Jo=new Z(O.comparator);function Ke(...n){let t=Jo;for(const e of n)t=t.insert(e.key,e);return t}function Ah(n){let t=Jo;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Yt(){return Je()}function Zo(){return Je()}function Je(){return new Re(n=>n.toString(),(n,t)=>n.isEqual(t))}const wh=new at(O.comparator);function B(...n){let t=wh;for(const e of n)t=t.add(e);return t}const Rh=new at(z);function Ch(){return Rh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$r(t)?"-0":t}}function Sh(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this._=void 0}}function bh(n,t,e){return n instanceof Wr?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&as(o)&&(o=us(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof jn?ta(n,t):n instanceof $n?ea(n,t):function(i,o){const u=Dh(i,o),h=$i(u)+$i(i.Pe);return Hr(u)&&Hr(i.Pe)?Sh(h):Ph(i.serializer,h)}(n,t)}function Vh(n,t,e){return n instanceof jn?ta(n,t):n instanceof $n?ea(n,t):e}function Dh(n,t){return n instanceof Xr?function(r){return Hr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Wr extends er{}class jn extends er{constructor(t){super(),this.elements=t}}function ta(n,t){const e=na(t);for(const r of n.elements)e.some(i=>Pt(i,r))||e.push(r);return{arrayValue:{values:e}}}class $n extends er{constructor(t){super(),this.elements=t}}function ea(n,t){let e=na(t);for(const r of n.elements)e=e.filter(i=>!Pt(i,r));return{arrayValue:{values:e}}}class Xr extends er{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function $i(n){return et(n.integerValue||n.doubleValue)}function na(n){return cs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function kh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof jn&&i instanceof jn||r instanceof $n&&i instanceof $n?Ee(r.elements,i.elements,Pt):r instanceof Xr&&i instanceof Xr?Pt(r.Pe,i.Pe):r instanceof Wr&&i instanceof Wr}(n.transform,t.transform)}class ee{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ee}static exists(t){return new ee(void 0,t)}static updateTime(t){return new ee(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ds{}function ra(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Oh(n.key,ee.none()):new fs(n.key,n.data,ee.none());{const e=n.data,r=Rt.empty();let i=new at(yt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new nr(n.key,r,new Ut(i.toArray()),ee.none())}}function Nh(n,t,e){n instanceof fs?function(i,o,u){const h=i.value.clone(),d=Hi(i.fieldTransforms,o,u.transformResults);h.setAll(d),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,t,e):n instanceof nr?function(i,o,u){if(!xn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const h=Hi(i.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(sa(i)),d.setAll(h),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Ze(n,t,e,r){return n instanceof fs?function(o,u,h,d){if(!xn(o.precondition,u))return h;const f=o.value.clone(),_=Gi(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof nr?function(o,u,h,d){if(!xn(o.precondition,u))return h;const f=Gi(o.fieldTransforms,d,u),_=u.data;return _.setAll(sa(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,u,h){return xn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(n,t,e)}function zi(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ee(r,i,(o,u)=>kh(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class fs extends ds{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class nr extends ds{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function sa(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Hi(n,t,e){const r=new Map;nt(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,h=t.data.field(o.field);r.set(o.field,Vh(u,h,e[i]))}return r}function Gi(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,bh(o,u,t))}return r}class Oh extends ds{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Nh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ze(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ze(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Zo();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(i.key)?null:h;const d=ra(u,h);d!==null&&r.set(i.key,d),u.isValidDocument()||u.convertToNoDocument(M.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&Ee(this.mutations,t.mutations,(e,r)=>zi(e,r))&&Ee(this.baseMutations,t.baseMutations,(e,r)=>zi(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,F;function ia(n){if(n===void 0)return Ot("GRPC error has no .code"),b.UNKNOWN;switch(n){case tt.OK:return b.OK;case tt.CANCELLED:return b.CANCELLED;case tt.UNKNOWN:return b.UNKNOWN;case tt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case tt.INTERNAL:return b.INTERNAL;case tt.UNAVAILABLE:return b.UNAVAILABLE;case tt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case tt.NOT_FOUND:return b.NOT_FOUND;case tt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case tt.ABORTED:return b.ABORTED;case tt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case tt.DATA_LOSS:return b.DATA_LOSS;default:return L()}}(F=tt||(tt={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=new Zt([4294967295,4294967295],0);function Ki(n){const t=Fh().encode(n),e=new Oo;return e.update(t),new Uint8Array(e.digest())}function Qi(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Zt([e,r],0),new Zt([i,o],0)]}class ps{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Qe(`Invalid padding: ${e}`);if(r<0)throw new Qe(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Qe(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Qe(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Zt.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Zt.fromNumber(r)));return i.compare(Uh)===1&&(i=new Zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ki(t),[r,i]=Qi(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,i,o);if(!this.de(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new ps(o,i,e);return r.forEach(h=>u.insert(h)),u}insert(t){if(this.Ie===0)return;const e=Ki(t),[r,i]=Qi(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Qe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,un.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new rr(M.min(),i,new Z(z),Ht(),B())}}class un{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new un(r,e,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class oa{constructor(t,e){this.targetId=t,this.me=e}}class aa{constructor(t,e,r=gt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Wi{constructor(){this.fe=0,this.ge=Yi(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=B(),e=B(),r=B();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:L()}}),new un(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=Yi()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,nt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Bh{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ht(),this.qe=Xi(),this.Qe=new Z(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Kr(o))if(r===0){const u=new O(o.path);this.Ue(e,u,pt.newNoDocument(u,M.min()))}else nt(r===1);else{const u=this.Ye(e);if(u!==r){const h=this.Ze(t),d=h?this.Xe(h,t,u):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,h;try{u=se(r).toUint8Array()}catch(d){if(d instanceof $o)return ye("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{h=new ps(u,i,o)}catch(d){return ye(d instanceof Qe?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return h.Ie===0?null:h}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const u=this.Le.tt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const h=this.Je(u);if(h){if(o.current&&Kr(h.target)){const d=new O(h.target.path);this.ke.get(d)!==null||this.it(u,d)||this.Ue(u,d,pt.newNoDocument(d,t))}o.be&&(e.set(u,o.Ce()),o.ve())}});let r=B();this.qe.forEach((o,u)=>{let h=!0;u.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const i=new rr(t,e,this.Qe,this.ke,r);return this.ke=Ht(),this.qe=Xi(),this.Qe=new Z(z),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Wi,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new at(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Wi),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Xi(){return new Z(O.comparator)}function Yi(){return new Z(O.comparator)}const qh={asc:"ASCENDING",desc:"DESCENDING"},jh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$h={and:"AND",or:"OR"};class zh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Yr(n,t){return n.useProto3Json||Wn(t)?t:{value:t}}function Hh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Gh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function pe(n){return nt(!!n),M.fromTimestamp(function(e){const r=zt(e);return new vt(r.seconds,r.nanos)}(n))}function Kh(n,t){return Jr(n,t).canonicalString()}function Jr(n,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ua(n){const t=X.fromString(n);return nt(fa(t)),t}function Nr(n,t){const e=ua(t);if(e.get(1)!==n.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(ha(e))}function ca(n,t){return Kh(n.databaseId,t)}function Qh(n){const t=ua(n);return t.length===4?X.emptyPath():ha(t)}function Ji(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ha(n){return nt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Wh(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(nt(_===void 0||typeof _=="string"),gt.fromBase64String(_||"")):(nt(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),gt.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,h=u&&function(f){const _=f.code===void 0?b.UNKNOWN:ia(f.code);return new N(_,f.message||"")}(u);e=new aa(r,i,o,h||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nr(n,r.document.name),o=pe(r.document.updateTime),u=r.document.createTime?pe(r.document.createTime):M.min(),h=new Rt({mapValue:{fields:r.document.fields}}),d=pt.newFoundDocument(i,o,u,h),f=r.targetIds||[],_=r.removedTargetIds||[];e=new Mn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Nr(n,r.document),o=r.readTime?pe(r.readTime):M.min(),u=pt.newNoDocument(i,o),h=r.removedTargetIds||[];e=new Mn([],h,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Nr(n,r.document),o=r.removedTargetIds||[];e=new Mn([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new Lh(i,o),h=r.targetId;e=new oa(h,u)}}return e}function Xh(n,t){return{documents:[ca(n,t.path)]}}function Yh(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=ca(n,i);const o=function(f){if(f.length!==0)return da(St.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:de(R.field),direction:tl(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const h=Yr(n,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function Jh(n){let t=Qh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){nt(r===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(w){const R=la(w);return R instanceof St&&Go(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(R=>function(k){return new qn(fe(k.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let h=null;e.limit&&(h=function(w){let R;return R=typeof w=="object"?w.value:w,Wn(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(w){const R=!!w.before,P=w.values||[];return new Bn(P,R)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const R=!w.before,P=w.values||[];return new Bn(P,R)}(e.endAt)),_h(t,i,u,o,h,"F",d,f)}function Zh(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function la(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=fe(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fe(e.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=fe(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=fe(e.unaryFilter.field);return rt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return rt.create(fe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(r=>la(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function tl(n){return qh[n]}function el(n){return jh[n]}function nl(n){return $h[n]}function de(n){return{fieldPath:n.canonicalString()}}function fe(n){return yt.fromServerFormat(n.fieldPath)}function da(n){return n instanceof rt?function(e){if(e.op==="=="){if(Fi(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NAN"}};if(Li(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Fi(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NAN"}};if(Li(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:de(e.field),op:el(e.op),value:e.value}}}(n):n instanceof St?function(e){const r=e.getFilters().map(i=>da(i));return r.length===1?r[0]:{compositeFilter:{op:nl(e.op),filters:r}}}(n):L()}function fa(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e,r,i,o=M.min(),u=M.min(),h=gt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=d}withSequenceNumber(t){return new Bt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t){this.ct=t}}function sl(n){const t=Jh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this._n=new ol}addToCollectionParentIndex(t,e){return this._n.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve($t.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve($t.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class ol{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new at(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new at(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ie(0)}static Ln(){return new Ie(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.changes=new Re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Ze(r.mutation,i,Ut.empty(),vt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,B()).next(()=>r))}getLocalViewOfDocuments(t,e,r=B()){const i=Yt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let u=Ke();return o.forEach((h,d)=>{u=u.insert(h,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=Yt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,B()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,h)=>{e.set(u,h)})})}computeViews(t,e,r,i){let o=Ht();const u=Je(),h=function(){return Je()}();return e.forEach((d,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof nr)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),Ze(_.mutation,f,_.mutation.getFieldMask(),vt.now())):u.set(f.key,Ut.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var w;return h.set(f,new ul(_,(w=u.get(f))!==null&&w!==void 0?w:null))}),h))}recalculateAndSaveOverlays(t,e){const r=Je();let i=new Z((u,h)=>u-h),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const h of u)h.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=r.get(d)||Ut.empty();_=h.applyToLocalView(f,_),r.set(d,_);const w=(i.get(h.batchId)||B()).add(d);i=i.insert(h.batchId,w)})}).next(()=>{const u=[],h=i.getReverseIterator();for(;h.hasNext();){const d=h.getNext(),f=d.key,_=d.value,w=Zo();_.forEach(R=>{if(!o.has(R)){const P=ra(e.get(R),r.get(R));P!==null&&w.set(R,P),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return C.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):yh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(Yt());let h=-1,d=o;return u.next(f=>C.forEach(f,(_,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),o.get(_)?C.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{d=d.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,B())).next(_=>({batchId:h,changes:Ah(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let i=Ke();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=Ke();return this.indexManager.getCollectionParents(t,o).next(h=>C.forEach(h,d=>{const f=function(w,R){return new Yn(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(_=>{_.forEach((w,R)=>{u=u.insert(w,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(u=>{o.forEach((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,pt.newInvalidDocument(_)))});let h=Ke();return u.forEach((d,f)=>{const _=o.get(d);_!==void 0&&Ze(_.mutation,f,Ut.empty(),vt.now()),tr(e,f)&&(h=h.insert(d,f))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return C.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:pe(i.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:sl(i.bundledQuery),readTime:pe(i.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.overlays=new Z(O.comparator),this.hr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Yt();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=Yt(),o=e.length+1,u=new O(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const d=h.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Z((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Yt(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const h=Yt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>h.set(f,_)),!(h.size()>=i)););return C.resolve(h)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Mh(e,r));let o=this.hr.get(e);o===void 0&&(o=B(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.Pr=new at(st.Ir),this.Tr=new at(st.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new st(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new st(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new O(new X([])),r=new st(e,t),i=new st(e,t+1),o=[];return this.Tr.forEachInRange([r,i],u=>{this.Ar(u),o.push(u.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new O(new X([])),r=new st(e,t),i=new st(e,t+1);let o=B();return this.Tr.forEachInRange([r,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class st{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return O.comparator(t.key,e.key)||z(t.pr,e.pr)}static Er(t,e){return z(t.pr,e.pr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new at(st.Ir)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new xh(o,e,r,i);this.mutationQueue.push(u);for(const h of i)this.wr=this.wr.add(new st(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],u=>{const h=this.Sr(u.pr);o.push(h)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at(z);return e.forEach(i=>{const o=new st(i,0),u=new st(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,u],h=>{r=r.add(h.pr)})}),C.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const u=new st(new O(o),0);let h=new at(z);return this.wr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(h=h.add(d.pr)),!0)},u),C.resolve(this.Dr(h))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){nt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return C.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new st(e,0),i=this.wr.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t){this.vr=t,this.docs=function(){return new Z(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(e))}getEntries(t,e){let r=Ht();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():pt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Ht();const u=e.path,h=new O(u.child("")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Zc(Jc(_),r)<=0||(i.has(_.key)||tr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L()}Fr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new pl(this)}getSize(t){return C.resolve(this.size)}}class pl extends al{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){this.persistence=t,this.Mr=new Re(e=>hs(e),ls),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Or=0,this.Nr=new gs,this.targetCount=0,this.Lr=Ie.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),C.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Ie(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.qn(e),C.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Mr.forEach((u,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.Mr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,e){this.Br={},this.overlays={},this.kr=new os(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new gl(this),this.indexManager=new il,this.remoteDocumentCache=function(i){return new fl(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new rl(e),this.$r=new hl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ll,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new dl(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new _l(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return C.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class _l extends eh{constructor(t){super(),this.currentSequenceNumber=t}}class ms{constructor(t){this.persistence=t,this.zr=new gs,this.jr=null}static Hr(t){return new ms(t)}get Jr(){if(this.jr)return this.jr;throw L()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),C.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,r=>{const i=O.fromPath(r);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,M.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return C.or([()=>C.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=B(),i=B();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new _s(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Bu()?8:nh(Fu())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ji(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Hi(t,e,i,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new yl;return this.Ji(t,e,u).next(h=>{if(o.result=h,this.Ui)return this.Yi(t,e,u,h.size)})}).next(()=>o.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(He()<=U.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",le(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),C.resolve()):(He()<=U.DEBUG&&D("QueryEngine","Query:",le(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(He()<=U.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",le(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ct(e))):C.resolve())}ji(t,e){if(ji(e))return C.resolve(null);let r=Ct(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Qr(e,null,"F"),r=Ct(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=B(...o);return this.zi.getDocuments(t,u).next(h=>this.indexManager.getMinOffset(t,r).next(d=>{const f=this.Zi(e,h);return this.Xi(e,f,u,d.readTime)?this.ji(t,Qr(e,null,"F")):this.es(t,f,e,d)}))})))}Hi(t,e,r,i){return ji(e)||i.isEqual(M.min())?C.resolve(null):this.zi.getDocuments(t,r).next(o=>{const u=this.Zi(e,o);return this.Xi(e,u,r,i)?C.resolve(null):(He()<=U.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),le(e)),this.es(t,u,e,Yc(i,-1)).next(h=>h))})}Zi(t,e){let r=new at(Yo(t));return e.forEach((i,o)=>{tr(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,r){return He()<=U.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",le(e)),this.zi.getDocumentsMatchingQuery(t,e,$t.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new Z(z),this.rs=new Re(o=>hs(o),ls),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cl(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Tl(n,t,e,r){return new vl(n,t,e,r)}async function pa(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],h=[];let d=B();for(const f of i){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){h.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(r,d).next(f=>({us:f,removedBatchIds:u,addedBatchIds:h}))})})}function ga(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Il(n,t){const e=q(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const h=[];t.targetChanges.forEach((_,w)=>{const R=i.get(w);if(!R)return;h.push(e.Qr.removeMatchingKeys(o,_.removedDocuments,w).next(()=>e.Qr.addMatchingKeys(o,_.addedDocuments,w)));let P=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?P=P.withResumeToken(gt.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):_.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(_.resumeToken,r)),i=i.insert(w,P),function(x,V,H){return x.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(R,P,_)&&h.push(e.Qr.updateTargetData(o,P))});let d=Ht(),f=B();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),h.push(Al(o,u,t.documentUpdates).next(_=>{d=_.cs,f=_.ls})),!r.isEqual(M.min())){const _=e.Qr.getLastRemoteSnapshotVersion(o).next(w=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));h.push(_)}return C.waitFor(h).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.ns=i,o))}function Al(n,t,e){let r=B(),i=B();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=Ht();return e.forEach((h,d)=>{const f=o.get(h);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(h)),d.isNoDocument()&&d.version.isEqual(M.min())?(t.removeEntry(h,d.readTime),u=u.insert(h,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(h,d)):D("LocalStore","Ignoring outdated watch update for ",h,". Current version:",f.version," Watch version:",d.version)}),{cs:u,ls:i}})}function wl(n,t){const e=q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(o=>o?(i=o,C.resolve(i)):e.Qr.allocateTargetId(r).next(u=>(i=new Bt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Zr(n,t,e){const r=q(n),i=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!an(u))throw u;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Zi(n,t,e){const r=q(n);let i=M.min(),o=B();return r.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,_){const w=q(d),R=w.rs.get(_);return R!==void 0?C.resolve(w.ns.get(R)):w.Qr.getTargetData(f,_)}(r,u,Ct(t)).next(h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(u,h.targetId).next(d=>{o=d})}).next(()=>r.ts.getDocumentsMatchingQuery(u,t,e?i:M.min(),e?o:B())).next(h=>(Rl(r,vh(t),h),{documents:h,hs:o})))}function Rl(n,t,e){let r=n.ss.get(t)||M.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class to{constructor(){this.activeTargetIds=Ch()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cl{constructor(){this.no=new to,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new to,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn=null;function Or(){return kn===null?kn=function(){return 268435456+Math.round(2147483648*Math.random())}():kn++,"0x"+kn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class Vl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,r,i,o,u){const h=Or(),d=this.vo(e,r.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${h}:`,d,i);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,u),this.Mo(e,d,f,i).then(_=>(D("RestConnection",`Received RPC '${e}' ${h}: `,_),_),_=>{throw ye("RestConnection",`RPC '${e}' ${h} failed with error: `,_,"url: ",d,"request:",i),_})}xo(e,r,i,o,u,h){return this.Co(e,r,i,o,u)}Fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+we}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,u)=>e[u]=o),i&&i.headers.forEach((o,u)=>e[u]=o)}vo(e,r){const i=Sl[e];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,i){const o=Or();return new Promise((u,h)=>{const d=new xo;d.setWithCredentials(!0),d.listenOnce(Lo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case On.NO_ERROR:const _=d.getResponseJson();D(dt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case On.TIMEOUT:D(dt,`RPC '${t}' ${o} timed out`),h(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case On.HTTP_ERROR:const w=d.getStatus();if(D(dt,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const k=function(V){const H=V.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(H)>=0?H:b.UNKNOWN}(P.status);h(new N(k,P.message))}else h(new N(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(b.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{D(dt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);D(dt,`RPC '${t}' ${o} sending request:`,i),d.send(e,"POST",f,r,15)})}Oo(t,e,r){const i=Or(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Bo(),h=Uo(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new Mo({})),this.Fo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const _=o.join("");D(dt,`Creating RPC '${t}' stream ${i}: ${_}`,d);const w=u.createWebChannel(_,d);let R=!1,P=!1;const k=new bl({lo:V=>{P?D(dt,`Not sending because RPC '${t}' stream ${i} is closed:`,V):(R||(D(dt,`Opening RPC '${t}' stream ${i} transport.`),w.open(),R=!0),D(dt,`RPC '${t}' stream ${i} sending:`,V),w.send(V))},ho:()=>w.close()}),x=(V,H,W)=>{V.listen(H,G=>{try{W(G)}catch($){setTimeout(()=>{throw $},0)}})};return x(w,Ge.EventType.OPEN,()=>{P||(D(dt,`RPC '${t}' stream ${i} transport opened.`),k.mo())}),x(w,Ge.EventType.CLOSE,()=>{P||(P=!0,D(dt,`RPC '${t}' stream ${i} transport closed`),k.po())}),x(w,Ge.EventType.ERROR,V=>{P||(P=!0,ye(dt,`RPC '${t}' stream ${i} transport errored:`,V),k.po(new N(b.UNAVAILABLE,"The operation could not be completed")))}),x(w,Ge.EventType.MESSAGE,V=>{var H;if(!P){const W=V.data[0];nt(!!W);const G=W,$=G.error||((H=G[0])===null||H===void 0?void 0:H.error);if($){D(dt,`RPC '${t}' stream ${i} received error:`,$);const Et=$.status;let J=function(m){const y=tt[m];if(y!==void 0)return ia(y)}(Et),v=$.message;J===void 0&&(J=b.INTERNAL,v="Unknown error status: "+Et+" with message "+$.message),P=!0,k.po(new N(J,v)),w.close()}else D(dt,`RPC '${t}' stream ${i} received:`,W),k.yo(W)}}),x(h,Fo.STAT_EVENT,V=>{V.stat===jr.PROXY?D(dt,`RPC '${t}' stream ${i} detected buffering proxy`):V.stat===jr.NOPROXY&&D(dt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function xr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n){return new zh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,e,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,e,r,i,o,u,h,d){this.oi=t,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new _a(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Ot(e.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===e&&this.u_(r,i)},r=>{t(()=>{const i=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kl extends Dl{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=Wh(this.serializer,t),r=function(o){if(!("targetChange"in o))return M.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?M.min():u.readTime?pe(u.readTime):M.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=Ji(this.serializer),e.addTarget=function(o,u){let h;const d=u.target;if(h=Kr(d)?{documents:Xh(o,d)}:{query:Yh(o,d)._t},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=Gh(o,u.resumeToken);const f=Yr(o,u.expectedCount);f!==null&&(h.expectedCount=f)}else if(u.snapshotVersion.compareTo(M.min())>0){h.readTime=Hh(o,u.snapshotVersion.toTimestamp());const f=Yr(o,u.expectedCount);f!==null&&(h.expectedCount=f)}return h}(this.serializer,t);const r=Zh(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=Ji(this.serializer),e.removeTarget=t,this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Co(t,Jr(e,r),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())})}xo(t,e,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.xo(t,Jr(e,r),i,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(b.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Ol{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Ot(e),this.y_=!1):D("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(u=>{r.enqueueAndForget(async()=>{hn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=q(d);f.M_.add(4),await cn(f),f.N_.set("Unknown"),f.M_.delete(4),await sr(f)}(this))})}),this.N_=new Ol(r,i)}}async function sr(n){if(hn(n))for(const t of n.x_)await t(!0)}async function cn(n){for(const t of n.x_)await t(!1)}function ya(n,t){const e=q(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Ts(e)?vs(e):Ce(e).Xo()&&Es(e,t))}function ys(n,t){const e=q(n),r=Ce(e);e.F_.delete(t),r.Xo()&&Ea(e,t),e.F_.size===0&&(r.Xo()?r.n_():hn(e)&&e.N_.set("Unknown"))}function Es(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ce(n).P_(t)}function Ea(n,t){n.L_.xe(t),Ce(n).I_(t)}function vs(n){n.L_=new Bh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ce(n).start(),n.N_.w_()}function Ts(n){return hn(n)&&!Ce(n).Zo()&&n.F_.size>0}function hn(n){return q(n).M_.size===0}function va(n){n.L_=void 0}async function Ml(n){n.N_.set("Online")}async function Ll(n){n.F_.forEach((t,e)=>{Es(n,t)})}async function Fl(n,t){va(n),Ts(n)?(n.N_.D_(t),vs(n)):n.N_.set("Unknown")}async function Ul(n,t,e){if(n.N_.set("Online"),t instanceof aa&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const h of o.targetIds)i.F_.has(h)&&(await i.remoteSyncer.rejectListen(h,u),i.F_.delete(h),i.L_.removeTarget(h))}(n,t)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await no(n,r)}else if(t instanceof Mn?n.L_.Ke(t):t instanceof oa?n.L_.He(t):n.L_.We(t),!e.isEqual(M.min()))try{const r=await ga(n.localStore);e.compareTo(r)>=0&&await function(o,u){const h=o.L_.rt(u);return h.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.F_.get(f);_&&o.F_.set(f,_.withResumeToken(d.resumeToken,u))}}),h.targetMismatches.forEach((d,f)=>{const _=o.F_.get(d);if(!_)return;o.F_.set(d,_.withResumeToken(gt.EMPTY_BYTE_STRING,_.snapshotVersion)),Ea(o,d);const w=new Bt(_.target,d,f,_.sequenceNumber);Es(o,w)}),o.remoteSyncer.applyRemoteEvent(h)}(n,e)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await no(n,r)}}async function no(n,t,e){if(!an(t))throw t;n.M_.add(1),await cn(n),n.N_.set("Offline"),e||(e=()=>ga(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await sr(n)})}async function ro(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=hn(e);e.M_.add(3),await cn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await sr(e)}async function Bl(n,t){const e=q(n);t?(e.M_.delete(2),await sr(e)):t||(e.M_.add(2),await cn(e),e.N_.set("Unknown"))}function Ce(n){return n.B_||(n.B_=function(e,r,i){const o=q(e);return o.f_(),new kl(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:Ml.bind(null,n),To:Ll.bind(null,n),Ao:Fl.bind(null,n),h_:Ul.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),Ts(n)?vs(n):n.N_.set("Unknown")):(await n.B_.stop(),va(n))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,h=new Is(t,e,u,i,o);return h.start(r),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(n,t){if(Ot("AsyncQueue",`${t}: ${n}`),an(n))return new N(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=Ke(),this.sortedSet=new Z(this.comparator)}static emptySet(t){return new ge(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ge)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ge;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.q_=new Z(O.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):L():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ae{constructor(t,e,r,i,o,u,h,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach(h=>{u.push({type:0,doc:h})}),new Ae(t,e,ge.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class jl{constructor(){this.queries=new Re(t=>Xo(t),Zn),this.onlineState="Unknown",this.z_=new Set}}async function Ia(n,t){const e=q(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(r=2):(o=new ql,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const h=Ta(u,`Initialization of query '${le(t.query)}' failed`);return void t.onError(h)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&As(e)}async function Aa(n,t){const e=q(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.U_.indexOf(t);u>=0&&(o.U_.splice(u,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function $l(n,t){const e=q(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const h of u.U_)h.H_(i)&&(r=!0);u.K_=i}}r&&As(e)}function zl(n,t,e){const r=q(n),i=r.queries.get(t);if(i)for(const o of i.U_)o.onError(e);r.queries.delete(t)}function As(n){n.z_.forEach(t=>{t.next()})}var ts,io;(io=ts||(ts={})).J_="default",io.Cache="cache";class wa{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ae(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Ae.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==ts.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t){this.key=t}}class Ca{constructor(t){this.key=t}}class Hl{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=B(),this.mutatedKeys=B(),this.Ia=Yo(t),this.Ta=new ge(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new so,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,h=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,w)=>{const R=i.get(_),P=tr(this.query,w)?w:null,k=!!R&&this.mutatedKeys.has(R.key),x=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let V=!1;R&&P?R.data.isEqual(P.data)?k!==x&&(r.track({type:3,doc:P}),V=!0):this.Ra(R,P)||(r.track({type:2,doc:P}),V=!0,(d&&this.Ia(P,d)>0||f&&this.Ia(P,f)<0)&&(h=!0)):!R&&P?(r.track({type:0,doc:P}),V=!0):R&&!P&&(r.track({type:1,doc:R}),V=!0,(d||f)&&(h=!0)),V&&(P?(u=u.add(P),o=x?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Ta:u,Aa:r,Xi:h,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const u=t.Aa.Q_();u.sort((_,w)=>function(P,k){const x=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return x(P)-x(k)}(_.type,w.type)||this.Ia(_.doc,w.doc)),this.Va(r),i=i!=null&&i;const h=e&&!i?this.ma():[],d=this.Pa.size===0&&this.current&&!i?1:0,f=d!==this.ha;return this.ha=d,u.length!==0||f?{snapshot:new Ae(this.query,t.Ta,o,u,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:h}:{fa:h}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new so,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=B(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Ca(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Ra(r))}),e}pa(t){this.la=t.hs,this.Pa=B();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Ae.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Gl{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Kl{constructor(t){this.key=t,this.wa=!1}}class Ql{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new Re(h=>Xo(h),Zn),this.Da=new Map,this.Ca=new Set,this.va=new Z(O.comparator),this.Fa=new Map,this.Ma=new gs,this.xa={},this.Oa=new Map,this.Na=Ie.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Wl(n,t,e=!0){const r=Da(n);let i;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await Pa(r,t,e,!0),i}async function Xl(n,t){const e=Da(n);await Pa(e,t,!0,!1)}async function Pa(n,t,e,r){const i=await wl(n.localStore,Ct(t)),o=i.targetId,u=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let h;return r&&(h=await Yl(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&ya(n.remoteStore,i),h}async function Yl(n,t,e,r,i){n.Ba=(w,R,P)=>async function(x,V,H,W){let G=V.view.da(H);G.Xi&&(G=await Zi(x.localStore,V.query,!1).then(({documents:v})=>V.view.da(v,G)));const $=W&&W.targetChanges.get(V.targetId),Et=W&&W.targetMismatches.get(V.targetId)!=null,J=V.view.applyChanges(G,x.isPrimaryClient,$,Et);return ao(x,V.targetId,J.fa),J.snapshot}(n,w,R,P);const o=await Zi(n.localStore,t,!0),u=new Hl(t,o.hs),h=u.da(o.documents),d=un.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=u.applyChanges(h,n.isPrimaryClient,d);ao(n,e,f.fa);const _=new Gl(t,e,u);return n.ba.set(t,_),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),f.snapshot}async function Jl(n,t,e){const r=q(n),i=r.ba.get(t),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(u=>!Zn(u,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zr(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&ys(r.remoteStore,i.targetId),es(r,i.targetId)}).catch(is)):(es(r,i.targetId),await Zr(r.localStore,i.targetId,!0))}async function Zl(n,t){const e=q(n),r=e.ba.get(t),i=e.Da.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ys(e.remoteStore,r.targetId))}async function Sa(n,t){const e=q(n);try{const r=await Il(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Fa.get(o);u&&(nt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.wa=!0:i.modifiedDocuments.size>0?nt(u.wa):i.removedDocuments.size>0&&(nt(u.wa),u.wa=!1))}),await Va(e,r,t)}catch(r){await is(r)}}function oo(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((o,u)=>{const h=u.view.j_(t);h.snapshot&&i.push(h.snapshot)}),function(u,h){const d=q(u);d.onlineState=h;let f=!1;d.queries.forEach((_,w)=>{for(const R of w.U_)R.j_(h)&&(f=!0)}),f&&As(d)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function td(n,t,e){const r=q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Fa.get(t),o=i&&i.key;if(o){let u=new Z(O.comparator);u=u.insert(o,pt.newNoDocument(o,M.min()));const h=B().add(o),d=new rr(M.min(),new Map,new Z(z),u,h);await Sa(r,d),r.va=r.va.remove(o),r.Fa.delete(t),ws(r)}else await Zr(r.localStore,t,!1).then(()=>es(r,t,e)).catch(is)}function es(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||ba(n,r)})}function ba(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(ys(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),ws(n))}function ao(n,t,e){for(const r of e)r instanceof Ra?(n.Ma.addReference(r.key,t),ed(n,r)):r instanceof Ca?(D("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||ba(n,r.key)):L()}function ed(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(D("SyncEngine","New document in limbo: "+e),n.Ca.add(r),ws(n))}function ws(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new O(X.fromString(t)),r=n.Na.next();n.Fa.set(r,new Kl(e)),n.va=n.va.insert(e,r),ya(n.remoteStore,new Bt(Ct(Jn(e.path)),r,"TargetPurposeLimboResolution",os.oe))}}async function Va(n,t,e){const r=q(n),i=[],o=[],u=[];r.ba.isEmpty()||(r.ba.forEach((h,d)=>{u.push(r.Ba(d,t,e).then(f=>{if((f||e)&&r.isPrimaryClient){const _=f&&!f.fromCache;r.sharedClientState.updateQueryState(d.targetId,_?"current":"not-current")}if(f){i.push(f);const _=_s.Ki(d.targetId,f);o.push(_)}}))}),await Promise.all(u),r.Sa.h_(i),await async function(d,f){const _=q(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>C.forEach(f,R=>C.forEach(R.qi,P=>_.persistence.referenceDelegate.addReference(w,R.targetId,P)).next(()=>C.forEach(R.Qi,P=>_.persistence.referenceDelegate.removeReference(w,R.targetId,P)))))}catch(w){if(!an(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const P=_.ns.get(R),k=P.snapshotVersion,x=P.withLastLimboFreeSnapshotVersion(k);_.ns=_.ns.insert(R,x)}}}(r.localStore,o))}async function nd(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await pa(e.localStore,t);e.currentUser=t,function(o,u){o.Oa.forEach(h=>{h.forEach(d=>{d.reject(new N(b.CANCELLED,u))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Va(e,r.us)}}function rd(n,t){const e=q(n),r=e.Fa.get(t);if(r&&r.wa)return B().add(r.key);{let i=B();const o=e.Da.get(t);if(!o)return i;for(const u of o){const h=e.ba.get(u);i=i.unionWith(h.view.Ea)}return i}}function Da(n){const t=q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Sa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=td.bind(null,t),t.Sa.h_=$l.bind(null,t.eventManager),t.Sa.ka=zl.bind(null,t.eventManager),t}class uo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ma(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Tl(this.persistence,new El,t.initialUser,this.serializer)}createPersistence(t){return new ml(ms.Hr,this.serializer)}createSharedClientState(t){return new Cl}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>oo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nd.bind(null,this.syncEngine),await Bl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new jl}()}createDatastore(t){const e=ma(t.databaseInfo.databaseId),r=function(o){return new Vl(o)}(t.databaseInfo);return function(o,u,h,d){return new Nl(o,u,h,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,u,h){return new xl(r,i,o,u,h)}(this.localStore,this.datastore,t.asyncQueue,e=>oo(this.syncEngine,e,0),function(){return eo.D()?new eo:new Pl}())}createSyncEngine(t,e){return function(i,o,u,h,d,f,_){const w=new Ql(i,o,u,h,d,f);return _&&(w.La=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=q(r);D("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await cn(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Ot("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=jo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ta(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Mr(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pa(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function co(n,t){n.asyncQueue.verifyOperationInProgress();const e=await ad(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ro(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ro(t.remoteStore,i)),n._onlineComponents=t}function od(n){return n.name==="FirebaseError"?n.code===b.FAILED_PRECONDITION||n.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ad(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!od(e))throw e;ye("Error using user provided cache. Falling back to memory cache: "+e),await Mr(n,new uo)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Mr(n,new uo);return n._offlineComponents}async function ud(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await co(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await co(n,new sd))),n._onlineComponents}async function ns(n){const t=await ud(n),e=t.eventManager;return e.onListen=Wl.bind(null,t.syncEngine),e.onUnlisten=Jl.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Xl.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Zl.bind(null,t.syncEngine),e}function cd(n,t,e={}){const r=new te;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,h,d,f){const _=new ka({next:R=>{u.enqueueAndForget(()=>Aa(o,w));const P=R.docs.has(h);!P&&R.fromCache?f.reject(new N(b.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&R.fromCache&&d&&d.source==="server"?f.reject(new N(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new wa(Jn(h.path),_,{includeMetadataChanges:!0,ra:!0});return Ia(o,w)}(await ns(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n,t,e){if(!e)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function hd(n,t,e,r){if(t===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function lo(n){if(!O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function fo(n){if(O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ld(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function me(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ld(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}hd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Na((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ir{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new po({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new po(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jc;switch(r.type){case"firstParty":return new Gc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ho.get(e);r&&(D("ComponentProvider","Removing Datastore"),ho.delete(e),r.terminate())}(this),Promise.resolve()}}function dd(n,t,e,r={}){var i;const o=(n=me(n,ir))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=ft.MOCK_USER;else{h=Co(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ft(f)}n._authCredentials=new $c(new qo(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new or(this.firestore,t,this._query)}}class wt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class jt extends or{constructor(t,e,r){super(t,e,Jn(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new O(t))}withConverter(t){return new jt(this.firestore,t,this._path)}}function tf(n,t,...e){if(n=Qn(n),Oa("collection","path",t),n instanceof ir){const r=X.fromString(t,...e);return fo(r),new jt(n,null,r)}{if(!(n instanceof wt||n instanceof jt))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return fo(r),new jt(n.firestore,null,r)}}function ef(n,t,...e){if(n=Qn(n),arguments.length===1&&(t=jo.newId()),Oa("doc","path",t),n instanceof ir){const r=X.fromString(t,...e);return lo(r),new wt(n,null,new O(r))}{if(!(n instanceof wt||n instanceof jt))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return lo(r),new wt(n.firestore,n instanceof jt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new _a(this,"async_queue_retry"),this.hu=()=>{const e=xr();e&&D("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=xr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=xr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new te;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!an(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(r);throw Ot("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=Is.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&L()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}function go(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class zn extends ir{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new fd}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ma(this),this._firestoreClient.terminate()}}function nf(n,t){const e=typeof n=="object"?n:Do(),r=typeof n=="string"?n:"(default)",i=bo(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=wo("firestore");o&&dd(i,...o)}return i}function xa(n){return n._firestoreClient||Ma(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ma(n){var t,e,r;const i=n._freezeSettings(),o=function(h,d,f,_){return new ih(h,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Na(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new id(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Hn(gt.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Hn(gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}const gd=new RegExp("[~\\*/\\[\\]]");function md(n,t,e){if(t.search(gd)>=0)throw mo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new La(...t.split("."))._internalPath}catch{throw mo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function mo(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new N(b.INVALID_ARGUMENT,o+n+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new _d(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ua("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class _d extends Fa{data(){return super.data()}}function Ua(n,t){return typeof t=="string"?md(n,t):t instanceof La?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ed{convertValue(t,e="none"){switch(ie(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(se(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Xn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new pd(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=us(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(rn(t));default:return null}}convertTimestamp(t){const e=zt(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);nt(fa(r));const i=new sn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(e)||Ot(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ba extends Fa{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ln(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ua("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Ln extends Ba{data(t={}){return super.data(t)}}class vd{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new We(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Ln(this._firestore,this._userDataWriter,r.key,r,new We(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(h=>{const d=new Ln(i._firestore,i._userDataWriter,h.doc.key,h.doc,new We(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const d=new Ln(i._firestore,i._userDataWriter,h.doc.key,h.doc,new We(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return h.type!==0&&(f=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),_=u.indexOf(h.doc.key)),{type:Td(h.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Td(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n){n=me(n,wt);const t=me(n.firestore,zn);return cd(xa(t),n._key).then(e=>ja(t,n,e))}class qa extends Ed{constructor(t){super(),this.firestore=t}convertBytes(t){return new Hn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function sf(n,...t){var e,r,i;n=Qn(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||go(t[u])||(o=t[u],u++);const h={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(go(t[u])){const w=t[u];t[u]=(e=w.next)===null||e===void 0?void 0:e.bind(w),t[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),t[u+2]=(i=w.complete)===null||i===void 0?void 0:i.bind(w)}let d,f,_;if(n instanceof wt)f=me(n.firestore,zn),_=Jn(n._key.path),d={next:w=>{t[u]&&t[u](ja(f,n,w))},error:t[u+1],complete:t[u+2]};else{const w=me(n,or);f=me(w.firestore,zn),_=w._query;const R=new qa(f);d={next:P=>{t[u]&&t[u](new vd(f,R,w,P))},error:t[u+1],complete:t[u+2]},yd(n._query)}return function(R,P,k,x){const V=new ka(x),H=new wa(P,V,k);return R.asyncQueue.enqueueAndForget(async()=>Ia(await ns(R),H)),()=>{V.$a(),R.asyncQueue.enqueueAndForget(async()=>Aa(await ns(R),H))}}(xa(f),_,h,d)}function ja(n,t,e){const r=e.docs.get(t._key),i=new qa(n);return new Ba(n,i,t._key,r,new We(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){we=i})(Vo),tn(new _e("firestore",(r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),h=new zn(new zc(r.getProvider("auth-internal")),new Qc(r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(f.options.projectId,_)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Jt(Ni,"4.6.3",t),Jt(Ni,"4.6.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="firebasestorage.googleapis.com",Id="storageBucket",Ad=2*60*1e3,wd=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends oe{constructor(t,e,r=0){super(Lr(t),`Firebase Storage: ${e} (${Lr(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Lr(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var bt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(bt||(bt={}));function Lr(n){return"storage/"+n}function Rd(){const n="An unknown error occurred, please check the error payload for server response.";return new Vt(bt.UNKNOWN,n)}function Cd(){return new Vt(bt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Pd(){return new Vt(bt.CANCELED,"User canceled the upload/download.")}function Sd(n){return new Vt(bt.INVALID_URL,"Invalid URL '"+n+"'.")}function bd(n){return new Vt(bt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function _o(n){return new Vt(bt.INVALID_ARGUMENT,n)}function za(){return new Vt(bt.APP_DELETED,"The Firebase app was deleted.")}function Vd(n){return new Vt(bt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=At.makeFromUrl(t,e)}catch{return new At(t,"")}if(r.path==="")return r;throw bd(t)}static makeFromUrl(t,e){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const u="(/(.*))?$",h=new RegExp("^gs://"+i+u,"i"),d={bucket:1,path:3};function f($){$.path_=decodeURIComponent($.path)}const _="v[A-Za-z0-9_]+",w=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",P=new RegExp(`^https?://${w}/${_}/b/${i}/o${R}`,"i"),k={bucket:1,path:3},x=e===$a?"(?:storage.googleapis.com|storage.cloud.google.com)":e,V="([^?#]*)",H=new RegExp(`^https?://${x}/${i}/${V}`,"i"),G=[{regex:h,indices:d,postModify:o},{regex:P,indices:k,postModify:f},{regex:H,indices:{bucket:1,path:2},postModify:f}];for(let $=0;$<G.length;$++){const Et=G[$],J=Et.regex.exec(t);if(J){const v=J[Et.indices.bucket];let p=J[Et.indices.path];p||(p=""),r=new At(v,p),Et.postModify(r);break}}if(r==null)throw Sd(t);return r}}class Dd{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n,t,e){let r=1,i=null,o=null,u=!1,h=0;function d(){return h===2}let f=!1;function _(...V){f||(f=!0,t.apply(null,V))}function w(V){i=setTimeout(()=>{i=null,n(P,d())},V)}function R(){o&&clearTimeout(o)}function P(V,...H){if(f){R();return}if(V){R(),_.call(null,V,...H);return}if(d()||u){R(),_.call(null,V,...H);return}r<64&&(r*=2);let G;h===1?(h=2,G=0):G=(r+Math.random())*1e3,w(G)}let k=!1;function x(V){k||(k=!0,R(),!f&&(i!==null?(V||(h=2),clearTimeout(i),w(0)):V||(h=1)))}return w(0),o=setTimeout(()=>{u=!0,x(!0)},e),x}function Nd(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n){return n!==void 0}function yo(n,t,e,r){if(r<t)throw _o(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw _o(`Invalid value for '${n}'. Expected ${e} or less.`)}function xd(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const i=t(r)+"="+t(n[r]);e=e+i+"&"}return e=e.slice(0,-1),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Gn||(Gn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,e,r,i,o,u,h,d,f,_,w,R=!0){this.url_=t,this.method_=e,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=u,this.callback_=h,this.errorCallback_=d,this.timeout_=f,this.progressCallback_=_,this.connectionFactory_=w,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,k)=>{this.resolve_=P,this.reject_=k,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Nn(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const u=h=>{const d=h.loaded,f=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,f)};this.progressCallback_!==null&&o.addUploadProgressListener(u),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(u),this.pendingConnection_=null;const h=o.getErrorCode()===Gn.NO_ERROR,d=o.getStatus();if(!h||Md(d,this.additionalRetryCodes_)&&this.retry){const _=o.getErrorCode()===Gn.ABORT;r(!1,new Nn(!1,null,_));return}const f=this.successCodes_.indexOf(d)!==-1;r(!0,new Nn(f,o))})},e=(r,i)=>{const o=this.resolve_,u=this.reject_,h=i.connection;if(i.wasSuccessCode)try{const d=this.callback_(h,h.getResponse());Od(d)?o(d):o()}catch(d){u(d)}else if(h!==null){const d=Rd();d.serverResponse=h.getErrorText(),this.errorCallback_?u(this.errorCallback_(h,d)):u(d)}else if(i.canceled){const d=this.appDelete_?za():Pd();u(d)}else{const d=Cd();u(d)}};this.canceled_?e(!1,new Nn(!1,null,!0)):this.backoffId_=kd(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Nd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Nn{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function Fd(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function Ud(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Bd(n,t){t&&(n["X-Firebase-GMPID"]=t)}function qd(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function jd(n,t,e,r,i,o,u=!0){const h=xd(n.urlParams),d=n.url+h,f=Object.assign({},n.headers);return Bd(f,t),Fd(f,e),Ud(f,o),qd(f,r),new Ld(d,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function zd(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e){this._service=t,e instanceof At?this._location=e:this._location=At.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Kn(t,e)}get root(){const t=new At(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zd(this._location.path)}get storage(){return this._service}get parent(){const t=$d(this._location.path);if(t===null)return null;const e=new At(this._location.bucket,t);return new Kn(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw Vd(t)}}function Eo(n,t){const e=t==null?void 0:t[Id];return e==null?null:At.makeFromBucketSpec(e,n)}function Hd(n,t,e,r={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Co(i,n.app.options.projectId))}class Gd{constructor(t,e,r,i,o){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=$a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ad,this._maxUploadRetryTime=wd,this._requests=new Set,i!=null?this._bucket=At.makeFromBucketSpec(i,this._host):this._bucket=Eo(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,t):this._bucket=Eo(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){yo("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){yo("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Kn(this,t)}_makeRequest(t,e,r,i,o=!0){if(this._deleted)return new Dd(za());{const u=jd(t,this._appId,r,i,e,this._firebaseVersion,o);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(t,e){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,i).getPromise()}}const vo="@firebase/storage",To="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="storage";function of(n=Do(),t){n=Qn(n);const r=bo(n,Ha).getImmediate({identifier:t}),i=wo("storage");return i&&Kd(r,...i),r}function Kd(n,t,e,r={}){Hd(n,t,e,r)}function Qd(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Gd(e,r,i,t,Vo)}function Wd(){tn(new _e(Ha,Qd,"PUBLIC").setMultipleInstances(!0)),Jt(vo,To,""),Jt(vo,To,"esm2017")}Wd();export{of as a,rf as b,tf as c,ef as d,nf as g,kc as i,sf as o,Jt as r};
