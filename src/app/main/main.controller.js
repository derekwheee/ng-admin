'use strict';

angular.module('ngAdmin').controller('MainCtrl', function ($scope) {

    $scope.alerts = [
        {
            'type' : 'info',
            'alert' : 'There is a new version of something available'
        }
    ];

    $scope.dashboardPanels = [
        {
            'uid'   : '234623471',
            'title' : 'Quick Actions',
            'type'  : 'urlList',
            'urls'  : [
                {
                    'url'   : '/#/page',
                    'title' : 'New Page +'
                },
                {
                    'url'   : '/#/page',
                    'title' : 'New Module +'
                },
                {
                    'url'   : '/#/page',
                    'title' : 'Promo Scheduler'
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
        }
    ];
});
