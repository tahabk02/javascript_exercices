// Exercise: Video class
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time; // duration in seconds
  }

  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    );
  }
}

// Instantiate two Video instances
const video1 = new Video("JavaScript Tutorial", "Elie", 120);
const video2 = new Video("CSS Basics", "Sarah", 90);

video1.watch();
// Output: Elie watched all 120 seconds of JavaScript Tutorial!
video2.watch();
// Output: Sarah watched all 90 seconds of CSS Basics!

// Bonus: Array of 5 video data
const videosData = [
  { title: "React Intro", uploader: "John", time: 180 },
  { title: "Node.js Basics", uploader: "Emma", time: 150 },
  { title: "HTML Crash Course", uploader: "Mike", time: 200 },
  { title: "Python for Beginners", uploader: "Lily", time: 220 },
  { title: "Advanced JS", uploader: "David", time: 300 },
];

// Loop through array to instantiate Video instances
const videos = videosData.map(
  (video) => new Video(video.title, video.uploader, video.time)
);

// Call watch() method for each video
videos.forEach((video) => video.watch());
/* Output:
  John watched all 180 seconds of React Intro!
  Emma watched all 150 seconds of Node.js Basics!
  Mike watched all 200 seconds of HTML Crash Course!
  Lily watched all 220 seconds of Python for Beginners!
  David watched all 300 seconds of Advanced JS!
  */
