var app = angular.module('app', ['ngSanitize']);

app.filter('typeConvert', function () {
    return function (t) {
        switch (t) {
            case "non":
                return "Non GPA";
            case "opt":
                return "Optional";
            case "aux":
                return "Auxilary";
            case "dom":
                return "Domain";
            default:
                return "Compulsory";
        }
    }
});

app.filter('semConvert', function () {
    return function (t) {
        switch (t) {
            case '1':
                return "1<sup>st</sup> Semseter";
            case '2':
                return "2<sup>nd</sup> Semester";
            case '3':
                return "Both";
            case '4':
                return "Any Semseter<br><small>(1<sup>st</sup> or 2<sup>nd</sup> semseter)</small>";
        }
    }
});

app.filter('domainConvert', function () {
    return function (t) {
        switch (t) {
            case "netc":
                return "Net Centric Applications";
            case "mobi":
                return "Mobile Computing";
            case "dsen":
                return "Data Science and Engineering";
            case "hein":
                return "Health Informatics";
            case "game":
                return "Digital Gaming and Animation";
            case "beng":
                return "Business Engineering";
            default:
                return "<i class='fa fa-minus'></i>";
        }
    }
});

app.filter('uniqueID', function () {
    return function (collection, keyname) {
        var output = [],
            keys = [];
        angular.forEach(collection, function (item) {
            var key = item[keyname];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
});

app.controller('filterCtrl', function ($scope, $filter) {

    $scope.noresult = false;
    $scope.year = 1;
    $scope.sem = 1;
    $scope.kword = "";

    $scope.yearList = [{
        "val": 0,
        "name": "All"
    }, {
        "val": 1,
        "name": "Level 1"
    }, {
        "val": 2,
        "name": "Level 2"
    }, {
        "val": 3,
        "name": "Level 3"
    }, {
        "val": 4,
        "name": "Level 4"
    }]

    $scope.semList = [{
        "val": 0,
        "name": "All"
    }, {
        "val": 1,
        "name": "Semester 1"
    }, {
        "val": 2,
        "name": "Semester 2"
    }]

    $scope.cc = [{
        "year": "1",
        "sems": [
            {
            "sem": "1",
            "subs": [{
                "id": "SENG 11213",
                "name": "Fundamentals of Computing",
                "tags": "",
                "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum diam tortor, vitae laoreet erat laoreet ac. Cras varius lacus eget pellentesque egestas. Vestibulum at dui eu ligula porta efficitur. Nullam eget vulputate enim. Aliquam convallis ex consectetur nunc ultrices gravida. Nam ut sapien porta, malesuada massa eu, egestas augue. Quisque sit amet accumsan ante. Morbi gravida placerat pharetra. Aliquam erat volutpat. Ut hendrerit sem quis sapien vestibulum dictum. Curabitur dignissim finibus metus, a eleifend tortor lobortis ut. Morbi efficitur placerat nisi at tincidunt. Vestibulum diam metus, scelerisque vel dolor ut, placerat posuere purus. Quisque ac orci vel tortor consequat imperdiet."
            }, {
                "id": "SENG 11223",
                "name": "Programming Concepts",
                "tags": "c, c++",
                "desc": ""
            }, {
                "id": "SENG 11232",
                "name": "Engineering Foundation",
                "tags": "analog, digital, waves",
                "desc": ""
            }, {
                "id": "SENG 11243",
                "name": "Statistics",
                "tags": "Probability, Sets"
            }, {
                "id": "PMAT 11212",
                "name": "Discrete Mathematics for Computing I",
                "tags": "",
                "desc": ""
            }, {
                "id": "ELTU 11212",
                "name": "English for Professionals",
                "tags": "",
                "desc": ""
            }, {
                "id": "GNCT 13212",
                "name": "Personal Progress and Development I",
                "tags": "",
                "type": "non"
            }]
        }, {
            "sem": "2",
            "subs": [{
                "id": "SENG 12213",
                "name": "Data Structures and Algorithms",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 12223",
                "name": "Database Design and Development",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 12233",
                "name": "Object Oriented Programming",
                "tags": "java, oop",
                "desc": ""
            }, {
                "id": "SENG 12242",
                "name": "Management for Software Engineering I",
                "tags": "",
                "desc": ""
            }, {
                "id": "PMAT 12212",
                "name": "Discrete Mathematics for Computing II",
                "tags": "",
                "desc": ""
            }, {
                "id": "ELTU 12212",
                "name": "Communication Skills for Professionals",
                "tags": "",
                "desc": ""
            }, {
                "id": "GNCT 13212",
                "name": "Personal Progress and Development I",
                "tags": "",
                "type": "non",
                "desc": ""
            }]
        }]
    }, {
        "year": "2",
        "sems": [
            {
            "sem": "1",
            "subs": [{
                "id": "SENG 21213",
                "name": "Computer Architecture & Operating Systems",
                "tags": "mips, assembly, kernal, process, synchronize",
                "desc": ""
            }, {
                "id": "SENG 21222",
                "name": "Software Construction",
                "tags": "java, oop, design patterns, singleton, factory",
                "desc": ""
            }, {
                "id": "SENG 21233",
                "name": "Requirements Engineering",
                "tags": "usecases, gathering, elicitation",
                "desc": ""
            }, {
                "id": "SENG 21243",
                "name": "Software Modelling",
                "tags": "uml, usecase, diagram, z notation",
                "desc": ""
            }, {
                "id": "SENG 21253",
                "name": "Web Application Development",
                "tags": "web, html, css, javascript, js, jquery, php, ajax, wamp, xamp, wordpress",
                "desc": ""
            }, {
                "id": "SENG 21263",
                "name": "Interactive Application Development",
                "tags": "ux/ui, uxui, interface, design",
                "type": "opt",
                "desc": ""
            }, {
                "id": "SENG 21272",
                "name": "Management for Software Engineering II",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 24213",
                "name": "Computer Networks",
                "type": "both",
                "tags": "",
                "desc": ""
            }, {
                "id": "GNCT 23212",
                "name": "Personal Progress and Development II",
                "tags": "ethics, cv, interviews, curriculum vitae, job, table manners",
                "type": "non",
                "desc": ""
            }]
        }, {
            "sem": "2",
            "subs": [{
                "id": "SENG 22212",
                "name": "Software Architecture and Design",
                "tags": "java, design patterns, oop, ooad, client-server, pipeline",
                "desc": ""
            }, {
                "id": "SENG 22223",
                "name": "Human Computer Interaction",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 22233",
                "name": "Software Verification and Validation",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 22243",
                "name": "Mobile Application Development",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 22253",
                "name": "Embedded Systems Development",
                "tags": "",
                "type": "opt",
                "desc": ""
            }, {
                "id": "PMAT 22213",
                "name": "Mathematical Methods",
                "tags": "differential",
                "type": "opt",
                "desc": ""
            }, {
                "id": "SENG 24213",
                "name": "Computer Networks",
                "type": "both",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 22652",
                "name": "System Design Project",
                "tags": "",
                "desc": ""
            }]
        }]
    }, {
        "year": "3",
        "sems": [
            {
            "sem": "1",
            "subs": [{
                "id": "SENG 31212",
                "name": "Software Quality",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 31222",
                "name": "Information Security",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 31232",
                "name": "Software Project Management",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 31252",
                "name": "Professional Practices",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 31262",
                "name": "Research Methods",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 31272",
                "name": "Internet of Things",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 31282",
                "name": "Computer Network Management",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 31292",
                "name": "Enterprise Information Systems",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 34213",
                "name": "Systems Development Project",
                "type": "both",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 34222",
                "name": "Software Process",
                "type": "both",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 31313",
                "name": "Advanced Web Applications Development",
                "type": "dom",
                "dom": "netc",
                "tags": "",
                "desc": ""
            }]
        }, {
            "sem": "2",
            "subs": [
                {
                "id": "SENG 32216",
                "name": "Internship",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 34213",
                "name": "Systems Development Project",
                "type": "both",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 34222",
                "name": "Software Process",
                "type": "both",
                "tags": "",
                "desc": ""
            }]
        }]
    }, {
        "year": "4",
        "sems": [{
            "sem": "1",
            "subs": [{
                "id": "SENG 41212",
                "name": "Software Evolution",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 41222",
                "name": "Software Metrics and Measurements",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 41233",
                "name": "Digital Image Processing",
                "type": "opt",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 41242",
                "name": "Advanced Databases",
                "type": "opt",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 41252",
                "name": "Advanced Computer Networks",
                "type": "opt",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 41262",
                "name": "Speech Interfaces",
                "type": "opt",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 41272",
                "name": "Formal Methods",
                "type": "opt",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 43216",
                "name": "Software Engineering Research Project",
                "type": "",
                "tags": "",
                "desc": ""
            }]
        }, {
            "sem": "2",
            "subs": [{
                "id": "SENG 42212",
                "name": "Software Safety and Reliability",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 42222",
                "name": "Usability Engineering",
                "type": "opt",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 42232",
                "name": "Software Management",
                "type": "opt",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 42242",
                "name": "Machine Learning",
                "type": "opt",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 42252",
                "name": "Computer Graphics",
                "type": "opt",
                "tags": "",
                "desc": ""
            }, {
                "id": "SENG 43216",
                "name": "Software Engineering Research Project",
                "type": "",
                "tags": "",
                "desc": ""
            }]
        }]
    }];

    $scope.showModule = function (sub) {
        $scope.mHeader = sub.name;
        $scope.mModule = sub;
        $scope.mDesc = sub.desc;
    }

    $scope.creditCalc = function (fL) {
        $scope.totalCredits = $scope.gpaCredits = $scope.optionalCredits = $scope.domainCredits = $scope.exchagableCredits = 0;
        angular.forEach(fL, function (x) {
            var creditValue = parseInt(x.id.substr(-1));
            $scope.totalCredits += creditValue;
            if (x.type != "non")
                $scope.gpaCredits += creditValue;
            if (x.type == "opt")
                $scope.optionalCredits += creditValue;
            if(x.type == "dom")
                $scope.domainCredits += creditValue;
            if (x.type == "both")
                $scope.exchagableCredits += creditValue;
        });
    }

    $scope.filterNow = function () {
        $scope.filterdcc = [];
        var search = $scope.kword.toLowerCase();

        angular.forEach($scope.cc, function (y) {
            if ($scope.year == y.year || ($scope.year == 0)) {
                angular.forEach(y.sems, function (s) {
                    if ($scope.sem == s.sem || $scope.sem == 0) {
                        angular.forEach(s.subs, function (sub) {
                            if ( sub.name.toLowerCase().includes(search) || sub.tags.toLowerCase().includes(search)) {
                                $scope.filterdcc.push(sub);
                            }
                        });
                    }
                });
            }
        });
        $scope.noresult = ($scope.filterdcc.length == 0);
        $scope.filterdcc = $filter('uniqueID')($scope.filterdcc, 'id');
        $scope.creditCalc($scope.filterdcc);
    }
});