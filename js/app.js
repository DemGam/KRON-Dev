(() => {
    "use strict";
    const modules_flsModules = {};
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
    let bodyLockStatus = true;
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function functions_FLS(message) {
        setTimeout((() => {
            if (window.FLS) console.log(message);
        }), 0);
    }
    let jobsCount;
    let jobsFirstTitle;
    let jobsSecondTitle;
    class Popup {
        constructor(options) {
            let config = {
                logging: true,
                init: true,
                attributeOpenButton: "data-popup",
                attributeCloseButton: "data-close",
                classes: {
                    popup: "popup",
                    popupActive: "popup_show",
                    bodyActive: "popup-show"
                },
                focusCatch: true,
                closeEsc: true,
                bodyLock: true,
                hashSettings: {
                    location: true,
                    goHash: true
                },
                on: {
                    beforeOpen: function() {},
                    afterOpen: function() {},
                    beforeClose: function() {},
                    afterClose: function() {}
                }
            };
            this.youTubeCode;
            this.isOpen = false;
            this.targetOpen = {
                selector: false,
                element: false
            };
            this.previousOpen = {
                selector: false,
                element: false
            };
            this.lastClosed = {
                selector: false,
                element: false
            };
            this._dataValue = false;
            this.hash = false;
            this._reopen = false;
            this._selectorOpen = false;
            this.lastFocusEl = false;
            this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
            this.options = {
                ...config,
                ...options,
                classes: {
                    ...config.classes,
                    ...options?.classes
                },
                hashSettings: {
                    ...config.hashSettings,
                    ...options?.hashSettings
                },
                on: {
                    ...config.on,
                    ...options?.on
                }
            };
            this.bodyLock = false;
            this.options.init ? this.initPopups() : null;
        }
        initPopups() {
            this.popupLogging(`Проснулся`);
            this.eventsPopup();
        }
        eventsPopup() {
            document.addEventListener("click", function(e) {
                const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                if (buttonOpen) {
                    e.preventDefault();
                    this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                    jobsCount = buttonOpen.dataset.quantity;
                    jobsFirstTitle = buttonOpen.dataset.firstTitle;
                    jobsSecondTitle = buttonOpen.dataset.secondTitle;
                    if ("error" !== this._dataValue) {
                        if (!this.isOpen) this.lastFocusEl = buttonOpen;
                        this.targetOpen.selector = `${this._dataValue}`;
                        this._selectorOpen = true;
                        this.open();
                        return;
                    } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
                    return;
                }
                const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                if (buttonClose && this.isOpen) {
                    e.preventDefault();
                    this.close();
                    return;
                }
            }.bind(this));
            document.addEventListener("keydown", function(e) {
                if (this.options.closeEsc && 27 == e.which && "Escape" === e.code && this.isOpen) {
                    e.preventDefault();
                    this.close();
                    return;
                }
                if (this.options.focusCatch && 9 == e.which && this.isOpen) {
                    this._focusCatch(e);
                    return;
                }
            }.bind(this));
            if (this.options.hashSettings.goHash) {
                window.addEventListener("hashchange", function() {
                    if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                }.bind(this));
                window.addEventListener("load", function() {
                    if (window.location.hash) this._openToHash();
                }.bind(this));
            }
        }
        open(selectorValue) {
            if (bodyLockStatus) {
                this.bodyLock = document.documentElement.classList.contains("lock") ? true : false;
                if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) {
                    this.targetOpen.selector = selectorValue;
                    this._selectorOpen = true;
                }
                if (this.isOpen) {
                    this._reopen = true;
                    this.close();
                }
                if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                if (!this._reopen) this.previousActiveElement = document.activeElement;
                this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                if (this.targetOpen.element) {
                    if (this.youTubeCode) {
                        const codeVideo = this.youTubeCode;
                        const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                        const iframe = document.createElement("iframe");
                        iframe.setAttribute("allowfullscreen", "");
                        const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                        iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                        iframe.setAttribute("src", urlVideo);
                        if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                            this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                        }
                        this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                    }
                    if (this.options.hashSettings.location) {
                        this._getHash();
                        this._setHash();
                    }
                    this.options.on.beforeOpen(this);
                    document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                        detail: {
                            popup: this
                        }
                    }));
                    const popupContent = document.querySelector(".popup__content");
                    const popupFirstTitle = document.querySelector(".popup__title");
                    const positionButtons = popupContent.querySelectorAll(".position-button");
                    positionButtons.forEach((element => {
                        element.remove();
                    }));
                    if (jobsCount) for (let i = 1; i <= jobsCount; i++) {
                        const positionName = `Position Name #${i}`;
                        const positionButtonHtml = `<a href="#" class="position-button">\n\t\t\t\t\t\t\t<div class="position-button__title">${positionName}</div>\n\t\t\t\t\t\t\t<div class="position-button__link">view</div>\n\t\t\t\t\t\t\t<img class="position-button__bg" src="../img/careers/team-bg.jpg" alt="">\n\t\t\t\t\t\t\t</a>`;
                        popupContent.insertAdjacentHTML("beforeend", positionButtonHtml);
                    }
                    if (jobsFirstTitle) {
                        popupFirstTitle.childNodes[0].textContent = jobsFirstTitle + " ";
                        popupFirstTitle.childNodes[1].textContent = jobsSecondTitle;
                    }
                    this.targetOpen.element.classList.add(this.options.classes.popupActive);
                    document.documentElement.classList.add(this.options.classes.bodyActive);
                    if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                    this.targetOpen.element.setAttribute("aria-hidden", "false");
                    this.previousOpen.selector = this.targetOpen.selector;
                    this.previousOpen.element = this.targetOpen.element;
                    this._selectorOpen = false;
                    this.isOpen = true;
                    setTimeout((() => {
                        this._focusTrap();
                    }), 50);
                    this.options.on.afterOpen(this);
                    document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                        detail: {
                            popup: this
                        }
                    }));
                    this.popupLogging(`Открыл попап`);
                } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
            }
        }
        close(selectorValue) {
            if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) this.previousOpen.selector = selectorValue;
            if (!this.isOpen || !bodyLockStatus) return;
            this.options.on.beforeClose(this);
            document.dispatchEvent(new CustomEvent("beforePopupClose", {
                detail: {
                    popup: this
                }
            }));
            this.previousOpen.element.classList.remove(this.options.classes.popupActive);
            this.previousOpen.element.setAttribute("aria-hidden", "true");
            if (!this._reopen) {
                document.documentElement.classList.remove(this.options.classes.bodyActive);
                !this.bodyLock ? bodyUnlock() : null;
                this.isOpen = false;
            }
            this._removeHash();
            if (this._selectorOpen) {
                this.lastClosed.selector = this.previousOpen.selector;
                this.lastClosed.element = this.previousOpen.element;
            }
            this.options.on.afterClose(this);
            document.dispatchEvent(new CustomEvent("afterPopupClose", {
                detail: {
                    popup: this
                }
            }));
            setTimeout((() => {
                this._focusTrap();
            }), 50);
            this.popupLogging(`Закрыл попап`);
        }
        _getHash() {
            if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
        }
        _openToHash() {
            let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
            const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
            if (buttons && classInHash) this.open(classInHash);
        }
        _setHash() {
            history.pushState("", "", this.hash);
        }
        _removeHash() {
            history.pushState("", "", window.location.href.split("#")[0]);
        }
        _focusCatch(e) {
            const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
            const focusArray = Array.prototype.slice.call(focusable);
            const focusedIndex = focusArray.indexOf(document.activeElement);
            if (e.shiftKey && 0 === focusedIndex) {
                focusArray[focusArray.length - 1].focus();
                e.preventDefault();
            }
            if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                focusArray[0].focus();
                e.preventDefault();
            }
        }
        _focusTrap() {
            const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
            if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
        }
        popupLogging(message) {
            this.options.logging ? functions_FLS(`[Попапос]: ${message}`) : null;
        }
    }
    modules_flsModules.popup = new Popup({});
    window.addEventListener("load", (function(e) {
        initSliders();
    }));
    let buttonsShowMore = document.querySelectorAll(".slide-comm__button");
    function initSliders() {
        if (document.querySelector(".comments__slider")) {
            let swiper = new Swiper(".comments__slider", {
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
                speed: 800,
                allowTouchMove: true,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                    formatFractionCurrent: function(current) {
                        return current.toString().padStart(2, 0);
                    },
                    formatFractionTotal: function(total) {
                        return total.toString().padStart(2, 0);
                    }
                },
                navigation: {
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                },
                breakpoints: {
                    960: {
                        allowTouchMove: false
                    }
                },
                on: {
                    init: function() {
                        initShowMoreBtns();
                        buttonsShowMore.forEach((function(item) {
                            item.addEventListener("click", (function() {
                                toggleComment();
                                swiper.updateAutoHeight(300);
                            }));
                        }));
                    }
                }
            });
        }
        if (document.querySelector(".stories-slider")) {
            new Swiper(".stories-slider", {
                observer: true,
                observeParents: true,
                autoHeight: false,
                speed: 5e3,
                allowTouchMove: true,
                keyboard: true,
                pagination: false,
                centeredSlides: true,
                navigation: false,
                slidesPerView: "auto",
                loop: true,
                spaceBetween: 24,
                freeMode: true,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: false
                },
                breakpoints: {
                    320: {
                        spaceBetween: 16
                    },
                    720: {
                        spaceBetween: 24
                    }
                }
            });
        }
    }
    function toggleComment() {
        let comments = document.querySelectorAll(".slide-comm__text");
        comments.forEach((function(el) {
            if (el.classList.contains("opened-full-text")) {
                el.classList.remove("opened-full-text");
                el.nextElementSibling.classList.remove("opened-full-text");
            } else {
                el.classList.add("opened-full-text");
                el.nextElementSibling.classList.add("opened-full-text");
            }
        }));
    }
    function initShowMoreBtns() {
        if (document.getElementsByClassName("comments__slider")) {
            let slides = document.getElementsByClassName("comments__slide");
            for (let i = 0; i < slides.length; i++) if (slides[i].querySelector(".slide-comm__text").classList.contains("needShowMore")) slides[i].querySelector(".slide-comm__button").style.display = "block"; else slides[i].querySelector(".slide-comm__button").style.display = "none";
        }
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
    const preloadTextOriginal = document.querySelector("#preload-text-original");
    if (preloadTextOriginal) addEventListener("load", (function() {
        const welcomeContent = document.querySelector(".welcome__content");
        const observer = new IntersectionObserver((welcomeBlock => {
            if (welcomeBlock[0].isIntersecting) show(); else {
                observer.unobserve(welcomeContent);
                skip();
            }
        }), {
            threshold: .5
        });
        observer.observe(welcomeContent);
        function show() {
            document.body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            const preloadTextPosHolder = document.querySelector("#preload-text-position-holder");
            let targetTop = preloadTextPosHolder.getBoundingClientRect().top + "px";
            let targetLeft = preloadTextPosHolder.getBoundingClientRect().left + "px";
            let waitTextAppear = 1e3;
            let durationTextAppear = 300;
            let durationTextMoving = 1e3;
            let waitMediaTextMoving = 1e3;
            let durationMediaTextMoving = 1300;
            setTimeout((function() {
                let preloadTextStartPositionX = document.getElementsByTagName("body")[0].clientWidth / 2 - preloadTextPosHolder.getBoundingClientRect().width / 2 + "px";
                let preloadTextStartStyles = {
                    left: preloadTextStartPositionX,
                    "z-index": "999"
                };
                Object.assign(preloadTextOriginal.style, preloadTextStartStyles);
                const preloadTextChangePosition = [ {
                    left: targetLeft,
                    top: targetTop
                } ];
                const preloadTextTiming = {
                    duration: durationTextAppear,
                    iterations: 1,
                    fill: "forwards",
                    easing: "ease-out"
                };
                const bgTransform = [ {
                    opacity: 0
                } ];
                const bgTransformTiming = {
                    duration: durationTextMoving,
                    iterations: 1,
                    fill: "forwards",
                    easing: "ease-out"
                };
                setTimeout((function() {
                    preloadTextOriginal.animate(preloadTextChangePosition, preloadTextTiming);
                    document.querySelector(".preload-bg").animate(bgTransform, bgTransformTiming);
                }), durationTextMoving);
                setTimeout((function() {
                    preloadTextOriginal.style.display = "none";
                    document.querySelector("#preload-text-position-holder").style.opacity = "100%";
                    document.querySelector(".preload-bg").style.display = "none";
                }), durationTextMoving + durationTextAppear);
                let animatedMediaBlockTexts = document.querySelectorAll(".media-block__animate-text");
                setTimeout((function() {
                    if (animatedMediaBlockTexts) animatedMediaBlockTexts.forEach((animatedBlockText => {
                        animatedBlockText.classList.add("animated");
                    }));
                }), durationTextAppear + durationTextMoving + waitMediaTextMoving);
                setTimeout((function() {
                    let animatedMediaBlockImages = document.querySelectorAll("._img-anim-hidden");
                    if (animatedMediaBlockImages) animatedMediaBlockImages.forEach((animatedBlockImage => {
                        animatedBlockImage.classList.add("animated");
                    }));
                }), durationTextAppear + durationTextMoving + waitMediaTextMoving);
                setTimeout((function() {
                    let animatedMediaBlockTextsOrigin = document.querySelectorAll("._text-anim-origin");
                    if (animatedMediaBlockTextsOrigin) animatedMediaBlockTextsOrigin.forEach((animatedBlockTextOrigin => {
                        animatedBlockTextOrigin.style.opacity = "100%";
                    }));
                    document.body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                    animatedMediaBlockTexts.forEach((animatedBlockText => {
                        animatedBlockText.style.display = "none";
                    }));
                }), durationTextAppear + durationTextMoving + waitMediaTextMoving + durationMediaTextMoving);
            }), waitTextAppear);
        }
        function skip() {
            preloadTextOriginal.style.display = "none";
            document.querySelector("#preload-text-position-holder").style.opacity = "100%";
            document.querySelector(".preload-bg").style.display = "none";
            let animatedMediaBlockTexts = document.querySelectorAll(".media-block__animate-text");
            animatedMediaBlockTexts.forEach((animatedBlockText => {
                animatedBlockText.style.display = "none";
            }));
            let animatedMediaBlockTextsOrigin = document.querySelectorAll("._text-anim-origin");
            animatedMediaBlockTextsOrigin.forEach((animatedBlockTextOrigin => {
                animatedBlockTextOrigin.style.opacity = "100%";
            }));
            let animatedMediaBlockImages = document.querySelectorAll("._img-anim-hidden");
            animatedMediaBlockImages.forEach((animatedMediaBlockImage => {
                animatedMediaBlockImage.style.opacity = "100%";
            }));
        }
    }));
    addCodeToClass("block-cross-in", '<span class="block-cross-in__left-crosses"></span><span class="block-cross-in__right-crosses"></span>');
    addCodeToClass("block-cross-in-link", '<span class="block-cross-in-link__left-elements"></span><span class="block-cross-in-link__right-elements"></span>');
    addCodeToClass("block-cross-out", '<span class="block-cross-out__left-crosses"></span> <span class="block-cross-out__right-crosses"></span>');
    function addCodeToClass(className, htmlCode) {
        if (document.getElementsByClassName(className)) for (var i = 0; i < document.getElementsByClassName(className).length; i++) document.getElementsByClassName(className)[i].insertAdjacentHTML("afterbegin", htmlCode);
    }
    addEventListener("load", (function() {
        new Rellax(".rellax");
    }));
    let options = {
        stringsElement: "#typed-strings",
        typeSpeed: 40,
        startDelay: 500,
        backDelay: 2e3,
        loop: true,
        backSpeed: 15,
        smartBackspace: true
    };
    if (document.querySelector(".typing-text__text")) {
        new Typed(".typing-text__text", options);
    }
    const cascadeSlider = document.querySelector(".cascade-slider");
    const cascadeSlides = document.querySelectorAll(".cascade-slider__item");
    const cascadeSlidesCount = cascadeSlides.length;
    document.addEventListener("DOMContentLoaded", (function() {
        const numbersColumns = document.querySelectorAll(".numbers-column");
        if (numbersColumns) numbersColumns.forEach((numbersColumn => {
            for (var i = 1; i <= 50; i++) numbersColumn.insertAdjacentHTML("beforeend", i + "<br>");
        }));
    }));
    let cascadeSliderHeight;
    let cascadeSliderOffsetY;
    if (cascadeSlider) {
        addEventListener("load", (event => {
            getCascadeSliderOffsetY();
            setTimeout((function() {
                getCascadeSliderHeight();
                animateCascadeSlide();
            }), 200);
        }));
        addEventListener("resize", (event => {
            getCascadeSliderOffsetY();
            setTimeout((function() {
                getCascadeSliderHeight();
            }), 200);
        }));
        addEventListener("scroll", (event => {
            animateCascadeSlide();
        }));
    }
    function getCascadeSliderOffsetY() {
        cascadeSliderOffsetY = cascadeSlider.getBoundingClientRect().top + window.scrollY;
    }
    function getCascadeSliderHeight() {
        cascadeSliderHeight = cascadeSlider.getBoundingClientRect().height;
    }
    function animateCascadeSlide() {
        let cascadeSliderOffsetYBottom = cascadeSliderOffsetY + cascadeSliderHeight;
        let cascadeSlideHeight = cascadeSliderHeight / cascadeSlidesCount;
        if (window.scrollY > cascadeSliderOffsetY && window.scrollY < cascadeSliderOffsetYBottom) for (let i = 0; i < cascadeSlidesCount; i++) {
            let cascadeSlideScale = 1 - .04 * (window.scrollY - cascadeSliderOffsetY + 56 - cascadeSlideHeight * i) / cascadeSlideHeight;
            let cascadeSlideOpacity = 1 - .2 * (window.scrollY - cascadeSliderOffsetY + 56 - cascadeSlideHeight * i) / cascadeSlideHeight;
            let cascadeSlideTop = 56 - 30 * (window.scrollY - cascadeSliderOffsetY + 56 - cascadeSlideHeight * i) / cascadeSlideHeight;
            if (cascadeSlideScale > 1) cascadeSlideScale = 1;
            cascadeSlides[i].style.transform = `scale(${cascadeSlideScale})`;
            cascadeSlides[i].style.opacity = cascadeSlideOpacity;
            cascadeSlides[i].style.top = cascadeSlideTop + "px";
        } else for (let i = 0; i < cascadeSlidesCount; i++) {
            cascadeSlides[i].style.transform = `scale(1)`;
            cascadeSlides[i].style.opacity = 1;
            cascadeSlides[i].style.top = "56px";
        }
    }
    window["FLS"] = true;
    isWebp();
})();