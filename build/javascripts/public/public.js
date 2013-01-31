(function() {

  $(function() {
    var jRes, stickyPanelOptions;
    if (!("placeholder" in document.createElement("input"))) {
      $("input[placeholder]").each(function() {
        var val;
        val = $(this).attr("placeholder");
        if (this.value === "") {
          this.value = val;
        }
        return $(this).focus(function() {
          if (this.value === val) {
            return this.value = "";
          }
        }).blur(function() {
          if ($.trim(this.value) === "") {
            return this.value = val;
          }
        });
      });
    }
    $("form").submit(function() {
      return $(this).find("input[placeholder]").each(function() {
        if (this.value === $(this).attr("placeholder")) {
          return this.value = "";
        }
      });
    });
    jRes = jRespond([
      {
        label: "handheld",
        enter: 0,
        exit: 767
      }, {
        label: "tablet",
        enter: 768,
        exit: 10000
      }
    ]);
    stickyPanelOptions = {
      afterDetachCSSClass: "attached",
      savePanelSpace: true
    };
    $(".navbar").stickyPanel(stickyPanelOptions);
    jRes.addFunc({
      breakpoint: "handheld",
      enter: function() {
        return $('.content-block h2').fitText(1.1);
      }
    });
    jRes.addFunc({
      breakpoint: "tablet",
      enter: function() {
        return $("body").pageScroller({
          navigation: ".nav",
          scrollOffset: -80
        });
      }
    });
    $('.header-content h2').fitText(.71);
    return $(".footable").footable({
      breakpoints: {
        phone: 320,
        tablet: 767
      }
    });
  });

}).call(this);
