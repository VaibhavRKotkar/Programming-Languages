function Chkstring():void
{
    var str:String = "Pune Kothrud Marvellous Infosystems";
 
    var re = /Marvellous/gi;
 
     // use of String search() Method
    if (str.search(re) == -1 )
        {
            console.log("String NOT contain Marvellous in it" );
        }
    else
        {
            console.log("String contain Marvellous in it" );
        }
}

function Main():void
{
    Chkstring();
}

 Main();