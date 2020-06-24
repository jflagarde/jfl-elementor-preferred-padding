(function ($) {

    "use strict";

    // Load everything when elementor is initialised
    $(window).on('elementor:init', function () {

        $(window).on('load', function () {

            $(document).on('keydown', 'input[type="number"][data-setting="top"],input[type="number"][data-setting="right"],input[type="number"][data-setting="bottom"],input[type="number"][data-setting="left"]', function (e) {

                if (38 == e.keyCode || 40 == e.keyCode) {

                    //e.preventDefault();
                    e.stopPropagation();

                    var actualValue = 0;
                    if ($(this).val()) {
                        actualValue = parseInt($(this).val());
                    }
                    var newValue = actualValue;

                    var preferredValues = [0, 10, 20, 40, 80, 160];

                    if (38 == e.keyCode) {
                        var nextArray = preferredValues.filter(function (item) {
                            return item > actualValue;
                        });
                        if (nextArray.length > 0) {
                            newValue = parseInt(nextArray.shift()) - 1;
                        } else {
                            newValue = parseInt(actualValue) + 9;
                        }
                        newValue = newValue;

                    } else if (40 == e.keyCode) {

                        var previousArray = preferredValues.filter(function (item) {
                            return item < actualValue;
                        });

                        if (previousArray.length > 0) {
                            newValue = parseInt(previousArray.slice(-1)) + 1;
                        } else {
                            newValue = parseInt(actualValue) - 9;
                        }
                    }

                    $(this).val(newValue);

                }

            });

        });

    });
})(jQuery);