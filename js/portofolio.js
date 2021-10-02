
// portofolio item filter

const filterContainer=document.querySelector(".Portofolio-filter"),
      filterBtns=filterContainer.children,
      totalfilterBtn=filterBtns.length,
      portofolioItems=document.querySelectorAll(".Portofolio-item"),
      totalportofolioItem=portofolioItems.length;

for (let i = 0; i < totalfilterBtn; i++) {

      filterBtns[i].addEventListener("click" , function(){
        filterContainer.querySelector(".active").classList.remove("active")
        this.classList.add("active")


        const filterValue=this.getAttribute("data-filter")
          for (let k = 0; k < totalportofolioItem; k++) {
              if (filterValue === portofolioItems[k].getAttribute("data-category")){
                portofolioItems[k].classList.remove("hide")
                portofolioItems[k].classList.add("show")

              }
              
              else{
                        portofolioItems[k].classList.remove("show")
                        portofolioItems[k].classList.add("hide")

              }
              if (filterValue === "all") {
                portofolioItems[k].classList.remove("hide")
                portofolioItems[k].classList.add("show")
                
              }
          }
      })

}
// ////////////portofolio lightBox
const lightbox=document.querySelector(".lightbox"),
      lightboxImg=lightbox.querySelector(".lightbox-img"),
      lightboxClose=lightbox.querySelector(".lightbox-close"),
      lightboxText=lightbox.querySelector(".caption-text"),
      lightboxCounter=lightbox.querySelector(".caption-counter");
        let itemIndex=0;
        for (let i = 0; i < totalportofolioItem; i++) {

          portofolioItems[i].addEventListener("click" , function(){
            itemIndex=i;
            changeItem();
            toggleLightbox();
          })
        }

        function nextItem(){
          if (itemIndex === totalportofolioItem-1) {
            itemIndex=0
          }
          else {
            itemIndex++
          }
          changeItem()
        }

        function pervItem(){
          if (itemIndex === 0) {
            itemIndex=totalportofolioItem-1;
          }
          else {
            itemIndex--
          }
          changeItem()
        }



        function toggleLightbox(){
          lightbox.classList.toggle("open");

        }
        
        function changeItem(){
          imgSrc=portofolioItems[itemIndex].querySelector(".Portofolio-img img").getAttribute("src");
          lightboxImg.src=imgSrc;
          lightboxText.innerHTML=portofolioItems[itemIndex].querySelector("h4").innerHTML;
          lightboxCounter.innerHTML=(itemIndex+1) + "of" + totalportofolioItem;
        }

// ////////////////////////close lightbox
      
lightbox.addEventListener("click" , function(event){

 if (event.target === lightboxClose ||event.target  === lightbox) {
  toggleLightbox();
 }

})