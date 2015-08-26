// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('sportSocial', ['ionic', 'ngCordova', 'sportSocial.controllers'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    // Native scrolling recommended by:
    // http://julienrenaux.fr/2015/08/24/ultimate-angularjs-and-ionic-performance-cheat-sheet/
    // http://blog.ionic.io/native-scrolling-in-ionic-a-tale-in-rhyme/
    // TODO iOS works or not? Fallsback?
    // Disables browser pull-refresh
    // Doesn't seem smoother in Android...
    if(ionic.Platform.isAndroid()) {
      $ionicConfigProvider.scrolling.jsScrolling(false);
    }

    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
// FIXME Login is getting put into state history
      .state('app.login', {
        url: '/login',
        views: {
          'menuContent':{
            templateUrl: 'templates/login.html'}
        }
      })

      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          'menuContent': {
            templateUrl: 'templates/dashboard.html'
            //controller: 'AppCtrl'
          }
        }
      })

      .state('app.friends', {
        url: '/friends',
        views: {
          'menuContent': {
            templateUrl: 'templates/friends.html'
          }
        }
      })

      .state('app.friend_invites', {
        url: '/friend_invites',
        views: {
          'menuContent': {
            templateUrl: 'templates/friend_invites.html'
          }
        }
      })

      .state('app.activities', {
        url: '/activities',
        views: {
          'menuContent': {
            templateUrl: 'templates/activities.html'
            //controller: 'ActivitiesCtrl'
          }
        }
      })
      .state('app.activities.mine', {
        url: '/mine',
        views: {
          'mine-tab': {
            templateUrl: 'templates/activities_list.html',
            controller: 'ActivitiesCtrl'
          }
        }
      })
      .state('app.activities.friends', {
        url: '/friends',
        views: {
          'friends-tab':{
            templateUrl: 'templates/activities_list.html',
            controller: 'ActivitiesCtrl'
          }
        }
      })

      .state('app.account', {
        url: '/account',
        views: {
          'menuContent':{
            templateUrl: 'templates/account.html'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dashboard');
  });
//
//.directive('nativeDatePicker', function ($cordovaDatePicker) {
//  return {
//    restrict: "AE",
//    replace: false,
//    link: function (scope, elem, attrs) {
//
//      //cache current index
//      var c_index = scope.inputNavParams.current_position - 1;
//
//      //update label
//      scope.label = scope.inputs.list[c_index].label;
//
//      //show date format (set via form builder)
//      scope.format = scope.inputs.list[c_index].datetime_format;
//
//      //display cached/default/empty value on view
//      scope.setCachedValue(c_index);
//
//      scope.datePicker = function () {
//
//        // $cordovaDatePicker.show({
//        // date : new Date(),
//        // mode : "date"
//        // }, function(date) {
//        // console.log(date);
//        // });
//
//        var options = {
//          date: new Date(),
//          mode: 'date'
//        };
//        $cordovaDatePicker.show(options, function (date) {
//          //console.log("date result " + date);
//          alert(date);
//        });
//        // TODO date picker error with ANdroid
//
//      };
//
//    }
//  }
//});
