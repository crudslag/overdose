import q from"zlib";async function v(C=""){process.stdout.write(C);for await(let c of console)return c}try{const C=await Bun.file("sentaku.ovds").text(),c=q.unzipSync(Buffer.from(C,"base64")),j=JSON.parse(decodeURIComponent(c.toString()));while(!0){const k=await v("> ")||"PockeYobi",d=j.find((o)=>k.includes(o.category))?.answers;if(!d){console.log("Not Found");continue}const n=`
const a = ${JSON.stringify(d)}
document.querySelectorAll(".answers").forEach((e,l)=>{if("UL"===e.nodeName){let c=a[l].findIndex(e=>e.correct);e.querySelectorAll("li")[c].click()}else"INPUT"===e.nodeName&&(e.focus(),document.execCommand("insertText",!1,a[l][0].text??""))});
`;console.log(n),console.log("")}}catch{console.error("oops!")}
