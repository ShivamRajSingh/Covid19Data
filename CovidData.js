init()
async function init()
{
    var url="https://api.covid19api.com/summary";
    const response =  await fetch(url);
    console.log(response);
    var data1 = await response.json();
    console.log(data1);
    document.getElementById("data").innerHTML=`    
    <td>${data1.Global.NewConfirmed}</td>
    <td>${data1.Global.TotalConfirmed}</td>
    <td>${data1.Global.TotalDeaths} </td>
    <td>${data1.Global.NewDeaths} </td>
    `;
}
async function getCountryData(){
    var url="https://api.covid19api.com/summary";
    const response =  await fetch(url);
    console.log(response);
    var data1 = await response.json();
    var country = document.getElementById("country").value;
    for(var obj in data1.Countries)
    {
        //console.log(data1.Countries[obj].Country)
        if(data1.Countries[obj].Country.toLowerCase() === country.toLowerCase())
        {
            document.getElementById("data").innerHTML=`    
            <td>${data1.Countries[obj].NewConfirmed}</td>
            <td>${data1.Countries[obj].TotalConfirmed}</td>
            <td>${data1.Countries[obj].TotalDeaths} </td>
            <td>${data1.Countries[obj].NewDeaths} </td>
            `;   
            break;
        }
    }
}
function refreshData()
{
    init();    
}
