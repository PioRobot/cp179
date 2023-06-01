var cords={}
$(document).ready(function(){
    gdfu()
})
function gdfu(){
    var urlParameterGet=new URLSearchParams(window.location.search)
    if (urlParameterGet.has("source") && urlParameterGet.has("destination")) {
        var org=urlParameterGet.get('source')
        var des=urlParameterGet.get('destination')
        cords.source_lat=org.split(";")[0]
        cords.source_long=org.split(";")[1]
        cords.destination_lat=des.split(";")[0]
        cords.destination_long=des.split(";")[1]
        console.log(cords.source_lat)
    } else {
        alert("Select Coordinates,Bish")
        window.history.back()
    }
}