// Your JS code here.
  function debounce(func, wait = 20, immediate = true) {
            var timeout;
            return function () {
                var context = this, args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }

        function addSlide() {
            var scrolledImages = document.querySelectorAll('.slide-in');
            console.log("ScrolledImages",scrolledImages);
            scrolledImages.forEach((img) => {
                var scrolledHeight = window.scrollY + window.innerHeight - img.height / 2;
                var imageBottomHeight = img.offsetTop + img.height;
                var isImageHalfScrolled = scrolledHeight > img.offsetTop;

                var isImageFullyScrolled = window.scrollY > imageBottomHeight;
               
                console.log("Height", scrolledHeight,imageBottomHeight, img.offsetTop, window.innerHeight);
                if (isImageHalfScrolled && !isImageFullyScrolled) {
                    img.classList.add("active");
                } else {
                    img.classList.remove("active");
                }
            });
        }
        window.addEventListener('scroll', debounce(addSlide));