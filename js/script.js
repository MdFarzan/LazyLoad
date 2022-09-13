
const imgs = Array.from(document.images);

function lazyLoad(imgs, observer){
    imgs.forEach((img)=>{
        if(img.isIntersecting){
            let src = img.target.dataset.src;
            img.target.src = src;
            observer.unobserve(img.target);
        }
        
    });
}

const observer = new IntersectionObserver(lazyLoad, {
    root:null,
    rootMargin: '0px',
    threshold: 0.5
});

imgs.forEach((img)=>{
    observer.observe(img);
})