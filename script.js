let labels1 = ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00',
'09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']; 
let data1 = [0, 0, 0, 0, 0, 0, 0, 0, 1000, 200, 250, 300, 500, 1350, 10, 16, 17, 18, 19, 20, 21, 22, 23];
let colors1 = ['#49A9EA'];

let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart (myChart1, {
    type: 'bar',
    
    data: {
        labels: labels1,
        dataset: [{
            data: data1;
            backgroundColor: colors1
        }]
    },
    
    options:{
        title:{
            text: "Steps",
            display:true
        }
    }

});
