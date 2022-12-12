var mqtt=require("mqtt");
connection_detail={    
    Host:"2614451-internet-facing-466cb06d39e23407.elb.ap-south-1.amazonaws.com",
    Port:"1883",
    username:"backend_task",
    password:"G6B2HEfDmfvDA9y"};
var client=mqtt.connect(connection_detail);

client.on('connect',function()
{
    
client.subscribe("add/shodhan");
    console.log("subcribed sucessfully to add/shodhan");
});


client.on('message',async function(topic,message)
{
console.log(message.toString());

});
