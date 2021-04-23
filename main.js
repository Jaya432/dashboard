function onclear() {
    if(String(document.getElementById('fullname').value) == ''){
        document.getElementById('demo').innerHTML = ''
        document.getElementById('activity').innerHTML = '' 
    }
}
function welcome() {
    let names = String(document.getElementById('fullname').value)
        switch (names) {
            case "Raja":
                alert('Welcome Raja')
                break;
            case "Ravi":
                alert('Welcome Ravi')                
                break;
            case "Gita":
                alert('Welcome Gita')
                break;
            default:
                document.getElementById('demo').innerHTML = 'Wrong username'
                break;
        }
    var d = new Date();
    var d1 = d.getDay()
        switch (d1) {
            case 0:
                document.getElementById("activity").innerHTML=" Day:Sunday"
                document.getElementById('demo').innerHTML ="Raju: present<br>Ravi: present<br>Gita: present"
                break;
            case 1:
                document.getElementById("activity").innerHTML= "Day:Monday"
                document.getElementById('demo').innerHTML ="Raju: absent<br>Ravi: present<br>Gita: present"
                break;
            case 2:
                document.getElementById("activity").innerHTML="Day:Tuesday"
                document.getElementById('demo').innerHTML ="Raju: absent<br>Ravi: present<br>Gita: present"
                break;
            case 3:
                document.getElementById("activity").innerHTML="Day:Wednessday"
                document.getElementById('demo').innerHTML ="Raju: absent<br>Ravi: present<br>Gita: present"
                break;
            case 4:
                document.getElementById("activity").innerHTML="Day:Thursday"
                document.getElementById('demo').innerHTML ="Raju: absent<br>Ravi: present<br>Gita: present"
                break;
            case 5:
                document.getElementById("activity").innerHTML="Day:Friday"
                document.getElementById('demo').innerHTML ="Raju: absent<br>Ravi: present<br>Gita: absent"
                break;
            case 6:
                document.getElementById("activity").innerHTML= "Day:Saturday"
                document.getElementById('demo').innerHTML ="Raju: present<br>Ravi: present<br>Gita: present"
                break;    
            default:
                document.getElementById("activity").innerHTML = "Day:"
                document.getElementById('demo').innerHTML ="Raju: <br> Ravi: <br> Gita: "
                break;
        }
}