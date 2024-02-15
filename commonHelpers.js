import{i as c,S as f}from"./assets/vendor-5b791d57.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const m=document.querySelector("form"),p=document.getElementById("searchImageText"),d=document.querySelector(".gallery");let l;m.addEventListener("submit",e=>{e.preventDefault();const s=document.getElementById("searchImage").value;if(s.trim()===""){c.info({message:"Please enter what you want to find!",position:"topRight"});return}else a(),g(s).then(t=>{l=t,l.length===0?(a(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u()):(a(),u(),b())}).catch(t=>{console.log(t)})});function g(e){const s="https://pixabay.com/api/?key="+"42377778-b3c1271d36d2a7f0c3b2221f8"+"&q="+encodeURIComponent(e)+"&image_type=photo&orientation=horizontal&safe_search=true&per_page=9";return fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits).catch(t=>{throw console.log(t),t})}function a(){p.classList.toggle("isHidden")}function h(e){return`<li class="gallery-item">
    <a href="${e.largeImageURL}" class="gallery-link">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" class="gallery-image" />
    </a>
    <div class="info">
        <p class="info-item">
        <b>Likes:</b> ${e.likes}
        </p>
        <p class="info-item">
        <b>Views:</b> ${e.views}
        </p>
        <p class="info-item">
        <b>Comments:</b> ${e.comments}
        </p>
        <p class="info-item">
        <b>Downloads:</b> ${e.downloads}
        </p>
    </div>
    </li>`}function y(){return l.map(h).join("")}function u(){const e=y();d.innerHTML=e}function b(){let e={captionsData:"alt",captionDelay:250,captions:!0},n=new f(".gallery a",e);n.on("show.simplelightbox",function(){}),n.refresh()}
//# sourceMappingURL=commonHelpers.js.map
