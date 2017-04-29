var apiKey = '20ca0f5f9cc14d3d8b30f0274fbc7e91';

// Search Parameters
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

$('#search-btn').on('click', function(){
	queryTerm = $('#search').val();
	numResults = $('#num-records').val();
	startYear = $('#start-year').val();
	endYear = $*('#end-year').val();
});

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "20ca0f5f9cc14d3d8b30f0274fbc7e91",
  'q': 'queryTerm'.
  'begin_date': 'startYear',
  'end_date': 'endYear',
});

/*
var headline = response.docs[8].main

var pubDate = response.docs[10]

var url = response.docs[0]

var section = response.docs[13]

var authorPerson = response.docs[15].person

var autheorOriginal =  response.docs[15].original

var authorOrginization =  response.docs[15].orginization*/