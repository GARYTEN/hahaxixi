
const $ = new Env('京东快递签到');

const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let jdNotify = true;//是否关闭通知，false打开通知推送，true关闭通知推送
const randomCount = $.isNode() ? 20 : 5;
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxb6417=["\x65\x6E\x76","\x50\x55\x54\x4B\x45\x59","\x62\x65\x35\x30\x32\x36\x61\x38\x2D\x30\x38\x65\x35\x2D\x34\x30\x65\x33\x2D\x39\x38\x31\x31\x2D\x33\x34\x37\x30\x64\x39\x64\x37\x66\x66\x61\x30\x7C\x7C\x36\x33\x62\x33\x34\x33\x66\x31\x2D\x65\x32\x66\x61\x2D\x34\x61\x31\x64\x2D\x62\x32\x39\x31\x2D\x64\x39\x37\x37\x32\x64\x62\x62\x37\x35\x34\x35\x7C\x7C\x7C\x7C\x7C\x62\x30\x32\x62\x66\x63\x37\x63\x2D\x32\x38\x65\x39\x2D\x34\x32\x30\x36\x2D\x61\x33\x38\x35\x2D\x61\x36\x61\x64\x34\x34\x61\x36\x30\x61\x36\x64","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x65\x78\x69\x74","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x5B\x5D","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x72\x65\x76\x65\x72\x73\x65","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","","\x66\x69\x6C\x74\x65\x72","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\x6C\x65\x6E\x67\x74\x68","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x5C\x6E\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x5C\x6E","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\u3010\u4EAC\u4E1C\u8D26\u53F7","\x5C\x6E","\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x70\x61\x72\x73\x65","\x63\x6F\x64\x65","\u4ECA\u65E5\u7B7E\u5230\u6210\u529F\uFF0C\u83B7\u5F97","\x74\x69\x74\x6C\x65","\x63\x6F\x6E\x74\x65\x6E\x74","\x20\uD83D\uDC36\x5C\x6E","\u4ECA\u65E5\u5DF2\u7B7E\u5230","\u3010\u7B7E\u5230\u3011\u5931\u8D25\uFF0C\u4ECA\u65E5\u5DF2\u7B7E\u5230","\u5F02\u5E38\uFF1A","\x6C\x6F\x67\x45\x72\x72","\x70\x6F\x73\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x6F\x70\x2D\x70\x72\x6F\x78\x79\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6A\x69\x46\x65\x6E\x41\x70\x69\x2F\x73\x69\x67\x6E\x49\x6E\x41\x6E\x64\x47\x65\x74\x52\x65\x77\x61\x72\x64","\x5B\x7B\x22\x75\x73\x65\x72\x4E\x6F\x22\x3A\x22\x24\x63\x6F\x6F\x4D\x72\x64\x47\x61\x74\x65\x77\x61\x79\x55\x69\x64\x24\x22\x7D\x5D","\x6C\x6F\x70\x2D\x70\x72\x6F\x78\x79\x2E\x6A\x64\x2E\x63\x6F\x6D","\x6A\x69\x6E\x67\x63\x61\x69\x2E\x6A\x64\x2E\x63\x6F\x6D","\x73\x65\x72\x76\x69\x63\x65\x2D\x6D\x6F\x6E\x69\x74\x6F\x72","\x6A\x65\x78\x70\x72\x65\x73\x73","\x48\x35","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x3B\x63\x68\x61\x72\x73\x65\x74\x3D\x75\x74\x66\x2D\x38","\x7B\x22\x61\x70\x70\x4E\x61\x6D\x65\x22\x3A\x22\x6A\x69\x6E\x67\x63\x61\x69\x22\x2C\x22\x63\x6C\x69\x65\x6E\x74\x22\x3A\x22\x6D\x22\x7D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x20\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x31\x36\x30\x37\x33\x33\x30\x31\x37\x30\x35\x37\x38","\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74","\x32","\x7B\x22\x61\x70\x70\x69\x64\x22\x3A\x31\x35\x38\x2C\x22\x74\x69\x63\x6B\x65\x74\x5F\x74\x79\x70\x65\x22\x3A\x22\x6D\x22\x7D","\x31\x2E\x30\x2E\x30","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x69\x6E\x67\x63\x61\x69\x2D\x68\x35\x2E\x6A\x64\x2E\x63\x6F\x6D","\x73\x61\x6D\x65\x2D\x73\x69\x74\x65","\x63\x6F\x72\x73","\x65\x6D\x70\x74\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x69\x6E\x67\x63\x61\x69\x2D\x68\x35\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x32\x2E\x32\x3B\x31\x34\x2E\x32\x3B\x25\x45\x34\x25\x42\x41\x25\x41\x43\x25\x45\x34\x25\x42\x38\x25\x39\x43\x2F\x39\x2E\x32\x2E\x32\x20\x43\x46\x4E\x65\x74\x77\x6F\x72\x6B\x2F\x31\x32\x30\x36\x20\x44\x61\x72\x77\x69\x6E\x2F\x32\x30\x2E\x31\x2E\x30","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x2F\x69\x6E\x66\x6F\x2F\x51\x75\x65\x72\x79\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x7A\x68\x2D\x63\x6E","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x73\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x2F\x6A\x69\x6E\x67\x64\x6F\x75\x2F\x6D\x79\x2E\x73\x68\x74\x6D\x6C\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x72\x65\x74\x63\x6F\x64\x65","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\x62\x61\x73\x65","\u4EAC\u4E1C\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E","\x6F\x62\x6A\x65\x63\x74","\u4EAC\u4E1C\u670D\u52A1\u5668\u8BBF\u95EE\u6570\u636E\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u81EA\u8EAB\u8BBE\u5907\u7F51\u7EDC\u60C5\u51B5","\x73\x74\x72\x69\x6E\x67","\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const tok=undefined!= process[__Oxb6417[0x0]]&& undefined!= process[__Oxb6417[0x0]][__Oxb6417[0x1]]&& JSON[__Oxb6417[0x4]](process[__Oxb6417[0x0]].PUTKEY)[__Oxb6417[0x3]](__Oxb6417[0x2])>  -1?true:false;if(!tok){process[__Oxb6417[0x5]](0)};if($[__Oxb6417[0x6]]()){Object[__Oxb6417[0x9]](jdCookieNode)[__Oxb6417[0x8]]((_0x4546x2)=>{cookiesArr[__Oxb6417[0x7]](jdCookieNode[_0x4546x2])});if(process[__Oxb6417[0x0]][__Oxb6417[0xa]]&& process[__Oxb6417[0x0]][__Oxb6417[0xa]]=== __Oxb6417[0xb]){console[__Oxb6417[0xc]]= ()=>{}}}else {let cookiesData=$[__Oxb6417[0xe]](__Oxb6417[0xd])|| __Oxb6417[0xf];cookiesData= jsonParse(cookiesData);cookiesArr= cookiesData[__Oxb6417[0x11]]((_0x4546x2)=>{return _0x4546x2[__Oxb6417[0x10]]});cookiesArr[__Oxb6417[0x12]]();cookiesArr[__Oxb6417[0x7]](...[$[__Oxb6417[0xe]](__Oxb6417[0x13]),$[__Oxb6417[0xe]](__Oxb6417[0x14])]);cookiesArr[__Oxb6417[0x12]]();cookiesArr= cookiesArr[__Oxb6417[0x16]]((_0x4546x2)=>{return _0x4546x2!== __Oxb6417[0x15]&& _0x4546x2!== null&& _0x4546x2!== undefined})};const JD_API_HOST=__Oxb6417[0x17];!(async ()=>{if(!cookiesArr[0x0]){$[__Oxb6417[0x21]]($[__Oxb6417[0x1b]],__Oxb6417[0x1f],__Oxb6417[0x20],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxb6417[0x20]});return};for(let _0x4546x6=0;_0x4546x6< cookiesArr[__Oxb6417[0x22]];_0x4546x6++){if(cookiesArr[_0x4546x6]){cookie= cookiesArr[_0x4546x6];$[__Oxb6417[0x23]]= decodeURIComponent(cookie[__Oxb6417[0x24]](/pt_pin=(.+?);/)&& cookie[__Oxb6417[0x24]](/pt_pin=(.+?);/)[0x1]);$[__Oxb6417[0x25]]= _0x4546x6+ 1;$[__Oxb6417[0x26]]= true;$[__Oxb6417[0x27]]= __Oxb6417[0x15];message= __Oxb6417[0x15]; await TotalBean();console[__Oxb6417[0xc]](`${__Oxb6417[0x28]}${$[__Oxb6417[0x25]]}${__Oxb6417[0x29]}${$[__Oxb6417[0x27]]|| $[__Oxb6417[0x23]]}${__Oxb6417[0x2a]}`);if(!$[__Oxb6417[0x26]]){$[__Oxb6417[0x21]]($[__Oxb6417[0x1b]],`${__Oxb6417[0x2b]}`,`${__Oxb6417[0x2c]}${$[__Oxb6417[0x25]]}${__Oxb6417[0x2d]}${$[__Oxb6417[0x27]]|| $[__Oxb6417[0x23]]}${__Oxb6417[0x2e]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxb6417[0x20]});if($[__Oxb6417[0x6]]()){ await notify[__Oxb6417[0x31]](`${__Oxb6417[0x15]}${$[__Oxb6417[0x1b]]}${__Oxb6417[0x2f]}${$[__Oxb6417[0x23]]}${__Oxb6417[0x15]}`,`${__Oxb6417[0x2c]}${$[__Oxb6417[0x25]]}${__Oxb6417[0x2d]}${$[__Oxb6417[0x23]]}${__Oxb6417[0x30]}`)};continue}; await userSignIn(); await showMsg()}}})()[__Oxb6417[0x1e]]((_0x4546x5)=>{$[__Oxb6417[0xc]](__Oxb6417[0x15],`${__Oxb6417[0x1a]}${$[__Oxb6417[0x1b]]}${__Oxb6417[0x1c]}${_0x4546x5}${__Oxb6417[0x1d]}`,__Oxb6417[0x15])})[__Oxb6417[0x19]](()=>{$[__Oxb6417[0x18]]()});function showMsg(){return  new Promise((_0x4546x8)=>{$[__Oxb6417[0x21]]($[__Oxb6417[0x1b]],__Oxb6417[0x15],`${__Oxb6417[0x32]}${$[__Oxb6417[0x25]]}${__Oxb6417[0x29]}${$[__Oxb6417[0x27]]}${__Oxb6417[0x33]}${message}${__Oxb6417[0x15]}`);_0x4546x8()})}function userSignIn(){return  new Promise((_0x4546x8)=>{$[__Oxb6417[0x3f]](taskUrl(),(_0x4546xa,_0x4546xb,_0x4546xc)=>{try{if(_0x4546xa){console[__Oxb6417[0xc]](`${__Oxb6417[0x15]}${JSON[__Oxb6417[0x4]](_0x4546xa)}${__Oxb6417[0x15]}`);console[__Oxb6417[0xc]](_0x4546xb);console[__Oxb6417[0xc]](`${__Oxb6417[0x15]}${$[__Oxb6417[0x1b]]}${__Oxb6417[0x34]}`)}else {if(safeGet(_0x4546xc)){_0x4546xc= JSON[__Oxb6417[0x35]](_0x4546xc);if(_0x4546xc[__Oxb6417[0x36]]=== 1){console[__Oxb6417[0xc]](`${__Oxb6417[0x37]}${_0x4546xc[__Oxb6417[0x39]][0x0][__Oxb6417[0x38]]}${__Oxb6417[0x15]}`);message+= `${__Oxb6417[0x37]}${_0x4546xc[__Oxb6417[0x39]][0x0][__Oxb6417[0x38]]}${__Oxb6417[0x3a]}`}else {if(_0x4546xc[__Oxb6417[0x36]]===  -1){console[__Oxb6417[0xc]](`${__Oxb6417[0x3b]}`);message+= `${__Oxb6417[0x3c]}`}else {console[__Oxb6417[0xc]](`${__Oxb6417[0x3d]}${JSON[__Oxb6417[0x4]](_0x4546xc)}${__Oxb6417[0x15]}`)}}}}}catch(e){$[__Oxb6417[0x3e]](e,_0x4546xb)}finally{_0x4546x8()}})})}function taskUrl(){return {url:`${__Oxb6417[0x40]}`,body:__Oxb6417[0x41],headers:{'\x48\x6F\x73\x74':__Oxb6417[0x42],'\x6C\x6F\x70\x2D\x64\x6E':__Oxb6417[0x43],'\x62\x69\x7A\x2D\x74\x79\x70\x65':__Oxb6417[0x44],'\x61\x70\x70\x2D\x6B\x65\x79':__Oxb6417[0x45],'\x61\x63\x63\x65\x73\x73':__Oxb6417[0x46],'\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65':__Oxb6417[0x47],'\x63\x6C\x69\x65\x6E\x74\x69\x6E\x66\x6F':__Oxb6417[0x48],'\x61\x63\x63\x65\x70\x74':__Oxb6417[0x49],'\x6A\x65\x78\x70\x72\x65\x73\x73\x2D\x72\x65\x70\x6F\x72\x74\x2D\x74\x69\x6D\x65':__Oxb6417[0x4a],'\x78\x2D\x72\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x77\x69\x74\x68':__Oxb6417[0x4b],'\x73\x6F\x75\x72\x63\x65\x2D\x63\x6C\x69\x65\x6E\x74':__Oxb6417[0x4c],'\x61\x70\x70\x70\x61\x72\x61\x6D\x73':__Oxb6417[0x4d],'\x76\x65\x72\x73\x69\x6F\x6E':__Oxb6417[0x4e],'\x6F\x72\x69\x67\x69\x6E':__Oxb6417[0x4f],'\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x73\x69\x74\x65':__Oxb6417[0x50],'\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x6D\x6F\x64\x65':__Oxb6417[0x51],'\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x64\x65\x73\x74':__Oxb6417[0x52],'\x72\x65\x66\x65\x72\x65\x72':__Oxb6417[0x53],'\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65':__Oxb6417[0x54],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxb6417[0x6]]()?(process[__Oxb6417[0x0]][__Oxb6417[0x55]]?process[__Oxb6417[0x0]][__Oxb6417[0x55]]:(require(__Oxb6417[0x57])[__Oxb6417[0x56]])):($[__Oxb6417[0xe]](__Oxb6417[0x58])?$[__Oxb6417[0xe]](__Oxb6417[0x58]):__Oxb6417[0x59])}}}function TotalBean(){return  new Promise(async (_0x4546x8)=>{const _0x4546xf={"\x75\x72\x6C":`${__Oxb6417[0x5a]}`,"\x68\x65\x61\x64\x65\x72\x73":{"\x41\x63\x63\x65\x70\x74":__Oxb6417[0x5b],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxb6417[0x5c],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxb6417[0x5d],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxb6417[0x5e],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxb6417[0x5f],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x52\x65\x66\x65\x72\x65\x72":__Oxb6417[0x60],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxb6417[0x6]]()?(process[__Oxb6417[0x0]][__Oxb6417[0x55]]?process[__Oxb6417[0x0]][__Oxb6417[0x55]]:(require(__Oxb6417[0x57])[__Oxb6417[0x56]])):($[__Oxb6417[0xe]](__Oxb6417[0x58])?$[__Oxb6417[0xe]](__Oxb6417[0x58]):__Oxb6417[0x59])}};$[__Oxb6417[0x3f]](_0x4546xf,(_0x4546xa,_0x4546xb,_0x4546xc)=>{try{if(_0x4546xa){console[__Oxb6417[0xc]](`${__Oxb6417[0x15]}${JSON[__Oxb6417[0x4]](_0x4546xa)}${__Oxb6417[0x15]}`);console[__Oxb6417[0xc]](`${__Oxb6417[0x15]}${$[__Oxb6417[0x1b]]}${__Oxb6417[0x34]}`)}else {if(_0x4546xc){_0x4546xc= JSON[__Oxb6417[0x35]](_0x4546xc);if(_0x4546xc[__Oxb6417[0x61]]=== 13){$[__Oxb6417[0x26]]= false;return};$[__Oxb6417[0x27]]= _0x4546xc[__Oxb6417[0x63]][__Oxb6417[0x62]]}else {console[__Oxb6417[0xc]](`${__Oxb6417[0x64]}`)}}}catch(e){$[__Oxb6417[0x3e]](e,_0x4546xb)}finally{_0x4546x8()}})})}function safeGet(_0x4546xc){try{if( typeof JSON[__Oxb6417[0x35]](_0x4546xc)== __Oxb6417[0x65]){return true}}catch(e){console[__Oxb6417[0xc]](e);console[__Oxb6417[0xc]](`${__Oxb6417[0x66]}`);return false}}function jsonParse(_0x4546x12){if( typeof _0x4546x12== __Oxb6417[0x67]){try{return JSON[__Oxb6417[0x35]](_0x4546x12)}catch(e){console[__Oxb6417[0xc]](e);$[__Oxb6417[0x21]]($[__Oxb6417[0x1b]],__Oxb6417[0x15],__Oxb6417[0x68]);return []}}}(function(_0x4546x13,_0x4546x14,_0x4546x15,_0x4546x16,_0x4546x17,_0x4546x18){_0x4546x18= __Oxb6417[0x69];_0x4546x16= function(_0x4546x19){if( typeof alert!== _0x4546x18){alert(_0x4546x19)};if( typeof console!== _0x4546x18){console[__Oxb6417[0xc]](_0x4546x19)}};_0x4546x15= function(_0x4546x1a,_0x4546x13){return _0x4546x1a+ _0x4546x13};_0x4546x17= _0x4546x15(__Oxb6417[0x6a],_0x4546x15(_0x4546x15(__Oxb6417[0x6b],__Oxb6417[0x6c]),__Oxb6417[0x6d]));try{_0x4546x13= __encode;if(!( typeof _0x4546x13!== _0x4546x18&& _0x4546x13=== _0x4546x15(__Oxb6417[0x6e],__Oxb6417[0x6f]))){_0x4546x16(_0x4546x17)}}catch(e){_0x4546x16(_0x4546x17)}})({})
// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
