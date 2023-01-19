![Untitled-1-01](https://user-images.githubusercontent.com/102153316/213498660-7cba2b38-16d4-47e5-98b7-f7f39d9fc58b.jpg)

### Team

* [Gustavo Cambareri]
* [Luca Pedroni]
* [Anastasiia Zaiarniuk]
* [Mona Abolghasemi]

### Project idea

The user can see a visual translation of audio volume into a shape and colour representation. There are two languages : the one which is understandable by the computer, and the one which is understandable by humans. The concept ov "VOLUME" is to show the translation of these two languages by interacting with the device.

![expla-01](https://user-images.githubusercontent.com/102153316/213514998-571ccc4f-f8f7-47d4-8fd5-05ec352d6951.jpg)

### Speculative fantasy and Safe space

Our project is designed in order to be understandable by humans. By the way, it speculates on some possible and futurible (but not scientifically proven) ways of translating the concept of volume. It aims to speculate, in order to linger on the  machines which we use, and on their inner calculations.
Additionally, our project gives the freedom of screaming to the user. Indeed, in order to reach the red color,the user needs to scream or make a lot of noise (depending on the microphone sensitivity). If this project was to be set in a public space, that public space (museum, a square in a city, a bar) would give the freedom and safety to scream and to make noise, which is a liberating act for the human being.

![cucu](https://user-images.githubusercontent.com/102153316/213518280-4b846f5d-5e54-4ebe-bf17-207ef9440158.jpg)


### Devices

Given the minimalistic quality of the project, we decided to design it for mobile and laptop use. Everybody uses mobile all the time, so we thought that the easiest and more coherent access point would be the mobile device. Also, the microphone input is the main engine of the interaction, and not on every other device the microphone is present.


### Design challenges

Our main design challenge was to find a coherent way of translating numbers (the number which represents the microphone input volume) into something which is instantly understandable by humans. When analyzing numbers, we need a prior culture and scientifical context, in order to understand them. Computers don't! That's why we decided to simply use FORM and COLOUR.
Our layout fully uses the field of the screen, in order to divide equally the surface and to instantly catch the attention of the user.
Last but not least, we chose blue and red as our main colours, aside from grays. If the user screams, they will see the red colour, which has always been connected with the emotion of alertness.

![zza](https://user-images.githubusercontent.com/102153316/213520124-6a5661b2-849c-47b9-b325-241ac7ae1df9.jpg)


### Coding process

One of the main coding steps was to actually show a number which is constantly changing, like if it was in the console.log. At first, we tried to do this:

```js
 if (frameCount % 20 === 0) {
    binaryY += +12;
  }
  text(volhistory, binaryX, binaryY);
  ```
  
  with volhistory being the miclevel value. But this wasn't enough. Eventually we found out about nfc, which takes a number value and continuosly changes it into a string:
  
  ```js
  displayVolume = map(newmicLevelA, 0, 255, 0, 100);  
  displayVolume -= 1;
  displayVolume = Math.abs(displayVolume);
  displayVolume += 1;

  textSize(100);
  text(nfc(displayVolume, 0), width / 2, height / 5);
  ```
  
  Another crucial part, to assign color to mic input. First, we mapped the mic level to three variables, three like R,G,B values.
  
  ```js
  
  newmicLevelA = map(micLevel, 0, 1, 0, 255);
  newmicLevelB = map(micLevel, 0, 1, 0, 0);
  newmicLevelC = map(micLevel, 0, 1, 255, 0);
  
  rectColorValueA = newmicLevelA;
  rectColorValueB = newmicLevelB;
  rectColorValueC = newmicLevelC;
  ```
    
  And then, we assigned these three values to the fill of the rectangle which is in the low part of the screen.

 ```js
 
  fill(rectColorValueA, rectColorValueB, rectColorValueC);
  rect(0, height / 1.5, width, height / 1.5);
  ```
  
  ### Tools and libraries
  
  Our main tool aside from p5js was github desktop. It allowed us to collaborate on multiple laptops in a really fast and easy way. Also, the p5 sound library was really important, allowing us to use the microphone input. Lastly, ngrok's localtunnel made testing really fast. We made a large use of The coding train lessons on youtube.
  
  ### Inspiration
  
  On the concept of speculation, we were inspired by contemporary artists like Trevor Paglen and his "Autonomy Cube", Adam Harvey and the "Anti-Face", and formally by Ryoji Ikeda. 
  
  ### Faculty

* Michele Mauri
* Andrea Benedetti
* Tommaso Elli
