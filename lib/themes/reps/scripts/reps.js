/**
 * @file
 * Custom javascript for the sub theme.
 */

// Every script put in that block will use jQuery 1.4.4
// Add your code in the ready function if you want to be sure the page is fully loaded before execution.
jQuery(function ($) {
  $(document).ready(function () {
    $('.caret').click(function () {
      $(this).parents('.expanded').toggleClass('open');
    });
    $('.expanded a').click(function () {
      if (!$(this).hasClass('ext')) {
        window.location = $(this).attr('href');
      }
    });
    /* menu display management */
    $('#menu-button').click(function () {
      $('.navbar-ex1-collapse').toggleClass('visible-ex1');
      $('.navbar-ex1-collapse').toggleClass('in');
    });
    /* remove default "search" word of the search box */
    $('input.form-control').focusin(function () {
      var placeHolderValue = $(this).attr('placeholder');
      $(this).attr('placeholder','');
      $(this).focusout(function () {
        $(this).attr('placeholder', placeHolderValue);
      });
    });
    /* link for the footer FlexSlider */
    $('.region-footer ul.slides a').click(function () {
      window.open($(this).attr('href'));
    });

    // Homepage additional boxes - Height harmonization.
    var boxMaxHeight = 0;
    $('.view-reps-homepage-additional-blocks .views-row span').each(function () {
      if ($(this).outerHeight(true) > boxMaxHeight) {
        boxMaxHeight = $(this).outerHeight(true);
      }
    });
    $('.view-reps-homepage-additional-blocks .views-row span').height(boxMaxHeight);

    // Quick-tabs styling.
    var nbrTabs = $('.quicktabs-wrapper li').length;
    $('.quicktabs-wrapper li').each(function (pos) {
      $(this).css('width', 100 / nbrTabs + '%');
      $(this).css('left', (100 / nbrTabs * pos) + '%');
    });

    // Table fix padding.
    $('.reps table').each(function (pos, item) {
      $(this).css('border-spacing', $(this).attr('cellspacing') + 'px');
      $(this).find('td, th').css('padding', $(this).attr('cellpadding') + 'px');
    });
    // REPR-1751 ckeditor tabber tab same height.
    var tabLinkHeight = 0,
        $tabLink = $('dl.ckeditor-tabber dt a.tab-link');
     $tabLink.each(function (pos,item) {

       if (item.offsetHeight > tabLinkHeight) {
tabLinkHeight = item.offsetHeight };
     }).promise().done(function () {
        $tabLink.removeAttr('style').parent().css('height',tabLinkHeight);
});

  });
});
