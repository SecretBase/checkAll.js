;(function($)
{
    $.fn.checkAll = function (options)
    {
        var options = $.extend({
                scope: 'form',
                onMasterCheck: null
            }, options);

        this.each(function() {

            var $master_checkbox = $(this),
                $scope = options.scope instanceof jQuery ? options.scope : $master_checkbox.closest(options.scope);

            $master_checkbox.on('click', function(e) {

                if ($master_checkbox.is(':checked')) {

                    if (typeof options.onMasterCheck === 'function')
                        options.onMasterCheck($master_checkbox, $scope);

                    $scope.find('input[type="checkbox"]').not($master_checkbox).prop('checked', true);
                }
                else
                    $scope.find('input[type="checkbox"]').not($master_checkbox).prop('checked', false);
            });

            $scope.on('change', 'input[type="checkbox"]', function(e) {

                var $changed_checkbox = $(this);

                if ($changed_checkbox.is($master_checkbox))
                    return false;

                if ( ! $changed_checkbox.is(':checked')) {
                    $master_checkbox.prop('checked', false);
                    return;
                }

                if ($scope.find('input[type="checkbox"]:checked').not($master_checkbox).length == $scope.find('input[type="checkbox"]').not($master_checkbox).length)
                    $master_checkbox.prop('checked', true);
            });

            return this;
        });
    };
    
}(jQuery));