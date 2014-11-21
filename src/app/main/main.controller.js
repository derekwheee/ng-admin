'use strict';

angular.module('ngAdmin')
    .controller('MainCtrl', function ($scope) {

        $scope.dashboardPanels = [
            {
                'uid'   : '234623471',
                'title' : 'Pages',
                'type'  : 'urlList',
                'urls'  : [
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Page'
                    },
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Page 2'
                    },
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Page 3'
                    }
                ]
            },
            {
                'uid'   : '234623471',
                'title' : 'Modules',
                'type'  : 'urlList',
                'urls'  : [
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Module'
                    },
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Module 2'
                    },
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Module 3'
                    }
                ]
            },
            {
                'uid'   : '234623471',
                'title' : 'Pages',
                'type'  : 'urlList',
                'urls'  : [
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Page'
                    },
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Page 2'
                    },
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Page 3'
                    }
                ]
            },
            {
                'uid'   : '234623471',
                'title' : 'Modules',
                'type'  : 'urlList',
                'urls'  : [
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Module'
                    },
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Module 2'
                    },
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Module 3'
                    }
                ]
            },
            {
                'uid'   : '234623471',
                'title' : 'Pages',
                'type'  : 'urlList',
                'urls'  : [
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Page'
                    },
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Page 2'
                    },
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Page 3'
                    }
                ]
            },
            {
                'uid'   : '234623471',
                'title' : 'Modules',
                'type'  : 'urlList',
                'urls'  : [
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Module'
                    },
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Module 2'
                    },
                    {
                        'url'   : '/#/page',
                        'title' : 'My Cool Module 3'
                    }
                ]
            }
        ];

    angular.forEach($scope.dashboardPanels, function(dashboardPanels) {
        dashboardPanels.rank = Math.random();
    });
  });
