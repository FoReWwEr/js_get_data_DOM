var t=0,e=0,o=document.querySelector(".total-population"),n=document.querySelector(".average-population"),l=document.querySelectorAll(".population");l.forEach(function(e){var o=Number(e.textContent.split(",").join(""));isNaN(o)||(t+=o)}),e=t/l.length,o.textContent=t.toLocaleString("en-US"),n.textContent=e.toLocaleString("en-US");
//# sourceMappingURL=index.162cc062.js.map
