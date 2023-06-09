(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    $(".icon-menu").click((function() {
        $("html").toggleClass("lock menu-open");
    }));
    $("body").on("click", ".menu__overlay", (function() {
        $("html").removeClass("lock menu-open");
    }));
    $(document).keyup((function(e) {
        if (27 == e.keyCode) {
            $("html").removeClass("lock menu-open");
        }
    }));
    window["FLS"] = true;
    isWebp();
})();
  