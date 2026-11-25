import{r as i,g as e,i as t}from"./BpR-JXeq.js";import{getAuth as r}from"./DhS_0wBE.js";import{getFirestore as d,enableIndexedDbPersistence as a}from"./C5VSJz_K.js";var o="firebase",s="12.12.0";/**
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
 */i(o,s,"app");const p={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},n=e().length===0?t(p):e()[0],m=r(n),f=d(n);typeof window<"u"&&a(f).catch(()=>{});export{m as auth,f as db,n as firebaseApp};
