function BasicWorld() {
    var world = Physics({
        timestep: 1000.0 / 180
    });

    // add the renderer
    world.add( renderer );
    
    
    console.log('creating a Phyxi canvas '+stageWidth+'px wide & '+stageHeight+'px high');
    
    // setup physics behaviors
    var viewportBounds = Physics.aabb(0, 0, stageWidth, stageHeight); //for desktop 
    
    world.add(Physics.behavior('edge-collision-detection', {
        aabb: viewportBounds,
        restitution: 0.4,
        cof: 0.99,
        label:'bounds'
    }));
    
    gravity = Physics.behavior('constant-acceleration', {
        acc: { x : 0, y: gravityStrength } // 0.0016 is the default // 14 normal // 10 light // 18 heavy
    });
    world.add(gravity);
    
    orbitalGrav = Physics.behavior('newtonian', {
        strength: 0.06,
        max: 80,
        min: 50
    });
    world.add(orbitalGrav);
    collider = Physics.behavior('body-impulse-response');
    world.add( collider );
    world.add(Physics.behavior('body-collision-detection') );
    world.add(Physics.behavior('sweep-prune') );
    world.add(Physics.behavior('interactive', { el: renderer.container }));
    
    world.changeGrav = function(newGrav){
        world.removeBehavior(gravity);
        gravity = Physics.behavior('constant-acceleration', 
        {
            acc: { x : 0, y: newGrav } 
        });
        world.add(gravity);
    }
    
    world.changeOrbit = function(newOrbit){
        world.removeBehavior(orbitalGrav);
        orbitGrav = newOrbit;
        world.add(orbitalGrav);
    }
    
    world.on({
        'interact:poke': function( pos ){
            defaultCursor.enabled = true;
            defaultCursor.updatePos();
            defaultCursor.toggleToSecondary();
        }
        ,'interact:move': function( pos ){
            defaultCursor.updatePos();
        }
        ,'interact:release': function(){
           defaultCursor.toggleToPrimary();
            
        }
    });

    return world;
}