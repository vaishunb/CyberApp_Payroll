// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic', ])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('logIn', {
            url: '/views/logIn',
            templateUrl: 'views/logIn.html',
            controller: 'logInController'
        })
        .state('home', {
            url: '/views/home',
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .state('employeeDetail', {
            url: '/views/employeeDetail',
            templateUrl: 'views/employeeDetail.html',
            controller : 'employeeController'
        })
        .state('leave', {
            url: '/views/leave',
            templateUrl: 'views/leave.html',
            controller: 'leaveController'
        })
        .state('register', {
            url: '/views/register',
            templateUrl: 'views/register.html'
        })


    $urlRouterProvider.otherwise('/views/logIn');

});