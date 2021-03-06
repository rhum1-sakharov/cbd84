angular
    .module(
        'cbd.front.config',
        [ 'ngSanitize', 'ngResource', 'cbdUtilsModule',
            'ui.router', 'ui.grid', 'ui.grid.resizeColumns',
            'ui.grid.pagination', 'ui.grid.exporter'])

    .config(
        function ($httpProvider,$stateProvider, $urlRouterProvider) {

            //initialize get if not there
            if (!$httpProvider.defaults.headers.get) {
                $httpProvider.defaults.headers.get = {};
            }

            // Answer edited to include suggestions from comments
            // because previous version of code introduced browser-related errors

            //disable IE ajax request caching
            $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
            // extra
            $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
            $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
            
            
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/actus");
            //
            // Now set up the states
            $stateProvider
                .state(
                    'actus',
                    {
                        url: "/actus",
                        views: {
                            "main": {
                                templateUrl: "/resources/partials/front/news.html",
                                controller: function ($scope,
                                                      $q, $http, cbdUtils) {
                                    $scope.feeds = [];
                                    var promiseStart = $q
                                        .when('start');
                                    var promise1 = promiseStart
                                        .then(function (value) {
                                            return $http
                                                .get(
                                                    '/feeds')
                                                .then(
                                                    function (response) {
                                                        $scope.feeds = response.data;
                                                        return response.data;
                                                    });
                                        });

                                    $scope.formatInfoFeed = function (author, ts) {

                                        return author
                                            + ", le "
                                            + cbdUtils
                                                .formatTs2Date(ts);
                                    };
                                }
                            },
                            "partners": {
                                templateUrl: "/resources/partials/front/partners.html",
                                controller: function ($scope,
                                                      $q, $http) {
                                    $scope.partners = [];
                                    var promiseStart = $q
                                        .when('start');
                                    var promise1 = promiseStart
                                        .then(function (value) {
                                            return $http
                                                .get(
                                                    '/partners')
                                                .then(
                                                    function (response) {
                                                        $scope.partners = response.data;
                                                        return response.data;
                                                    });
                                        });
                                }
                            }
                        },

                    })
                .state(
                    'events',
                    {
                        url: "/events",
                        views: {
                            "main": {
                                templateUrl: "/resources/partials/front/events.html",
                                controller: function ($scope,
                                                      $q, $http, cbdUtils,
                                                      uiGridConstants,
                                                      i18nService, $filter) {

                                    var promiseStart = $q
                                        .when('start');

                                    $scope.events = [];

                                    i18nService.setCurrentLang('fr');
                                    $scope.gridEventOptions = {
                                        onRegisterApi: function (gridApi) {
                                            $scope.gridApi = gridApi;
                                        },
                                        enableFiltering: true,
                                        paginationPageSizes: [
                                            25, 50, 100],
                                        paginationPageSize: 25,
                                        exporterPdfTableStyle: {
                                            margin: [30, 30,
                                                30, 30]
                                        },
                                        exporterPdfOrientation: 'landscape',
                                        exporterPdfPageSize: 'LETTER',
                                        exporterPdfMaxGridWidth: 600,
                                        exporterFieldCallback: function (grid, row, col,
                                                                         input) {
                                            if (col.name === 'creationDate') {
                                                return $filter(
                                                    'date')
                                                (
                                                    new Date(
                                                        input),
                                                    "EEE dd MMM yyyy HH'h'mm");
                                            } else {
                                                return input;
                                            }
                                        },
                                        columnDefs: [
                                            {
                                                field: 'creationDate',
                                                sort: {
                                                    direction: uiGridConstants.ASC,
                                                    priority: 1
                                                },
                                                cellFilter: "date:\"EEE dd MMM yyyy HH'h'mm\"",
                                                filterCellFiltered: true,
                                                displayName: "Date",
                                                width: 180
                                            },
                                            {
                                                field: 'category',
                                                displayName: "Categorie",
                                                width: 120,
                                                filter: {
                                                    type: uiGridConstants.filter.SELECT,
                                                    selectOptions: [
                                                        {
                                                            value: 'PROPAGANDE',
                                                            label: 'PROPAGANDE'
                                                        },
                                                        {
                                                            value: 'TIR',
                                                            label: 'TIR'
                                                        },
                                                        {
                                                            value: 'LOISIRS',
                                                            label: 'LOISIRS'
                                                        },
                                                        {
                                                            value: 'OFFICIEL',
                                                            label: 'OFFICIEL'
                                                        },
                                                        {
                                                            value: 'NATIONAL',
                                                            label: 'NATIONAL'
                                                        },
                                                        {
                                                            value: 'FEMININES',
                                                            label: 'FEMININES'
                                                        },
                                                        {
                                                            value: 'PROMOTION',
                                                            label: 'PROMOTION'
                                                        },
                                                        {
                                                            value: 'INVITATION',
                                                            label: 'INVITATION'
                                                        },
                                                        {
                                                            value: 'VETERANS',
                                                            label: 'VETERANS'
                                                        }]
                                                },
                                                cellClass: function (grid,
                                                                     row,
                                                                     col,
                                                                     rowRenderIndex,
                                                                     colRenderIndex) {
                                                    if (grid
                                                            .getCellValue(
                                                                row,
                                                                col) === 'PROPAGANDE') {
                                                        return 'calendar-PROPAGANDE';
                                                    } else if (grid
                                                            .getCellValue(
                                                                row,
                                                                col) === 'TIR') {
                                                        return 'calendar-TIR';
                                                    } else if (grid
                                                            .getCellValue(
                                                                row,
                                                                col) === 'LOISIRS') {
                                                        return 'calendar-LOISIRS';
                                                    } else if (grid
                                                            .getCellValue(
                                                                row,
                                                                col) === 'OFFICIEL') {
                                                        return 'calendar-OFFICIEL';
                                                    } else if (grid
                                                            .getCellValue(
                                                                row,
                                                                col) === 'NATIONAL') {
                                                        return 'calendar-NATIONAL';
                                                    } else if (grid
                                                            .getCellValue(
                                                                row,
                                                                col) === 'FEMININES') {
                                                        return 'calendar-FEMININES';
                                                    } else if (grid
                                                            .getCellValue(
                                                                row,
                                                                col) === 'PROMOTION') {
                                                        return 'calendar-PROMOTION';
                                                    } else if (grid
                                                            .getCellValue(
                                                                row,
                                                                col) === 'INVITATION') {
                                                        return 'calendar-INVITATION';
                                                    } else if (grid
                                                            .getCellValue(
                                                                row,
                                                                col) === 'VETERANS') {
                                                        return 'calendar-VETERANS';
                                                    }
                                                }
                                            },
                                            {
                                                field: 'club',
                                                displayName: "Club",
                                                minWidth: 100
                                            },
                                            {
                                                field: 'number',
                                                displayName: "Nb",
                                                maxWidth: 70,
                                                enableFiltering: false
                                            },
                                            {
                                                field: 'type',
                                                displayName: "Type",
                                                minWidth: 60,
                                                filter: {
                                                    type: uiGridConstants.filter.SELECT,
                                                    selectOptions: [
                                                        {
                                                            value: 'S',
                                                            label: 'S'
                                                        },
                                                        {
                                                            value: 'D',
                                                            label: 'D'
                                                        },
                                                        {
                                                            value: 'T',
                                                            label: 'T'
                                                        },
                                                        {
                                                            value: 'Q',
                                                            label: 'Q'
                                                        }]
                                                }
                                            },
                                            {
                                                field: 'division',
                                                displayName: "Division",
                                                minWidth: 80
                                            },
                                            {
                                                field: 'mode',
                                                displayName: "Mode",
                                                minWidth: 60
                                            },
                                            {
                                                field: 'nature',
                                                displayName: "Nature",
                                                minWidth: 150

                                            },
                                            {
                                                field: 'place',
                                                displayName: "Lieu",
                                                minWidth: 150
                                            }]
                                    };

                                    $scope.export_row_type = 'all';
                                    $scope.exportPDF = function () {
                                        $scope.gridApi.exporter
                                            .pdfExport(
                                                $scope.export_row_type,
                                                'visible');
                                    };

                                    var promise1 = promiseStart
                                        .then(function (response) {
                                            return $http
                                                .get(
                                                    '/events')
                                                .then(
                                                    function (response) {
                                                        $scope.events = response.data;
                                                        $scope.gridEventOptions.data = response.data;
                                                        return response.data;
                                                    });
                                        });

                                }
                            },
                            "partners": {
                                templateUrl: "/resources/partials/front/partners.html",
                                controller: function ($scope,
                                                      $q, $http) {
                                    $scope.partners = [];
                                    var promiseStart = $q
                                        .when('start');
                                    var promise1 = promiseStart
                                        .then(function (value) {
                                            return $http
                                                .get(
                                                    '/partners')
                                                .then(
                                                    function (response) {
                                                        $scope.partners = response.data;
                                                        return response.data;
                                                    });
                                        });
                                }
                            }
                        }

                    })
                .state(
                    'rankings',
                    {
                        url: "/rankings",
                        views: {
                            "main": {
                                templateUrl: "/resources/partials/front/rankings.html",
                                controller: function ($scope,
                                                      $q, $http, cbdUtils,
                                                      uiGridConstants,
                                                      i18nService, $filter) {

                                    var promiseStart = $q
                                        .when('start');
                                    $scope.rankings = [];
                                    $scope.totalPoints = 0;

                                    i18nService
                                        .setCurrentLang('fr');
                                    $scope.gridRankingOptions = {
                                        onRegisterApi: function (gridApi) {
                                            $scope.gridApi = gridApi;
                                        },
                                        enableFiltering: true,
                                        paginationPageSizes: [
                                            25, 50, 100],
                                        paginationPageSize: 25,
                                        exporterPdfTableStyle: {
                                            margin: [30, 30,
                                                30, 30]
                                        },
                                        exporterPdfOrientation: 'landscape',
                                        exporterPdfPageSize: 'LETTER',
                                        exporterPdfMaxGridWidth: 600,
                                        columnDefs: [
                                            {
                                                field: 'position',
                                                displayName: "Rang",
                                                width: 160,
                                                cellTemplate: '<div class="ui-grid-cell-contents"><span ng-model="row.entity.stars" stars="row.entity.stars"></span> {{ row.entity.position }}</div>',
                                                type: 'number'
                                            },
                                            {
                                                field: 'nom',
                                                displayName: "Nom",
                                                width: 120
                                            },
                                            {
                                                field: 'prenom',
                                                displayName: "Pr\u00e9nom",
                                                minWidth: 120
                                            },
                                            {
                                                field: 'licence',
                                                displayName: "N\u00b0 licence",
                                                minWidth: 90
                                            },
                                            {
                                                field: 'instance',
                                                displayName: "Club",
                                                minWidth: 180
                                            },
                                            {
                                                field: 'pointOfficielActuel',
                                                displayName: "Pts",
                                                minWidth: 80,
                                                type: 'number',
                                                sort: {
                                                    direction: uiGridConstants.DESC,
                                                    priority: 1
                                                }
                                            },
                                            {
                                                field: 'pointCumulActuel',
                                                displayName: "Pts Cumul",
                                                minWidth: 100,
                                                type: 'number'
                                            },
                                            {
                                                field: 'typeLicence',
                                                displayName: "Licence",
                                                minWidth: 80,
                                                cellFilter: 'typeLicenceFilter'
                                            }
                                        ]
                                    };

                                    $scope.export_row_type = 'all';
                                    $scope.exportPDF = function () {
                                        $scope.gridApi.exporter
                                            .pdfExport(
                                                $scope.export_row_type,
                                                'visible');
                                    };

                                    var promise1 = promiseStart
                                        .then(function (response) {
                                            return $http
                                                .get(
                                                    '/rankings')
                                                .then(
                                                    function (response) {
                                                        $scope.rankings = response.data;

                                                        for (var i in $scope.rankings) {
                                                            var rank = $scope.rankings[i];
                                                        }

                                                        $scope.rankings
                                                            .sort(function (a,
                                                                            b) {
                                                                return b.pointOfficielActuel
                                                                    - a.pointOfficielActuel;
                                                            });

                                                        $scope.rankings[0].position = 1;
                                                        for (var i = 1; i < $scope.rankings.length; i++) {

                                                            if ($scope.rankings[i].pointOfficielActuel != $scope.rankings[i - 1].pointOfficielActuel) {
                                                                $scope.rankings[i].position = i + 1;
                                                            } else {
                                                                $scope.rankings[i].position = $scope.rankings[i - 1].position;
                                                            }

                                                        }

                                                        $scope.percentiles = {

                                                            one: $scope.rankings.length * 0.01,
                                                            two: $scope.rankings.length * 0.02,
                                                            three: $scope.rankings.length * 0.03,
                                                            thirty: $scope.rankings.length * 0.3,
                                                            fifty: $scope.rankings.length * 0.5
                                                        };
                                                        for (var i in $scope.rankings) {

                                                            if ($scope.rankings[i].pointOfficielActuel > 0) {
                                                                $scope.rankings[i].stars = 1;
                                                                if ($scope.rankings[i].position === 1) {
                                                                    $scope.rankings[i].stars = 6;
                                                                } else if ($scope.rankings[i].position < $scope.percentiles.one) {
                                                                    $scope.rankings[i].stars = 5;
                                                                } else if ($scope.rankings[i].position < $scope.percentiles.two) {
                                                                    $scope.rankings[i].stars = 4;
                                                                } else if ($scope.rankings[i].position < $scope.percentiles.thirty) {
                                                                    $scope.rankings[i].stars = 3;
                                                                } else if ($scope.rankings[i].position < $scope.percentiles.fifty) {
                                                                    $scope.rankings[i].stars = 2;
                                                                }
                                                            } else {
                                                                $scope.rankings[i].stars = 0;
                                                            }
                                                        }

                                                        $scope.gridRankingOptions.data = response.data;

                                                        return response.data;
                                                    });
                                        });
                                    
                                    var promise2 = promise1
                                    .then(function (value) {
                                        return $http.get('rankings/date').then(
                                                function (response) {
                                                    $scope.dateUpdate = response.data;
                                                    return response.data;
                                                });
                                    });

                                }
                            },
                            "partners": {
                                templateUrl: "/resources/partials/front/partners.html",
                                controller: function ($scope,
                                                      $q, $http) {
                                    $scope.partners = [];
                                    var promiseStart = $q
                                        .when('start');
                                    var promise1 = promiseStart
                                        .then(function (value) {
                                            return $http
                                                .get(
                                                    '/partners')
                                                .then(
                                                    function (response) {
                                                        $scope.partners = response.data;
                                                        return response.data;
                                                    });
                                        });
                                }
                            }
                        }

                    })
                .state(
                    'results',
                    {
                        url: "/results",
                        views: {
                            "main": {
                                templateUrl: "/resources/partials/front/results.html",
                                controller: function ($scope,
                                                      $q, $http, cbdUtils) {
                                    $scope.results = [];
                                    var promiseStart = $q
                                        .when('start');
                                    var promise1 = promiseStart
                                        .then(function (value) {
                                            return $http
                                                .get(
                                                    '/results')
                                                .then(
                                                    function (response) {
                                                        $scope.results = response.data;
                                                        return response.data;
                                                    });
                                        });

                                    $scope.formatInfoResult = function (author, ts) {

                                        return author
                                            + ", le "
                                            + cbdUtils
                                                .formatTs2Date(ts);
                                    };
                                }
                            },
                            "partners": {
                                templateUrl: "/resources/partials/front/partners.html",
                                controller: function ($scope,
                                                      $q, $http) {
                                    $scope.partners = [];
                                    var promiseStart = $q
                                        .when('start');
                                    var promise1 = promiseStart
                                        .then(function (value) {
                                            return $http
                                                .get(
                                                    '/partners')
                                                .then(
                                                    function (response) {
                                                        $scope.partners = response.data;
                                                        return response.data;
                                                    });
                                        });
                                }
                            }
                        }

                    })
                .state(
                    'assos',
                    {
                        url: "/assos",
                        views: {
                            "main": {
                                templateUrl: "/resources/partials/front/assos.html",
                                controller: function ($scope,
                                                      $q, $http) {
                                    $scope.assos = [];
                                    var promiseStart = $q
                                        .when('start');
                                    var promise1 = promiseStart
                                        .then(function (value) {
                                            return $http
                                                .get(
                                                    '/assos')
                                                .then(
                                                    function (response) {
                                                        $scope.assos = response.data;
                                                        return response.data;
                                                    });
                                        });
                                }
                            },
                            "partners": {
                                templateUrl: "/resources/partials/front/partners.html",
                                controller: function ($scope,
                                                      $q, $http) {
                                    $scope.partners = [];
                                    var promiseStart = $q
                                        .when('start');
                                    var promise1 = promiseStart
                                        .then(function (value) {
                                            return $http
                                                .get(
                                                    '/partners')
                                                .then(
                                                    function (response) {
                                                        $scope.partners = response.data;
                                                        return response.data;
                                                    });
                                        });
                                }
                            }
                        }

                    })
                .state(
                    'cbdfiles',
                    {
                        url: "/cbdfiles",
                        views: {
                            "main": {
                                templateUrl: "/resources/partials/front/cbdfiles.html",
                                controller: function ($scope,
                                                      $q, $http, cbdUtils) {
                                    $scope.cbdfiles = [];
                                    var promiseStart = $q
                                        .when('start');
                                    var promise1 = promiseStart
                                        .then(function (value) {
                                            return $http
                                                .get(
                                                    '/cbdfiles')
                                                .then(
                                                    function (response) {
                                                        $scope.cbdfiles = response.data;
                                                        return response.data;
                                                    });
                                        });

                                }
                            },
                            "partners": {
                                templateUrl: "/resources/partials/front/partners.html",
                                controller: function ($scope,
                                                      $q, $http) {
                                    $scope.partners = [];
                                    var promiseStart = $q
                                        .when('start');
                                    var promise1 = promiseStart
                                        .then(function (value) {
                                            return $http
                                                .get(
                                                    '/partners')
                                                .then(
                                                    function (response) {
                                                        $scope.partners = response.data;
                                                        return response.data;
                                                    });
                                        });
                                }
                            }
                        }

                    })
                .state(
                    'contacts',
                    {
                        url: "/contacts",
                        views: {
                            "main": {
                                templateUrl: "/resources/partials/front/contacts.html",
                                controller: function ($scope,
                                                      $q, $http) {
                                    $scope.contacts = [];
                                    var promiseStart = $q
                                        .when('start');
                                    var promise1 = promiseStart
                                        .then(function (value) {
                                            return $http
                                                .get(
                                                    '/contacts')
                                                .then(
                                                    function (response) {
                                                        $scope.contacts = response.data;
                                                        return response.data;
                                                    });
                                        });
                                }
                            },
                            "partners": {
                                templateUrl: "/resources/partials/front/partners.html",
                                controller: function ($scope,
                                                      $q, $http) {
                                    $scope.partners = [];
                                    var promiseStart = $q
                                        .when('start');
                                    var promise1 = promiseStart
                                        .then(function (value) {
                                            return $http
                                                .get(
                                                    '/partners')
                                                .then(
                                                    function (response) {
                                                        $scope.partners = response.data;
                                                        return response.data;
                                                    });
                                        });
                                }
                            }
                        }

                    });
        })
    .filter(
        'typeLicenceFilter',
        function () {

            return function (value) {
                var val = value.toUpperCase();
                if (val === 'Licence comp\u00e9tition adulte'
                        .toUpperCase()) {
                    return 'COMPETITION';
                } else if (val === 'Licence comp\u00e9tition jeune'
                        .toUpperCase()) {
                    return 'COMPETITION JEUNE';
                } else if (val === 'Licence loisir jeune'.toUpperCase()) {
                    return 'LOISIR JEUNE';
                } else if (val === 'Licence loisir adulte'
                        .toUpperCase()) {
                    return 'LOISIR';
                } else if (val === 'Licence promotion adulte'
                        .toUpperCase()) {
                    return 'PROMO';
                } else if (val === 'Licence promotion jeune'
                        .toUpperCase()) {
                    return 'PROMO JEUNE';
                }
                return value;
            };

        }).directive('stars', function () {

    return function (scope, element, attr) {

        var nb;
        var max = 6;

        function draw() {
            var html = '';
            for (var i = 0; i < nb; i++) {
                html += '<img src="/resources/images/star-full.png"/>';
            }
            for (; max && i < max; i++) {
                html += '<img src="/resources/images/empty-star.png"/>';
            }
            element.html(html);
        }

        scope.$watch(attr.stars, function (value) {
            console.log(value);
            nb = value;
            draw();
        });

    };

});
