// ==UserScript==
// @name         MyFitnessPal Calorie Display Remover
// @namespace    gordondev
// @version      0.3
// @description  For us weirdos on MyFitnessPal that don't want to focus so much on the calories. This script removes all calorie displays from the diary.
// @author       Shauna Gordon
// @match        http://www.myfitnesspal.com/food/diary
// @match        https://www.myfitnesspal.com/food/diary
// @grant        none
// ==/UserScript==

function addJquery() {
	script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js");
    document.body.appendChild(script);
}

function getUser() {
	return $('.user-2').first().attr('title');
}

function main() {
	// jQuery just makes life easier
	// We won't be picky with whether it's jQuery or Zepto, though
	if(typeof $ == 'undefined') {
		addJquery();
	}

	var user = getUser();
	var url = window.location.pathname.toLowerCase();
	if(url.indexOf('diary') > -1 && url.indexOf(user) == -1) {
		$('.first + td').hide();
	}
}

main();
