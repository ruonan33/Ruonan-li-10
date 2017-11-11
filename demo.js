//´ÓÀÏÊ¦Ö¸¶¨µÄÍøÕ¾apiÈ¡Êý¾Ý
console.log("start");
axios.get('https://feeds.citibikenyc.com/stations/stations.json')
.then(function(response){
	t = eval(response).data;
    // console.log(t);
    // console.log(t.stationBeanList);
        $(t.stationBeanList).each(function (index, value) {
        	// console.log("index : " + index + ", stations : " + value.stationName);
        if(value.availableBikes>10){
            $(".list-group-gray").append("<li class=\"list-group-item gray-css\">"+value.stationName+"</li>");
        }else if(value.availableBikes < 2){
            $(".list-group-blue").append("<li class=\"list-group-item blue-css\">"+value.stationName+"</li>");
        }else{
            $(".list-group-green").append("<li class=\"list-group-item green-css\">"+value.stationName+"</li>");
        }
    });
})

.catch(function(error){
    console.log(error);
});
