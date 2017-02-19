import { TweenMax, TweenLite, ScrollToPlugin, CSSPlugin } from 'gsap'
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import setTween from './components/animation.js' //ルート./は絶対いるよ！
import Indicator from './components/indicator.js'

console.log('start'); //スタート

let controller = new ScrollMagic.Controller();
let box = [];
box = document.getElementsByClassName('colum');
console.log(box);
let box2 = document.getElementsByClassName('passion');
let firstshow = TweenMax.staggerTo(box, 50, {opacity:1}, 20);
let second = TweenMax.staggerTo(box2, 50, {opacity:1}, 20);

// let txtshow = TweenMax.staggerTo(txts, 50, {opacity:1, transform:'matrix(1,0,0,1,0,0)'}, 20); //対象,かかる時間,
// let txtmove = TweenMax.to(hanasaka, 30, {right: "-200%"}, 100);

let scene = new ScrollMagic.Scene({
	duration: 900, 
	offset: 300
	})
	.setTween(firstshow)
	.addTo(controller)
	.addIndicators({name: 'firstshow'});

let scene2 = new ScrollMagic.Scene({
	duration: 700,
	offset: 1000
	})
	.setTween(second)
	.addTo(controller)
	.addIndicators({name: 'txtmove'});

// $.each(txts, function(i, text) {
// 	new ScrollMagic.Scene({
// 		triggerElement: text,
// 		duration: $(text).width() * 2,
// 		offset: $(text).width() * (-2)
// 	})
// 	.setTween(TweenMax.fromTo( text, 1, 
// 		{css: {x: $(text).width()}},
// 		{css: {x: 0}}
// 	))
// 	.setPin('#story')
// 	.addTo(controller);
// });