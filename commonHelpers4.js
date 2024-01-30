import{S as p,i as m}from"./assets/vendor-5b791d57.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const u=document.querySelector(".searchForm"),a=document.querySelector(".searchInput"),i=document.querySelector(".loader"),n=document.querySelector(".gallery"),e="42055816-5ec499474650eadfc6b07a02f",t="https://pixabay.com/api/",l=new p(".gallery a");u.addEventListener("submit",d=>{d.preventDefault();const c=a.value.trim();if(c===""){m.error({title:"Error",message:"Please enter a search term."});return}i.classList.remove("hidden"),n.innerHTML="",fetch(`${t}?key=${e}&q=${c}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{if(s.hits.length===0)m.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});else{const r=s.hits.map(o=>({webformatURL:o.webformatURL,largeImageURL:o.largeImageURL,tags:o.tags,likes:o.likes,views:o.views,comments:o.comments,downloads:o.downloads}));f(r)}}).catch(s=>{console.error("Error fetching data:",s),m.error({title:"Error",message:"An error occurred while fetching data. Please try again."})}).finally(()=>{i.classList.add("hidden")})});function f(d){const c=d.map((s,r)=>`
        <div class="gallery-item">
          <a href="${s.largeImageURL}" data-lightbox="gallery" data-title="${s.tags}">
            <img src="${s.webformatURL}" alt="${s.tags}" class="image-thumbnail image-${r+1}">
          </a>
          <div class="image-details image-details-${r+1}">
            <p class="likes likes-${r+1}">Likes: <span class="result-likes">${s.likes}</span></p>
            <p class="views views-${r+1}">Views: <span class="result-views">${s.views}</span></p>
            <p class="comments comments-${r+1}">Comments: <span class="result-comments">${s.comments}</span></p>
            <p class="downloads downloads-${r+1}">Downloads: <span class="result-downloads">${s.downloads}</span></p>
          </div>
        </div>
      `).join("");n.innerHTML=c,l.refresh()}});
//# sourceMappingURL=commonHelpers4.js.map
