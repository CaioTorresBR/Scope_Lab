// -- Defining object and variables for XMLHttpRequest --

var xhr = new XMLHttpRequest();
var url = 'health_article.json'; // defines url of the json file


// -- Request set up --

// prepares a GET request to the specified URL
xhr.open('GET', url, true)


// -- Response type specification --

// informs the XMLHttpRequest object that the expected response
// from the server should be in JSON format
xhr.responseType = 'json';


// -- Handling the onload event --

// defines what should happen when data is successfully loaded
xhr.onload = function() {

    if (xhr.status === 200) { // Check if the request was successful
        console.log(xhr.response); // Log the response to inspect it
        // retrieves the articles array from the JSON response
        var articles = xhr.response ? xhr.response.articles : null;

    // Ensure articles is an array
        if (Array.isArray(articles)) {
            // retrieves HTML element id 'articles', where the fetched content
            // will be displayed
            var articlesDiv = document.getElementById('articles');

            // retrieves the articles array from the json response
            var articles = xhr.response.articles;


            // -- Iterating through articles and constructing HTML --

            articles.forEach(function(article) {

            // creates html elements dinamically for each article's title,
            // description, ways to achieve and benefits 
            //(using createElement DOM method)
            var articleDiv = document.createElement('div');
            // populates html elements with corresponding content from
            // the fetched json data
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';

            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function(way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';

            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function(benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            // attach elements to articleDiv to display each article's
            // details on the webpage
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articleDiv.appendChild(articleDiv);
            });
        } else {
            console.error('Fetched data is not an array');
        }
    } else {
        console.error('Error fetching data:', xhr.statusText)
    }
};


// -- Sending the request --
// sends XMLHttpRequest to fetch data from specified URL
xhr.send();


