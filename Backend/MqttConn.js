const mqtt = require("mqtt");

// MQTT Credentials
const mqtt_server = "broker.hivemq.com";
const mqtt_port = 1883;

const connectMqtt = async () => {
  try {
    const client = await mqtt.connect(`mqtt://${mqtt_server}:${mqtt_port}`);
    
    // MQTT CONTTION
    client.on("connect", function () {
      console.log("MQTT client connected");

      // Subscribe to a topic
      client.subscribe("sub/slnp/test", function (err) {
        if (!err) {
          console.log('Subscribed to topic "sub/slnp/test"');
        }
      });
    });

    //WEB-socket connection
    


    // Handle incoming messages
    client.on("message", function (topic, message) {
      var jsonObj = JSON.parse(message.toString());
      //   buf = Buffer.from(JSON.stringify(message));
      console.log(
        `Received message on topic "${topic}": ${message.toString()}`
      );
      console.log(jsonObj.distance);
      var containerLength = 11.66;
      var waterLevel = 11.66 - jsonObj.distance;
      var limit = 3; // Lower Limit of the water level
      if (waterLevel < limit) {
        //to do notification
        console.log("wATER level is LOW");
      }

    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMqtt;
