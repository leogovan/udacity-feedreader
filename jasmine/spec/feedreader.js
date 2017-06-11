/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 $(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe("RSS Feeds", function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         it("are defined", function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it("url is defined and is not empty",function() {
            // use foreach to loop through an array
            allFeeds.forEach(function(item, index){
                // grab the value of the url property for each item
                var url = item.url;
                // test that it is defined/exists
                expect(url).toBeDefined();
                // test that it has a string length that is not empty
                expect(url.length).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         // this one is basically the same as the one above but for the name property

         it("name is defined and is not empty", function() {
            allFeeds.forEach(function(item, index){
                var name = item.name;
                expect(name).toBeDefined();
                expect(name.length).not.toBe(0);
            });
        });
     });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function() {
        var menuHidden
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it("menu element is hidden by default", function(){
            // capture the existence of .menu-hidden as a true/false values
            menuHidden = document.body.classList.contains("menu-hidden");
            // test for it being available by default
            expect(menuHidden).toBe(true);

        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it("menu changes visibility when menu icon is clicked", function(){
            // initialise test by clicking the menu icon
            $('.menu-icon-link').click();
            menuHidden = document.body.classList.contains("menu-hidden");
            // test for .body not to have the class .menu-hidden
            expect(menuHidden).toBe(false);

            // click the menu icon again
            $('.menu-icon-link').click();
            menuHidden = document.body.classList.contains("menu-hidden");
            // test for .body element to have the class .menu-hidden once clicked again
            expect(menuHidden).toBe(true);          
        });
      });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {
        // run loadFeed before test is performed
        beforeEach(function(done){
            loadFeed(0, done);
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it("when loadFeed is complete, there is at least 1 .entry element within .feed", function(done){
            // collect the entries of the given feed
            var feed = $(".feed .entry").length;
            // var check = $(".feed .entry"); // quick validation of what's being collected
            // console.log(check); // check what exactly .feed .entry is!
            // console.log(feed); // check the value
            // test that .entry has a value greater than 0
            expect(feed).toBeGreaterThan(0);
            done();
        });
     });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {

        // variables to capture start and end state of feed for testing
        var start,
            end;

        beforeEach(function(done){
            loadFeed(0, function(){
                // collect the .text() content of .feed before test is run
                start = $(".feed").text();
                done();
            });
        });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it("when new feed is loaded, the content actually changes", function(done){
            loadFeed(1, function(){
                // collect the .text() content of .feed again and store it
                end = $(".feed").text();
                // test for equality between start and end (expect it not to be!)
                expect(start).not.toBe(end);
                done();
            });
        });
     });

}());
