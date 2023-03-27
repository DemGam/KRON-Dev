@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100..700&display=swap);
@charset "UTF-8";
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  min-width: 360px;
}

body {
  color: #fff;
  line-height: 1;
  font-family: "Roboto Mono", sans-serif;
  font-size: 1rem;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input,
button,
textarea {
  font-family: "Roboto Mono", sans-serif;
  font-size: inherit;
}

button {
  cursor: pointer;
  color: inherit;
  background-color: inherit;
}

input::-ms-clear {
  display: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a {
  color: inherit;
}

a:link,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img, svg {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

/* Remove annoying border on linked images. */
a img {
  border: none;
}

/* Remove possible quote marks (") from <q>, <blockquote>. */
blockquote:before, blockquote:after, q:before, q:after {
  content: "";
  content: none;
}

blockquote, q {
  quotes: "" "";
}

/* Tables still need 'cellspacing="0"' in the markup. */
table {
  border-collapse: separate;
  border-spacing: 0;
}

caption, th, td {
  text-align: left;
  font-weight: normal;
}

table, td, th {
  vertical-align: middle;
}

body {
  background-color: #090808;
  background-image: url(../img/bg.png);
  background-repeat: repeat;
  background-position: top;
  position: relative;
}
.lock body {
  overflow: hidden;
  touch-action: none;
}
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: clip;
}
.wrapper > main {
  flex: 1 1 auto;
}
.wrapper > * {
  min-width: 0;
}

/*
(i) Стили будут применяться ко 
всем классам содержащим *__container
Например header__container, main__container и т.д.
Снипет (HTML): cnt
*/
[class*=__container] {
  max-width: 72.75rem;
  box-sizing: content-box;
  margin: 0 auto;
}

[class*=-ibg] {
  position: relative;
}
[class*=-ibg] img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}

[class*=-ibg_contain] img {
  object-fit: contain;
}

@supports (padding-left: clamp( 1rem , 0.4rem  +  2.6666666667vw , 2rem )) {
  [class*=__container] {
    padding-left: clamp( 1rem , 0.4rem  +  2.6666666667vw , 2rem );
  }
}
@supports not (padding-left: clamp( 1rem , 0.4rem  +  2.6666666667vw , 2rem )) {
  [class*=__container] {
    padding-left: calc(
			1rem + 1 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-right: clamp( 1rem , 0.4rem  +  2.6666666667vw , 2rem )) {
  [class*=__container] {
    padding-right: clamp( 1rem , 0.4rem  +  2.6666666667vw , 2rem );
  }
}
@supports not (padding-right: clamp( 1rem , 0.4rem  +  2.6666666667vw , 2rem )) {
  [class*=__container] {
    padding-right: calc(
			1rem + 1 * (100vw - 22.5rem) / 37.5
		);
  }
}

.wrapper {
  position: relative;
}
.wrapper::before {
  content: "";
  display: block;
  position: absolute;
  height: 1992px;
  background-image: url(../img/moon.png);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
}
@supports (width: clamp( 50.8125rem , 6.6rem  +  196.5vw , 124.5rem )) {
  .wrapper::before {
    width: clamp( 50.8125rem , 6.6rem  +  196.5vw , 124.5rem );
  }
}
@supports not (width: clamp( 50.8125rem , 6.6rem  +  196.5vw , 124.5rem )) {
  .wrapper::before {
    width: calc(
			50.8125rem + 73.6875 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (top: clamp( -47.3125rem , -91.1930970149rem  +  73.1343283582vw , -35.0625rem )) {
  .wrapper::before {
    top: clamp( -47.3125rem , -91.1930970149rem  +  73.1343283582vw , -35.0625rem );
  }
}
@supports not (top: clamp( -47.3125rem , -91.1930970149rem  +  73.1343283582vw , -35.0625rem )) {
  .wrapper::before {
    top: calc(
			-47.3125rem + 12.25 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (left: clamp( -85.6875rem , -131.8069029851rem  +  76.8656716418vw , -72.8125rem )) {
  .wrapper::before {
    left: clamp( -85.6875rem , -131.8069029851rem  +  76.8656716418vw , -72.8125rem );
  }
}
@supports not (left: clamp( -85.6875rem , -131.8069029851rem  +  76.8656716418vw , -72.8125rem )) {
  .wrapper::before {
    left: calc(
			-85.6875rem + 12.875 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (top: clamp( -47.3125rem , 18.8875rem  +  -110.3333333333vw , -5.9375rem )) {
    .wrapper::before {
      top: clamp( -47.3125rem , 18.8875rem  +  -110.3333333333vw , -5.9375rem );
    }
  }
  @supports not (top: clamp( -47.3125rem , 18.8875rem  +  -110.3333333333vw , -5.9375rem )) {
    .wrapper::before {
      top: calc(
			-5.9375rem + -41.375 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (left: clamp( -85.6875rem , -4.1875rem  +  -135.8333333333vw , -34.75rem )) {
    .wrapper::before {
      left: clamp( -85.6875rem , -4.1875rem  +  -135.8333333333vw , -34.75rem );
    }
  }
  @supports not (left: clamp( -85.6875rem , -4.1875rem  +  -135.8333333333vw , -34.75rem )) {
    .wrapper::before {
      left: calc(
			-34.75rem + -50.9375 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}

.text_thin {
  font-weight: 180;
}

.text_grey {
  color: #9b9b9b;
}

.text-accent_violet {
  color: #c51bf0;
}
.text-accent_aqua {
  color: #5eecff;
}
.text-accent_orange {
  color: #f17e14;
}

._glass-blured {
  backdrop-filter: blur(6px);
}

._gradient-overlay {
  background: linear-gradient(119.86deg, rgba(0, 0, 0, 0) 7.8%, rgba(0, 0, 0, 0.5) 72.46%);
}

.block-cross-out {
  backdrop-filter: blur(6px);
  background: rgba(238, 237, 228, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
}
.block-cross-out__left-crosses::before, .block-cross-out__left-crosses::after, .block-cross-out__right-crosses::before, .block-cross-out__right-crosses::after {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  -webkit-mask: url(../img/icons/plus.svg) no-repeat 50% 50%;
  mask: url(../img/icons/plus.svg) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  background-color: #fff;
}
.block-cross-out__left-crosses::before, .block-cross-out__right-crosses::before {
  top: -9px;
}
.block-cross-out__left-crosses::after, .block-cross-out__right-crosses::after {
  bottom: -9px;
}
.block-cross-out__left-crosses::before, .block-cross-out__left-crosses::after {
  left: -9px;
}
.block-cross-out__right-crosses::before, .block-cross-out__right-crosses::after {
  right: -9px;
}

.block-cross-in {
  width: 250px;
  backdrop-filter: blur(6px);
  border-radius: 8px;
  background: rgba(238, 237, 228, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
}
.block-cross-in__left-crosses::before, .block-cross-in__left-crosses::after, .block-cross-in__right-crosses::before, .block-cross-in__right-crosses::after {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  -webkit-mask: url(../img/icons/plus.svg) no-repeat 50% 50%;
  mask: url(../img/icons/plus.svg) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  background-color: #fff;
}
.block-cross-in__left-crosses::before, .block-cross-in__right-crosses::before {
  top: 18px;
}
.block-cross-in__left-crosses::after, .block-cross-in__right-crosses::after {
  bottom: 18px;
}
.block-cross-in__left-crosses::before, .block-cross-in__left-crosses::after {
  left: 18px;
}
.block-cross-in__right-crosses::before, .block-cross-in__right-crosses::after {
  right: 18px;
}

.block-cross-in-link {
  display: block;
  backdrop-filter: blur(6px);
  border-radius: 8px;
  background: rgba(238, 237, 228, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
}
.block-cross-in-link__left-elements::after, .block-cross-in-link__right-elements::after {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  -webkit-mask: url(../img/icons/plus.svg) no-repeat 50% 50%;
  mask: url(../img/icons/plus.svg) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  background-color: #fff;
}
.block-cross-in-link__left-elements::before, .block-cross-in-link__right-elements::before {
  top: 18px;
}
.block-cross-in-link__left-elements::after, .block-cross-in-link__right-elements::after {
  bottom: 18px;
}
.block-cross-in-link__left-elements::before {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  -webkit-mask: url(../img/icons/plus.svg) no-repeat 50% 50%;
  mask: url(../img/icons/plus.svg) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  background-color: #fff;
}
.block-cross-in-link__right-elements::before {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  -webkit-mask: url(../img/icons/link.svg) no-repeat 50% 50%;
  mask: url(../img/icons/link.svg) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  background-color: #6a6969;
  transition: background-color 0.3s ease;
}
.block-cross-in-link__left-elements::before, .block-cross-in-link__left-elements::after {
  left: 18px;
}
.block-cross-in-link__right-elements::before, .block-cross-in-link__right-elements::after {
  right: 18px;
}
.block-cross-in-link:hover, .block-cross-in-link:active {
  cursor: pointer;
}
.block-cross-in-link:hover .block-cross-in-link__right-elements::before, .block-cross-in-link:active .block-cross-in-link__right-elements::before {
  background-color: #c51bf0;
}

._centered {
  margin-inline: auto;
}

.title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 700;
}
@supports (font-size: clamp( 2.5rem , 1.45rem  +  4.6666666667vw , 4.25rem )) {
  .title {
    font-size: clamp( 2.5rem , 1.45rem  +  4.6666666667vw , 4.25rem );
  }
}
@supports not (font-size: clamp( 2.5rem , 1.45rem  +  4.6666666667vw , 4.25rem )) {
  .title {
    font-size: calc(
			2.5rem + 1.75 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (line-height: clamp( 2.8125rem , 1.725rem  +  4.8333333333vw , 4.625rem )) {
  .title {
    line-height: clamp( 2.8125rem , 1.725rem  +  4.8333333333vw , 4.625rem );
  }
}
@supports not (line-height: clamp( 2.8125rem , 1.725rem  +  4.8333333333vw , 4.625rem )) {
  .title {
    line-height: calc(
			2.8125rem + 1.8125 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (margin-bottom: clamp( 2rem , 1.1rem  +  4vw , 3.5rem )) {
  .title {
    margin-bottom: clamp( 2rem , 1.1rem  +  4vw , 3.5rem );
  }
}
@supports not (margin-bottom: clamp( 2rem , 1.1rem  +  4vw , 3.5rem )) {
  .title {
    margin-bottom: calc(
			2rem + 1.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
.title_big {
  line-height: 1;
}
@supports (font-size: clamp( 9.375rem , -1.8190298507rem  +  18.6567164179vw , 12.5rem )) {
  .title_big {
    font-size: clamp( 9.375rem , -1.8190298507rem  +  18.6567164179vw , 12.5rem );
  }
}
@supports not (font-size: clamp( 9.375rem , -1.8190298507rem  +  18.6567164179vw , 12.5rem )) {
  .title_big {
    font-size: calc(
			9.375rem + 3.125 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (margin-top: clamp( -3.75rem , 4.5595472441rem  +  -10.8267716535vw , -0.3125rem )) {
  .title_big {
    margin-top: clamp( -3.75rem , 4.5595472441rem  +  -10.8267716535vw , -0.3125rem );
  }
}
@supports not (margin-top: clamp( -3.75rem , 4.5595472441rem  +  -10.8267716535vw , -0.3125rem )) {
  .title_big {
    margin-top: calc(
			-0.3125rem + -3.4375 * (100vw - 45rem) / 31.75
		);
  }
}
@supports (margin-bottom: clamp( 1rem , -0.7910447761rem  +  2.9850746269vw , 1.5rem )) {
  .title_big {
    margin-bottom: clamp( 1rem , -0.7910447761rem  +  2.9850746269vw , 1.5rem );
  }
}
@supports not (margin-bottom: clamp( 1rem , -0.7910447761rem  +  2.9850746269vw , 1.5rem )) {
  .title_big {
    margin-bottom: calc(
			1rem + 0.5 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 960px) {
  @supports (font-size: clamp( 4.625rem , -0.9886363636rem  +  17.2727272727vw , 9.375rem )) {
    .title_big {
      font-size: clamp( 4.625rem , -0.9886363636rem  +  17.2727272727vw , 9.375rem );
    }
  }
  @supports not (font-size: clamp( 4.625rem , -0.9886363636rem  +  17.2727272727vw , 9.375rem )) {
    .title_big {
      font-size: calc(
			4.625rem + 4.75 * (100vw - 32.5rem) / 27.5
		);
    }
  }
  @supports (margin-bottom: clamp( 0.5rem , -0.0909090909rem  +  1.8181818182vw , 1rem )) {
    .title_big {
      margin-bottom: clamp( 0.5rem , -0.0909090909rem  +  1.8181818182vw , 1rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.5rem , -0.0909090909rem  +  1.8181818182vw , 1rem )) {
    .title_big {
      margin-bottom: calc(
			0.5rem + 0.5 * (100vw - 32.5rem) / 27.5
		);
    }
  }
}

.triangeled-list {
  display: flex;
  flex-wrap: wrap;
  margin-inline: -0.75rem;
}
.triangeled-list__item {
  font-family: "Roboto Mono";
  color: #e6e6e6;
  position: relative;
  padding-right: 0.75rem;
}
@supports (font-size: clamp( 1rem , 0.775rem  +  1vw , 1.375rem )) {
  .triangeled-list__item {
    font-size: clamp( 1rem , 0.775rem  +  1vw , 1.375rem );
  }
}
@supports not (font-size: clamp( 1rem , 0.775rem  +  1vw , 1.375rem )) {
  .triangeled-list__item {
    font-size: calc(
			1rem + 0.375 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (line-height: clamp( 1.5rem , 1.275rem  +  1vw , 1.875rem )) {
  .triangeled-list__item {
    line-height: clamp( 1.5rem , 1.275rem  +  1vw , 1.875rem );
  }
}
@supports not (line-height: clamp( 1.5rem , 1.275rem  +  1vw , 1.875rem )) {
  .triangeled-list__item {
    line-height: calc(
			1.5rem + 0.375 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-left: clamp( 2.75rem , 2.45rem  +  1.3333333333vw , 3.25rem )) {
  .triangeled-list__item {
    padding-left: clamp( 2.75rem , 2.45rem  +  1.3333333333vw , 3.25rem );
  }
}
@supports not (padding-left: clamp( 2.75rem , 2.45rem  +  1.3333333333vw , 3.25rem )) {
  .triangeled-list__item {
    padding-left: calc(
			2.75rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
.triangeled-list__item::before {
  content: "";
  position: absolute;
  left: 0.75rem;
  display: block;
  width: 24px;
  height: 24px;
  background-image: url(../img/icons/orangeFillArrow.svg);
}
@supports (top: clamp( 0.00000625rem , -0.14999rem  +  0.66665vw , 0.25rem )) {
  .triangeled-list__item::before {
    top: clamp( 0.00000625rem , -0.14999rem  +  0.66665vw , 0.25rem );
  }
}
@supports not (top: clamp( 0.00000625rem , -0.14999rem  +  0.66665vw , 0.25rem )) {
  .triangeled-list__item::before {
    top: calc(
			0.00000625rem + 0.24999375 * (100vw - 22.5rem) / 37.5
		);
  }
}

.media-block {
  position: relative;
}
.media-block__row {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  width: 100%;
}
.media-block__media {
  overflow: hidden;
  position: relative;
  flex: 1 1 auto;
}
@supports (height: clamp( 5.625rem , 3.8339552239rem  +  2.9850746269vw , 6.125rem )) {
  .media-block__media {
    height: clamp( 5.625rem , 3.8339552239rem  +  2.9850746269vw , 6.125rem );
  }
}
@supports not (height: clamp( 5.625rem , 3.8339552239rem  +  2.9850746269vw , 6.125rem )) {
  .media-block__media {
    height: calc(
			5.625rem + 0.5 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (border-radius: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem )) {
  .media-block__media {
    border-radius: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem );
  }
}
@supports not (border-radius: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem )) {
  .media-block__media {
    border-radius: calc(
			0.5rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (top: clamp( 0.5rem , 1.6455223881rem  +  -1.4925373134vw , 0.75rem )) {
  .media-block__media {
    top: clamp( 0.5rem , 1.6455223881rem  +  -1.4925373134vw , 0.75rem );
  }
}
@supports not (top: clamp( 0.5rem , 1.6455223881rem  +  -1.4925373134vw , 0.75rem )) {
  .media-block__media {
    top: calc(
			0.75rem + -0.25 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (height: clamp( 2rem , -0.175rem  +  9.6666666667vw , 5.625rem )) {
    .media-block__media {
      height: clamp( 2rem , -0.175rem  +  9.6666666667vw , 5.625rem );
    }
  }
  @supports not (height: clamp( 2rem , -0.175rem  +  9.6666666667vw , 5.625rem )) {
    .media-block__media {
      height: calc(
			2rem + 3.625 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (top: clamp( 0.25rem , -0.05rem  +  1.3333333333vw , 0.75rem )) {
    .media-block__media {
      top: clamp( 0.25rem , -0.05rem  +  1.3333333333vw , 0.75rem );
    }
  }
  @supports not (top: clamp( 0.25rem , -0.05rem  +  1.3333333333vw , 0.75rem )) {
    .media-block__media {
      top: calc(
			0.25rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.media-block__media:not(:last-child) {
  margin-right: 1.5rem;
}
@supports (margin-right: clamp( 1rem , -0.7910447761rem  +  2.9850746269vw , 1.5rem )) {
  .media-block__media:not(:last-child) {
    margin-right: clamp( 1rem , -0.7910447761rem  +  2.9850746269vw , 1.5rem );
  }
}
@supports not (margin-right: clamp( 1rem , -0.7910447761rem  +  2.9850746269vw , 1.5rem )) {
  .media-block__media:not(:last-child) {
    margin-right: calc(
			1rem + 0.5 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (margin-right: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem )) {
    .media-block__media:not(:last-child) {
      margin-right: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem );
    }
  }
  @supports not (margin-right: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem )) {
    .media-block__media:not(:last-child) {
      margin-right: calc(
			0.5rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
@supports (margin-left: clamp( 1rem , -0.7910447761rem  +  2.9850746269vw , 1.5rem )) {
  .media-block__media:not(:first-child) {
    margin-left: clamp( 1rem , -0.7910447761rem  +  2.9850746269vw , 1.5rem );
  }
}
@supports not (margin-left: clamp( 1rem , -0.7910447761rem  +  2.9850746269vw , 1.5rem )) {
  .media-block__media:not(:first-child) {
    margin-left: calc(
			1rem + 0.5 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (margin-left: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem )) {
    .media-block__media:not(:first-child) {
      margin-left: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem );
    }
  }
  @supports not (margin-left: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem )) {
    .media-block__media:not(:first-child) {
      margin-left: calc(
			0.5rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.media-block__media img,
.media-block__media video {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  object-fit: cover;
  height: 100%;
  z-index: -1;
}
.media-block__media_tall {
  height: unset;
  top: 0;
  align-self: stretch;
}
@supports (margin-top: clamp( 1.125rem , -0.2182835821rem  +  2.2388059701vw , 1.5rem )) {
  .media-block__media_tall {
    margin-top: clamp( 1.125rem , -0.2182835821rem  +  2.2388059701vw , 1.5rem );
  }
}
@supports not (margin-top: clamp( 1.125rem , -0.2182835821rem  +  2.2388059701vw , 1.5rem )) {
  .media-block__media_tall {
    margin-top: calc(
			1.125rem + 0.375 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (margin-bottom: clamp( 0.3125rem , -1.4785447761rem  +  2.9850746269vw , 0.8125rem )) {
  .media-block__media_tall {
    margin-bottom: clamp( 0.3125rem , -1.4785447761rem  +  2.9850746269vw , 0.8125rem );
  }
}
@supports not (margin-bottom: clamp( 0.3125rem , -1.4785447761rem  +  2.9850746269vw , 0.8125rem )) {
  .media-block__media_tall {
    margin-bottom: calc(
			0.3125rem + 0.5 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  .media-block__media_tall {
    height: unset;
  }
  @supports (margin-top: clamp( 0.5rem , 0.125rem  +  1.6666666667vw , 1.125rem )) {
    .media-block__media_tall {
      margin-top: clamp( 0.5rem , 0.125rem  +  1.6666666667vw , 1.125rem );
    }
  }
  @supports not (margin-top: clamp( 0.5rem , 0.125rem  +  1.6666666667vw , 1.125rem )) {
    .media-block__media_tall {
      margin-top: calc(
			0.5rem + 0.625 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (margin-bottom: clamp( 0.125rem , 0.0125rem  +  0.5vw , 0.3125rem )) {
    .media-block__media_tall {
      margin-bottom: clamp( 0.125rem , 0.0125rem  +  0.5vw , 0.3125rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.125rem , 0.0125rem  +  0.5vw , 0.3125rem )) {
    .media-block__media_tall {
      margin-bottom: calc(
			0.125rem + 0.1875 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.media-block__text {
  font-family: "Inter Tight", sans-serif;
  font-weight: 700;
  text-transform: lowercase;
}
@supports (font-size: clamp( 7.5rem , 1.2313432836rem  +  10.447761194vw , 9.25rem )) {
  .media-block__text {
    font-size: clamp( 7.5rem , 1.2313432836rem  +  10.447761194vw , 9.25rem );
  }
}
@supports not (font-size: clamp( 7.5rem , 1.2313432836rem  +  10.447761194vw , 9.25rem )) {
  .media-block__text {
    font-size: calc(
			7.5rem + 1.75 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (line-height: clamp( 7.5rem , 1.2313432836rem  +  10.447761194vw , 9.25rem )) {
  .media-block__text {
    line-height: clamp( 7.5rem , 1.2313432836rem  +  10.447761194vw , 9.25rem );
  }
}
@supports not (line-height: clamp( 7.5rem , 1.2313432836rem  +  10.447761194vw , 9.25rem )) {
  .media-block__text {
    line-height: calc(
			7.5rem + 1.75 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (font-size: clamp( 2.75rem , -0.1rem  +  12.6666666667vw , 7.5rem )) {
    .media-block__text {
      font-size: clamp( 2.75rem , -0.1rem  +  12.6666666667vw , 7.5rem );
    }
  }
  @supports not (font-size: clamp( 2.75rem , -0.1rem  +  12.6666666667vw , 7.5rem )) {
    .media-block__text {
      font-size: calc(
			2.75rem + 4.75 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (line-height: clamp( 2.75rem , -0.1rem  +  12.6666666667vw , 7.5rem )) {
    .media-block__text {
      line-height: clamp( 2.75rem , -0.1rem  +  12.6666666667vw , 7.5rem );
    }
  }
  @supports not (line-height: clamp( 2.75rem , -0.1rem  +  12.6666666667vw , 7.5rem )) {
    .media-block__text {
      line-height: calc(
			2.75rem + 4.75 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.media-block__emoji {
  position: absolute;
}
@supports (right: clamp( 14.0625rem , 1.7490671642rem  +  20.5223880597vw , 17.5rem )) {
  .media-block__emoji {
    right: clamp( 14.0625rem , 1.7490671642rem  +  20.5223880597vw , 17.5rem );
  }
}
@supports not (right: clamp( 14.0625rem , 1.7490671642rem  +  20.5223880597vw , 17.5rem )) {
  .media-block__emoji {
    right: calc(
			14.0625rem + 3.4375 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (top: clamp( 15.625rem , 3.3115671642rem  +  20.5223880597vw , 19.0625rem )) {
  .media-block__emoji {
    top: clamp( 15.625rem , 3.3115671642rem  +  20.5223880597vw , 19.0625rem );
  }
}
@supports not (top: clamp( 15.625rem , 3.3115671642rem  +  20.5223880597vw , 19.0625rem )) {
  .media-block__emoji {
    top: calc(
			15.625rem + 3.4375 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (height: clamp( 6.5625rem , 0.9654850746rem  +  9.328358209vw , 8.125rem )) {
  .media-block__emoji {
    height: clamp( 6.5625rem , 0.9654850746rem  +  9.328358209vw , 8.125rem );
  }
}
@supports not (height: clamp( 6.5625rem , 0.9654850746rem  +  9.328358209vw , 8.125rem )) {
  .media-block__emoji {
    height: calc(
			6.5625rem + 1.5625 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (right: clamp( 5.25rem , -0.0375rem  +  23.5vw , 14.0625rem )) {
    .media-block__emoji {
      right: clamp( 5.25rem , -0.0375rem  +  23.5vw , 14.0625rem );
    }
  }
  @supports not (right: clamp( 5.25rem , -0.0375rem  +  23.5vw , 14.0625rem )) {
    .media-block__emoji {
      right: calc(
			5.25rem + 8.8125 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (top: clamp( 5.75rem , -0.175rem  +  26.3333333333vw , 15.625rem )) {
    .media-block__emoji {
      top: clamp( 5.75rem , -0.175rem  +  26.3333333333vw , 15.625rem );
    }
  }
  @supports not (top: clamp( 5.75rem , -0.175rem  +  26.3333333333vw , 15.625rem )) {
    .media-block__emoji {
      top: calc(
			5.75rem + 9.875 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (height: clamp( 2.375rem , -0.1375rem  +  11.1666666667vw , 6.5625rem )) {
    .media-block__emoji {
      height: clamp( 2.375rem , -0.1375rem  +  11.1666666667vw , 6.5625rem );
    }
  }
  @supports not (height: clamp( 2.375rem , -0.1375rem  +  11.1666666667vw , 6.5625rem )) {
    .media-block__emoji {
      height: calc(
			2.375rem + 4.1875 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.media-block__emoji img {
  height: 100%;
}

@supports (margin-bottom: clamp( 4.8125rem , -3.0233208955rem  +  13.0597014925vw , 7rem )) {
  .header {
    margin-bottom: clamp( 4.8125rem , -3.0233208955rem  +  13.0597014925vw , 7rem );
  }
}
@supports not (margin-bottom: clamp( 4.8125rem , -3.0233208955rem  +  13.0597014925vw , 7rem )) {
  .header {
    margin-bottom: calc(
			4.8125rem + 2.1875 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (margin-bottom: clamp( 2.6875rem , 1.4125rem  +  5.6666666667vw , 4.8125rem )) {
    .header {
      margin-bottom: clamp( 2.6875rem , 1.4125rem  +  5.6666666667vw , 4.8125rem );
    }
  }
  @supports not (margin-bottom: clamp( 2.6875rem , 1.4125rem  +  5.6666666667vw , 4.8125rem )) {
    .header {
      margin-bottom: calc(
			2.6875rem + 2.125 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.header__wrapper {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #2c3033;
  height: 121px;
  align-items: center;
  position: relative;
}
@media (max-width: 720px) {
  .header__wrapper {
    align-items: normal;
    flex-wrap: wrap;
    align-content: space-between;
  }
}
.header__wrapper::before {
  display: none;
}
@media (max-width: 60em) {
  @supports (height: clamp( 5.625rem , 4.4625rem  +  5.1666666667vw , 7.5625rem )) {
    .header__wrapper {
      height: clamp( 5.625rem , 4.4625rem  +  5.1666666667vw , 7.5625rem );
    }
  }
  @supports not (height: clamp( 5.625rem , 4.4625rem  +  5.1666666667vw , 7.5625rem )) {
    .header__wrapper {
      height: calc(
			5.625rem + 1.9375 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
@media (max-width: 720px) {
  .header__wrapper {
    border-bottom: none;
  }
  .header__wrapper::before {
    display: block;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #2c3033;
    position: absolute;
    left: 0;
  }
  @supports (top: clamp( 3.75rem , 2.75rem  +  4.4444444444vw , 4.75rem )) {
    .header__wrapper::before {
      top: clamp( 3.75rem , 2.75rem  +  4.4444444444vw , 4.75rem );
    }
  }
  @supports not (top: clamp( 3.75rem , 2.75rem  +  4.4444444444vw , 4.75rem )) {
    .header__wrapper::before {
      top: calc(
			3.75rem + 1 * (100vw - 22.5rem) / 22.5
		);
    }
  }
}
.header__logo {
  flex: 0 0 133px;
  height: auto;
}
@supports (flex-basis: clamp( 5.625rem , 4.0125rem  +  7.1666666667vw , 8.3125rem )) {
  .header__logo {
    flex-basis: clamp( 5.625rem , 4.0125rem  +  7.1666666667vw , 8.3125rem );
  }
}
@supports not (flex-basis: clamp( 5.625rem , 4.0125rem  +  7.1666666667vw , 8.3125rem )) {
  .header__logo {
    flex-basis: calc(
			5.625rem + 2.6875 * (100vw - 22.5rem) / 37.5
		);
  }
}
.header img {
  width: 100%;
}

@media (max-width: 720px) {
  .menu {
    width: 100%;
  }
}
.menu__items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 5rem;
  margin: 0 -5rem;
  scrollbar-width: none;
}
@media (max-width: 720px) {
  .menu__items {
    flex-wrap: nowrap;
  }
}
.menu__items::-webkit-scrollbar {
  display: none;
}
.menu__item {
  flex: 0 0 auto;
  position: relative;
}
@supports (font-size: clamp( 1.125rem , 1.05rem  +  0.3333333333vw , 1.25rem )) {
  .menu__item {
    font-size: clamp( 1.125rem , 1.05rem  +  0.3333333333vw , 1.25rem );
  }
}
@supports not (font-size: clamp( 1.125rem , 1.05rem  +  0.3333333333vw , 1.25rem )) {
  .menu__item {
    font-size: calc(
			1.125rem + 0.125 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (line-height: clamp( 1.3125rem , 0.975rem  +  1.5vw , 1.875rem )) {
  .menu__item {
    line-height: clamp( 1.3125rem , 0.975rem  +  1.5vw , 1.875rem );
  }
}
@supports not (line-height: clamp( 1.3125rem , 0.975rem  +  1.5vw , 1.875rem )) {
  .menu__item {
    line-height: calc(
			1.3125rem + 0.5625 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (margin-left: clamp( 1.5rem , -1.5rem  +  6.6666666667vw , 2.5rem )) {
  .menu__item {
    margin-left: clamp( 1.5rem , -1.5rem  +  6.6666666667vw , 2.5rem );
  }
}
@supports not (margin-left: clamp( 1.5rem , -1.5rem  +  6.6666666667vw , 2.5rem )) {
  .menu__item {
    margin-left: calc(
			1.5rem + 1 * (100vw - 45rem) / 15
		);
  }
}
@media (max-width: 720px) {
  .menu__item {
    font-family: "Inter Tight", sans-serif;
  }
  .menu__item:first-child {
    margin-left: 0;
  }
}
.menu__item::after {
  width: 0;
  height: 2px;
  content: "";
  background-color: #f17e14;
  transition: all 0.3s ease-in-out;
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
}
.menu__item:hover::after {
  width: 100%;
  left: 0;
}
.menu__item_gradient {
  font-weight: 550;
  background: linear-gradient(87.01deg, #6d9be3 3.39%, #aadfc1 32.8%, #f4cd63 61.74%, #eb672d 94.48%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.footer__wrapper {
  flex-direction: row-reverse;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
@supports (padding-top: clamp( 7.125rem , -3.1735074627rem  +  17.1641791045vw , 10rem )) {
  .footer__wrapper {
    padding-top: clamp( 7.125rem , -3.1735074627rem  +  17.1641791045vw , 10rem );
  }
}
@supports not (padding-top: clamp( 7.125rem , -3.1735074627rem  +  17.1641791045vw , 10rem )) {
  .footer__wrapper {
    padding-top: calc(
			7.125rem + 2.875 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (padding-bottom: clamp( 3.5rem , -10.828358209rem  +  23.8805970149vw , 7.5rem )) {
  .footer__wrapper {
    padding-bottom: clamp( 3.5rem , -10.828358209rem  +  23.8805970149vw , 7.5rem );
  }
}
@supports not (padding-bottom: clamp( 3.5rem , -10.828358209rem  +  23.8805970149vw , 7.5rem )) {
  .footer__wrapper {
    padding-bottom: calc(
			3.5rem + 4 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (padding-top: clamp( 4rem , 2.125rem  +  8.3333333333vw , 7.125rem )) {
    .footer__wrapper {
      padding-top: clamp( 4rem , 2.125rem  +  8.3333333333vw , 7.125rem );
    }
  }
  @supports not (padding-top: clamp( 4rem , 2.125rem  +  8.3333333333vw , 7.125rem )) {
    .footer__wrapper {
      padding-top: calc(
			4rem + 3.125 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (padding-bottom: clamp( 0.00000625rem , -2.09999rem  +  9.3333166667vw , 3.5rem )) {
    .footer__wrapper {
      padding-bottom: clamp( 0.00000625rem , -2.09999rem  +  9.3333166667vw , 3.5rem );
    }
  }
  @supports not (padding-bottom: clamp( 0.00000625rem , -2.09999rem  +  9.3333166667vw , 3.5rem )) {
    .footer__wrapper {
      padding-bottom: calc(
			0.00000625rem + 3.49999375 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (padding-left: clamp( 0.5rem , -0.1rem  +  2.6666666667vw , 1.5rem )) {
    .footer__wrapper {
      padding-left: clamp( 0.5rem , -0.1rem  +  2.6666666667vw , 1.5rem );
    }
  }
  @supports not (padding-left: clamp( 0.5rem , -0.1rem  +  2.6666666667vw , 1.5rem )) {
    .footer__wrapper {
      padding-left: calc(
			0.5rem + 1 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (padding-right: clamp( 0.5rem , -0.1rem  +  2.6666666667vw , 1.5rem )) {
    .footer__wrapper {
      padding-right: clamp( 0.5rem , -0.1rem  +  2.6666666667vw , 1.5rem );
    }
  }
  @supports not (padding-right: clamp( 0.5rem , -0.1rem  +  2.6666666667vw , 1.5rem )) {
    .footer__wrapper {
      padding-right: calc(
			0.5rem + 1 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.footer__copyright {
  flex: 1 1 auto;
  margin-bottom: 40px;
  margin-right: 2.5rem;
}
@supports (font-size: clamp( 1.25rem , 1.1rem  +  0.6666666667vw , 1.5rem )) {
  .footer__copyright {
    font-size: clamp( 1.25rem , 1.1rem  +  0.6666666667vw , 1.5rem );
  }
}
@supports not (font-size: clamp( 1.25rem , 1.1rem  +  0.6666666667vw , 1.5rem )) {
  .footer__copyright {
    font-size: calc(
			1.25rem + 0.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (line-height: clamp( 1.875rem , 1.4625rem  +  1.8333333333vw , 2.5625rem )) {
  .footer__copyright {
    line-height: clamp( 1.875rem , 1.4625rem  +  1.8333333333vw , 2.5625rem );
  }
}
@supports not (line-height: clamp( 1.875rem , 1.4625rem  +  1.8333333333vw , 2.5625rem )) {
  .footer__copyright {
    line-height: calc(
			1.875rem + 0.6875 * (100vw - 22.5rem) / 37.5
		);
  }
}
@media (max-width: 700px) {
  .footer__copyright {
    margin-right: 0;
  }
}
.menu-footer {
  margin-right: auto;
  margin-bottom: 2.5rem;
}
.menu-footer__items {
  display: flex;
  flex-wrap: wrap;
  column-gap: 2.5rem;
  row-gap: 0.5625rem;
}
.menu-footer__item {
  position: relative;
}
@supports (font-size: clamp( 1.25rem , 1.1rem  +  0.6666666667vw , 1.5rem )) {
  .menu-footer__item {
    font-size: clamp( 1.25rem , 1.1rem  +  0.6666666667vw , 1.5rem );
  }
}
@supports not (font-size: clamp( 1.25rem , 1.1rem  +  0.6666666667vw , 1.5rem )) {
  .menu-footer__item {
    font-size: calc(
			1.25rem + 0.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (line-height: clamp( 1.875rem , 1.4625rem  +  1.8333333333vw , 2.5625rem )) {
  .menu-footer__item {
    line-height: clamp( 1.875rem , 1.4625rem  +  1.8333333333vw , 2.5625rem );
  }
}
@supports not (line-height: clamp( 1.875rem , 1.4625rem  +  1.8333333333vw , 2.5625rem )) {
  .menu-footer__item {
    line-height: calc(
			1.875rem + 0.6875 * (100vw - 22.5rem) / 37.5
		);
  }
}
.menu-footer__item::after {
  width: 0;
  height: 2px;
  content: "";
  background-color: #f17e14;
  transition: all 0.3s ease-in-out;
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
}
.menu-footer__item:hover::after {
  width: 100%;
  left: 0;
}
.menu-footer__item_gradient {
  font-weight: 550;
  background: linear-gradient(87.01deg, #6d9be3 3.39%, #aadfc1 32.8%, #f4cd63 61.74%, #eb672d 94.48%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.preload-bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10;
  background: #090808;
}

#preload-text-position-holder {
  opacity: 0;
}

#preload-text-original {
  position: fixed;
  left: 0;
  white-space: nowrap;
  top: 46vh;
}

.media-block_animated {
  position: relative;
}

.media-block__animate-text {
  position: absolute;
}

.media-block__animate-text_r-l {
  right: 0;
}

._img-anim-hidden {
  opacity: 0;
}

._img-anim-hidden.animated {
  animation: 1.3s ease-out 0s forwards show-element;
}

._text-anim-origin {
  opacity: 0;
}

.media-block__animate-text_l-r.animated {
  animation: 1.3s ease-out 0s forwards move-l-to-r;
}

.media-block__animate-text_r-l.animated {
  animation: 1.3s ease-out 0s forwards move-r-to-l;
}

@keyframes move-l-to-r {
  from {
    left: 0;
  }
  to {
    left: 100%;
    transform: translateX(-100%);
  }
}
@keyframes move-r-to-l {
  from {
    right: 0;
  }
  to {
    right: 100%;
    transform: translateX(100%);
  }
}
@keyframes show-element {
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
}
body::after {
  content: "";
  background-color: #090808;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 99;
}

.popup-show body::after {
  opacity: 1;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: visibility 0.5s ease 0s;
  visibility: hidden;
  pointer-events: none;
}
.popup__wrapper {
  display: flex;
  align-items: center;
  min-height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.625rem;
}
@supports (padding-top: clamp( 2rem , -0.1514976959rem  +  9.5622119816vw , 7.1875rem )) {
  .popup__wrapper {
    padding-top: clamp( 2rem , -0.1514976959rem  +  9.5622119816vw , 7.1875rem );
  }
}
@supports not (padding-top: clamp( 2rem , -0.1514976959rem  +  9.5622119816vw , 7.1875rem )) {
  .popup__wrapper {
    padding-top: calc(
			2rem + 5.1875 * (100vw - 22.5rem) / 54.25
		);
  }
}
.popup__content {
  visibility: hidden;
  transform: scale(0);
  transition: transform 0.3s ease 0s;
  width: 100%;
}
.lock .popup__content {
  visibility: visible;
}
.popup__close {
  position: relative;
  font-family: "Inter Tight", sans-serif;
  font-weight: 700;
}
@supports (font-size: clamp( 1.25rem , 0.8352534562rem  +  1.8433179724vw , 2.25rem )) {
  .popup__close {
    font-size: clamp( 1.25rem , 0.8352534562rem  +  1.8433179724vw , 2.25rem );
  }
}
@supports not (font-size: clamp( 1.25rem , 0.8352534562rem  +  1.8433179724vw , 2.25rem )) {
  .popup__close {
    font-size: calc(
			1.25rem + 1 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (line-height: clamp( 1.375rem , 0.9602534562rem  +  1.8433179724vw , 2.375rem )) {
  .popup__close {
    line-height: clamp( 1.375rem , 0.9602534562rem  +  1.8433179724vw , 2.375rem );
  }
}
@supports not (line-height: clamp( 1.375rem , 0.9602534562rem  +  1.8433179724vw , 2.375rem )) {
  .popup__close {
    line-height: calc(
			1.375rem + 1 * (100vw - 22.5rem) / 54.25
		);
  }
}
.popup__close:focus-visible {
  outline: none;
}
.popup__close:hover + .animated-line {
  width: 176px;
}
.popup__title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 700;
}
@supports (font-size: clamp( 3.5rem , -0.232718894rem  +  16.5898617512vw , 12.5rem )) {
  .popup__title {
    font-size: clamp( 3.5rem , -0.232718894rem  +  16.5898617512vw , 12.5rem );
  }
}
@supports not (font-size: clamp( 3.5rem , -0.232718894rem  +  16.5898617512vw , 12.5rem )) {
  .popup__title {
    font-size: calc(
			3.5rem + 9 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (line-height: clamp( 2.5rem , 0.2448156682rem  +  10.0230414747vw , 7.9375rem )) {
  .popup__title {
    line-height: clamp( 2.5rem , 0.2448156682rem  +  10.0230414747vw , 7.9375rem );
  }
}
@supports not (line-height: clamp( 2.5rem , 0.2448156682rem  +  10.0230414747vw , 7.9375rem )) {
  .popup__title {
    line-height: calc(
			2.5rem + 5.4375 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (margin-bottom: clamp( 0.00000625rem , -0.2332860887rem  +  1.0368548387vw , 0.5625rem )) {
  .popup__title {
    margin-bottom: clamp( 0.00000625rem , -0.2332860887rem  +  1.0368548387vw , 0.5625rem );
  }
}
@supports not (margin-bottom: clamp( 0.00000625rem , -0.2332860887rem  +  1.0368548387vw , 0.5625rem )) {
  .popup__title {
    margin-bottom: calc(
			0.00000625rem + 0.56249375 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (margin-bottom: clamp( 2rem , 1.1705069124rem  +  3.6866359447vw , 4rem )) {
  .popup__text-wrapper {
    margin-bottom: clamp( 2rem , 1.1705069124rem  +  3.6866359447vw , 4rem );
  }
}
@supports not (margin-bottom: clamp( 2rem , 1.1705069124rem  +  3.6866359447vw , 4rem )) {
  .popup__text-wrapper {
    margin-bottom: calc(
			2rem + 2 * (100vw - 22.5rem) / 54.25
		);
  }
}
.popup_show {
  z-index: 150;
  visibility: visible;
  overflow: auto;
  pointer-events: auto;
}

.popup_show .popup__content {
  visibility: visible;
  transform: scale(1);
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
@supports (margin-bottom: clamp( 1.5rem , 0.4631336406rem  +  4.6082949309vw , 4rem )) {
  .button-wrapper {
    margin-bottom: clamp( 1.5rem , 0.4631336406rem  +  4.6082949309vw , 4rem );
  }
}
@supports not (margin-bottom: clamp( 1.5rem , 0.4631336406rem  +  4.6082949309vw , 4rem )) {
  .button-wrapper {
    margin-bottom: calc(
			1.5rem + 2.5 * (100vw - 22.5rem) / 54.25
		);
  }
}

.animated-line {
  height: 2px;
  background-color: #f17e14;
  transition: width 0.3s ease-in-out 0s;
}
@supports (width: clamp( 4.25rem , 2.7983870968rem  +  6.4516129032vw , 7.75rem )) {
  .animated-line {
    width: clamp( 4.25rem , 2.7983870968rem  +  6.4516129032vw , 7.75rem );
  }
}
@supports not (width: clamp( 4.25rem , 2.7983870968rem  +  6.4516129032vw , 7.75rem )) {
  .animated-line {
    width: calc(
			4.25rem + 3.5 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (margin-left: clamp( 0.5rem , 0.448156682rem  +  0.2304147465vw , 0.625rem )) {
  .animated-line {
    margin-left: clamp( 0.5rem , 0.448156682rem  +  0.2304147465vw , 0.625rem );
  }
}
@supports not (margin-left: clamp( 0.5rem , 0.448156682rem  +  0.2304147465vw , 0.625rem )) {
  .animated-line {
    margin-left: calc(
			0.5rem + 0.125 * (100vw - 22.5rem) / 54.25
		);
  }
}

.text-popup {
  display: flex;
  flex-wrap: nowrap;
}
@supports (gap: clamp( 1.75rem , -2.2362204724rem  +  8.8582677165vw , 4.5625rem )) {
  .text-popup {
    gap: clamp( 1.75rem , -2.2362204724rem  +  8.8582677165vw , 4.5625rem );
  }
}
@supports not (gap: clamp( 1.75rem , -2.2362204724rem  +  8.8582677165vw , 4.5625rem )) {
  .text-popup {
    gap: calc(
			1.75rem + 2.8125 * (100vw - 45rem) / 31.75
		);
  }
}
@supports (padding-top: clamp( 1.875rem , 1.4602534562rem  +  1.8433179724vw , 2.875rem )) {
  .text-popup {
    padding-top: clamp( 1.875rem , 1.4602534562rem  +  1.8433179724vw , 2.875rem );
  }
}
@supports not (padding-top: clamp( 1.875rem , 1.4602534562rem  +  1.8433179724vw , 2.875rem )) {
  .text-popup {
    padding-top: calc(
			1.875rem + 1 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (padding-bottom: clamp( 1.875rem , 1.4602534562rem  +  1.8433179724vw , 2.875rem )) {
  .text-popup {
    padding-bottom: clamp( 1.875rem , 1.4602534562rem  +  1.8433179724vw , 2.875rem );
  }
}
@supports not (padding-bottom: clamp( 1.875rem , 1.4602534562rem  +  1.8433179724vw , 2.875rem )) {
  .text-popup {
    padding-bottom: calc(
			1.875rem + 1 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (padding-inline: clamp( 0.75rem , -0.1313364055rem  +  3.9170506912vw , 2.875rem )) {
  .text-popup {
    padding-inline: clamp( 0.75rem , -0.1313364055rem  +  3.9170506912vw , 2.875rem );
  }
}
@supports not (padding-inline: clamp( 0.75rem , -0.1313364055rem  +  3.9170506912vw , 2.875rem )) {
  .text-popup {
    padding-inline: calc(
			0.75rem + 2.125 * (100vw - 22.5rem) / 54.25
		);
  }
}
@media (max-width: 720px) {
  .text-popup {
    flex-direction: column;
  }
}
.text-popup__description {
  flex: 0 1 472px;
  color: #e6e6e6;
  font-size: 20px;
  line-height: 30px;
}
@media (max-width: 960px) {
  .text-popup__description {
    flex: 1 1 50%;
  }
}
@media (max-width: 720px) {
  .text-popup__description {
    flex: 1 1 100%;
  }
}
.text-popup__features {
  flex: 1 1 50%;
  row-gap: 1.5rem;
}

.position-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #363636;
  backdrop-filter: blur(6px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
}
@supports (padding-bottom: clamp( 1.5rem , 1.2926267281rem  +  0.9216589862vw , 2rem )) {
  .position-button {
    padding-bottom: clamp( 1.5rem , 1.2926267281rem  +  0.9216589862vw , 2rem );
  }
}
@supports not (padding-bottom: clamp( 1.5rem , 1.2926267281rem  +  0.9216589862vw , 2rem )) {
  .position-button {
    padding-bottom: calc(
			1.5rem + 0.5 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (padding-top: clamp( 1.5rem , 1.2926267281rem  +  0.9216589862vw , 2rem )) {
  .position-button {
    padding-top: clamp( 1.5rem , 1.2926267281rem  +  0.9216589862vw , 2rem );
  }
}
@supports not (padding-top: clamp( 1.5rem , 1.2926267281rem  +  0.9216589862vw , 2rem )) {
  .position-button {
    padding-top: calc(
			1.5rem + 0.5 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (padding-left: clamp( 1rem , -0.2442396313rem  +  5.5299539171vw , 4rem )) {
  .position-button {
    padding-left: clamp( 1rem , -0.2442396313rem  +  5.5299539171vw , 4rem );
  }
}
@supports not (padding-left: clamp( 1rem , -0.2442396313rem  +  5.5299539171vw , 4rem )) {
  .position-button {
    padding-left: calc(
			1rem + 3 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (padding-right: clamp( 1rem , 0.0668202765rem  +  4.1474654378vw , 3.25rem )) {
  .position-button {
    padding-right: clamp( 1rem , 0.0668202765rem  +  4.1474654378vw , 3.25rem );
  }
}
@supports not (padding-right: clamp( 1rem , 0.0668202765rem  +  4.1474654378vw , 3.25rem )) {
  .position-button {
    padding-right: calc(
			1rem + 2.25 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (margin-bottom: clamp( 0.5rem , 0.0852534562rem  +  1.8433179724vw , 1.5rem )) {
  .position-button:not(:last-child) {
    margin-bottom: clamp( 0.5rem , 0.0852534562rem  +  1.8433179724vw , 1.5rem );
  }
}
@supports not (margin-bottom: clamp( 0.5rem , 0.0852534562rem  +  1.8433179724vw , 1.5rem )) {
  .position-button:not(:last-child) {
    margin-bottom: calc(
			0.5rem + 1 * (100vw - 22.5rem) / 54.25
		);
  }
}
@media (min-width: 60em) {
  .position-button {
    border: 2px solid #363636;
  }
  .position-button:hover {
    border: 2px solid rgba(255, 255, 255, 0.2);
  }
}
@media (max-width: 720px) {
  .position-button {
    flex-direction: column;
    align-items: flex-start;
  }
}
.position-button__title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 700;
}
@supports (font-size: clamp( 1.25rem , 0.6278801843rem  +  2.7649769585vw , 2.75rem )) {
  .position-button__title {
    font-size: clamp( 1.25rem , 0.6278801843rem  +  2.7649769585vw , 2.75rem );
  }
}
@supports not (font-size: clamp( 1.25rem , 0.6278801843rem  +  2.7649769585vw , 2.75rem )) {
  .position-button__title {
    font-size: calc(
			1.25rem + 1.5 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (line-height: clamp( 1.375rem , 0.4936635945rem  +  3.9170506912vw , 3.5rem )) {
  .position-button__title {
    line-height: clamp( 1.375rem , 0.4936635945rem  +  3.9170506912vw , 3.5rem );
  }
}
@supports not (line-height: clamp( 1.375rem , 0.4936635945rem  +  3.9170506912vw , 3.5rem )) {
  .position-button__title {
    line-height: calc(
			1.375rem + 2.125 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (margin-right: clamp( 0.75rem , 0.3326086957rem  +  0.8695652174vw , 1rem )) {
  .position-button__title {
    margin-right: clamp( 0.75rem , 0.3326086957rem  +  0.8695652174vw , 1rem );
  }
}
@supports not (margin-right: clamp( 0.75rem , 0.3326086957rem  +  0.8695652174vw , 1rem )) {
  .position-button__title {
    margin-right: calc(
			0.75rem + 0.25 * (100vw - 48rem) / 28.75
		);
  }
}
@media (max-width: 720px) {
  .position-button__title {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
.position-button__link {
  display: flex;
  align-items: baseline;
  line-height: 1.875rem;
}
@supports (font-size: clamp( 1.25rem , 1.0685483871rem  +  0.8064516129vw , 1.6875rem )) {
  .position-button__link {
    font-size: clamp( 1.25rem , 1.0685483871rem  +  0.8064516129vw , 1.6875rem );
  }
}
@supports not (font-size: clamp( 1.25rem , 1.0685483871rem  +  0.8064516129vw , 1.6875rem )) {
  .position-button__link {
    font-size: calc(
			1.25rem + 0.4375 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (line-height: clamp( 1.5rem , 1.3444700461rem  +  0.6912442396vw , 1.875rem )) {
  .position-button__link {
    line-height: clamp( 1.5rem , 1.3444700461rem  +  0.6912442396vw , 1.875rem );
  }
}
@supports not (line-height: clamp( 1.5rem , 1.3444700461rem  +  0.6912442396vw , 1.875rem )) {
  .position-button__link {
    line-height: calc(
			1.5rem + 0.375 * (100vw - 22.5rem) / 54.25
		);
  }
}
.position-button__link::after {
  content: "";
  display: block;
  -webkit-mask: url(../img/icons/link.svg) no-repeat 50% 50%;
  mask: url(../img/icons/link.svg) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  background-color: #6a6969;
  transition: background-color 0.3s ease;
  position: relative;
  top: 1px;
}
@supports (width: clamp( 1rem , 0.8626152074rem  +  0.6105990783vw , 1.33125rem )) {
  .position-button__link::after {
    width: clamp( 1rem , 0.8626152074rem  +  0.6105990783vw , 1.33125rem );
  }
}
@supports not (width: clamp( 1rem , 0.8626152074rem  +  0.6105990783vw , 1.33125rem )) {
  .position-button__link::after {
    width: calc(
			1rem + 0.33125 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (height: clamp( 1rem , 0.8626152074rem  +  0.6105990783vw , 1.33125rem )) {
  .position-button__link::after {
    height: clamp( 1rem , 0.8626152074rem  +  0.6105990783vw , 1.33125rem );
  }
}
@supports not (height: clamp( 1rem , 0.8626152074rem  +  0.6105990783vw , 1.33125rem )) {
  .position-button__link::after {
    height: calc(
			1rem + 0.33125 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (margin-left: clamp( 0.25rem , -0.0092165899rem  +  1.1520737327vw , 0.875rem )) {
  .position-button__link::after {
    margin-left: clamp( 0.25rem , -0.0092165899rem  +  1.1520737327vw , 0.875rem );
  }
}
@supports not (margin-left: clamp( 0.25rem , -0.0092165899rem  +  1.1520737327vw , 0.875rem )) {
  .position-button__link::after {
    margin-left: calc(
			0.25rem + 0.625 * (100vw - 22.5rem) / 54.25
		);
  }
}
.position-button__bg {
  opacity: 0;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  object-fit: cover;
  height: 100%;
  z-index: -1;
  transition: all 0.5s ease;
}
.position-button:hover .position-button__bg {
  opacity: 40%;
}
.position-button:hover .position-button__link::after {
  background-color: #c51bf0;
}

@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .welcome {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .welcome {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
.welcome__title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 500;
  text-transform: lowercase;
  display: inline-block;
}
@supports (font-size: clamp( 2.75rem , 0.0634328358rem  +  4.4776119403vw , 3.5rem )) {
  .welcome__title {
    font-size: clamp( 2.75rem , 0.0634328358rem  +  4.4776119403vw , 3.5rem );
  }
}
@supports not (font-size: clamp( 2.75rem , 0.0634328358rem  +  4.4776119403vw , 3.5rem )) {
  .welcome__title {
    font-size: calc(
			2.75rem + 0.75 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (line-height: clamp( 2.8125rem , -0.5457089552rem  +  5.5970149254vw , 3.75rem )) {
  .welcome__title {
    line-height: clamp( 2.8125rem , -0.5457089552rem  +  5.5970149254vw , 3.75rem );
  }
}
@supports not (line-height: clamp( 2.8125rem , -0.5457089552rem  +  5.5970149254vw , 3.75rem )) {
  .welcome__title {
    line-height: calc(
			2.8125rem + 0.9375 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (margin-bottom: clamp( 0.25rem , -1.0932835821rem  +  2.2388059701vw , 0.625rem )) {
  .welcome__title {
    margin-bottom: clamp( 0.25rem , -1.0932835821rem  +  2.2388059701vw , 0.625rem );
  }
}
@supports not (margin-bottom: clamp( 0.25rem , -1.0932835821rem  +  2.2388059701vw , 0.625rem )) {
  .welcome__title {
    margin-bottom: calc(
			0.25rem + 0.375 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (font-size: clamp( 1.5rem , 0.75rem  +  3.3333333333vw , 2.75rem )) {
    .welcome__title {
      font-size: clamp( 1.5rem , 0.75rem  +  3.3333333333vw , 2.75rem );
    }
  }
  @supports not (font-size: clamp( 1.5rem , 0.75rem  +  3.3333333333vw , 2.75rem )) {
    .welcome__title {
      font-size: calc(
			1.5rem + 1.25 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (line-height: clamp( 1.9375rem , 1.4125rem  +  2.3333333333vw , 2.8125rem )) {
    .welcome__title {
      line-height: clamp( 1.9375rem , 1.4125rem  +  2.3333333333vw , 2.8125rem );
    }
  }
  @supports not (line-height: clamp( 1.9375rem , 1.4125rem  +  2.3333333333vw , 2.8125rem )) {
    .welcome__title {
      line-height: calc(
			1.9375rem + 0.875 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (margin-bottom: clamp( 0.00000625rem , -0.14999rem  +  0.66665vw , 0.25rem )) {
    .welcome__title {
      margin-bottom: clamp( 0.00000625rem , -0.14999rem  +  0.66665vw , 0.25rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.00000625rem , -0.14999rem  +  0.66665vw , 0.25rem )) {
    .welcome__title {
      margin-bottom: calc(
			0.00000625rem + 0.24999375 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
@supports (margin-bottom: clamp( 2rem , 0.05rem  +  8.6666666667vw , 5.25rem )) {
  .welcome__content {
    margin-bottom: clamp( 2rem , 0.05rem  +  8.6666666667vw , 5.25rem );
  }
}
@supports not (margin-bottom: clamp( 2rem , 0.05rem  +  8.6666666667vw , 5.25rem )) {
  .welcome__content {
    margin-bottom: calc(
			2rem + 3.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-left: clamp( 1.875rem , 0.075rem  +  8vw , 4.875rem )) {
  .goals {
    padding-left: clamp( 1.875rem , 0.075rem  +  8vw , 4.875rem );
  }
}
@supports not (padding-left: clamp( 1.875rem , 0.075rem  +  8vw , 4.875rem )) {
  .goals {
    padding-left: calc(
			1.875rem + 3 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-right: clamp( 1.875rem , 0.075rem  +  8vw , 4.875rem )) {
  .goals {
    padding-right: clamp( 1.875rem , 0.075rem  +  8vw , 4.875rem );
  }
}
@supports not (padding-right: clamp( 1.875rem , 0.075rem  +  8vw , 4.875rem )) {
  .goals {
    padding-right: calc(
			1.875rem + 3 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-top: clamp( 1.875rem , 0.375rem  +  6.6666666667vw , 4.375rem )) {
  .goals {
    padding-top: clamp( 1.875rem , 0.375rem  +  6.6666666667vw , 4.375rem );
  }
}
@supports not (padding-top: clamp( 1.875rem , 0.375rem  +  6.6666666667vw , 4.375rem )) {
  .goals {
    padding-top: calc(
			1.875rem + 2.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-bottom: clamp( 1.875rem , 0.375rem  +  6.6666666667vw , 4.375rem )) {
  .goals {
    padding-bottom: clamp( 1.875rem , 0.375rem  +  6.6666666667vw , 4.375rem );
  }
}
@supports not (padding-bottom: clamp( 1.875rem , 0.375rem  +  6.6666666667vw , 4.375rem )) {
  .goals {
    padding-bottom: calc(
			1.875rem + 2.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
.goals__title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 700;
  max-width: 49.375rem;
}
@supports (font-size: clamp( 1.5rem , 0.3rem  +  5.3333333333vw , 3.5rem )) {
  .goals__title {
    font-size: clamp( 1.5rem , 0.3rem  +  5.3333333333vw , 3.5rem );
  }
}
@supports not (font-size: clamp( 1.5rem , 0.3rem  +  5.3333333333vw , 3.5rem )) {
  .goals__title {
    font-size: calc(
			1.5rem + 2 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (line-height: clamp( 1.8125rem , 0.65rem  +  5.1666666667vw , 3.75rem )) {
  .goals__title {
    line-height: clamp( 1.8125rem , 0.65rem  +  5.1666666667vw , 3.75rem );
  }
}
@supports not (line-height: clamp( 1.8125rem , 0.65rem  +  5.1666666667vw , 3.75rem )) {
  .goals__title {
    line-height: calc(
			1.8125rem + 1.9375 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (margin-bottom: clamp( 0.5rem , -0.1rem  +  2.6666666667vw , 1.5rem )) {
  .goals__title {
    margin-bottom: clamp( 0.5rem , -0.1rem  +  2.6666666667vw , 1.5rem );
  }
}
@supports not (margin-bottom: clamp( 0.5rem , -0.1rem  +  2.6666666667vw , 1.5rem )) {
  .goals__title {
    margin-bottom: calc(
			0.5rem + 1 * (100vw - 22.5rem) / 37.5
		);
  }
}
.goals__description {
  font-family: "Roboto Mono";
  font-weight: 300;
}
@supports (font-size: clamp( 1rem , 0.7rem  +  1.3333333333vw , 1.5rem )) {
  .goals__description {
    font-size: clamp( 1rem , 0.7rem  +  1.3333333333vw , 1.5rem );
  }
}
@supports not (font-size: clamp( 1rem , 0.7rem  +  1.3333333333vw , 1.5rem )) {
  .goals__description {
    font-size: calc(
			1rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (line-height: clamp( 1.5rem , 1.05rem  +  2vw , 2.25rem )) {
  .goals__description {
    line-height: clamp( 1.5rem , 1.05rem  +  2vw , 2.25rem );
  }
}
@supports not (line-height: clamp( 1.5rem , 1.05rem  +  2vw , 2.25rem )) {
  .goals__description {
    line-height: calc(
			1.5rem + 0.75 * (100vw - 22.5rem) / 37.5
		);
  }
}

@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .moving-text {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .moving-text {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
.moving-text_l-to-r, .moving-text_r-to-l {
  fill: none;
  stroke: #c51bf0;
  width: auto;
  opacity: 0.7;
}
.moving-text_l-to-r path, .moving-text_r-to-l path {
  vector-effect: non-scaling-stroke;
  stroke-width: 3px;
}
.moving-text_l-to-r {
  animation: movingText_l-to-r 10s infinite linear;
}
@supports (margin-bottom: clamp( 0.1875rem , 3.3376865672rem  +  -4.1044776119vw , 0.875rem )) {
  .moving-text_l-to-r {
    margin-bottom: clamp( 0.1875rem , 3.3376865672rem  +  -4.1044776119vw , 0.875rem );
  }
}
@supports not (margin-bottom: clamp( 0.1875rem , 3.3376865672rem  +  -4.1044776119vw , 0.875rem )) {
  .moving-text_l-to-r {
    margin-bottom: calc(
			0.875rem + -0.6875 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (height: clamp( 12.1875rem , -1.6930970149rem  +  23.1343283582vw , 16.0625rem )) {
  .moving-text_l-to-r {
    height: clamp( 12.1875rem , -1.6930970149rem  +  23.1343283582vw , 16.0625rem );
  }
}
@supports not (height: clamp( 12.1875rem , -1.6930970149rem  +  23.1343283582vw , 16.0625rem )) {
  .moving-text_l-to-r {
    height: calc(
			12.1875rem + 3.875 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (height: clamp( 4.75rem , 0.2875rem  +  19.8333333333vw , 12.1875rem )) {
    .moving-text_l-to-r {
      height: clamp( 4.75rem , 0.2875rem  +  19.8333333333vw , 12.1875rem );
    }
  }
  @supports not (height: clamp( 4.75rem , 0.2875rem  +  19.8333333333vw , 12.1875rem )) {
    .moving-text_l-to-r {
      height: calc(
			4.75rem + 7.4375 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (margin-bottom: clamp( 0.625rem , 0.475rem  +  0.6666666667vw , 0.875rem )) {
    .moving-text_l-to-r {
      margin-bottom: clamp( 0.625rem , 0.475rem  +  0.6666666667vw , 0.875rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.625rem , 0.475rem  +  0.6666666667vw , 0.875rem )) {
    .moving-text_l-to-r {
      margin-bottom: calc(
			0.625rem + 0.25 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.moving-text_r-to-l {
  transform: translateX(-50%);
  animation: movingText_r-to-l 10s infinite linear;
}
@supports (height: clamp( 11.375rem , 6.6735074627rem  +  7.8358208955vw , 12.6875rem )) {
  .moving-text_r-to-l {
    height: clamp( 11.375rem , 6.6735074627rem  +  7.8358208955vw , 12.6875rem );
  }
}
@supports not (height: clamp( 11.375rem , 6.6735074627rem  +  7.8358208955vw , 12.6875rem )) {
  .moving-text_r-to-l {
    height: calc(
			11.375rem + 1.3125 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (height: clamp( 3.71875rem , -0.875rem  +  20.4166666667vw , 11.375rem )) {
    .moving-text_r-to-l {
      height: clamp( 3.71875rem , -0.875rem  +  20.4166666667vw , 11.375rem );
    }
  }
  @supports not (height: clamp( 3.71875rem , -0.875rem  +  20.4166666667vw , 11.375rem )) {
    .moving-text_r-to-l {
      height: calc(
			3.71875rem + 7.65625 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}

@keyframes movingText_l-to-r {
  from {
    transform: translateX(-25%);
  }
  to {
    transform: translateX(-50%);
  }
}
@keyframes movingText_r-to-l {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(-25%);
  }
}
@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .what-we-do {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .what-we-do {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
.what-we-do__content {
  display: flex;
}
@media (max-width: 720px) {
  .what-we-do__content {
    flex-direction: column;
  }
}
.what-we-do .years-block {
  position: relative;
  font-family: "Inter Tight", sans-serif;
  text-align: center;
  align-self: flex-start;
}
@supports (margin-right: clamp( 1.5rem , -3.8731343284rem  +  8.9552238806vw , 3rem )) {
  .what-we-do .years-block {
    margin-right: clamp( 1.5rem , -3.8731343284rem  +  8.9552238806vw , 3rem );
  }
}
@supports not (margin-right: clamp( 1.5rem , -3.8731343284rem  +  8.9552238806vw , 3rem )) {
  .what-we-do .years-block {
    margin-right: calc(
			1.5rem + 1.5 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (min-width: clamp( 15rem , -23.25rem  +  85vw , 27.75rem )) {
  .what-we-do .years-block {
    min-width: clamp( 15rem , -23.25rem  +  85vw , 27.75rem );
  }
}
@supports not (min-width: clamp( 15rem , -23.25rem  +  85vw , 27.75rem )) {
  .what-we-do .years-block {
    min-width: calc(
			15rem + 12.75 * (100vw - 45rem) / 15
		);
  }
}
@media (max-width: 720px) {
  .what-we-do .years-block {
    margin-right: auto;
    margin-bottom: 1.5rem;
    min-width: 20.75rem;
  }
}
.what-we-do .years-block__quantity {
  font-weight: 700;
}
@supports (font-size: clamp( 12.5rem , -22.75rem  +  78.3333333333vw , 24.25rem )) {
  .what-we-do .years-block__quantity {
    font-size: clamp( 12.5rem , -22.75rem  +  78.3333333333vw , 24.25rem );
  }
}
@supports not (font-size: clamp( 12.5rem , -22.75rem  +  78.3333333333vw , 24.25rem )) {
  .what-we-do .years-block__quantity {
    font-size: calc(
			12.5rem + 11.75 * (100vw - 45rem) / 15
		);
  }
}
@supports (line-height: clamp( 15rem , -22.5rem  +  83.3333333333vw , 27.5rem )) {
  .what-we-do .years-block__quantity {
    line-height: clamp( 15rem , -22.5rem  +  83.3333333333vw , 27.5rem );
  }
}
@supports not (line-height: clamp( 15rem , -22.5rem  +  83.3333333333vw , 27.5rem )) {
  .what-we-do .years-block__quantity {
    line-height: calc(
			15rem + 12.5 * (100vw - 45rem) / 15
		);
  }
}
@media (max-width: 720px) {
  .what-we-do .years-block__quantity {
    font-size: 17.375rem;
    line-height: 20.5rem;
  }
}
.what-we-do .years-block__text {
  position: absolute;
  text-transform: lowercase;
  font-weight: 700;
  line-height: 1.25;
  left: 50%;
  bottom: 8%;
}
@supports (font-size: clamp( 2.25rem , 0.00000625rem  +  5vw , 3rem )) {
  .what-we-do .years-block__text {
    font-size: clamp( 2.25rem , 0.00000625rem  +  5vw , 3rem );
  }
}
@supports not (font-size: clamp( 2.25rem , 0.00000625rem  +  5vw , 3rem )) {
  .what-we-do .years-block__text {
    font-size: calc(
			2.25rem + 0.75 * (100vw - 45rem) / 15
		);
  }
}
.what-we-do__text {
  display: block;
  align-self: flex-end;
  font-weight: 700;
  font-family: "Inter Tight", sans-serif;
}
@supports (font-size: clamp( 2.1875rem , 1.0680970149rem  +  1.8656716418vw , 2.5rem )) {
  .what-we-do__text {
    font-size: clamp( 2.1875rem , 1.0680970149rem  +  1.8656716418vw , 2.5rem );
  }
}
@supports not (font-size: clamp( 2.1875rem , 1.0680970149rem  +  1.8656716418vw , 2.5rem )) {
  .what-we-do__text {
    font-size: calc(
			2.1875rem + 0.3125 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (line-height: clamp( 2.4375rem , 1.3180970149rem  +  1.8656716418vw , 2.75rem )) {
  .what-we-do__text {
    line-height: clamp( 2.4375rem , 1.3180970149rem  +  1.8656716418vw , 2.75rem );
  }
}
@supports not (line-height: clamp( 2.4375rem , 1.3180970149rem  +  1.8656716418vw , 2.75rem )) {
  .what-we-do__text {
    line-height: calc(
			2.4375rem + 0.3125 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (font-size: clamp( 1.5625rem , 1.1875rem  +  1.6666666667vw , 2.1875rem )) {
    .what-we-do__text {
      font-size: clamp( 1.5625rem , 1.1875rem  +  1.6666666667vw , 2.1875rem );
    }
  }
  @supports not (font-size: clamp( 1.5625rem , 1.1875rem  +  1.6666666667vw , 2.1875rem )) {
    .what-we-do__text {
      font-size: calc(
			1.5625rem + 0.625 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (line-height: clamp( 1.875rem , 1.5375rem  +  1.5vw , 2.4375rem )) {
    .what-we-do__text {
      line-height: clamp( 1.875rem , 1.5375rem  +  1.5vw , 2.4375rem );
    }
  }
  @supports not (line-height: clamp( 1.875rem , 1.5375rem  +  1.5vw , 2.4375rem )) {
    .what-we-do__text {
      line-height: calc(
			1.875rem + 0.5625 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.what-we-do__text span {
  text-transform: uppercase;
}

.astronaut__container {
  position: relative;
}

.astronaut {
  position: absolute;
  top: 0;
  z-index: -1;
}
@supports (width: clamp( 33.875rem , 17.25rem  +  27.7083333333vw , 50.5rem )) {
  .astronaut {
    width: clamp( 33.875rem , 17.25rem  +  27.7083333333vw , 50.5rem );
  }
}
@supports not (width: clamp( 33.875rem , 17.25rem  +  27.7083333333vw , 50.5rem )) {
  .astronaut {
    width: calc(
			33.875rem + 16.625 * (100vw - 60rem) / 60
		);
  }
}
@supports (left: clamp( 37.5rem , 12.5rem  +  41.6666666667vw , 62.5rem )) {
  .astronaut {
    left: clamp( 37.5rem , 12.5rem  +  41.6666666667vw , 62.5rem );
  }
}
@supports not (left: clamp( 37.5rem , 12.5rem  +  41.6666666667vw , 62.5rem )) {
  .astronaut {
    left: calc(
			37.5rem + 25 * (100vw - 60rem) / 60
		);
  }
}
@media (max-width: 60em) {
  @supports (width: clamp( 13.5rem , 1.275rem  +  54.3333333333vw , 33.875rem )) {
    .astronaut {
      width: clamp( 13.5rem , 1.275rem  +  54.3333333333vw , 33.875rem );
    }
  }
  @supports not (width: clamp( 13.5rem , 1.275rem  +  54.3333333333vw , 33.875rem )) {
    .astronaut {
      width: calc(
			13.5rem + 20.375 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (left: clamp( 11.875rem , -3.5rem  +  68.3333333333vw , 37.5rem )) {
    .astronaut {
      left: clamp( 11.875rem , -3.5rem  +  68.3333333333vw , 37.5rem );
    }
  }
  @supports not (left: clamp( 11.875rem , -3.5rem  +  68.3333333333vw , 37.5rem )) {
    .astronaut {
      left: calc(
			11.875rem + 25.625 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.astronaut img {
  width: 100%;
  transform-origin: top left;
  transform: rotate(-38.98deg);
}

@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .what-we-offer {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .what-we-offer {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
.what-we-offer__content {
  display: flex;
  column-gap: 1.5rem;
}
@supports (row-gap: clamp( 1.5rem , 1.2rem  +  1.3333333333vw , 2rem )) {
  .what-we-offer__content {
    row-gap: clamp( 1.5rem , 1.2rem  +  1.3333333333vw , 2rem );
  }
}
@supports not (row-gap: clamp( 1.5rem , 1.2rem  +  1.3333333333vw , 2rem )) {
  .what-we-offer__content {
    row-gap: calc(
			1.5rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@media (max-width: 60em) {
  .what-we-offer__content {
    flex-direction: column;
  }
}
.what-we-offer__column {
  flex: 1 0;
  display: flex;
  flex-direction: column;
}
@supports (row-gap: clamp( 1.5rem , 1.2rem  +  1.3333333333vw , 2rem )) {
  .what-we-offer__column {
    row-gap: clamp( 1.5rem , 1.2rem  +  1.3333333333vw , 2rem );
  }
}
@supports not (row-gap: clamp( 1.5rem , 1.2rem  +  1.3333333333vw , 2rem )) {
  .what-we-offer__column {
    row-gap: calc(
			1.5rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-inline: clamp( 0.875rem , -0.325rem  +  5.3333333333vw , 2.875rem )) {
  .offer-cadr {
    padding-inline: clamp( 0.875rem , -0.325rem  +  5.3333333333vw , 2.875rem );
  }
}
@supports not (padding-inline: clamp( 0.875rem , -0.325rem  +  5.3333333333vw , 2.875rem )) {
  .offer-cadr {
    padding-inline: calc(
			0.875rem + 2 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-top: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
  .offer-cadr {
    padding-top: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem );
  }
}
@supports not (padding-top: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
  .offer-cadr {
    padding-top: calc(
			1.375rem + 1 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-bottom: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
  .offer-cadr {
    padding-bottom: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem );
  }
}
@supports not (padding-bottom: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
  .offer-cadr {
    padding-bottom: calc(
			1.375rem + 1 * (100vw - 22.5rem) / 37.5
		);
  }
}
.offer-cadr__title {
  font-weight: 700;
  font-family: "Inter Tight", sans-serif;
  line-height: 2.5rem;
}
@supports (margin-bottom: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem )) {
  .offer-cadr__title {
    margin-bottom: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem );
  }
}
@supports not (margin-bottom: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem )) {
  .offer-cadr__title {
    margin-bottom: calc(
			0.5rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (font-size: clamp( 1.5rem , 1.05rem  +  2vw , 2.25rem )) {
  .offer-cadr__title {
    font-size: clamp( 1.5rem , 1.05rem  +  2vw , 2.25rem );
  }
}
@supports not (font-size: clamp( 1.5rem , 1.05rem  +  2vw , 2.25rem )) {
  .offer-cadr__title {
    font-size: calc(
			1.5rem + 0.75 * (100vw - 22.5rem) / 37.5
		);
  }
}
@media (max-width: 60em) {
  .offer-cadr__title {
    line-height: 1.875rem;
  }
}
.offer-cadr__text {
  color: #e6e6e6;
}
@supports (font-size: clamp( 1rem , 0.85rem  +  0.6666666667vw , 1.25rem )) {
  .offer-cadr__text {
    font-size: clamp( 1rem , 0.85rem  +  0.6666666667vw , 1.25rem );
  }
}
@supports not (font-size: clamp( 1rem , 0.85rem  +  0.6666666667vw , 1.25rem )) {
  .offer-cadr__text {
    font-size: calc(
			1rem + 0.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (line-height: clamp( 1.5rem , 1.275rem  +  1vw , 1.875rem )) {
  .offer-cadr__text {
    line-height: clamp( 1.5rem , 1.275rem  +  1vw , 1.875rem );
  }
}
@supports not (line-height: clamp( 1.5rem , 1.275rem  +  1vw , 1.875rem )) {
  .offer-cadr__text {
    line-height: calc(
			1.5rem + 0.375 * (100vw - 22.5rem) / 37.5
		);
  }
}

@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .partners {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .partners {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
.partners__cards {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
}
@media (max-width: 60em) {
  .partners__cards {
    padding: 0 5rem;
    margin: 0 -5rem;
  }
}
.partners__cards::-webkit-scrollbar {
  display: none;
}
.card-partner {
  flex: 0 1 33.333%;
  height: 256px;
  min-width: 17.875rem;
}
.card-partner__wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
@supports (margin-right: clamp( 1rem , -4.3731343284rem  +  8.9552238806vw , 2.5rem )) {
  .card-partner:not(:last-child) {
    margin-right: clamp( 1rem , -4.3731343284rem  +  8.9552238806vw , 2.5rem );
  }
}
@supports not (margin-right: clamp( 1rem , -4.3731343284rem  +  8.9552238806vw , 2.5rem )) {
  .card-partner:not(:last-child) {
    margin-right: calc(
			1rem + 1.5 * (100vw - 60rem) / 16.75
		);
  }
}

@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .how-we-work {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .how-we-work {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (margin-bottom: clamp( 2.5rem , 0.7089552239rem  +  2.9850746269vw , 3rem )) {
  .how-we-work__list-wrapper {
    margin-bottom: clamp( 2.5rem , 0.7089552239rem  +  2.9850746269vw , 3rem );
  }
}
@supports not (margin-bottom: clamp( 2.5rem , 0.7089552239rem  +  2.9850746269vw , 3rem )) {
  .how-we-work__list-wrapper {
    margin-bottom: calc(
			2.5rem + 0.5 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (margin-bottom: clamp( 1.25rem , 0.5rem  +  3.3333333333vw , 2.5rem )) {
    .how-we-work__list-wrapper {
      margin-bottom: clamp( 1.25rem , 0.5rem  +  3.3333333333vw , 2.5rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.25rem , 0.5rem  +  3.3333333333vw , 2.5rem )) {
    .how-we-work__list-wrapper {
      margin-bottom: calc(
			1.25rem + 1.25 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.how-we-work__list {
  row-gap: 1.5rem;
}
@supports (padding-top: clamp( 3.875rem , 2.7555970149rem  +  1.8656716418vw , 4.1875rem )) {
  .how-we-work__list {
    padding-top: clamp( 3.875rem , 2.7555970149rem  +  1.8656716418vw , 4.1875rem );
  }
}
@supports not (padding-top: clamp( 3.875rem , 2.7555970149rem  +  1.8656716418vw , 4.1875rem )) {
  .how-we-work__list {
    padding-top: calc(
			3.875rem + 0.3125 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (padding-right: clamp( 1.375rem , 0.325rem  +  4.6666666667vw , 3.125rem )) {
  .how-we-work__list {
    padding-right: clamp( 1.375rem , 0.325rem  +  4.6666666667vw , 3.125rem );
  }
}
@supports not (padding-right: clamp( 1.375rem , 0.325rem  +  4.6666666667vw , 3.125rem )) {
  .how-we-work__list {
    padding-right: calc(
			1.375rem + 1.75 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-bottom: clamp( 1.875rem , -0.45rem  +  10.3333333333vw , 5.75rem )) {
  .how-we-work__list {
    padding-bottom: clamp( 1.875rem , -0.45rem  +  10.3333333333vw , 5.75rem );
  }
}
@supports not (padding-bottom: clamp( 1.875rem , -0.45rem  +  10.3333333333vw , 5.75rem )) {
  .how-we-work__list {
    padding-bottom: calc(
			1.875rem + 3.875 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-left: clamp( 1.375rem , 0.325rem  +  4.6666666667vw , 3.125rem )) {
  .how-we-work__list {
    padding-left: clamp( 1.375rem , 0.325rem  +  4.6666666667vw , 3.125rem );
  }
}
@supports not (padding-left: clamp( 1.375rem , 0.325rem  +  4.6666666667vw , 3.125rem )) {
  .how-we-work__list {
    padding-left: calc(
			1.375rem + 1.75 * (100vw - 22.5rem) / 37.5
		);
  }
}
@media (max-width: 60em) {
  @supports (padding-top: clamp( 1.875rem , 0.675rem  +  5.3333333333vw , 3.875rem )) {
    .how-we-work__list {
      padding-top: clamp( 1.875rem , 0.675rem  +  5.3333333333vw , 3.875rem );
    }
  }
  @supports not (padding-top: clamp( 1.875rem , 0.675rem  +  5.3333333333vw , 3.875rem )) {
    .how-we-work__list {
      padding-top: calc(
			1.875rem + 2 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (row-gap: clamp( 1rem , 0.1rem  +  4vw , 2.5rem )) {
    .how-we-work__list {
      row-gap: clamp( 1rem , 0.1rem  +  4vw , 2.5rem );
    }
  }
  @supports not (row-gap: clamp( 1rem , 0.1rem  +  4vw , 2.5rem )) {
    .how-we-work__list {
      row-gap: calc(
			1rem + 1.5 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.how-we-work__list li {
  flex: 0 1 50%;
}
@media (max-width: 60em) {
  .how-we-work__list li {
    flex: 0 0 100%;
  }
}

@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .who-we-are {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .who-we-are {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (margin-bottom: clamp( 2rem , 0.8rem  +  5.3333333333vw , 4rem )) {
  .who-we-are__content {
    margin-bottom: clamp( 2rem , 0.8rem  +  5.3333333333vw , 4rem );
  }
}
@supports not (margin-bottom: clamp( 2rem , 0.8rem  +  5.3333333333vw , 4rem )) {
  .who-we-are__content {
    margin-bottom: calc(
			2rem + 2 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-top: clamp( 2.375rem , 1.175rem  +  5.3333333333vw , 4.375rem )) {
  .who-we-are__list {
    padding-top: clamp( 2.375rem , 1.175rem  +  5.3333333333vw , 4.375rem );
  }
}
@supports not (padding-top: clamp( 2.375rem , 1.175rem  +  5.3333333333vw , 4.375rem )) {
  .who-we-are__list {
    padding-top: calc(
			2.375rem + 2 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-right: clamp( 3.375rem , 1.5839552239rem  +  2.9850746269vw , 3.875rem )) {
  .who-we-are__list {
    padding-right: clamp( 3.375rem , 1.5839552239rem  +  2.9850746269vw , 3.875rem );
  }
}
@supports not (padding-right: clamp( 3.375rem , 1.5839552239rem  +  2.9850746269vw , 3.875rem )) {
  .who-we-are__list {
    padding-right: calc(
			3.375rem + 0.5 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (padding-bottom: clamp( 2.375rem , 0.875rem  +  6.6666666667vw , 4.875rem )) {
  .who-we-are__list {
    padding-bottom: clamp( 2.375rem , 0.875rem  +  6.6666666667vw , 4.875rem );
  }
}
@supports not (padding-bottom: clamp( 2.375rem , 0.875rem  +  6.6666666667vw , 4.875rem )) {
  .who-we-are__list {
    padding-bottom: calc(
			2.375rem + 2.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-left: clamp( 3.375rem , 1.5839552239rem  +  2.9850746269vw , 3.875rem )) {
  .who-we-are__list {
    padding-left: clamp( 3.375rem , 1.5839552239rem  +  2.9850746269vw , 3.875rem );
  }
}
@supports not (padding-left: clamp( 3.375rem , 1.5839552239rem  +  2.9850746269vw , 3.875rem )) {
  .who-we-are__list {
    padding-left: calc(
			3.375rem + 0.5 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (row-gap: clamp( 1.5rem , 0.6rem  +  4vw , 3rem )) {
  .who-we-are__list {
    row-gap: clamp( 1.5rem , 0.6rem  +  4vw , 3rem );
  }
}
@supports not (row-gap: clamp( 1.5rem , 0.6rem  +  4vw , 3rem )) {
  .who-we-are__list {
    row-gap: calc(
			1.5rem + 1.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@media (max-width: 60em) {
  @supports (padding-right: clamp( 1.375rem , 0.175rem  +  5.3333333333vw , 3.375rem )) {
    .who-we-are__list {
      padding-right: clamp( 1.375rem , 0.175rem  +  5.3333333333vw , 3.375rem );
    }
  }
  @supports not (padding-right: clamp( 1.375rem , 0.175rem  +  5.3333333333vw , 3.375rem )) {
    .who-we-are__list {
      padding-right: calc(
			1.375rem + 2 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (padding-left: clamp( 1.375rem , 0.325rem  +  4.6666666667vw , 3.125rem )) {
    .who-we-are__list {
      padding-left: clamp( 1.375rem , 0.325rem  +  4.6666666667vw , 3.125rem );
    }
  }
  @supports not (padding-left: clamp( 1.375rem , 0.325rem  +  4.6666666667vw , 3.125rem )) {
    .who-we-are__list {
      padding-left: calc(
			1.375rem + 1.75 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.who-we-are__list li {
  flex: 0 1 50%;
}
@media (max-width: 720px) {
  .who-we-are__list li {
    flex: 0 0 100%;
  }
}

@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .where-we-based {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .where-we-based {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
.where-we-based__segment {
  --column-gap: 24px;
  row-gap: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  --gaps-col: calc(var(--columns) - 1);
  --gap-count: calc(var(--column-gap) / var(--columns) * var(--gaps-col));
  column-gap: var(--column-gap);
}
@supports (margin-bottom: clamp( 2rem , 0.8rem  +  5.3333333333vw , 4rem )) {
  .where-we-based__segment:not(:last-child) {
    margin-bottom: clamp( 2rem , 0.8rem  +  5.3333333333vw , 4rem );
  }
}
@supports not (margin-bottom: clamp( 2rem , 0.8rem  +  5.3333333333vw , 4rem )) {
  .where-we-based__segment:not(:last-child) {
    margin-bottom: calc(
			2rem + 2 * (100vw - 22.5rem) / 37.5
		);
  }
}
@media (max-width: 720px) {
  .where-we-based__segment {
    flex-direction: column;
    row-gap: 1.5rem;
  }
}
.where-we-based__segment_one-columns {
  --columns: 1;
}
.where-we-based__segment_two-columns {
  --columns: 2;
}
.where-we-based__segment_three-columns {
  --columns: 3;
}

.column-unit {
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / var(--columns) - var(--gap-count));
}
.column-unit_two-third {
  flex-grow: 2;
}
.column-unit_whole {
  flex-basis: 100%;
}
.column-unit__title {
  font-family: "Roboto Mono";
  font-size: 1.25rem;
  line-height: 1.875rem;
  max-width: 26.5rem;
}
@supports (margin-bottom: clamp( 1rem , 0.1rem  +  4vw , 2.5rem )) {
  .column-unit__title {
    margin-bottom: clamp( 1rem , 0.1rem  +  4vw , 2.5rem );
  }
}
@supports not (margin-bottom: clamp( 1rem , 0.1rem  +  4vw , 2.5rem )) {
  .column-unit__title {
    margin-bottom: calc(
			1rem + 1.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
.column-unit__title_last {
  margin-bottom: 0;
}
@supports (margin-top: clamp( 1rem , 0.1rem  +  4vw , 2.5rem )) {
  .column-unit__title_last {
    margin-top: clamp( 1rem , 0.1rem  +  4vw , 2.5rem );
  }
}
@supports not (margin-top: clamp( 1rem , 0.1rem  +  4vw , 2.5rem )) {
  .column-unit__title_last {
    margin-top: calc(
			1rem + 1.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
.column-unit__image {
  flex: 1 1 auto;
  overflow: hidden;
}
@supports (border-radius: clamp( 1rem , 0.4rem  +  2.6666666667vw , 2rem )) {
  .column-unit__image {
    border-radius: clamp( 1rem , 0.4rem  +  2.6666666667vw , 2rem );
  }
}
@supports not (border-radius: clamp( 1rem , 0.4rem  +  2.6666666667vw , 2rem )) {
  .column-unit__image {
    border-radius: calc(
			1rem + 1 * (100vw - 22.5rem) / 37.5
		);
  }
}
.column-unit__image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .what-we-say {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .what-we-say {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
.comments {
  position: relative;
}
.comments:before {
  content: "";
  position: absolute;
  display: block;
  -webkit-mask: url(../img/icons/quotes.svg) no-repeat 50% 50%;
  mask: url(../img/icons/quotes.svg) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  background-color: #9b9b9b;
  z-index: -1;
}
@supports (right: clamp( -1.875rem , -0.275rem  +  -2.6666666667vw , -0.875rem )) {
  .comments:before {
    right: clamp( -1.875rem , -0.275rem  +  -2.6666666667vw , -0.875rem );
  }
}
@supports not (right: clamp( -1.875rem , -0.275rem  +  -2.6666666667vw , -0.875rem )) {
  .comments:before {
    right: calc(
			-0.875rem + -1 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (top: clamp( -3.4375rem , -0.7375rem  +  -4.5vw , -1.75rem )) {
  .comments:before {
    top: clamp( -3.4375rem , -0.7375rem  +  -4.5vw , -1.75rem );
  }
}
@supports not (top: clamp( -3.4375rem , -0.7375rem  +  -4.5vw , -1.75rem )) {
  .comments:before {
    top: calc(
			-1.75rem + -1.6875 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (width: clamp( 10.6875rem , 8.775rem  +  8.5vw , 13.875rem )) {
  .comments:before {
    width: clamp( 10.6875rem , 8.775rem  +  8.5vw , 13.875rem );
  }
}
@supports not (width: clamp( 10.6875rem , 8.775rem  +  8.5vw , 13.875rem )) {
  .comments:before {
    width: calc(
			10.6875rem + 3.1875 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (height: clamp( 8.875rem , 7.3rem  +  7vw , 11.5rem )) {
  .comments:before {
    height: clamp( 8.875rem , 7.3rem  +  7vw , 11.5rem );
  }
}
@supports not (height: clamp( 8.875rem , 7.3rem  +  7vw , 11.5rem )) {
  .comments:before {
    height: calc(
			8.875rem + 2.625 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-top: clamp( 2.375rem , 0.5839552239rem  +  2.9850746269vw , 2.875rem )) {
  .comments__wrapper {
    padding-top: clamp( 2.375rem , 0.5839552239rem  +  2.9850746269vw , 2.875rem );
  }
}
@supports not (padding-top: clamp( 2.375rem , 0.5839552239rem  +  2.9850746269vw , 2.875rem )) {
  .comments__wrapper {
    padding-top: calc(
			2.375rem + 0.5 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (padding-left: clamp( 2.375rem , 0.5839552239rem  +  2.9850746269vw , 2.875rem )) {
  .comments__wrapper {
    padding-left: clamp( 2.375rem , 0.5839552239rem  +  2.9850746269vw , 2.875rem );
  }
}
@supports not (padding-left: clamp( 2.375rem , 0.5839552239rem  +  2.9850746269vw , 2.875rem )) {
  .comments__wrapper {
    padding-left: calc(
			2.375rem + 0.5 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (padding-right: clamp( 2.375rem , 0.5839552239rem  +  2.9850746269vw , 2.875rem )) {
  .comments__wrapper {
    padding-right: clamp( 2.375rem , 0.5839552239rem  +  2.9850746269vw , 2.875rem );
  }
}
@supports not (padding-right: clamp( 2.375rem , 0.5839552239rem  +  2.9850746269vw , 2.875rem )) {
  .comments__wrapper {
    padding-right: calc(
			2.375rem + 0.5 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (padding-bottom: clamp( 0.9375rem , -2.1968283582rem  +  5.223880597vw , 1.8125rem )) {
  .comments__wrapper {
    padding-bottom: clamp( 0.9375rem , -2.1968283582rem  +  5.223880597vw , 1.8125rem );
  }
}
@supports not (padding-bottom: clamp( 0.9375rem , -2.1968283582rem  +  5.223880597vw , 1.8125rem )) {
  .comments__wrapper {
    padding-bottom: calc(
			0.9375rem + 0.875 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (padding-top: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
    .comments__wrapper {
      padding-top: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem );
    }
  }
  @supports not (padding-top: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
    .comments__wrapper {
      padding-top: calc(
			1.375rem + 1 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (padding-left: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
    .comments__wrapper {
      padding-left: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem );
    }
  }
  @supports not (padding-left: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
    .comments__wrapper {
      padding-left: calc(
			1.375rem + 1 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (padding-right: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
    .comments__wrapper {
      padding-right: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem );
    }
  }
  @supports not (padding-right: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
    .comments__wrapper {
      padding-right: calc(
			1.375rem + 1 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (padding-bottom: clamp( 0.9375rem , 3.2375rem  +  -3.8333333333vw , 2.375rem )) {
    .comments__wrapper {
      padding-bottom: clamp( 0.9375rem , 3.2375rem  +  -3.8333333333vw , 2.375rem );
    }
  }
  @supports not (padding-bottom: clamp( 0.9375rem , 3.2375rem  +  -3.8333333333vw , 2.375rem )) {
    .comments__wrapper {
      padding-bottom: calc(
			2.375rem + -1.4375 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.swiper__navigation {
  display: flex;
  margin-top: 24px;
  align-items: center;
  justify-content: space-between;
}
@supports (margin-top: clamp( 1rem , 0.7rem  +  1.3333333333vw , 1.5rem )) {
  .swiper__navigation {
    margin-top: clamp( 1rem , 0.7rem  +  1.3333333333vw , 1.5rem );
  }
}
@supports not (margin-top: clamp( 1rem , 0.7rem  +  1.3333333333vw , 1.5rem )) {
  .swiper__navigation {
    margin-top: calc(
			1rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
.swiper__buttons {
  display: flex;
}

.slide-comm__row {
  display: flex;
}
@media (max-width: 720px) {
  .slide-comm__row {
    flex-direction: column;
  }
}
.slide-comm__aside {
  flex: 0 0;
  padding-top: 8px;
}
@supports (margin-right: clamp( 1.5rem , -3.8731343284rem  +  8.9552238806vw , 3rem )) {
  .slide-comm__aside {
    margin-right: clamp( 1.5rem , -3.8731343284rem  +  8.9552238806vw , 3rem );
  }
}
@supports not (margin-right: clamp( 1.5rem , -3.8731343284rem  +  8.9552238806vw , 3rem )) {
  .slide-comm__aside {
    margin-right: calc(
			1.5rem + 1.5 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 720px) {
  .slide-comm__aside {
    margin-right: 0;
  }
}
.slide-comm__photo {
  display: flex;
  overflow: hidden;
}
@supports (border-radius: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem )) {
  .slide-comm__photo {
    border-radius: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem );
  }
}
@supports not (border-radius: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem )) {
  .slide-comm__photo {
    border-radius: calc(
			0.5rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (width: clamp( 6.25rem , -0.3125rem  +  29.1666666667vw , 17.1875rem )) {
  .slide-comm__photo {
    width: clamp( 6.25rem , -0.3125rem  +  29.1666666667vw , 17.1875rem );
  }
}
@supports not (width: clamp( 6.25rem , -0.3125rem  +  29.1666666667vw , 17.1875rem )) {
  .slide-comm__photo {
    width: calc(
			6.25rem + 10.9375 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (height: clamp( 6.25rem , -0.3125rem  +  29.1666666667vw , 17.1875rem )) {
  .slide-comm__photo {
    height: clamp( 6.25rem , -0.3125rem  +  29.1666666667vw , 17.1875rem );
  }
}
@supports not (height: clamp( 6.25rem , -0.3125rem  +  29.1666666667vw , 17.1875rem )) {
  .slide-comm__photo {
    height: calc(
			6.25rem + 10.9375 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (margin-bottom: clamp( 0.625rem , 0.4375rem  +  0.8333333333vw , 0.9375rem )) {
  .slide-comm__photo {
    margin-bottom: clamp( 0.625rem , 0.4375rem  +  0.8333333333vw , 0.9375rem );
  }
}
@supports not (margin-bottom: clamp( 0.625rem , 0.4375rem  +  0.8333333333vw , 0.9375rem )) {
  .slide-comm__photo {
    margin-bottom: calc(
			0.625rem + 0.3125 * (100vw - 22.5rem) / 37.5
		);
  }
}
.slide-comm__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide-comm__name {
  color: #b4b4b4;
}
@supports (font-size: clamp( 0.75rem , 0.45rem  +  1.3333333333vw , 1.25rem )) {
  .slide-comm__name {
    font-size: clamp( 0.75rem , 0.45rem  +  1.3333333333vw , 1.25rem );
  }
}
@supports not (font-size: clamp( 0.75rem , 0.45rem  +  1.3333333333vw , 1.25rem )) {
  .slide-comm__name {
    font-size: calc(
			0.75rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (line-height: clamp( 1.25rem , 1.1rem  +  0.6666666667vw , 1.5rem )) {
  .slide-comm__name {
    line-height: clamp( 1.25rem , 1.1rem  +  0.6666666667vw , 1.5rem );
  }
}
@supports not (line-height: clamp( 1.25rem , 1.1rem  +  0.6666666667vw , 1.5rem )) {
  .slide-comm__name {
    line-height: calc(
			1.25rem + 0.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
.slide-comm__line {
  flex: 1 0 1px;
  height: 1px;
  background-color: #2c3033;
  margin: 0 0.5rem;
}
.slide-comm__text-wrapper {
  padding-bottom: 0.0625rem;
}
.slide-comm__text {
  --show-lines: 7;
  font-family: "Inter Tight", sans-serif;
  line-height: var(--line-height);
  max-height: calc(var(--show-lines) * var(--line-height));
  display: -webkit-box !important;
  -webkit-line-clamp: var(--show-lines);
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
@supports (--line-height: clamp( 2.6875rem , 0.4486940299rem  +  3.7313432836vw , 3.3125rem )) {
  .slide-comm__text {
    --line-height: clamp( 2.6875rem , 0.4486940299rem  +  3.7313432836vw , 3.3125rem );
  }
}
@supports not (--line-height: clamp( 2.6875rem , 0.4486940299rem  +  3.7313432836vw , 3.3125rem )) {
  .slide-comm__text {
    --line-height: calc(
			2.6875rem + 0.625 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (font-size: clamp( 2.25rem , 0.4589552239rem  +  2.9850746269vw , 2.75rem )) {
  .slide-comm__text {
    font-size: clamp( 2.25rem , 0.4589552239rem  +  2.9850746269vw , 2.75rem );
  }
}
@supports not (font-size: clamp( 2.25rem , 0.4589552239rem  +  2.9850746269vw , 2.75rem )) {
  .slide-comm__text {
    font-size: calc(
			2.25rem + 0.5 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (font-size: clamp( 1.25rem , 0.65rem  +  2.6666666667vw , 2.25rem )) {
    .slide-comm__text {
      font-size: clamp( 1.25rem , 0.65rem  +  2.6666666667vw , 2.25rem );
    }
  }
  @supports not (font-size: clamp( 1.25rem , 0.65rem  +  2.6666666667vw , 2.25rem )) {
    .slide-comm__text {
      font-size: calc(
			1.25rem + 1 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (--line-height: clamp( 1.5rem , 0.7875rem  +  3.1666666667vw , 2.6875rem )) {
    .slide-comm__text {
      --line-height: clamp( 1.5rem , 0.7875rem  +  3.1666666667vw , 2.6875rem );
    }
  }
  @supports not (--line-height: clamp( 1.5rem , 0.7875rem  +  3.1666666667vw , 2.6875rem )) {
    .slide-comm__text {
      --line-height: calc(
			1.5rem + 1.1875 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
@media (max-width: 720px) {
  .slide-comm__text {
    margin-top: 1rem;
  }
}
.slide-comm__text p:not(:last-child) {
  margin-bottom: 0.5em;
}
.slide-comm__text.opened-full-text {
  height: auto;
  max-height: unset;
  --show-lines: 0;
}
.slide-comm__button {
  font-size: 24px;
  line-height: 32px;
  color: #c51bf0;
  border-bottom: 1px dashed #c51bf0;
  margin-top: 0.5rem;
  background-color: inherit;
}
@supports (font-size: clamp( 1.25rem , 1.1rem  +  0.6666666667vw , 1.5rem )) {
  .slide-comm__button {
    font-size: clamp( 1.25rem , 1.1rem  +  0.6666666667vw , 1.5rem );
  }
}
@supports not (font-size: clamp( 1.25rem , 1.1rem  +  0.6666666667vw , 1.5rem )) {
  .slide-comm__button {
    font-size: calc(
			1.25rem + 0.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (line-height: clamp( 1.625rem , 1.4rem  +  1vw , 2rem )) {
  .slide-comm__button {
    line-height: clamp( 1.625rem , 1.4rem  +  1vw , 2rem );
  }
}
@supports not (line-height: clamp( 1.625rem , 1.4rem  +  1vw , 2rem )) {
  .slide-comm__button {
    line-height: calc(
			1.625rem + 0.375 * (100vw - 22.5rem) / 37.5
		);
  }
}
@media (max-width: 720px) {
  .slide-comm__button {
    margin-top: 1rem;
  }
}
.slide-comm__button_full {
  display: block;
}
.slide-comm__button_short {
  display: none;
}
.slide-comm__button.opened-full-text .slide-comm__button_full {
  display: none;
}
.slide-comm__button.opened-full-text .slide-comm__button_short {
  display: block;
}

.comments__slider .swiper-button-prev,
.comments__slider .swiper-button-next {
  position: static;
  display: block;
  width: 40px;
  height: 40px;
  border: 1px solid #9b9b9b;
  margin: 0;
}
.comments__slider .swiper-button-prev {
  margin-right: 8px;
}
.comments__slider .swiper-button-prev:after {
  content: "";
  display: block;
  background: url("../img/icons/pagArrow.svg") center no-repeat;
  width: 100%;
  height: 100%;
  transform: rotate(180deg);
}
.comments__slider .swiper-button-next:after {
  content: "";
  display: block;
  background: url("../img/icons/pagArrow.svg") center no-repeat;
  width: 100%;
  height: 100%;
}
.comments__slider .swiper-pagination {
  position: static;
  font-size: 0.75rem;
  line-height: 1.0625rem;
  color: #b4b4b4;
}
.comments__slider .swiper-pagination-fraction {
  width: unset;
}

button {
  border: none;
  padding: 0;
  cursor: pointer;
  color: inherit;
  background-color: inherit;
  border: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

.animated-link {
  display: block;
  margin-inline: auto;
  position: relative;
  overflow: hidden;
  font-family: "Inter Tight", sans-serif;
  font-weight: 700;
  text-align: center;
}
@supports (font-size: clamp( 5rem , -3.9552238806rem  +  14.9253731343vw , 7.5rem )) {
  .animated-link {
    font-size: clamp( 5rem , -3.9552238806rem  +  14.9253731343vw , 7.5rem );
  }
}
@supports not (font-size: clamp( 5rem , -3.9552238806rem  +  14.9253731343vw , 7.5rem )) {
  .animated-link {
    font-size: calc(
			5rem + 2.5 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (line-height: clamp( 5.9375rem , -4.8087686567rem  +  17.9104477612vw , 8.9375rem )) {
  .animated-link {
    line-height: clamp( 5.9375rem , -4.8087686567rem  +  17.9104477612vw , 8.9375rem );
  }
}
@supports not (line-height: clamp( 5.9375rem , -4.8087686567rem  +  17.9104477612vw , 8.9375rem )) {
  .animated-link {
    line-height: calc(
			5.9375rem + 3 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (height: clamp( 6.75rem , -4.4440298507rem  +  18.6567164179vw , 9.875rem )) {
  .animated-link {
    height: clamp( 6.75rem , -4.4440298507rem  +  18.6567164179vw , 9.875rem );
  }
}
@supports not (height: clamp( 6.75rem , -4.4440298507rem  +  18.6567164179vw , 9.875rem )) {
  .animated-link {
    height: calc(
			6.75rem + 3.125 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (font-size: clamp( 2rem , 0.2rem  +  8vw , 5rem )) {
    .animated-link {
      font-size: clamp( 2rem , 0.2rem  +  8vw , 5rem );
    }
  }
  @supports not (font-size: clamp( 2rem , 0.2rem  +  8vw , 5rem )) {
    .animated-link {
      font-size: calc(
			2rem + 3 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (line-height: clamp( 2.375rem , 0.2375rem  +  9.5vw , 5.9375rem )) {
    .animated-link {
      line-height: clamp( 2.375rem , 0.2375rem  +  9.5vw , 5.9375rem );
    }
  }
  @supports not (line-height: clamp( 2.375rem , 0.2375rem  +  9.5vw , 5.9375rem )) {
    .animated-link {
      line-height: calc(
			2.375rem + 3.5625 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (height: clamp( 2.625rem , 0.15rem  +  11vw , 6.75rem )) {
    .animated-link {
      height: clamp( 2.625rem , 0.15rem  +  11vw , 6.75rem );
    }
  }
  @supports not (height: clamp( 2.625rem , 0.15rem  +  11vw , 6.75rem )) {
    .animated-link {
      height: calc(
			2.625rem + 4.125 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
.animated-link__wrapper {
  position: relative;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  top: 0;
}
.animated-link__wrapper_rotate {
  transform-origin: center left;
}
.animated-link__text {
  text-decoration-line: underline;
  text-underline-offset: 0.25em;
}
.animated-link__text_outlined {
  color: #090808;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff;
}
.animated-link__append_outlined {
  color: #090808;
  text-shadow: 0 0 1px #c51bf0, 0 0 1px #c51bf0, 0 0 1px #c51bf0, 0 0 1px #c51bf0, 0 0 1px #c51bf0, 0 0 1px #c51bf0, 0 0 1px #c51bf0, 0 0 1px #c51bf0, 0 0 1px #c51bf0, 0 0 1px #c51bf0, 0 0 1px #c51bf0, 0 0 1px #c51bf0;
}
.animated-link:hover .animated-link__wrapper, .animated-link:focus .animated-link__wrapper {
  top: -100%;
}
.animated-link:hover .animated-link__wrapper_rotate, .animated-link:focus .animated-link__wrapper_rotate {
  transform: rotate(-8deg);
}

.stories__title {
  display: flex;
}
@media (max-width: 520px) {
  .stories__title {
    flex-direction: column;
  }
}
@media (max-width: 520px) {
  .stories__title_second-part {
    margin-top: -0.3em;
  }
}

.stories-slider {
  margin-bottom: 1rem;
}

@supports (width: clamp( 20.625rem , 14.922235023rem  +  25.3456221198vw , 34.375rem )) {
  .stories-slide {
    width: clamp( 20.625rem , 14.922235023rem  +  25.3456221198vw , 34.375rem );
  }
}
@supports not (width: clamp( 20.625rem , 14.922235023rem  +  25.3456221198vw , 34.375rem )) {
  .stories-slide {
    width: calc(
			20.625rem + 13.75 * (100vw - 22.5rem) / 54.25
		);
  }
}
.stories-slide__img {
  overflow: hidden;
}
@supports (border-radius: clamp( 1rem , 0.5852534562rem  +  1.8433179724vw , 2rem )) {
  .stories-slide__img {
    border-radius: clamp( 1rem , 0.5852534562rem  +  1.8433179724vw , 2rem );
  }
}
@supports not (border-radius: clamp( 1rem , 0.5852534562rem  +  1.8433179724vw , 2rem )) {
  .stories-slide__img {
    border-radius: calc(
			1rem + 1 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (width: clamp( 20.625rem , 14.922235023rem  +  25.3456221198vw , 34.375rem )) {
  .stories-slide__img {
    width: clamp( 20.625rem , 14.922235023rem  +  25.3456221198vw , 34.375rem );
  }
}
@supports not (width: clamp( 20.625rem , 14.922235023rem  +  25.3456221198vw , 34.375rem )) {
  .stories-slide__img {
    width: calc(
			20.625rem + 13.75 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (height: clamp( 25.125rem , 18.1779953917rem  +  30.8755760369vw , 41.875rem )) {
  .stories-slide__img {
    height: clamp( 25.125rem , 18.1779953917rem  +  30.8755760369vw , 41.875rem );
  }
}
@supports not (height: clamp( 25.125rem , 18.1779953917rem  +  30.8755760369vw , 41.875rem )) {
  .stories-slide__img {
    height: calc(
			25.125rem + 16.75 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (margin-bottom: clamp( 0.5rem , 0.2926267281rem  +  0.9216589862vw , 1rem )) {
  .stories-slide__img {
    margin-bottom: clamp( 0.5rem , 0.2926267281rem  +  0.9216589862vw , 1rem );
  }
}
@supports not (margin-bottom: clamp( 0.5rem , 0.2926267281rem  +  0.9216589862vw , 1rem )) {
  .stories-slide__img {
    margin-bottom: calc(
			0.5rem + 0.5 * (100vw - 22.5rem) / 54.25
		);
  }
}
.stories-slide__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.stories-slide__text {
  font-family: "Roboto Mono";
  line-height: 1.5;
}
@supports (font-size: clamp( 1rem , 0.7926267281rem  +  0.9216589862vw , 1.5rem )) {
  .stories-slide__text {
    font-size: clamp( 1rem , 0.7926267281rem  +  0.9216589862vw , 1.5rem );
  }
}
@supports not (font-size: clamp( 1rem , 0.7926267281rem  +  0.9216589862vw , 1.5rem )) {
  .stories-slide__text {
    font-size: calc(
			1rem + 0.5 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (padding-inline: clamp( 0.5rem , 0.2926267281rem  +  0.9216589862vw , 1rem )) {
  .stories-slide__text {
    padding-inline: clamp( 0.5rem , 0.2926267281rem  +  0.9216589862vw , 1rem );
  }
}
@supports not (padding-inline: clamp( 0.5rem , 0.2926267281rem  +  0.9216589862vw , 1rem )) {
  .stories-slide__text {
    padding-inline: calc(
			0.5rem + 0.5 * (100vw - 22.5rem) / 54.25
		);
  }
}

.stories .swiper-wrapper {
  -webkit-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
}

.stories-slider.swiper-free-mode > .swiper-wrapper {
  -webkit-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
}

@supports (top: clamp( -37.5625rem , 14.2723880597rem  +  -67.5373134328vw , -26.25rem )) {
  .wrapper_contacts::before {
    top: clamp( -37.5625rem , 14.2723880597rem  +  -67.5373134328vw , -26.25rem );
  }
}
@supports not (top: clamp( -37.5625rem , 14.2723880597rem  +  -67.5373134328vw , -26.25rem )) {
  .wrapper_contacts::before {
    top: calc(
			-26.25rem + -11.3125 * (100vw - 60rem) / 16.75
		);
  }
}
@supports (left: clamp( 50rem , 5.9375rem  +  73.4375vw , 94.0625rem )) {
  .wrapper_contacts::before {
    left: clamp( 50rem , 5.9375rem  +  73.4375vw , 94.0625rem );
  }
}
@supports not (left: clamp( 50rem , 5.9375rem  +  73.4375vw , 94.0625rem )) {
  .wrapper_contacts::before {
    left: calc(
			50rem + 44.0625 * (100vw - 60rem) / 60
		);
  }
}
@media (max-width: 60em) {
  @supports (top: clamp( -26.25rem , 10.75rem  +  -61.6666666667vw , -3.125rem )) {
    .wrapper_contacts::before {
      top: clamp( -26.25rem , 10.75rem  +  -61.6666666667vw , -3.125rem );
    }
  }
  @supports not (top: clamp( -26.25rem , 10.75rem  +  -61.6666666667vw , -3.125rem )) {
    .wrapper_contacts::before {
      top: calc(
			-3.125rem + -23.125 * (100vw - 22.5rem) / 37.5
		);
    }
  }
  @supports (left: clamp( 17.5rem , -2rem  +  86.6666666667vw , 50rem )) {
    .wrapper_contacts::before {
      left: clamp( 17.5rem , -2rem  +  86.6666666667vw , 50rem );
    }
  }
  @supports not (left: clamp( 17.5rem , -2rem  +  86.6666666667vw , 50rem )) {
    .wrapper_contacts::before {
      left: calc(
			17.5rem + 32.5 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}

.contacts__map {
  width: 100%;
  background-color: #9b9b9b;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
}
@supports (border-radius: clamp( 1rem , 0.5852534562rem  +  1.8433179724vw , 2rem )) {
  .contacts__map {
    border-radius: clamp( 1rem , 0.5852534562rem  +  1.8433179724vw , 2rem );
  }
}
@supports not (border-radius: clamp( 1rem , 0.5852534562rem  +  1.8433179724vw , 2rem )) {
  .contacts__map {
    border-radius: calc(
			1rem + 1 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (height: clamp( 28.75rem , 21.25rem  +  33.3333333333vw , 41.25rem )) {
  .contacts__map {
    height: clamp( 28.75rem , 21.25rem  +  33.3333333333vw , 41.25rem );
  }
}
@supports not (height: clamp( 28.75rem , 21.25rem  +  33.3333333333vw , 41.25rem )) {
  .contacts__map {
    height: calc(
			28.75rem + 12.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (margin-bottom: clamp( 0.5rem , 0.2926267281rem  +  0.9216589862vw , 1rem )) {
  .contacts__map {
    margin-bottom: clamp( 0.5rem , 0.2926267281rem  +  0.9216589862vw , 1rem );
  }
}
@supports not (margin-bottom: clamp( 0.5rem , 0.2926267281rem  +  0.9216589862vw , 1rem )) {
  .contacts__map {
    margin-bottom: calc(
			0.5rem + 0.5 * (100vw - 22.5rem) / 54.25
		);
  }
}
.contacts__map iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}
.contacts__text {
  font-family: "Roboto Mono";
  line-height: 1.5;
}
@supports (font-size: clamp( 1.25rem , 1.1463133641rem  +  0.4608294931vw , 1.5rem )) {
  .contacts__text {
    font-size: clamp( 1.25rem , 1.1463133641rem  +  0.4608294931vw , 1.5rem );
  }
}
@supports not (font-size: clamp( 1.25rem , 1.1463133641rem  +  0.4608294931vw , 1.5rem )) {
  .contacts__text {
    font-size: calc(
			1.25rem + 0.25 * (100vw - 22.5rem) / 54.25
		);
  }
}
.contacts__text a {
  transition: 0.3s ease;
}
.contacts__text a:hover,
.contacts__text a :focus {
  color: #5eecff;
}

.wrapper_careers::before {
  opacity: 0.5;
}
@supports (top: clamp( -113.4375rem , -18.6494815668rem  +  -123.5023041475vw , -46.4375rem )) {
  .wrapper_careers::before {
    top: clamp( -113.4375rem , -18.6494815668rem  +  -123.5023041475vw , -46.4375rem );
  }
}
@supports not (top: clamp( -113.4375rem , -18.6494815668rem  +  -123.5023041475vw , -46.4375rem )) {
  .wrapper_careers::before {
    top: calc(
			-46.4375rem + -67 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (left: clamp( -6.75rem , -8.6538461538rem  +  8.4615384615vw , 1.5rem )) {
  .wrapper_careers::before {
    left: clamp( -6.75rem , -8.6538461538rem  +  8.4615384615vw , 1.5rem );
  }
}
@supports not (left: clamp( -6.75rem , -8.6538461538rem  +  8.4615384615vw , 1.5rem )) {
  .wrapper_careers::before {
    left: calc(
			-6.75rem + 8.25 * (100vw - 22.5rem) / 97.5
		);
  }
}
@supports (width: clamp( 50.8125rem , 20.2508640553rem  +  135.8294930876vw , 124.5rem )) {
  .wrapper_careers::before {
    width: clamp( 50.8125rem , 20.2508640553rem  +  135.8294930876vw , 124.5rem );
  }
}
@supports not (width: clamp( 50.8125rem , 20.2508640553rem  +  135.8294930876vw , 124.5rem )) {
  .wrapper_careers::before {
    width: calc(
			50.8125rem + 73.6875 * (100vw - 22.5rem) / 54.25
		);
  }
}

.typing-text {
  display: flex;
}
@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .typing-text {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .typing-text {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (min-height: clamp( 28.4375rem , 24.9380760369rem  +  15.5529953917vw , 36.875rem )) {
  .typing-text {
    min-height: clamp( 28.4375rem , 24.9380760369rem  +  15.5529953917vw , 36.875rem );
  }
}
@supports not (min-height: clamp( 28.4375rem , 24.9380760369rem  +  15.5529953917vw , 36.875rem )) {
  .typing-text {
    min-height: calc(
			28.4375rem + 8.4375 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (padding-inline: clamp( 1.0625rem , -0.72609447rem  +  7.9493087558vw , 5.375rem )) {
  .typing-text {
    padding-inline: clamp( 1.0625rem , -0.72609447rem  +  7.9493087558vw , 5.375rem );
  }
}
@supports not (padding-inline: clamp( 1.0625rem , -0.72609447rem  +  7.9493087558vw , 5.375rem )) {
  .typing-text {
    padding-inline: calc(
			1.0625rem + 4.3125 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (padding-top: clamp( 9.0625rem , 8.6736751152rem  +  1.7281105991vw , 10rem )) {
  .typing-text {
    padding-top: clamp( 9.0625rem , 8.6736751152rem  +  1.7281105991vw , 10rem );
  }
}
@supports not (padding-top: clamp( 9.0625rem , 8.6736751152rem  +  1.7281105991vw , 10rem )) {
  .typing-text {
    padding-top: calc(
			9.0625rem + 0.9375 * (100vw - 22.5rem) / 54.25
		);
  }
}
.typing-text__wrapper {
  width: 100%;
  background: linear-gradient(87.01deg, #6d9be3 3.39%, #aadfc1 32.8%, #f4cd63 61.74%, #eb672d 94.48%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.typing-text__text {
  font-family: "Inter Tight", sans-serif;
  font-weight: 700;
}
@supports (font-size: clamp( 2rem , 0.5483870968rem  +  6.4516129032vw , 5.5rem )) {
  .typing-text__text {
    font-size: clamp( 2rem , 0.5483870968rem  +  6.4516129032vw , 5.5rem );
  }
}
@supports not (font-size: clamp( 2rem , 0.5483870968rem  +  6.4516129032vw , 5.5rem )) {
  .typing-text__text {
    font-size: calc(
			2rem + 3.5 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (line-height: clamp( 2.5rem , 1.2557603687rem  +  5.5299539171vw , 5.5rem )) {
  .typing-text__text {
    line-height: clamp( 2.5rem , 1.2557603687rem  +  5.5299539171vw , 5.5rem );
  }
}
@supports not (line-height: clamp( 2.5rem , 1.2557603687rem  +  5.5299539171vw , 5.5rem )) {
  .typing-text__text {
    line-height: calc(
			2.5rem + 3 * (100vw - 22.5rem) / 54.25
		);
  }
}

.typed-cursor {
  color: #c51bf0;
  -webkit-text-fill-color: #c51bf0;
  text-fill-color: #c51bf0;
  font-family: "SF Pro";
  font-weight: 100;
  text-indent: -6.25rem;
}
@supports (font-size: clamp( 2rem , 0.5483870968rem  +  6.4516129032vw , 5.5rem )) {
  .typed-cursor {
    font-size: clamp( 2rem , 0.5483870968rem  +  6.4516129032vw , 5.5rem );
  }
}
@supports not (font-size: clamp( 2rem , 0.5483870968rem  +  6.4516129032vw , 5.5rem )) {
  .typed-cursor {
    font-size: calc(
			2rem + 3.5 * (100vw - 22.5rem) / 54.25
		);
  }
}

@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .choose-kron {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .choose-kron {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
.choose-kron__content {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.5rem;
}
@supports (gap: clamp( 1.5rem , 1.2rem  +  1.3333333333vw , 2rem )) {
  .choose-kron__content {
    gap: clamp( 1.5rem , 1.2rem  +  1.3333333333vw , 2rem );
  }
}
@supports not (gap: clamp( 1.5rem , 1.2rem  +  1.3333333333vw , 2rem )) {
  .choose-kron__content {
    gap: calc(
			1.5rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@media (max-width: 720px) {
  .choose-kron__content {
    flex-direction: column;
  }
}
.choose-card {
  flex: 1 0 45%;
}
@supports (padding-inline: clamp( 0.875rem , -0.325rem  +  5.3333333333vw , 2.875rem )) {
  .choose-card {
    padding-inline: clamp( 0.875rem , -0.325rem  +  5.3333333333vw , 2.875rem );
  }
}
@supports not (padding-inline: clamp( 0.875rem , -0.325rem  +  5.3333333333vw , 2.875rem )) {
  .choose-card {
    padding-inline: calc(
			0.875rem + 2 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-top: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
  .choose-card {
    padding-top: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem );
  }
}
@supports not (padding-top: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
  .choose-card {
    padding-top: calc(
			1.375rem + 1 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (padding-bottom: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
  .choose-card {
    padding-bottom: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem );
  }
}
@supports not (padding-bottom: clamp( 1.375rem , 0.775rem  +  2.6666666667vw , 2.375rem )) {
  .choose-card {
    padding-bottom: calc(
			1.375rem + 1 * (100vw - 22.5rem) / 37.5
		);
  }
}
.choose-card__title {
  font-weight: 700;
  font-family: "Inter Tight", sans-serif;
  line-height: 2.5rem;
}
@supports (margin-bottom: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem )) {
  .choose-card__title {
    margin-bottom: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem );
  }
}
@supports not (margin-bottom: clamp( 0.5rem , 0.2rem  +  1.3333333333vw , 1rem )) {
  .choose-card__title {
    margin-bottom: calc(
			0.5rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (font-size: clamp( 1.5rem , 1.05rem  +  2vw , 2.25rem )) {
  .choose-card__title {
    font-size: clamp( 1.5rem , 1.05rem  +  2vw , 2.25rem );
  }
}
@supports not (font-size: clamp( 1.5rem , 1.05rem  +  2vw , 2.25rem )) {
  .choose-card__title {
    font-size: calc(
			1.5rem + 0.75 * (100vw - 22.5rem) / 37.5
		);
  }
}
@media (max-width: 60em) {
  .choose-card__title {
    line-height: 1.875rem;
  }
}
.choose-card__text {
  color: #e6e6e6;
}
@supports (font-size: clamp( 1rem , 0.85rem  +  0.6666666667vw , 1.25rem )) {
  .choose-card__text {
    font-size: clamp( 1rem , 0.85rem  +  0.6666666667vw , 1.25rem );
  }
}
@supports not (font-size: clamp( 1rem , 0.85rem  +  0.6666666667vw , 1.25rem )) {
  .choose-card__text {
    font-size: calc(
			1rem + 0.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
@supports (line-height: clamp( 1.5rem , 1.275rem  +  1vw , 1.875rem )) {
  .choose-card__text {
    line-height: clamp( 1.5rem , 1.275rem  +  1vw , 1.875rem );
  }
}
@supports not (line-height: clamp( 1.5rem , 1.275rem  +  1vw , 1.875rem )) {
  .choose-card__text {
    line-height: calc(
			1.5rem + 0.375 * (100vw - 22.5rem) / 37.5
		);
  }
}

@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .job-listing {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .job-listing {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
.job-listing__positions {
  display: flex;
  flex-wrap: wrap;
}
@supports (row-gap: clamp( 1.5rem , -1.5rem  +  6.6666666667vw , 2.5rem )) {
  .job-listing__positions {
    row-gap: clamp( 1.5rem , -1.5rem  +  6.6666666667vw , 2.5rem );
  }
}
@supports not (row-gap: clamp( 1.5rem , -1.5rem  +  6.6666666667vw , 2.5rem )) {
  .job-listing__positions {
    row-gap: calc(
			1.5rem + 1 * (100vw - 45rem) / 15
		);
  }
}
@supports (margin-inline: clamp( -1.25rem , 0.75rem  +  -3.3333333333vw , -0.75rem )) {
  .job-listing__positions {
    margin-inline: clamp( -1.25rem , 0.75rem  +  -3.3333333333vw , -0.75rem );
  }
}
@supports not (margin-inline: clamp( -1.25rem , 0.75rem  +  -3.3333333333vw , -0.75rem )) {
  .job-listing__positions {
    margin-inline: calc(
			-0.75rem + -0.5 * (100vw - 45rem) / 15
		);
  }
}
@media (max-width: 720px) {
  .job-listing__positions {
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-inline: -5rem;
    padding-inline: 5rem;
    scrollbar-width: none;
  }
}
.job-listing__positions::-webkit-scrollbar {
  display: none;
}
.position-job {
  flex: 0 0 33.333%;
  min-height: 16rem;
  display: flex;
}
@supports (padding-inline: clamp( 0.75rem , -0.75rem  +  3.3333333333vw , 1.25rem )) {
  .position-job {
    padding-inline: clamp( 0.75rem , -0.75rem  +  3.3333333333vw , 1.25rem );
  }
}
@supports not (padding-inline: clamp( 0.75rem , -0.75rem  +  3.3333333333vw , 1.25rem )) {
  .position-job {
    padding-inline: calc(
			0.75rem + 0.5 * (100vw - 45rem) / 15
		);
  }
}
@media (max-width: 60em) {
  .position-job {
    flex: 0 1 50%;
  }
}
@media (max-width: 720px) {
  .position-job {
    flex: 0 0 360px;
  }
}
.position-job__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.8125rem 2.5rem 2.5rem;
  cursor: pointer;
}
.position-job__title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2.25rem;
  margin-bottom: 0.5rem;
}
.position-job__description {
  font-family: "Roboto Mono";
  font-size: 1rem;
  line-height: 1.375rem;
}

@supports (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .cascade {
    margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem );
  }
}
@supports not (margin-bottom: clamp( 5rem , 1.25rem  +  16.6666666667vw , 11.25rem )) {
  .cascade {
    margin-bottom: calc(
			5rem + 6.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
.cascade-slider {
  display: flex;
  flex-direction: column;
}
.cascade-slider .cascade-item {
  background: rgba(24, 28, 31, 0.8);
}

.cascade-item {
  font-weight: 500;
  font-size: 1.1875rem;
  line-height: 1.875rem;
  margin-bottom: 1.5rem;
  top: 56px;
  position: sticky;
  width: 100%;
  transition: all 0.2s linear;
}
@supports (padding: clamp( 1.375rem , 0.7528801843rem  +  2.7649769585vw , 2.875rem )) {
  .cascade-item {
    padding: clamp( 1.375rem , 0.7528801843rem  +  2.7649769585vw , 2.875rem );
  }
}
@supports not (padding: clamp( 1.375rem , 0.7528801843rem  +  2.7649769585vw , 2.875rem )) {
  .cascade-item {
    padding: calc(
			1.375rem + 1.5 * (100vw - 22.5rem) / 54.25
		);
  }
}
@supports (padding-inline: clamp( 0.875rem , 0.0455069124rem  +  3.6866359447vw , 2.875rem )) {
  .cascade-item {
    padding-inline: clamp( 0.875rem , 0.0455069124rem  +  3.6866359447vw , 2.875rem );
  }
}
@supports not (padding-inline: clamp( 0.875rem , 0.0455069124rem  +  3.6866359447vw , 2.875rem )) {
  .cascade-item {
    padding-inline: calc(
			0.875rem + 2 * (100vw - 22.5rem) / 54.25
		);
  }
}
.cascade-item__wrapper {
  height: 454px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
}
.cascade-item__wrapper::-webkit-scrollbar {
  width: 4px;
}
.cascade-item__wrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  margin-right: 1rem;
}
.cascade-item__row {
  display: flex;
  overflow-y: hidden;
  min-height: 100%;
}
.cascade-item__numbers {
  position: relative;
  margin-right: 14px;
  flex: 0 0 1.5rem;
}
.cascade-item__text {
  flex: 1 1 auto;
}

.numbers-column {
  position: absolute;
  top: 0;
  right: 0;
}

.text-cascade-item__title {
  font-weight: 700;
}
.text-cascade-item__main p {
  margin-bottom: 1.875rem;
  max-width: 57.8125rem;
}
.text-cascade-item__tips {
  font-weight: 400;
}
.text-cascade-item__tips p {
  max-width: 57.8125rem;
}
.text-cascade-item__ascii {
  font-weight: 400;
}
.text-cascade-item__ascii pre {
  font-family: "Roboto Mono";
}
@media (max-width: 1229.98px) {
  .text-cascade-item__ascii_desktop {
    display: none;
  }
}
@media (min-width: 1229.98px) {
  .text-cascade-item__ascii_tablet {
    display: none;
  }
}
@media (max-width: 539.98px) {
  .text-cascade-item__ascii_tablet {
    display: none;
  }
}
@media (min-width: 539.98px) {
  .text-cascade-item__ascii_mobile {
    display: none;
  }
}

.relocate__segment {
  --column-gap: 24px;
  row-gap: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  --gaps-col: calc(var(--columns) - 1);
  --gap-count: calc(var(--column-gap) / var(--columns) * var(--gaps-col));
  column-gap: var(--column-gap);
}
@supports (margin-bottom: clamp( 1.5rem , 1.2rem  +  1.3333333333vw , 2rem )) {
  .relocate__segment:not(:last-child) {
    margin-bottom: clamp( 1.5rem , 1.2rem  +  1.3333333333vw , 2rem );
  }
}
@supports not (margin-bottom: clamp( 1.5rem , 1.2rem  +  1.3333333333vw , 2rem )) {
  .relocate__segment:not(:last-child) {
    margin-bottom: calc(
			1.5rem + 0.5 * (100vw - 22.5rem) / 37.5
		);
  }
}
@media (max-width: 720px) {
  .relocate__segment {
    flex-direction: column;
    row-gap: 1.5rem;
  }
}
.relocate__segment_three-columns {
  --columns: 3;
}
.relocate__segment_two-columns {
  --columns: 2;
}

.text-relocate {
  display: flex;
}
@supports (margin-bottom: clamp( 4.6875rem , -3.1483208955rem  +  13.0597014925vw , 6.875rem )) {
  .text-relocate {
    margin-bottom: clamp( 4.6875rem , -3.1483208955rem  +  13.0597014925vw , 6.875rem );
  }
}
@supports not (margin-bottom: clamp( 4.6875rem , -3.1483208955rem  +  13.0597014925vw , 6.875rem )) {
  .text-relocate {
    margin-bottom: calc(
			4.6875rem + 2.1875 * (100vw - 60rem) / 16.75
		);
  }
}
@media (max-width: 60em) {
  @supports (margin-bottom: clamp( 2.5rem , 1.1875rem  +  5.8333333333vw , 4.6875rem )) {
    .text-relocate {
      margin-bottom: clamp( 2.5rem , 1.1875rem  +  5.8333333333vw , 4.6875rem );
    }
  }
  @supports not (margin-bottom: clamp( 2.5rem , 1.1875rem  +  5.8333333333vw , 4.6875rem )) {
    .text-relocate {
      margin-bottom: calc(
			2.5rem + 2.1875 * (100vw - 22.5rem) / 37.5
		);
    }
  }
}
@media (max-width: 720px) {
  .text-relocate {
    flex-direction: column;
  }
}
.text-relocate__main {
  flex: 1;
  font-weight: 700;
  font-family: "Inter Tight", sans-serif;
  line-height: 1.25;
}
@supports (margin-right: clamp( 1.5rem , -1.5rem  +  6.6666666667vw , 2.5rem )) {
  .text-relocate__main {
    margin-right: clamp( 1.5rem , -1.5rem  +  6.6666666667vw , 2.5rem );
  }
}
@supports not (margin-right: clamp( 1.5rem , -1.5rem  +  6.6666666667vw , 2.5rem )) {
  .text-relocate__main {
    margin-right: calc(
			1.5rem + 1 * (100vw - 45rem) / 15
		);
  }
}
@supports (font-size: clamp( 1.75rem , 1rem  +  3.3333333333vw , 3rem )) {
  .text-relocate__main {
    font-size: clamp( 1.75rem , 1rem  +  3.3333333333vw , 3rem );
  }
}
@supports not (font-size: clamp( 1.75rem , 1rem  +  3.3333333333vw , 3rem )) {
  .text-relocate__main {
    font-size: calc(
			1.75rem + 1.25 * (100vw - 22.5rem) / 37.5
		);
  }
}
@media (max-width: 720px) {
  .text-relocate__main {
    margin-right: 0;
    max-width: 70%;
  }
  @supports (margin-bottom: clamp( 0.75rem , 0.00000625rem  +  3.3333333333vw , 1.5rem )) {
    .text-relocate__main {
      margin-bottom: clamp( 0.75rem , 0.00000625rem  +  3.3333333333vw , 1.5rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.75rem , 0.00000625rem  +  3.3333333333vw , 1.5rem )) {
    .text-relocate__main {
      margin-bottom: calc(
			0.75rem + 0.75 * (100vw - 22.5rem) / 22.5
		);
    }
  }
}
.text-relocate__hashes {
  flex: 2;
  font-weight: 600;
  font-family: "Inter Tight", sans-serif;
  line-height: 1.5;
  background: linear-gradient(87.01deg, #6d9be3 3.39%, #aadfc1 32.8%, #f4cd63 61.74%, #eb672d 94.48%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
@supports (font-size: clamp( 1.5rem , 1.275rem  +  1vw , 1.875rem )) {
  .text-relocate__hashes {
    font-size: clamp( 1.5rem , 1.275rem  +  1vw , 1.875rem );
  }
}
@supports not (font-size: clamp( 1.5rem , 1.275rem  +  1vw , 1.875rem )) {
  .text-relocate__hashes {
    font-size: calc(
			1.5rem + 0.375 * (100vw - 22.5rem) / 37.5
		);
  }
}
