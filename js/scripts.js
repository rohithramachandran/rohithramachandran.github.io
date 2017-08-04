$(function() {
    "use strict";
    $(window).load(function() {
        $("body").addClass("loaded")
    });
    var typed = new Typed('#aboutMe', {
		  strings: ["I'm a Web Designer","I'm a Web Designer", "I'm a Backend Expert.","I'm Mobile App Developer", "Yes... I am a fullstack engineer" ],
		  typeSpeed: 100,
		  startDelay: 100,
		  loop: true,
	  		loopCount: Infinity
	});
    $('body').scrollspy({
        target: '.sidebar-menu'
    });
    var htmlBody = $("html,body");
    $(".sidebar-menu ul li a, .scroll-down a").on("click", function(e) {
        htmlBody.animate({
            scrollTop: $(this.hash).offset().top
        }, 800, "easeInOutQuart");
        e.preventDefault()
    });
    var menu = $(".sticky-sidebar-menu");
    var toggleBtn = $(".toggle-btn");
    toggleBtn.on("click", function(e) {
        if (menu.hasClass("show-menu")) {
            menu.removeClass("show-menu")
        } else {
            menu.addClass("show-menu")
        }
        e.stopPropagation()
    });
    toggleBtn.on("click", function() {
        if (toggleBtn.hasClass("toggle-close")) {
            toggleBtn.removeClass("toggle-close")
        } else {
            toggleBtn.addClass("toggle-close")
        }
    });
    $(document).on("click", function() {
        if (menu.hasClass("show-menu")) {
            menu.removeClass("show-menu")
        }
        if (toggleBtn.hasClass("toggle-close")) {
            toggleBtn.removeClass("toggle-close")
        }
    });
    
    var skills=[
        {"image":"images/node.png","name":"NodeJS","category":2,"desc":"Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js\' package ecosystem, npm, is the largest ecosystem of open source libraries in the world."},
        {"image":"images/bootstrap.png","name":"Bootstrap","category":1,"desc":"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web."},
        {"image":"images/react-native.jpg","name":"React Native","category":3,"desc":"React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components."},
        {"image":"images/mysql.svg","name":"MySql","category":4,"desc":"MySQL is an open-source relational database management system (RDBMS)"},
        {"image":"images/mongo.svg","name":"MongoDB","category":4,"desc":"MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas"},
        {"image":"images/express.png","name":"Express","category":2,"desc":"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."},
        {"image":"images/spring.png","name":"Spring","category":2,"desc":"The Spring Framework is an application framework and inversion of control container for the Java platform."},
        {"image":"images/android.jpg","name":"Android","category":3,"desc":""},
        {"image":"images/ionic.png","name":"Ionic","category":3,"desc":"Ionic is the beautiful, free and open source mobile SDK for developing native and progressive web apps with ease."},
        {"image":"images/react.png","name":"React","category":1,"desc":"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."},
        {"image":"images/angular.png","name":"Angular","category":1,"desc":"AngularJS is a JavaScript framework. It can be added to an HTML page with a script tag.AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions."},
        {"image":"images/eclipse.png","name":"Eclipse","category":5,"desc":"Eclipse is an integrated development environment (IDE) used in computer programming, and is the most widely used Java IDE."},
        {"image":"images/git.png","name":"Git","category":5,"desc":"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."},
        {"image":"images/foundation.jpg","name":"Foundation","category":1,"desc":"The most advanced responsive front-end framework in the world."},
        {"image":"images/JQuery.png","name":"jQuery","category":1,"desc":"jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers."},
        {"image":"images/redis.png","name":"Redis","category":4,"desc":"Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker."},
        {"image":"images/jenkins.png","name":"Jenkins","category":5,"desc":"Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Mac OS X and other Unix-like operating systems."},
        {"image":"images/maven.png","name":"Maven","category":5,"desc":"Apache Maven is a software project management and comprehension tool."},
        {"image":"images/webpack.png","name":"Webpack","category":5,"desc":"webpack is a module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles - often only one - to be loaded by the browser."},
        {"image":"images/wildfly.png","name":"WildFly/JBoss","category":6,"desc":"WildFly, formerly known as JBoss AS, or simply JBoss, is an application server authored by JBoss, now developed by Red Hat. WildFly is written in Java, and implements the Java Platform, Enterprise Edition specification."},
        {"image":"images/tomcat.jpg","name":"Apache Tomcat","category":6,"desc":"The Apache Tomcat® software is an open source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and Java WebSocket technologies."},
        {"image":"images/sqlite.png","name":"SQLite","category":4,"desc":"SQLite is a self-contained, high-reliability, embedded, full-featured, public-domain, SQL database engine. SQLite is the most used database engine in the world."},
        {"image":"images/handlebars.png","name":"HandleBars","category":1,"desc":"Handlebars provides the power necessary to let you build semantic templates effectively with no frustration."},
        {"image":"images/sass.png","name":"SASS","category":1,"desc":"Syntactically Awesome Style Sheets(SASS) is the most mature, stable, and powerful professional grade CSS extension language in the world."},
        {"image":"images/gradle.png","name":"Gradle","category":5,"desc":"Gradle is an open source build automation system that builds upon the concepts of Apache Ant and Apache Maven and introduces a Groovy-based domain-specific language (DSL) instead of the XML form used by Apache Maven for declaring the project configuration"},
        {"image":"images/v8.png","name":"Chrome V8","category":6,"desc":"V8 is Google's open source high-performance JavaScript engine, written in C++ and used in Chromium, Node.js and multiple other embedding applications.V8 implements ECMAScript as specified in ECMA-262. and runs on Windows XP or later, Mac OS X 10.5+, and Linux systems that use IA-32, ARM or MIPS processors."}
    ];
    //1-frontend,2-backend,3-MobileApp,4-Databases,5-tools,6-servers
    $('#mix_data_container').empty();
    
    for(var x=0;x<skills.length;x++){
        $("#mix_data_container").append(skillItem(skills[x].image,skills[x].name,skills[x].category,skills[x].desc,x));
    }
    $('#mix-container').mixItUp();

    $('.lightbox').magnificPopup({
        type: 'inline',
        fixedContentPos: !1,
        removalDelay: 100,
        closeBtnInside: !0,
        preloader: !1,
        mainClass: 'mfp-fade'
    });
    $(".facts-background").appear(function() {
        $('.counter').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now))
                }
            })
        })
    }, {
        accX: 0,
        accY: -10
    });
    // $("#testimonialSlider").owlCarousel({
    //     items: 1,
    //     rewind: !0,
    //     margin: 30,
    //     dots: !0,
    //     dotsSpeed: 300,
    //     autoplay: !0,
    //     autoplayHoverPause: !0,
    //     autoplayTimeout: 4000,
    //     autoplaySpeed: 300
    // });

    var paperfold = $('.paper-content').paperfold();

	$('.paperfold-toggle').click(paperfold.toggle);

    
});
function skillItem(image,itemName,category,itemDescription,id){
    //1-frontend,2-backend,3-MobileApp,4-Databases,5-tools
    var html=' <div class="col-xs-12 col-sm-3 mix category-'+category+'">'
                            +'<div class="portfolio-box">'
                                +'<img src="'+image+'" alt="">'
                                +'<div class="portfolio-box-hover">'
                                    +'<a class="lightbox" href="#popup-'+id+'">'
                                        +'<i class="fa fa-expand"></i>'
                                    +'</a>'
                                    +'<div>'
                                        +'<h4>'+itemName+'</h4>';
                                        if(category==1)
                                            html+='<span>FrontEnd</span>';
                                        else if(category==2)
                                            html+='<span>BackEnd</span>';
                                        else if(category==3)
                                            html+='<span>MobileApp</span>';
                                        else if(category==4)
                                            html+='<span>Databases</span>';
                                        else if(category==5)
                                            html+='<span>Tools</span>';
                                        else if(category==6)
                                            html+='<span>Servers</span>';
                                html+='</div>'
                                +'</div>'
                                +'<div id="popup-'+id+'" class="mfp-hide popup-box">'
                                    +'<img src="'+image+'" alt="">'
                                    +'<div>'
                                        +'<h4>'+itemName+'</h4>'
                                        +'<p>'+itemDescription+'</p>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                        +'</div>';
                        
    return html;
}