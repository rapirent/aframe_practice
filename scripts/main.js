$(document).ready(function() {
    var distance = 3;//people between the board
    var clicked=false;//flag that test if the object was clicked?
    var name;//to set the click object
    var camera = document.querySelector('a-camera');
    var link = document.querySelector('#link_board');
    $('#game_board').on('click',function(){
        if(clicked===false||name!==$(this).attr('id')){
            clicked=true;
            name=$(this).attr('id');
            camera.setAttribute('position',{
                x: $('#game_board').attr('position')['x'] + distance*2,
                y: 2.1,
                z: $('#game_board').attr('position')['z']
            });
            link.setAttribute('visible',true);
            link.setAttribute('position',{
                x: $('#game_board').attr('position')['x'],
                y: $('#game_board').attr('position')['y'],
                z: $('#game_board').attr('position')['z'] - distance*1.2,
            });
            link.setAttribute('rotation',{
                x: 0,
                y: 90,
                z: 0,
            });
        }else{
            clicked=false;
            camera.setAttribute('position',{
                x: 0,
                y: 2.1,
                z: 0,
            });
            link.setAttribute('visible',false);
        }
    });
    $('#app_board').on('click',function(){
        if(clicked===false||name!==$(this).attr('id')){
            name=$(this).attr('id');
            clicked=true;
            camera.setAttribute('position',{
                x: $('#app_board').attr('position')['x'] - distance,
                y: 2.1,
                z: $('#app_board').attr('position')['z'] + distance
            });
            link.setAttribute('visible',true);
            link.setAttribute('position',{
                x: $('#app_board').attr('position')['x'] + distance*0.7,
                y: $('#app_board').attr('position')['y'],
                z: $('#app_board').attr('position')['z'] + distance*0.7,
            });
            link.setAttribute('rotation',{
                x: 0,
                y: $('#app_board').attr('rotation')['y'],
                z: 0,
            });
        }else{
            clicked=false;
            camera.setAttribute('position',{
                x: 0,
                y: 2.1,
                z: 0,
            });
            link.setAttribute('visible',false);
        }
    });
    $('#deep_board').on('click',function(){
        if(clicked===false||name!==$(this).attr('id')){
            name=$(this).attr('id');
            clicked=true;
            camera.setAttribute('position',{
                x: $('#deep_board').attr('position')['x'] + distance,
                y: 2.1,
                z: $('#deep_board').attr('position')['z'] + distance
            });
            link.setAttribute('visible',true);
            link.setAttribute('position',{
                x: $('#deep_board').attr('position')['x'] + distance,
                y: $('#deep_board').attr('position')['y'],
                z: $('#deep_board').attr('position')['z'] - distance,
            });
            link.setAttribute('rotation',{
                x: 0,
                y: $('a-camera').attr('rotation')['y'],
                z: 0,
            });
        }else{
            clicked=false;
            camera.setAttribute('position',{
                x: 0,
                y: 2.1,
                z: 0,
            });
            link.setAttribute('visible',false);
        }
    });
    $('#story_board').on('click',function(){
        if(clicked===false||name!==$(this).attr('id')){
            name=$(this).attr('id');
            clicked=true;
            camera.setAttribute('position',{
                x: $('#story_board').attr('position')['x'] + distance,
                y: 2.1,
                z: $('#story_board').attr('position')['z'] - distance
            });
            link.setAttribute('visible',true);
            link.setAttribute('position',{
                x: $('#story_board').attr('position')['x'] - distance*0.7,
                y: $('#story_board').attr('position')['y'],
                z: $('#story_board').attr('position')['z'] - distance*0.7,
            });
            link.setAttribute('rotation',{
                x: 0,
                y: $('a-camera').attr('rotation')['y'],
                z: 0,
            });
        }else{
            clicked=false;
            camera.setAttribute('position',{
                x: 0,
                y: 2.1,
                z: 0,
            });
            link.setAttribute('visible',false);
        }
    });
    $('#visual_board').on('click',function(){
        if(clicked===false||name!==$(this).attr('id')){
            name=$(this).attr('id');
            clicked=true;
            camera.setAttribute('position',{
                x: $('#visual_board').attr('position')['x'] - distance,
                y: 2.1,
                z: $('#visual_board').attr('position')['z'] - distance
            });
            link.setAttribute('visible',true);
            link.setAttribute('position',{
                x: $('#visual_board').attr('position')['x'] + distance,
                y: $('#visual_board').attr('position')['y'],
                z: $('#visual_board').attr('position')['z'] - distance*0.5,
            });
            link.setAttribute('rotation',{
                x: 0,
                y: $('a-camera').attr('rotation')['y'],
                z: 0,
            });
        }else{
            clicked=false;
            camera.setAttribute('position',{
                x: 0,
                y: 2.1,
                z: 0,
            });
            link.setAttribute('visible',false);
        }
    });
    $('#entry_board').on('click',function(){
        if(clicked===false||name!==$(this).attr('id')){
            name=$(this).attr('id');
            clicked=true;
            camera.setAttribute('position',{
                x: $('#entry_board').attr('position')['x'] - distance*2,
                y: 2.1,
                z: $('#entry_board').attr('position')['z']
            })
            link.setAttribute('visible',true);
            link.setAttribute('position',{
                x: $('#entry_board').attr('position')['x'] - distance*0.9,
                y: $('#entry_board').attr('position')['y'],
                z: $('#entry_board').attr('position')['z'] + distance*0.9,
            });
            link.setAttribute('rotation',{
                x: 0,
                y: $('a-camera').attr('rotation')['y'],
                z: 0,
            });
        }else{
            clicked=false;
            camera.setAttribute('position',{
                x: 0,
                y: 2.1,
                z: 0,
            });
            link.setAttribute('visible',false);
        }
    });
    $('#link_board').on('click', function(){
        //you need to edit the web url below
        if(name==='game_board'&&clicked===true){
            console.log('fuck')
            window.open(' http://tw.yahoo.com ');
        }else if(name==='app_board'&&clicked===true){
            window.open(' http://tw.yahoo.com ');
        }else if(name==='deep_board'&&clicked===true){
            window.open(' http://tw.yahoo.com ');
        }else if(name==='story_board'&&clicked===true){
            window.open(' http://tw.yahoo.com ');
        }else if(name==='visual_board'&&clicked===true){
            window.open(' http://tw.yahoo.com ');
        }else if(name==='visual_board'&&clicked===true){
            window.open(' http://tw.yahoo.com ');
        }
    });
});