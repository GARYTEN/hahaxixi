
const $ = new Env('直播红包雨');

const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let jdNotify = true;//是否关闭通知，false打开通知推送，true关闭通知推送
const randomCount = $.isNode() ? 20 : 5;
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxb6416=["\x65\x6E\x76","\x50\x55\x54\x4B\x45\x59","\x62\x65\x35\x30\x32\x36\x61\x38\x2D\x30\x38\x65\x35\x2D\x34\x30\x65\x33\x2D\x39\x38\x31\x31\x2D\x33\x34\x37\x30\x64\x39\x64\x37\x66\x66\x61\x30\x7C\x7C\x36\x33\x62\x33\x34\x33\x66\x31\x2D\x65\x32\x66\x61\x2D\x34\x61\x31\x64\x2D\x62\x32\x39\x31\x2D\x64\x39\x37\x37\x32\x64\x62\x62\x37\x35\x34\x35\x7C\x7C\x7C\x7C\x7C\x62\x30\x32\x62\x66\x63\x37\x63\x2D\x32\x38\x65\x39\x2D\x34\x32\x30\x36\x2D\x61\x33\x38\x35\x2D\x61\x36\x61\x64\x34\x34\x61\x36\x30\x61\x36\x64","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x65\x78\x69\x74","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x6D\x73\x67","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64","\x6C\x65\x6E\x67\x74\x68","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x5C\x6E\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x5C\x6E","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x73\x65\x74\x64\x61\x74\x61","\x67\x65\x74\x54\x69\x6D\x65","\x67\x65\x74\x54\x69\x6D\x65\x7A\x6F\x6E\x65\x4F\x66\x66\x73\x65\x74","\x73\x74\x61\x72\x74\x54\x69\x6D\x65","\x65\x6E\x64\x54\x69\x6D\x65","\u4E0D\u5728\u7EA2\u5305\u96E8\u65F6\u95F4\u4E4B\u5185","\u3010\u4EAC\u4E1C\u8D26\u53F7","\x5C\x6E","\x6C\x69\x76\x65\x41\x63\x74\x69\x76\x69\x74\x79\x56\x38\x34\x32","\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x70\x61\x72\x73\x65","\x69\x63\x6F\x6E\x41\x72\x65\x61","\x64\x61\x74\x61","\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6C","\x69\x64\x3D","\x73\x75\x62\x73\x74\x72","\u4E0B\u4E00\u573A\u7EA2\u5305\u96E8\u5F00\u59CB\u65F6\u95F4\uFF1A","\u4E0B\u4E00\u573A\u7EA2\u5305\u96E8\u7ED3\u675F\u65F6\u95F4\uFF1A","\x6C\x6F\x67\x45\x72\x72","\x70\x6F\x73\x74","\x6E\x6F\x61\x68\x52\x65\x64\x52\x61\x69\x6E\x4C\x6F\x74\x74\x65\x72\x79","\x73\x75\x62\x43\x6F\x64\x65","\x30","\u9886\u53D6\u6210\u529F\uFF0C\u83B7\u5F97","\x6C\x6F\x74\x74\x65\x72\x79\x52\x65\x73\x75\x6C\x74","\x65\x78\x74","\x6A\x50\x65\x61\x73\x4C\x69\x73\x74","\x3A","\x71\x75\x61\x6E\x74\x69\x74\x79","\u4EAC\u8C46\x5C\x6E","\x38","\u4ECA\u65E5\u6B21\u6570\u5DF2\u6EE1","\u9886\u53D6\u5931\u8D25\uFF0C\u4ECA\u65E5\u5DF2\u7B7E\u5230\x5C\x6E","\u5F02\u5E38\uFF1A","\x67\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D","\x62\x6F\x64\x79\x3D\x25\x37\x42\x25\x32\x32\x6C\x69\x76\x65\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x32\x39\x34\x30\x35\x38\x35\x25\x32\x32\x25\x37\x44\x26\x62\x75\x69\x6C\x64\x3D\x31\x36\x37\x34\x30\x38\x26\x63\x6C\x69\x65\x6E\x74\x3D\x61\x70\x70\x6C\x65\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x64\x5F\x62\x72\x61\x6E\x64\x3D\x61\x70\x70\x6C\x65\x26\x64\x5F\x6D\x6F\x64\x65\x6C\x3D\x69\x50\x68\x6F\x6E\x65\x31\x30\x25\x32\x43\x32\x26\x65\x69\x64\x3D\x65\x69\x64\x49\x46\x33\x43\x46\x30\x31\x31\x32\x52\x54\x49\x79\x51\x54\x56\x47\x51\x54\x45\x74\x52\x44\x56\x43\x51\x79\x30\x30\x51\x67\x25\x33\x44\x25\x33\x44\x36\x48\x41\x4A\x61\x39\x25\x32\x42\x2F\x34\x56\x65\x64\x67\x6F\x36\x32\x78\x4B\x51\x52\x6F\x41\x62\x34\x37\x25\x32\x42\x70\x79\x75\x31\x45\x51\x73\x2F\x36\x39\x37\x31\x61\x55\x76\x6B\x30\x42\x51\x41\x73\x5A\x4C\x79\x51\x41\x59\x65\x69\x64\x25\x32\x42\x50\x67\x62\x4A\x39\x42\x51\x6F\x59\x31\x52\x46\x74\x6B\x4C\x43\x4C\x50\x35\x4F\x4D\x71\x55\x26\x69\x73\x42\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3D\x59\x26\x6A\x6F\x79\x63\x69\x6F\x75\x73\x3D\x31\x39\x33\x26\x6F\x70\x65\x6E\x75\x64\x69\x64\x3D\x35\x33\x66\x34\x64\x39\x63\x37\x30\x63\x31\x63\x38\x31\x66\x31\x63\x38\x37\x36\x39\x64\x32\x66\x65\x32\x66\x65\x66\x30\x31\x39\x30\x61\x33\x66\x36\x30\x64\x32\x26\x73\x63\x6F\x70\x65\x3D\x30\x31\x26\x73\x69\x67\x6E\x3D\x37\x65\x39\x37\x31\x36\x30\x35\x64\x38\x61\x66\x39\x62\x36\x65\x34\x30\x66\x65\x62\x34\x31\x65\x36\x32\x38\x39\x33\x61\x36\x33\x26\x73\x74\x3D\x31\x36\x30\x37\x33\x38\x39\x39\x32\x39\x31\x35\x31\x26\x73\x76\x3D\x31\x31\x31\x26\x75\x74\x73\x3D\x30\x66\x33\x31\x54\x56\x52\x6A\x42\x53\x73\x78\x74\x69\x43\x75\x68\x54\x33\x2F\x30\x53\x6E\x77\x33\x6F\x56\x74\x78\x6B\x6F\x56\x6A\x50\x25\x32\x42\x6E\x49\x49\x71\x74\x52\x42\x56\x5A\x36\x56\x49\x48\x75\x62\x34\x33\x48\x2F\x74\x72\x49\x6B\x56\x35\x62\x25\x32\x42\x67\x71\x6F\x43\x51\x37\x6D\x62\x74\x74\x53\x45\x50\x63\x61\x25\x32\x42\x4F\x58\x73\x52\x63\x62\x78\x59\x64\x61\x39\x43\x79\x50\x45\x57\x36\x42\x4F\x6C\x61\x43\x36\x4B\x72\x66\x48\x6E\x46\x62\x4F\x6D\x4B\x79\x7A\x63\x42\x53\x73\x31\x43\x70\x55\x66\x37\x51\x62\x46\x68\x51\x72\x65\x58\x44\x5A\x5A\x6A\x6F\x34\x34\x74\x43\x48\x32\x47\x4B\x4C\x6C\x47\x35\x78\x68\x39\x53\x62\x45\x2F\x48\x67\x67\x74\x2F\x2F\x47\x6F\x32\x37\x68\x77\x37\x39\x51\x64\x4A\x39\x32\x25\x32\x42\x52\x46\x58\x47\x4F\x45\x77\x4E\x31\x33\x61\x5A\x75\x25\x32\x42\x72\x6A\x48\x79\x35\x30\x63\x6E\x6D\x66\x48\x6D\x47\x38\x6F\x55\x30\x35\x61\x4A\x36\x76\x63\x6A\x41\x25\x33\x44\x25\x33\x44","\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x2A\x2F\x2A","\x4A\x44\x34\x69\x50\x68\x6F\x6E\x65\x2F\x31\x36\x37\x34\x30\x38\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x69\x4F\x53\x20\x31\x34\x2E\x32\x3B\x20\x53\x63\x61\x6C\x65\x2F\x33\x2E\x30\x30\x29","\x7A\x68\x2D\x48\x61\x6E\x73\x2D\x4A\x50\x3B\x71\x3D\x31\x2C\x20\x65\x6E\x2D\x4A\x50\x3B\x71\x3D\x30\x2E\x39\x2C\x20\x7A\x68\x2D\x48\x61\x6E\x74\x2D\x54\x57\x3B\x71\x3D\x30\x2E\x38\x2C\x20\x6A\x61\x2D\x4A\x50\x3B\x71\x3D\x30\x2E\x37\x2C\x20\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x36","\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D","\x26\x62\x6F\x64\x79\x3D","\x26\x63\x6C\x69\x65\x6E\x74\x3D\x77\x68\x35\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x2E\x30\x2E\x30\x26\x5F\x3D","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x7A\x68\x2D\x63\x6E","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x35\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x61\x63\x74\x69\x76\x65\x2F\x72\x65\x64\x72\x61\x69\x6E\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x32\x2E\x32\x3B\x31\x34\x2E\x32\x3B\x25\x45\x34\x25\x42\x41\x25\x41\x43\x25\x45\x34\x25\x42\x38\x25\x39\x43\x2F\x39\x2E\x32\x2E\x32\x20\x43\x46\x4E\x65\x74\x77\x6F\x72\x6B\x2F\x31\x32\x30\x36\x20\x44\x61\x72\x77\x69\x6E\x2F\x32\x30\x2E\x31\x2E\x30","\x4A\x44\x55\x41","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x2F\x69\x6E\x66\x6F\x2F\x51\x75\x65\x72\x79\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x73\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x2F\x6A\x69\x6E\x67\x64\x6F\x75\x2F\x6D\x79\x2E\x73\x68\x74\x6D\x6C\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x72\x65\x74\x63\x6F\x64\x65","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\x62\x61\x73\x65","\u4EAC\u4E1C\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E","\x6F\x62\x6A\x65\x63\x74","\u4EAC\u4E1C\u670D\u52A1\u5668\u8BBF\u95EE\u6570\u636E\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u81EA\u8EAB\u8BBE\u5907\u7F51\u7EDC\u60C5\u51B5","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const tok=undefined!= process[__Oxb6416[0x0]]&& undefined!= process[__Oxb6416[0x0]][__Oxb6416[0x1]]&& JSON[__Oxb6416[0x4]](process[__Oxb6416[0x0]].PUTKEY)[__Oxb6416[0x3]](__Oxb6416[0x2])>  -1?true:false;if(!tok){process[__Oxb6416[0x5]](0)};if($[__Oxb6416[0x6]]()){Object[__Oxb6416[0x9]](jdCookieNode)[__Oxb6416[0x8]]((_0x28e3x2)=>{cookiesArr[__Oxb6416[0x7]](jdCookieNode[_0x28e3x2])});if(process[__Oxb6416[0x0]][__Oxb6416[0xa]]&& process[__Oxb6416[0x0]][__Oxb6416[0xa]]=== __Oxb6416[0xb]){console[__Oxb6416[0xc]]= ()=>{}}}else {cookiesArr[__Oxb6416[0x7]](...[$[__Oxb6416[0xe]](__Oxb6416[0xd]),$[__Oxb6416[0xe]](__Oxb6416[0xf])])};const JD_API_HOST=__Oxb6416[0x10];!(async ()=>{if(!cookiesArr[0x0]){$[__Oxb6416[0x1b]]($[__Oxb6416[0x15]],__Oxb6416[0x19],__Oxb6416[0x1a],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxb6416[0x1a]});return}; await getRedRain();if(!$[__Oxb6416[0x1c]]){return};for(let _0x28e3x5=0;_0x28e3x5< cookiesArr[__Oxb6416[0x1d]];_0x28e3x5++){if(cookiesArr[_0x28e3x5]){cookie= cookiesArr[_0x28e3x5];$[__Oxb6416[0x1e]]= decodeURIComponent(cookie[__Oxb6416[0x1f]](/pt_pin=(.+?);/)&& cookie[__Oxb6416[0x1f]](/pt_pin=(.+?);/)[0x1]);$[__Oxb6416[0x20]]= _0x28e3x5+ 1;$[__Oxb6416[0x21]]= true;$[__Oxb6416[0x22]]= __Oxb6416[0x13];message= __Oxb6416[0x13]; await TotalBean();console[__Oxb6416[0xc]](`${__Oxb6416[0x23]}${$[__Oxb6416[0x20]]}${__Oxb6416[0x24]}${$[__Oxb6416[0x22]]|| $[__Oxb6416[0x1e]]}${__Oxb6416[0x25]}`);if(!$[__Oxb6416[0x21]]){$[__Oxb6416[0x1b]]($[__Oxb6416[0x15]],`${__Oxb6416[0x26]}`,`${__Oxb6416[0x27]}${$[__Oxb6416[0x20]]}${__Oxb6416[0x28]}${$[__Oxb6416[0x22]]|| $[__Oxb6416[0x1e]]}${__Oxb6416[0x29]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxb6416[0x1a]});if($[__Oxb6416[0x6]]()){ await notify[__Oxb6416[0x2c]](`${__Oxb6416[0x13]}${$[__Oxb6416[0x15]]}${__Oxb6416[0x2a]}${$[__Oxb6416[0x1e]]}${__Oxb6416[0x13]}`,`${__Oxb6416[0x27]}${$[__Oxb6416[0x20]]}${__Oxb6416[0x28]}${$[__Oxb6416[0x1e]]}${__Oxb6416[0x2b]}`)}else {$[__Oxb6416[0x2d]](__Oxb6416[0x13],`${__Oxb6416[0xd]}${_0x28e3x5?_0x28e3x5+ 1:__Oxb6416[0x13]}${__Oxb6416[0x13]}`)};continue};let _0x28e3x6= new Date()[__Oxb6416[0x2e]]()+  new Date()[__Oxb6416[0x2f]]()* 60* 1000+ 8* 60* 60* 1000;if($[__Oxb6416[0x30]]<= _0x28e3x6&& _0x28e3x6< $[__Oxb6416[0x31]]){ await receiveRedRain()}else {console[__Oxb6416[0xc]](`${__Oxb6416[0x32]}`);message+= `${__Oxb6416[0x32]}`}; await showMsg()}}})()[__Oxb6416[0x18]]((_0x28e3x4)=>{$[__Oxb6416[0xc]](__Oxb6416[0x13],`${__Oxb6416[0x14]}${$[__Oxb6416[0x15]]}${__Oxb6416[0x16]}${_0x28e3x4}${__Oxb6416[0x17]}`,__Oxb6416[0x13])})[__Oxb6416[0x12]](()=>{$[__Oxb6416[0x11]]()});function showMsg(){return  new Promise((_0x28e3x8)=>{$[__Oxb6416[0x1b]]($[__Oxb6416[0x15]],__Oxb6416[0x13],`${__Oxb6416[0x33]}${$[__Oxb6416[0x20]]}${__Oxb6416[0x24]}${$[__Oxb6416[0x22]]}${__Oxb6416[0x34]}${message}${__Oxb6416[0x13]}`);_0x28e3x8()})}function getRedRain(){return  new Promise((_0x28e3x8)=>{$[__Oxb6416[0x40]](taskPostUrl(__Oxb6416[0x35]),(_0x28e3xa,_0x28e3xb,_0x28e3xc)=>{try{if(_0x28e3xa){console[__Oxb6416[0xc]](`${__Oxb6416[0x13]}${JSON[__Oxb6416[0x4]](_0x28e3xa)}${__Oxb6416[0x13]}`);console[__Oxb6416[0xc]](`${__Oxb6416[0x13]}${$[__Oxb6416[0x15]]}${__Oxb6416[0x36]}`)}else {if(safeGet(_0x28e3xc)){_0x28e3xc= JSON[__Oxb6416[0x37]](_0x28e3xc);let _0x28e3xd=_0x28e3xc[__Oxb6416[0x39]][__Oxb6416[0x38]][0x0];let _0x28e3xe=_0x28e3xc[__Oxb6416[0x39]][__Oxb6416[0x38]][0x0][__Oxb6416[0x39]][__Oxb6416[0x3a]];$[__Oxb6416[0x1c]]= _0x28e3xe[__Oxb6416[0x3c]](_0x28e3xe[__Oxb6416[0x3]](__Oxb6416[0x3b])+ 3);$[__Oxb6416[0x30]]= _0x28e3xd[__Oxb6416[0x30]];$[__Oxb6416[0x31]]= _0x28e3xd[__Oxb6416[0x31]];console[__Oxb6416[0xc]](`${__Oxb6416[0x3d]}${ new Date(_0x28e3xd[__Oxb6416[0x30]])}${__Oxb6416[0x13]}`);console[__Oxb6416[0xc]](`${__Oxb6416[0x3e]}${ new Date(_0x28e3xd[__Oxb6416[0x31]])}${__Oxb6416[0x13]}`)}}}catch(e){$[__Oxb6416[0x3f]](e,_0x28e3xb)}finally{_0x28e3x8()}})})}function receiveRedRain(){return  new Promise((_0x28e3x8)=>{const _0x28e3x10={"\x61\x63\x74\x49\x64":$[__Oxb6416[0x1c]]};$[__Oxb6416[0x4f]](taskUrl(__Oxb6416[0x41],_0x28e3x10),(_0x28e3xa,_0x28e3xb,_0x28e3xc)=>{try{if(_0x28e3xa){console[__Oxb6416[0xc]](`${__Oxb6416[0x13]}${JSON[__Oxb6416[0x4]](_0x28e3xa)}${__Oxb6416[0x13]}`);console[__Oxb6416[0xc]](`${__Oxb6416[0x13]}${$[__Oxb6416[0x15]]}${__Oxb6416[0x36]}`)}else {if(safeGet(_0x28e3xc)){_0x28e3xc= JSON[__Oxb6416[0x37]](_0x28e3xc);if(_0x28e3xc[__Oxb6416[0x42]]=== __Oxb6416[0x43]){console[__Oxb6416[0xc]](`${__Oxb6416[0x44]}${JSON[__Oxb6416[0x4]](_0x28e3xc[__Oxb6416[0x45]])}${__Oxb6416[0x13]}`);message+= `${__Oxb6416[0x13]}${_0x28e3xc[__Oxb6416[0x45]][__Oxb6416[0x47]][0x0][__Oxb6416[0x46]]}${__Oxb6416[0x48]}${(_0x28e3xc[__Oxb6416[0x45]][__Oxb6416[0x47]][0x0][__Oxb6416[0x49]])}${__Oxb6416[0x4a]}`}else {if(_0x28e3xc[__Oxb6416[0x42]]=== __Oxb6416[0x4b]){console[__Oxb6416[0xc]](`${__Oxb6416[0x4c]}`);message+= `${__Oxb6416[0x4d]}`}else {console[__Oxb6416[0xc]](`${__Oxb6416[0x4e]}${JSON[__Oxb6416[0x4]](_0x28e3xc)}${__Oxb6416[0x13]}`)}}}}}catch(e){$[__Oxb6416[0x3f]](e,_0x28e3xb)}finally{_0x28e3x8()}})})}function taskPostUrl(_0x28e3x12,_0x28e3x10= {}){return {url:`${__Oxb6416[0x50]}${_0x28e3x12}${__Oxb6416[0x13]}`,body:__Oxb6416[0x51],headers:{'\x48\x6F\x73\x74':__Oxb6416[0x52],'\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65':__Oxb6416[0x53],'\x61\x63\x63\x65\x70\x74':__Oxb6416[0x54],'\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74':__Oxb6416[0x55],'\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65':__Oxb6416[0x56]}}}function taskUrl(_0x28e3x12,_0x28e3x10= {}){return {url:`${__Oxb6416[0x13]}${JD_API_HOST}${__Oxb6416[0x57]}${_0x28e3x12}${__Oxb6416[0x58]}${escape(JSON[__Oxb6416[0x4]](_0x28e3x10))}${__Oxb6416[0x59]}${ new Date()[__Oxb6416[0x2e]]()+  new Date()[__Oxb6416[0x2f]]()* 60* 1000+ 8* 60* 60* 1000}${__Oxb6416[0x13]}`,headers:{"\x41\x63\x63\x65\x70\x74":__Oxb6416[0x54],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxb6416[0x5a],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxb6416[0x5b],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxb6416[0x5c],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxb6416[0x53],"\x48\x6F\x73\x74":__Oxb6416[0x52],"\x52\x65\x66\x65\x72\x65\x72":__Oxb6416[0x5d],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxb6416[0x6]]()?(process[__Oxb6416[0x0]][__Oxb6416[0x5e]]?process[__Oxb6416[0x0]][__Oxb6416[0x5e]]:__Oxb6416[0x5f]):($[__Oxb6416[0xe]](__Oxb6416[0x60])?$[__Oxb6416[0xe]](__Oxb6416[0x60]):__Oxb6416[0x5f])}}}function TotalBean(){return  new Promise(async (_0x28e3x8)=>{const _0x28e3x15={"\x75\x72\x6C":`${__Oxb6416[0x61]}`,"\x68\x65\x61\x64\x65\x72\x73":{"\x41\x63\x63\x65\x70\x74":__Oxb6416[0x62],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxb6416[0x53],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxb6416[0x5a],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxb6416[0x5b],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxb6416[0x5c],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x52\x65\x66\x65\x72\x65\x72":__Oxb6416[0x63],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxb6416[0x6]]()?(process[__Oxb6416[0x0]][__Oxb6416[0x5e]]?process[__Oxb6416[0x0]][__Oxb6416[0x5e]]:__Oxb6416[0x5f]):($[__Oxb6416[0xe]](__Oxb6416[0x60])?$[__Oxb6416[0xe]](__Oxb6416[0x60]):__Oxb6416[0x5f])}};$[__Oxb6416[0x40]](_0x28e3x15,(_0x28e3xa,_0x28e3xb,_0x28e3xc)=>{try{if(_0x28e3xa){console[__Oxb6416[0xc]](`${__Oxb6416[0x13]}${JSON[__Oxb6416[0x4]](_0x28e3xa)}${__Oxb6416[0x13]}`);console[__Oxb6416[0xc]](`${__Oxb6416[0x13]}${$[__Oxb6416[0x15]]}${__Oxb6416[0x36]}`)}else {if(_0x28e3xc){_0x28e3xc= JSON[__Oxb6416[0x37]](_0x28e3xc);if(_0x28e3xc[__Oxb6416[0x64]]=== 13){$[__Oxb6416[0x21]]= false;return};$[__Oxb6416[0x22]]= _0x28e3xc[__Oxb6416[0x66]][__Oxb6416[0x65]]}else {console[__Oxb6416[0xc]](`${__Oxb6416[0x67]}`)}}}catch(e){$[__Oxb6416[0x3f]](e,_0x28e3xb)}finally{_0x28e3x8()}})})}function safeGet(_0x28e3xc){try{if( typeof JSON[__Oxb6416[0x37]](_0x28e3xc)== __Oxb6416[0x68]){return true}}catch(e){console[__Oxb6416[0xc]](e);console[__Oxb6416[0xc]](`${__Oxb6416[0x69]}`);return false}}(function(_0x28e3x17,_0x28e3x18,_0x28e3x19,_0x28e3x1a,_0x28e3x1b,_0x28e3x1c){_0x28e3x1c= __Oxb6416[0x6a];_0x28e3x1a= function(_0x28e3x1d){if( typeof alert!== _0x28e3x1c){alert(_0x28e3x1d)};if( typeof console!== _0x28e3x1c){console[__Oxb6416[0xc]](_0x28e3x1d)}};_0x28e3x19= function(_0x28e3x1e,_0x28e3x17){return _0x28e3x1e+ _0x28e3x17};_0x28e3x1b= _0x28e3x19(__Oxb6416[0x6b],_0x28e3x19(_0x28e3x19(__Oxb6416[0x6c],__Oxb6416[0x6d]),__Oxb6416[0x6e]));try{_0x28e3x17= __encode;if(!( typeof _0x28e3x17!== _0x28e3x1c&& _0x28e3x17=== _0x28e3x19(__Oxb6416[0x6f],__Oxb6416[0x70]))){_0x28e3x1a(_0x28e3x1b)}}catch(e){_0x28e3x1a(_0x28e3x1b)}})({})

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
