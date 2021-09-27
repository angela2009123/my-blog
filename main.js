var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL ('BirthdayImage.jpg', function(Img) {
        block_image_thing = Img;
        block_image_thing.scaletoWidth(700);
        block_image_thing.scaletoHeight(510);
        block_image_thing.set({
            top:0,
            left:0
        });
        canvas.add(block_image_thing);
    });
}

function playSound(){	
    x.play();
}