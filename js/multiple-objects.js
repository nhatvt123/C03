
function  Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    hotel.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel('quay', 40, 25);
var parkHotel = new Hotel('park', 120, 77);

var details1 = quayHotel.name + 'rooms:';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
    elHotel1.textContent = details1;

var details2 = packHotel.name + 'rooms:';
    details2 += packHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
    elHotel2.textContent = details2;
