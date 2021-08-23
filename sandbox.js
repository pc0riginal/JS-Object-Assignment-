
const user = {
    0:{
        Model : 'SAMSUNG GALAXY Z FOLD 2',
        Available : 1,
        LaunchDate : '20/9/21',
        performance : [
            {Chipset:'Qualcomm Snapdragon 865 Plus'},
            {cpu:'Octa core (3.09 GHz, Single core, Kryo 585 + 2.42 GHz, Tri core, Kryo 585 + 1.8 GHz, Quad core, Kryo 585)'},
            {Resolution:['12 MP f/1.8 Primary Camera','12 MP f/2.4 Telephoto (upto 2x Optical Zoom) Camera','12 MP f/2.2, Wide Angle, Ultra-Wide Angle Camera']},
            {CameraFeatures:['Digital Zoom','Auto Flash','Face detection','Touch to focus']}
        ]
    },
    1:{
        Model : 'APPLE IPHONE 12 PRO MAX',
        Available : 0,
        LaunchDate : '20/8/21',
        performance : [
            {Chipset:'Apple A14 Bionic'},
            {cpu:'Hexa Core (3.1 GHz, Dual core, Firestorm + 1.8 GHz, Quad core, Icestorm)'},
            {Resolution:['12 MP f/1.6, Wide Angle Primary Camera','12 MP f/2.2 Telephoto (upto 12x Digital Zoom, upto 2.5x Optical Zoom) Camera','12 MP f/2.4, Wide Angle, Ultra-Wide Angle Camera']},
            {CameraFeatures:['Digital Zoom','Auto Flash','Face detection','Touch to focus']}
        ]
    },
    2:{
        Model : 'REALME X7 MAX',
        Available : 1,
        LaunchDate : '20/8/21',
        performance : [
            {Chipset:'MediaTek Dimensity 1200 MT6893'},
            {cpu:'Octa core (3 GHz, Single core, Cortex A78 + 2.6 GHz, Tri core, Cortex A78 + 2 GHz, Quad core, Cortex A55)'},
            {Resolution:['64 MP f/1.8 (upto 10x Digital Zoom), Wide Angle (78° field-of-view) Primary Camera','8 MP f/2.3, Wide Angle, Ultra-Wide Angle Camera','2 MP f/2.4, Macro Camera']},
            {CameraFeatures:['10 x Digital Zoom','Auto Flash','Face detection','Touch to focus']}
        ]
    },
}
console.log(user)
let arr = [2,4,5,6,8]
arr.forEach((data)=>{
    console.log(data)
})

let mobiles = document.querySelector('.mobiles')
let div 
console.log(user)
console.log(user[0])

for(let i in user){
    // console.log(user[i])
    div = `<div class='mobile'>`
    div += `<h1 id='model${i}'>${user[i].Model}</h1>`
    div += `<hr>`
    div += `<h5 class='date'>LaunchDate : ${user[i].LaunchDate }</h5>`
    div += `<div class='performance'>`
    div += `<p>Chipset : <span class="Chipset">${user[i].performance[0]['Chipset']}</span> </p>`
    div += `<p>Cpu : <span class="cpu">${user[i].performance[1]['cpu']}</span> </p>`
    div += `<p>Resolution :</p>`
    div += `<ul class='Resolution'>`
    
    user[i].performance[2]['Resolution'].forEach((r)=>{
        div += `<li>${r}</li>`
    })
    div += `</ul>`
    div += `<p>CameraFeatures :</p>`
    div += `<ul class='CameraFeatures' >`
    user[i].performance[3]['CameraFeatures'].forEach((c)=>{
        div += `<li>${c}</li>`
    })
    div += `</ul>`
    div += `</div>`
    div += `</div>`
    mobiles.innerHTML += div 
    const model = document.querySelector(`#model${i}`)
    if (user[i].Available == 1){
        model.style.color = 'green'
    }else{
        model.style.color = 'red'
    }
}

// console.log(user[i])
    // const model = document.querySelector('.Model')
    // const date = document.querySelector('.date')
    // const perf = document.querySelector('.performance')
    // const chip = perf.querySelector('.Chipset')
    // const cpu = perf.querySelector('.cpu')
    // const Res = perf.querySelector('.Resolution')
    // const Cam = perf.querySelector('.CameraFeatures')

    // model.innerText = user[i].Model
    // date.innerText = user[i].LaunchDate
    // chip.innerText = user[i].performance[0]['Chipset']
    // cpu.innerText = user[i].performance[1]['cpu']