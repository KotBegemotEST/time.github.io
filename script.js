(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let ampm = h >= 12 ? 'PL' : 'EL';
            h = h%12
            h = h ? h : 12;
            m = m < 10 ? '0'+m : m;

            if (h < 10) {
                h = "0" + h;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            c.innerHTML = h + ':' + m + ' ' + ampm;
            
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        let price = 0;
        let linn = document.getElementById("linn");
        let priceTag = document.querySelectorAll('input[name="price"]')


        const numInputs = document.querySelectorAll('input[type=text]')


        for( let i = 0; i< numInputs.length; i++){
            var valid = !/\s/.test( numInputs[i].value )
            if (!valid) {
                alert("Ees- ja perekonnanimi ei tohi sisaldada tühjad")
                return
            }
           

            if (numInputs[i].value.match(/\d/g) ) {
                alert("Ees- ja perekonnanimi ei tohi sisaldada numbreid")
                numInputs[i].focus
                return
             }

        }


        
        for(let i = 0; i< numInputs.length; i++){
            if (numInputs[i].value.match(/\d/g) ) {
                alert("Ees- ja perekonnanimi ei tohi sisaldada numbreid")
                numInputs[i].focus
                return
             }

        }



        for (const i of priceTag) {
            if (i.checked) {
                price += parseInt(i.value)
            }
          }

        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;
            
            
        }
        else if ( linn.value === "tln" ){
            price += 0
        } 
        else if (linn.value === "trt"){
            price += 2.5
        } 
        else if (linn.value === "nrv"){
            price += 2.5
        } 
        
        else{
            price +=3
        } 

            
            e.innerHTML = price+ " &euro;";
            
           
        
        console.log("Tarne hind on arvutatud");
    }
    
})();

// map

let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

let map;

function GetMap() {
    
    "use strict";




    let centerPoint = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );

    let somaliPoint = new Microsoft.Maps.Location(
        6.774611511424338, 
        47.42559775125921
    );


    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 14,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
    let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Tartu Ülikool',
            //subTitle: 'Hea koht',
            //text: 'UT'
        });

    let pushpin2 = new Microsoft.Maps.Pushpin(somaliPoint, {
        title: 'Cawale Stadium',
    });



    map.entities.push(pushpin);
    map.entities.push(pushpin2);

}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

