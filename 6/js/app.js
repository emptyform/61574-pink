var navMain = document.querySelector('.mainnav');
var navToggle = document.querySelector('.mainnav__togler');
var pageHeader = document.querySelector('.page-header');

navMain.classList.remove('mainnav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('mainnav--closed')) {
		navMain.classList.remove('mainnav--closed');
		navMain.classList.add('mainnav--opened');
		navToggle.classList.remove('mainnav__togler--closed');
		navToggle.classList.add('mainnav__togler--open');
		pageHeader.classList.remove('page-header--closed');
		pageHeader.classList.add('page-header--open');
	} 
	else {
		navMain.classList.add('mainnav--closed');
		navMain.classList.remove('mainnav--opened');
		navToggle.classList.remove('mainnav__togler--open');
		navToggle.classList.add('mainnav__togler--closed');
		pageHeader.classList.remove('page-header--open');
		pageHeader.classList.add('page-header--closed');

	}
});

