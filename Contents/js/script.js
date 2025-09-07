/* Custom Script */

$(document).ready(function(){
  if($(window).width() > 767) {
    var header_section_height = $('header').outerHeight();
    header_height = header_section_height;
    $('.content').css('margin-top', header_height);
  }

  $(window).resize(function(){
    if($(window).width() > 767) {
      var header_section_height = $('header').outerHeight();
      header_height = header_section_height;
      $('.content').css('margin-top', header_height);
    }
  });

/* 
 Back Top Link
 ========================================================================== */
  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
  });

  $('.back-to-top').on('click',function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  

  

  $('.f_quicklinks, .quick-links_close-btn').click(function(){
    $('.footer-explore-products').removeClass('footer-sticky-open');
    $('.footer-quick-links').toggleClass('footer-sticky-open');
  });

  $('.f_explore-products, .quick-links_close-btn').click(function(){
    $('.footer-quick-links').removeClass('footer-sticky-open');
    $('.footer-explore-products').toggleClass('footer-sticky-open');
  });

  $('.quick-links_close-btn').click(function(){
    $('.footer-quick-links, .footer-explore-products').removeClass('footer-sticky-open');
  });

  $('.right-sticky-btn').click(function(){
    $('.right-sticky-sec').toggleClass('right-sticky-sec-open');
  });

  $("body").tooltip({   
    selector: "[data-toggle='tooltip']",
    container: "body"
  });

});

$(document).on('click', '.ph-video', function (event) {
  var change = $(this).find("img").attr("src").split("/");
  $(".ph-master-video-section > iframe").attr("src", "https://www.youtube.com/embed/" + change[4]+"?rel=&autoplay=1");
});

var flag = 0;
$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 1000 && flag == 0) {
    $('.sticky-banner-section').fadeIn();
    flag = 1;
  }
});

$('.sticky-banner-close').click(function(){
  $('.sticky-banner-section').fadeOut();
});

var owl = $("#award-slider");
  owl.owlCarousel({
  loop: true,
  dots: false,
  items : 1,
  responsiveClass:true,
  responsive:{
    0:{
      items:1 // In this configuration 1 is enabled from 0px up to 479px screen size 
    },
    480:{
      items:1, // from 480 to 677
    },
    678:{
      items:2, // from this breakpoint 678 to 959
    },
    960:{
      items:3, // from this breakpoint 960 to 1199
    },
    1200:{
      items:3,
    }
  },
  navClass: ["prev", "next"],
  autoplay: false,
  nav: true,
  navText: ["<img src='images/prev_dark.png'>","<img src='images/next_dark.png'>"]
});

/*var owl1 = $("#award-slider1");
  owl1.owlCarousel({
  loop: true,
  dots: false,
  items : 1,
  responsiveClass:true,
  responsive:{
    0:{
      items:1
    },
    480:{
      items:1
    },
    678:{
      items:2
    },
    960:{
      items:2
    },
    1200:{
      items:2
    }
  },
  navClass: ["prev", "next"],
  autoplay: false,
  nav: true,
  navText: ["<img src='images/prev_dark.png'>","<img src='images/next_dark.png'>"]
});*/

var owl = $("#videos-slider");
  owl.owlCarousel({
  loop: true,
  dots: false,
  items : 1,
  responsiveClass:true,
  responsive:{
    0:{
      items:1 // In this configuration 1 is enabled from 0px up to 479px screen size 
    },
    480:{
      items:1, // from 480 to 677
    },
    678:{
      items:2, // from this breakpoint 678 to 959
    },
    960:{
      items:3, // from this breakpoint 960 to 1199
    },
    1200:{
      items:3,
    }
  },
  navClass: ["prev", "next"],
  autoplay: false,
  nav: true,
  navText: ["<img src='images/prev_dark.png'>","<img src='images/next_dark.png'>"]
});


var owl1 = $("#award-slider1");
  owl1.owlCarousel({
  loop: true,
  dots: false,
  items : 1,
  responsiveClass:true,
  responsive:{
    0:{
      items:1 // In this configuration 1 is enabled from 0px up to 479px screen size 
    },
    480:{
      items:1, // from 480 to 677
    },
    678:{
      items:2, // from this breakpoint 678 to 959
    },
    960:{
      items:2, // from this breakpoint 960 to 1199
    },
    1200:{
      items:2,
    }
  },
  navClass: ["prev", "next"],
  autoplay: false,
  nav: true,
  navText: ["<img src='images/prev_dark.png'>","<img src='images/next_dark.png'>"]
});
  

/*=====Form Validation======*/

/*$.validator.addMethod(
  "alphabetsOnly",
  function(value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
  },
  "Please enter a valid name."
);*/

/*$('#contact-form').validate({
  rules: {
    name: {
      minlength: 3,
      alphabetsOnly: "[a-zA-Z]+",
      required: true
    },
    email: {
      required: true,
      email: true
    },
    country: {
      minlength: 3,
      alphabetsOnly: "[a-zA-Z]+",
      required: true
    },
    phone: {
      minlength: 10,
      maxlength: 10,
      digits: true,
      required: true
    },
    message: {
      required: true
    },
  },
  highlight: function (element) {
      $(element).closest('.control-group').removeClass('success').addClass('error');
  },
  success: function (element) {
      element.text('OK!').addClass('valid')
          .closest('.control-group').removeClass('error').addClass('success');
  }
});*/

/*==End of Form Validation==*/

// wow
/*new WOW().init();*/

$(window).on('load', function() {
  var $w = $(window);
    var $circ = $('.animated-circle');
    var $progCount = $('.progress-count');
    var wh = $w.height();
    var h = $('body').height();
    var sHeight = h - wh;
    $w.on('scroll', function(){
        var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
        updateProgress(perc);
    });

    function updateProgress(perc){
      var circle_offset = 126 * perc;
      $circ.css({
          "stroke-dashoffset" : 126 - circle_offset
      });
      $progCount.html(Math.round(perc * 100) + "%");
    }      
});

/*(function(){
    var $w = $(window);
    var $circ = $('.animated-circle');
    var $progCount = $('.progress-count');
    var wh = $w.height();
    var h = $('body').height();
    var sHeight = h - wh;
    $w.on('scroll', function(){
        var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
        updateProgress(perc);
    });
 
    function updateProgress(perc){
        var circle_offset = 126 * perc;
        $circ.css({
            "stroke-dashoffset" : 126 - circle_offset
        });
        $progCount.html(Math.round(perc * 100) + "%");
    }
 
}());*/

!function ($) {

    "use strict";

    // TABCOLLAPSE CLASS DEFINITION
    // ======================

    var TabCollapse = function (el, options) {
        this.options   = options;
        this.$tabs  = $(el);

        this._accordionVisible = false; //content is attached to tabs at first
        this._initAccordion();
        this._checkStateOnResize();


        // checkState() has gone to setTimeout for making it possible to attach listeners to
        // shown-accordion.bs.tabcollapse event on page load.
        // See https://github.com/flatlogic/bootstrap-tabcollapse/issues/23
        var that = this;
        setTimeout(function() {
          that.checkState();
        }, 0);
    };

    TabCollapse.DEFAULTS = {
        accordionClass: 'visible-xs',
        tabsClass: 'hidden-xs',
        accordionTemplate: function(heading, groupId, parentId, active) {
            return  '<div class="panel panel-default">' +
                    '   <div class="panel-heading">' +
                    '      <h4 class="panel-title">' +
                    '      </h4>' +
                    '   </div>' +
                    '   <div id="' + groupId + '" class="panel-collapse collapse ' + (active ? 'in' : '') + '">' +
                    '       <div class="panel-body js-tabcollapse-panel-body">' +
                    '       </div>' +
                    '   </div>' +
                    '</div>'

        }
    };

    TabCollapse.prototype.checkState = function(){
        if (this.$tabs.is(':visible') && this._accordionVisible){
            this.showTabs();
            this._accordionVisible = false;
        } else if (this.$accordion.is(':visible') && !this._accordionVisible){
            this.showAccordion();
            this._accordionVisible = true;
        }
    };

    TabCollapse.prototype.showTabs = function(){
        var view = this;
        this.$tabs.trigger($.Event('show-tabs.bs.tabcollapse'));

        var $panelHeadings = this.$accordion.find('.js-tabcollapse-panel-heading').detach();

        $panelHeadings.each(function() {
            var $panelHeading = $(this),
            $parentLi = $panelHeading.data('bs.tabcollapse.parentLi');

            var $oldHeading = view._panelHeadingToTabHeading($panelHeading);

            $parentLi.removeClass('active');
            if ($parentLi.parent().hasClass('dropdown-menu') && !$parentLi.siblings('li').hasClass('active')) {
                $parentLi.parent().parent().removeClass('active');
            }

            if (!$oldHeading.hasClass('collapsed')) {
                $parentLi.addClass('active');
                if ($parentLi.parent().hasClass('dropdown-menu')) {
                    $parentLi.parent().parent().addClass('active');
                }
            } else {
                $oldHeading.removeClass('collapsed');
            }

            $parentLi.append($panelHeading);
        });

        if (!$('li').hasClass('active')) {
            $('li').first().addClass('active')
        }

        var $panelBodies = this.$accordion.find('.js-tabcollapse-panel-body');
        $panelBodies.each(function(){
            var $panelBody = $(this),
                $tabPane = $panelBody.data('bs.tabcollapse.tabpane');
            $tabPane.append($panelBody.contents().detach());
        });
        this.$accordion.html('');

        if(this.options.updateLinks) {
            var $tabContents = this.getTabContentElement();
            $tabContents.find('[data-toggle-was="tab"], [data-toggle-was="pill"]').each(function() {
                var $el = $(this);
                var href = $el.attr('href').replace(/-collapse$/g, '');
                $el.attr({
                    'data-toggle': $el.attr('data-toggle-was'),
                    'data-toggle-was': '',
                    'data-parent': '',
                    href: href
                });
            });
        }

        this.$tabs.trigger($.Event('shown-tabs.bs.tabcollapse'));
    };

    TabCollapse.prototype.getTabContentElement = function(){
        var $tabContents = $(this.options.tabContentSelector);
        if($tabContents.length === 0) {
            $tabContents = this.$tabs.siblings('.tab-content');
        }
        return $tabContents;
    };

    TabCollapse.prototype.showAccordion = function(){
        this.$tabs.trigger($.Event('show-accordion.bs.tabcollapse'));

        var $headings = this.$tabs.find('li:not(.dropdown) [data-toggle="tab"], li:not(.dropdown) [data-toggle="pill"]'),
            view = this;
        $headings.each(function(){
            var $heading = $(this),
                $parentLi = $heading.parent();
            $heading.data('bs.tabcollapse.parentLi', $parentLi);
            view.$accordion.append(view._createAccordionGroup(view.$accordion.attr('id'), $heading.detach()));
        });

        if(this.options.updateLinks) {
            var parentId = this.$accordion.attr('id');
            var $selector = this.$accordion.find('.js-tabcollapse-panel-body');
            $selector.find('[data-toggle="tab"], [data-toggle="pill"]').each(function() {
                var $el = $(this);
                var href = $el.attr('href') + '-collapse';
                $el.attr({
                    'data-toggle-was': $el.attr('data-toggle'),
                    'data-toggle': 'collapse',
                    'data-parent': '#' + parentId,
                    href: href
                });
            });
        }

        this.$tabs.trigger($.Event('shown-accordion.bs.tabcollapse'));
    };

    TabCollapse.prototype._panelHeadingToTabHeading = function($heading) {
        var href = $heading.attr('href').replace(/-collapse$/g, '');
        $heading.attr({
            'data-toggle': 'tab',
            'href': href,
            'data-parent': ''
        });
        return $heading;
    };

    TabCollapse.prototype._tabHeadingToPanelHeading = function($heading, groupId, parentId, active) {
        $heading.addClass('js-tabcollapse-panel-heading ' + (active ? '' : 'collapsed'));
        $heading.attr({
            'data-toggle': 'collapse',
            'data-parent': '#' + parentId,
            'href': '#' + groupId
        });
        return $heading;
    };

    TabCollapse.prototype._checkStateOnResize = function(){
        var view = this;
        $(window).resize(function(){
            clearTimeout(view._resizeTimeout);
            view._resizeTimeout = setTimeout(function(){
                view.checkState();
            }, 100);
        });
    };


    TabCollapse.prototype._initAccordion = function(){
        var randomString = function() {
            var result = "",
                possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for( var i=0; i < 5; i++ ) {
                result += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return result;
        };

        var srcId = this.$tabs.attr('id'),
            accordionId = (srcId ? srcId : randomString()) + '-accordion';

        this.$accordion = $('<div class="panel-group ' + this.options.accordionClass + '" id="' + accordionId +'"></div>');
        this.$tabs.after(this.$accordion);
        this.$tabs.addClass(this.options.tabsClass);
        this.getTabContentElement().addClass(this.options.tabsClass);
    };

    TabCollapse.prototype._createAccordionGroup = function(parentId, $heading){
        var tabSelector = $heading.attr('data-target'),
            active = $heading.data('bs.tabcollapse.parentLi').is('.active');

        if (!tabSelector) {
            tabSelector = $heading.attr('href');
            tabSelector = tabSelector && tabSelector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
        }

        var $tabPane = $(tabSelector),
            groupId = $tabPane.attr('id') + '-collapse',
            $panel = $(this.options.accordionTemplate($heading, groupId, parentId, active));
        $panel.find('.panel-heading > .panel-title').append(this._tabHeadingToPanelHeading($heading, groupId, parentId, active));
        $panel.find('.panel-body').append($tabPane.contents().detach())
            .data('bs.tabcollapse.tabpane', $tabPane);

        return $panel;
    };



    // TABCOLLAPSE PLUGIN DEFINITION
    // =======================

    $.fn.tabCollapse = function (option) {
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('bs.tabcollapse');
            var options = $.extend({}, TabCollapse.DEFAULTS, $this.data(), typeof option === 'object' && option);

            if (!data) $this.data('bs.tabcollapse', new TabCollapse(this, options));
        });
    };

    $.fn.tabCollapse.Constructor = TabCollapse;


}(window.jQuery);


$('#myTab').tabCollapse();
$('#myTab1').tabCollapse();