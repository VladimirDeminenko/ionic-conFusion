angular.module('conFusion', ['ionic', 'conFusion.controllers', 'conFusion.services'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/sidebar.html',
            controller: 'AppCtrl'
        })

        .state('app.home', {
            url: '/home',
            views: {
                'mainContent': {
                    templateUrl: 'templates/home.html',
                  controller: 'IndexController'
                }
            }
        })

        .state('app.aboutus', {
            url: '/aboutus',
            views: {
                'mainContent': {
                    templateUrl: 'templates/aboutus.html'
                }
            }
        })

        .state('app.contactus', {
            url: '/contactus',
            views: {
                'mainContent': {
                    templateUrl: 'templates/contactus.html'
                }
            }
        })

        .state('app.menu', {
            url: '/menu',
            views: {
                'mainContent': {
                    templateUrl: 'templates/menu.html',
                    controller: ''
                }
            }
        })

        .state('app.dishdetails', {
            url: '/menu/:id',
            views: {
                'mainContent': {
                    templateUrl: 'templates/dishdetail.html',
                    controller: ''
                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');

    });