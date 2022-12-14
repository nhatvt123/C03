(function (){
    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function () {
            var offerRate = this.roomRate * ((100-this.discount)/100);
            return offerRate;
        }
    };
    var hotelName, roomRate, specialRate;
    hotelName = document.getElementById('hotName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
    hotelName.textContent = hotel.name;
    roomRate.textContent = '$'+ hotel.name;
    roomRate.textContenta= '$' + hotel.offerPrice();
    var expiryMsg;
    var today;
    var elEnds;
    function offerExpires(today) {
        var weekFromToday, day, date, month, year, dayNames, monNames;
        dayNames = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        expiryMsg = 'offer expires next';
        expiryMsg += day + '<br/> (' + date + '' + month + '' + year+')';
        return expiryMsg;

    }
    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);

}());