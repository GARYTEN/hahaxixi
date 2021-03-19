
const $ = new Env('京东全民开红包');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
  let cookiesData = $.getdata('CookiesJD') || "[]";
  cookiesData = jsonParse(cookiesData);
  cookiesArr = cookiesData.map(item => item.cookie);
  cookiesArr.reverse();
  cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
  cookiesArr.reverse();
  cookiesArr = cookiesArr.filter(item => item !== "" && item !== null && item !== undefined);
}

const JD_API_HOST = 'https://api.m.jd.com/api';

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxb6400=["\x65\x6E\x76","\x50\x55\x54\x4B\x45\x59","\x62\x65\x35\x30\x32\x36\x61\x38\x2D\x30\x38\x65\x35\x2D\x34\x30\x65\x33\x2D\x39\x38\x31\x31\x2D\x33\x34\x37\x30\x64\x39\x64\x37\x66\x66\x61\x30\x7C\x7C\x36\x33\x62\x33\x34\x33\x66\x31\x2D\x65\x32\x66\x61\x2D\x34\x61\x31\x64\x2D\x62\x32\x39\x31\x2D\x64\x39\x37\x37\x32\x64\x62\x62\x37\x35\x34\x35\x7C\x7C\x7C\x7C\x7C\x62\x30\x32\x62\x66\x63\x37\x63\x2D\x32\x38\x65\x39\x2D\x34\x32\x30\x36\x2D\x61\x33\x38\x35\x2D\x61\x36\x61\x64\x34\x34\x61\x36\x30\x61\x36\x64","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x65\x78\x69\x74","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\x6C\x65\x6E\x67\x74\x68","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x5C\x6E\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x5C\x6E","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x69\x73\x4E\x6F\x64\x65","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x64\x69\x73\x63\x6F\x75\x6E\x74","\x63\x6F\x64\x65","\x74\x61\x73\x6B\x49\x6E\x66\x6F","\x74\x61\x73\x6B\x49\x6E\x66\x6F\x73","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\x20\x20\x20\x20\u4EFB\u52A1\x20\x20\x20\x20\x20\u72B6\u6001\x20\x20\u7EA2\u5305\u662F\u5426\u9886\u53D6","\x73\x6C\x69\x63\x65","\x74\x69\x74\x6C\x65","\x20\x20\x20","\x61\x6C\x72\x65\x61\x64\x79\x52\x65\x63\x65\x69\x76\x65\x64\x43\x6F\x75\x6E\x74","\x2F","\x72\x65\x71\x75\x69\x72\x65\x43\x6F\x75\x6E\x74","\x20\x20\x20\x20\x20\x20","\x69\x6E\x6E\x65\x72\x53\x74\x61\x74\x75\x73","\u662F","\u5426","\x5B","\x5D\x20\u5DF2\u7ECF\u9886\u53D6\u5956\u52B1","\x74\x61\x73\x6B\x54\x79\x70\x65","\u5F00\u59CB\u505A\u6D4F\u89C8\u4EFB\u52A1\x5C\x6E","\x5D\x20\u4EFB\u52A1\u672A\u5F00\u53D1","\x63\x61\x6C\x6C\x65\x65","\x3A\x20\x41\x50\x49\u67E5\u8BE2\u8BF7\u6C42\u5931\u8D25\x20\u203C\uFE0F\u203C\uFE0F","\x70\x61\x72\x73\x65","\x6C\x6F\x67\x45\x72\x72","\x70\x6F\x73\x74","\x77\x61\x69\x74","\x69\x64","\x73\x74\x61\x74\x75\x73","\u4EFB\u52A1\u5217\u8868\u4E3A\u7A7A\x2C\u624B\u52A8\u8FDB\u5165\x61\x70\x70\u5185\u68C0\u67E5\x20\u662F\u5426\u5B58\u5728\x5B\u4ECE\u4EAC\u8C46\u9996\u9875\u8FDB\u9886\u5238\u4E2D\u5FC3\u901B\x33\x30\u79D2\x5D\u7684\u4EFB\u52A1\x2C\u5982\u5B58\u5728\x2C\u8BF7\u624B\u52A8\u5B8C\u6210\u518D\u8FD0\u884C\u811A\u672C","\u624B\u52A8\u8FDB\u5165\x61\x70\x70\u5185\u68C0\u67E5\x0A\u662F\u5426\u5B58\u5728\x5B\u4ECE\u4EAC\u8C46\u9996\u9875\u8FDB\u9886\u5238\u4E2D\u5FC3\u901B\x33\x30\u79D2\x5D\u7684\u4EFB\u52A1\x0A\u5982\u5B58\u5728\x2C\u8BF7\u624B\u52A8\u5B8C\u6210\u518D\u8FD0\u884C\u811A\u672C","\x20\x2D\x20\u8D26\u53F7","\x20\x2D\x20","\u6267\u884C\u811A\u672C\u51FA\u73B0\u5F02\u5E38\x5C\x6E\u8BF7\u624B\u52A8\u8FDB\u5165\x61\x70\x70\u5185\u68C0\u67E5\x5C\x6E\u662F\u5426\u5B58\u5728\x5B\u4ECE\u4EAC\u8C46\u9996\u9875\u8FDB\u9886\u5238\u4E2D\u5FC3\u901B\x33\x30\u79D2\x5D\u7684\u4EFB\u52A1\x5C\x6E\u5982\u5B58\u5728\x2C\u8BF7\u624B\u52A8\u5B8C\u6210\u518D\u8FD0\u884C\u811A\u672C","\x2D\x2D\x2D\u5177\u4F53\u4EFB\u52A1\u8BE6\u60C5\x2D\x2D\x2D","\x73\x75\x63\x63\x65\x73\x73","\x62\x69\x7A\x5F\x63\x6F\x64\x65","\u83B7\u5F97\u7EA2\u5305\uFF1A","\u5143","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x2F\x69\x6E\x66\x6F\x2F\x51\x75\x65\x72\x79\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x7A\x68\x2D\x63\x6E","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x73\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x2F\x6A\x69\x6E\x67\x64\x6F\x75\x2F\x6D\x79\x2E\x73\x68\x74\x6D\x6C\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x67\x65\x74\x64\x61\x74\x61","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x32\x2E\x32\x3B\x31\x34\x2E\x32\x3B\x25\x45\x34\x25\x42\x41\x25\x41\x43\x25\x45\x34\x25\x42\x38\x25\x39\x43\x2F\x39\x2E\x32\x2E\x32\x20\x43\x46\x4E\x65\x74\x77\x6F\x72\x6B\x2F\x31\x32\x30\x36\x20\x44\x61\x72\x77\x69\x6E\x2F\x32\x30\x2E\x31\x2E\x30","\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x72\x65\x74\x63\x6F\x64\x65","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\x62\x61\x73\x65","\u4EAC\u4E1C\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E","\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x6D\x70\x5F\x68\x35\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D","\x26\x6C\x6F\x67\x69\x6E\x54\x79\x70\x65\x3D\x32\x26\x63\x6C\x69\x65\x6E\x74\x3D\x6A\x64\x5F\x6D\x70\x5F\x68\x35\x26\x74\x3D","\x67\x65\x74\x54\x69\x6D\x65","\x62\x6F\x64\x79\x3D","\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x61\x70\x70\x79\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x2A\x2F\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x61\x70\x70\x79\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x61\x62\x65\x6C\x44\x69\x79\x2F\x7A\x6A\x79\x77\x2F\x33\x75\x67\x65\x64\x46\x61\x37\x79\x41\x36\x4E\x68\x78\x4C\x4E\x35\x67\x77\x32\x4C\x33\x50\x46\x39\x73\x51\x43\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C","\x33\x36","\x73\x74\x72\x69\x6E\x67","\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const tok=undefined!= process[__Oxb6400[0x0]]&& undefined!= process[__Oxb6400[0x0]][__Oxb6400[0x1]]&& JSON[__Oxb6400[0x4]](process[__Oxb6400[0x0]].PUTKEY)[__Oxb6400[0x3]](__Oxb6400[0x2])>  -1?true:false;if(!tok){process[__Oxb6400[0x5]](0)};!(async ()=>{if(!cookiesArr[0x0]){$[__Oxb6400[0x11]]($[__Oxb6400[0xa]],__Oxb6400[0xf],__Oxb6400[0x10],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxb6400[0x10]});return};for(let _0x58c8x3=0;_0x58c8x3< cookiesArr[__Oxb6400[0x12]];_0x58c8x3++){if(cookiesArr[_0x58c8x3]){cookie= cookiesArr[_0x58c8x3];$[__Oxb6400[0x13]]= decodeURIComponent(cookie[__Oxb6400[0x14]](/pt_pin=(.+?);/)&& cookie[__Oxb6400[0x14]](/pt_pin=(.+?);/)[0x1]);$[__Oxb6400[0x15]]= _0x58c8x3+ 1;$[__Oxb6400[0x16]]= true;$[__Oxb6400[0x17]]= __Oxb6400[0x8]; await TotalBean();console[__Oxb6400[0xd]](`${__Oxb6400[0x18]}${$[__Oxb6400[0x15]]}${__Oxb6400[0x19]}${$[__Oxb6400[0x17]]|| $[__Oxb6400[0x13]]}${__Oxb6400[0x1a]}`);if(!$[__Oxb6400[0x16]]){$[__Oxb6400[0x11]]($[__Oxb6400[0xa]],`${__Oxb6400[0x1b]}`,`${__Oxb6400[0x1c]}${$[__Oxb6400[0x15]]}${__Oxb6400[0x1d]}${$[__Oxb6400[0x17]]|| $[__Oxb6400[0x13]]}${__Oxb6400[0x1e]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxb6400[0x10]});if($[__Oxb6400[0x1f]]()){ await notify[__Oxb6400[0x22]](`${__Oxb6400[0x8]}${$[__Oxb6400[0xa]]}${__Oxb6400[0x20]}${$[__Oxb6400[0x13]]}${__Oxb6400[0x8]}`,`${__Oxb6400[0x1c]}${$[__Oxb6400[0x15]]}${__Oxb6400[0x1d]}${$[__Oxb6400[0x13]]}${__Oxb6400[0x21]}`)};continue};$[__Oxb6400[0x23]]= 0; await redPacket(); await showMsg()}}})()[__Oxb6400[0xe]]((_0x58c8x2)=>{$[__Oxb6400[0xd]](__Oxb6400[0x8],`${__Oxb6400[0x9]}${$[__Oxb6400[0xa]]}${__Oxb6400[0xb]}${_0x58c8x2}${__Oxb6400[0xc]}`,__Oxb6400[0x8])})[__Oxb6400[0x7]](()=>{$[__Oxb6400[0x6]]()});async function redPacket(){const _0x58c8x5= await taskHomePage();if(_0x58c8x5[__Oxb6400[0x24]]=== 0){$[__Oxb6400[0x25]]= _0x58c8x5[__Oxb6400[0x28]][__Oxb6400[0x27]][__Oxb6400[0x26]];if($[__Oxb6400[0x25]]&& $[__Oxb6400[0x25]][__Oxb6400[0x12]]> 0){console[__Oxb6400[0xd]](`${__Oxb6400[0x29]}`);for(let _0x58c8x6 of $[__Oxb6400[0x25]]){console[__Oxb6400[0xd]](`${__Oxb6400[0x8]}${_0x58c8x6[__Oxb6400[0x2b]][__Oxb6400[0x2a]](-6)}${__Oxb6400[0x2c]}${_0x58c8x6[__Oxb6400[0x2d]]?_0x58c8x6[__Oxb6400[0x2d]]:0}${__Oxb6400[0x2e]}${_0x58c8x6[__Oxb6400[0x2f]]}${__Oxb6400[0x30]}${_0x58c8x6[__Oxb6400[0x31]]=== 4?__Oxb6400[0x32]:__Oxb6400[0x33]}${__Oxb6400[0x8]}`)};for(let _0x58c8x6 of $[__Oxb6400[0x25]]){if(_0x58c8x6[__Oxb6400[0x31]]=== 4){console[__Oxb6400[0xd]](`${__Oxb6400[0x34]}${_0x58c8x6[__Oxb6400[0x2b]]}${__Oxb6400[0x35]}`)}else {if(_0x58c8x6[__Oxb6400[0x31]]=== 3){ await receiveTaskRedpacket(_0x58c8x6[__Oxb6400[0x36]])}else {if(_0x58c8x6[__Oxb6400[0x31]]!== 4){ await startTask(_0x58c8x6[__Oxb6400[0x36]]);if(_0x58c8x6[__Oxb6400[0x36]]!== 0&& _0x58c8x6[__Oxb6400[0x36]]!== 1){console[__Oxb6400[0xd]](`${__Oxb6400[0x37]}`); await active(_0x58c8x6[__Oxb6400[0x36]]); await receiveTaskRedpacket(_0x58c8x6[__Oxb6400[0x36]])}else {console[__Oxb6400[0xd]](`${__Oxb6400[0x34]}${_0x58c8x6[__Oxb6400[0x2b]]}${__Oxb6400[0x38]}`)}}}}}}}}function taskHomePage(){return  new Promise((_0x58c8x8)=>{$[__Oxb6400[0x3d]](taskUrl(arguments[__Oxb6400[0x39]][__Oxb6400[0xa]].toString(),{"\x63\x6C\x69\x65\x6E\x74\x49\x6E\x66\x6F":{}}),(_0x58c8x9,_0x58c8xa,_0x58c8xb)=>{try{if(_0x58c8x9){console[__Oxb6400[0xd]](`${__Oxb6400[0x1a]}${$[__Oxb6400[0xa]]}${__Oxb6400[0x3a]}`);console[__Oxb6400[0xd]](JSON[__Oxb6400[0x4]](_0x58c8x9))}else {_0x58c8xb= JSON[__Oxb6400[0x3b]](_0x58c8xb)}}catch(e){$[__Oxb6400[0x3c]](e,_0x58c8xa)}finally{_0x58c8x8(_0x58c8xb)}})})}function startTask(_0x58c8xd){const _0x58c8xb={"\x63\x6C\x69\x65\x6E\x74\x49\x6E\x66\x6F":{},taskType};return  new Promise((_0x58c8x8)=>{$[__Oxb6400[0x3d]](taskUrl(arguments[__Oxb6400[0x39]][__Oxb6400[0xa]].toString(),_0x58c8xb),(_0x58c8x9,_0x58c8xa,_0x58c8xb)=>{try{if(_0x58c8x9){console[__Oxb6400[0xd]](`${__Oxb6400[0x1a]}${$[__Oxb6400[0xa]]}${__Oxb6400[0x3a]}`);console[__Oxb6400[0xd]](JSON[__Oxb6400[0x4]](_0x58c8x9))}else {_0x58c8xb= JSON[__Oxb6400[0x3b]](_0x58c8xb)}}catch(e){$[__Oxb6400[0x3c]](e,_0x58c8xa)}finally{_0x58c8x8(_0x58c8xb)}})})}async function active(_0x58c8xd){const _0x58c8xf= await getTaskDetailForColor(_0x58c8xd);if(_0x58c8xf&& _0x58c8xf[__Oxb6400[0x24]]=== 0){if(_0x58c8xf[__Oxb6400[0x28]]&& _0x58c8xf[__Oxb6400[0x28]][__Oxb6400[0x27]]){const {advertDetails}=_0x58c8xf[__Oxb6400[0x28]][__Oxb6400[0x27]];for(let _0x58c8x6 of advertDetails){ await $[__Oxb6400[0x3e]](1000);if(_0x58c8x6[__Oxb6400[0x3f]]&& _0x58c8x6[__Oxb6400[0x40]]== 0){let _0x58c8x10= await taskReportForColor(_0x58c8xd,_0x58c8x6[__Oxb6400[0x3f]])}}}else {console[__Oxb6400[0xd]](`${__Oxb6400[0x41]}`);$[__Oxb6400[0x11]](`${__Oxb6400[0x8]}${$[__Oxb6400[0xa]]}${__Oxb6400[0x8]}`,__Oxb6400[0x8],__Oxb6400[0x42]);if($[__Oxb6400[0x1f]]()){ await notify[__Oxb6400[0x22]](`${__Oxb6400[0x8]}${$[__Oxb6400[0xa]]}${__Oxb6400[0x43]}${$[__Oxb6400[0x15]]}${__Oxb6400[0x44]}${$[__Oxb6400[0x17]]}${__Oxb6400[0x8]}`,`${__Oxb6400[0x45]}`)}}}else {console[__Oxb6400[0xd]](`${__Oxb6400[0x46]}${JSON[__Oxb6400[0x4]](_0x58c8xf)}${__Oxb6400[0x8]}`)}}function getTaskDetailForColor(_0x58c8xd){const _0x58c8xb={"\x63\x6C\x69\x65\x6E\x74\x49\x6E\x66\x6F":{},taskType};return  new Promise((_0x58c8x8)=>{$[__Oxb6400[0x3d]](taskUrl(arguments[__Oxb6400[0x39]][__Oxb6400[0xa]].toString(),_0x58c8xb),(_0x58c8x9,_0x58c8xa,_0x58c8xb)=>{try{if(_0x58c8x9){console[__Oxb6400[0xd]](`${__Oxb6400[0x1a]}${$[__Oxb6400[0xa]]}${__Oxb6400[0x3a]}`);console[__Oxb6400[0xd]](JSON[__Oxb6400[0x4]](_0x58c8x9))}else {_0x58c8xb= JSON[__Oxb6400[0x3b]](_0x58c8xb)}}catch(e){$[__Oxb6400[0x3c]](e,_0x58c8xa)}finally{_0x58c8x8(_0x58c8xb)}})})}function taskReportForColor(_0x58c8xd,_0x58c8x13){const _0x58c8xb={"\x63\x6C\x69\x65\x6E\x74\x49\x6E\x66\x6F":{},taskType,detailId};return  new Promise((_0x58c8x8)=>{$[__Oxb6400[0x3d]](taskUrl(arguments[__Oxb6400[0x39]][__Oxb6400[0xa]].toString(),_0x58c8xb),(_0x58c8x9,_0x58c8xa,_0x58c8xb)=>{try{if(_0x58c8x9){console[__Oxb6400[0xd]](`${__Oxb6400[0x1a]}${$[__Oxb6400[0xa]]}${__Oxb6400[0x3a]}`);console[__Oxb6400[0xd]](JSON[__Oxb6400[0x4]](_0x58c8x9))}else {_0x58c8xb= JSON[__Oxb6400[0x3b]](_0x58c8xb)}}catch(e){$[__Oxb6400[0x3c]](e,_0x58c8xa)}finally{_0x58c8x8(_0x58c8xb)}})})}function receiveTaskRedpacket(_0x58c8xd){const _0x58c8x15={"\x63\x6C\x69\x65\x6E\x74\x49\x6E\x66\x6F":{},taskType};return  new Promise((_0x58c8x8)=>{$[__Oxb6400[0x3d]](taskUrl(arguments[__Oxb6400[0x39]][__Oxb6400[0xa]].toString(),_0x58c8x15),(_0x58c8x9,_0x58c8xa,_0x58c8xb)=>{try{if(_0x58c8x9){console[__Oxb6400[0xd]](`${__Oxb6400[0x1a]}${$[__Oxb6400[0xa]]}${__Oxb6400[0x3a]}`);console[__Oxb6400[0xd]](JSON[__Oxb6400[0x4]](_0x58c8x9))}else {_0x58c8xb= JSON[__Oxb6400[0x3b]](_0x58c8xb);if(_0x58c8xb[__Oxb6400[0x28]][__Oxb6400[0x47]]&& _0x58c8xb[__Oxb6400[0x28]][__Oxb6400[0x48]]=== 0){$[__Oxb6400[0x23]]+= Number(_0x58c8xb[__Oxb6400[0x28]][__Oxb6400[0x27]][__Oxb6400[0x23]])}}}catch(e){$[__Oxb6400[0x3c]](e,_0x58c8xa)}finally{_0x58c8x8(_0x58c8xb)}})})}function showMsg(){console[__Oxb6400[0xd]](`${__Oxb6400[0x8]}${$[__Oxb6400[0xa]]}${__Oxb6400[0x49]}${$[__Oxb6400[0x23]]}${__Oxb6400[0x4a]}`)}function TotalBean(){return  new Promise(async (_0x58c8x8)=>{const _0x58c8x18={"\x75\x72\x6C":`${__Oxb6400[0x4b]}`,"\x68\x65\x61\x64\x65\x72\x73":{"\x41\x63\x63\x65\x70\x74":__Oxb6400[0x4c],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxb6400[0x4d],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxb6400[0x4e],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxb6400[0x4f],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxb6400[0x50],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x52\x65\x66\x65\x72\x65\x72":__Oxb6400[0x51],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxb6400[0x1f]]()?(process[__Oxb6400[0x0]][__Oxb6400[0x52]]?process[__Oxb6400[0x0]][__Oxb6400[0x52]]:(require(__Oxb6400[0x54])[__Oxb6400[0x53]])):($[__Oxb6400[0x56]](__Oxb6400[0x55])?$[__Oxb6400[0x56]](__Oxb6400[0x55]):__Oxb6400[0x57])}};$[__Oxb6400[0x3d]](_0x58c8x18,(_0x58c8x9,_0x58c8xa,_0x58c8xb)=>{try{if(_0x58c8x9){console[__Oxb6400[0xd]](`${__Oxb6400[0x8]}${JSON[__Oxb6400[0x4]](_0x58c8x9)}${__Oxb6400[0x8]}`);console[__Oxb6400[0xd]](`${__Oxb6400[0x8]}${$[__Oxb6400[0xa]]}${__Oxb6400[0x58]}`)}else {if(_0x58c8xb){_0x58c8xb= JSON[__Oxb6400[0x3b]](_0x58c8xb);if(_0x58c8xb[__Oxb6400[0x59]]=== 13){$[__Oxb6400[0x16]]= false;return};$[__Oxb6400[0x17]]= _0x58c8xb[__Oxb6400[0x5b]][__Oxb6400[0x5a]]}else {console[__Oxb6400[0xd]](`${__Oxb6400[0x5c]}`)}}}catch(e){$[__Oxb6400[0x3c]](e,_0x58c8xa)}finally{_0x58c8x8()}})})}function taskUrl(_0x58c8x1a,_0x58c8x15){return {url:`${__Oxb6400[0x8]}${JD_API_HOST}${__Oxb6400[0x5d]}${_0x58c8x1a}${__Oxb6400[0x5e]}${ new Date()[__Oxb6400[0x5f]]()* 1000}${__Oxb6400[0x8]}`,body:`${__Oxb6400[0x60]}${JSON[__Oxb6400[0x4]](_0x58c8x15)}${__Oxb6400[0x8]}`,headers:{"\x48\x6F\x73\x74":__Oxb6400[0x61],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxb6400[0x4d],"\x4F\x72\x69\x67\x69\x6E":__Oxb6400[0x62],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxb6400[0x4e],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxb6400[0x50],"\x41\x63\x63\x65\x70\x74":__Oxb6400[0x63],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxb6400[0x1f]]()?(process[__Oxb6400[0x0]][__Oxb6400[0x52]]?process[__Oxb6400[0x0]][__Oxb6400[0x52]]:(require(__Oxb6400[0x54])[__Oxb6400[0x53]])):($[__Oxb6400[0x56]](__Oxb6400[0x55])?$[__Oxb6400[0x56]](__Oxb6400[0x55]):__Oxb6400[0x57]),"\x52\x65\x66\x65\x72\x65\x72":__Oxb6400[0x64],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x4C\x65\x6E\x67\x74\x68":__Oxb6400[0x65],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxb6400[0x4f]}}}function jsonParse(_0x58c8x1c){if( typeof _0x58c8x1c== __Oxb6400[0x66]){try{return JSON[__Oxb6400[0x3b]](_0x58c8x1c)}catch(e){console[__Oxb6400[0xd]](e);$[__Oxb6400[0x11]]($[__Oxb6400[0xa]],__Oxb6400[0x8],__Oxb6400[0x67]);return []}}}(function(_0x58c8x1d,_0x58c8x1e,_0x58c8x1f,_0x58c8x20,_0x58c8x21,_0x58c8x22){_0x58c8x22= __Oxb6400[0x68];_0x58c8x20= function(_0x58c8x23){if( typeof alert!== _0x58c8x22){alert(_0x58c8x23)};if( typeof console!== _0x58c8x22){console[__Oxb6400[0xd]](_0x58c8x23)}};_0x58c8x1f= function(_0x58c8x24,_0x58c8x1d){return _0x58c8x24+ _0x58c8x1d};_0x58c8x21= _0x58c8x1f(__Oxb6400[0x69],_0x58c8x1f(_0x58c8x1f(__Oxb6400[0x6a],__Oxb6400[0x6b]),__Oxb6400[0x6c]));try{_0x58c8x1d= __encode;if(!( typeof _0x58c8x1d!== _0x58c8x22&& _0x58c8x1d=== _0x58c8x1f(__Oxb6400[0x6d],__Oxb6400[0x6e]))){_0x58c8x20(_0x58c8x21)}}catch(e){_0x58c8x20(_0x58c8x21)}})({})
// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
