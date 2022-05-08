const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');
    

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active'); //slide in side nav 

        navLinks.forEach((link, index)=> {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkAnimation 0.5s ease forwards';
            }
        });
        
        //change to X 
        burger.classList.toggle("X");
    });

}


navSlide();

// inpsiration from https://www.youtube.com/watch?v=gXkqy0b4M5g

class Timer {
    constructor(root) {
      root.innerHTML = Timer.getHTML();
  
      this.el = {
        minutes: root.querySelector(".timer_numerical-minutes"),
        seconds: root.querySelector(".timer_numerical-seconds"),
        control: root.querySelector(".timer_btn-control"),
        restart: root.querySelector(".timer_btn-restart"),
        break: root.querySelector(".timer_btn-break")
      };
  
      this.interval = null;
      this.remainingSeconds = 25 * 60; //set up automatically 25 minutes for pomodoro study session
  
      this.el.control.addEventListener("click", () => {
        if (this.interval === null) {
          this.start(); //when timer button click, start timer
        } else {
          this.stop();
        }
      });

      this.el.restart.addEventListener("click", () => {
            this.stop();
            const input = prompt("Are you sure you want to restart your Pomodoro timer? Type YES to confirm your choice.");
            if (input == 'YES') {
                this.remainingSeconds = 25 * 60;
                this.updateInterfaceTime();
            }
      });

      this.el.break.addEventListener("click", () => {
        this.stop();
        const input = prompt("Are you sure you want to go on break prematurely? Type YES to confirm your choice.");
        if (input == 'YES') {
            this.remainingSeconds = 5 * 60;
            this.updateInterfaceTime();
        }
  });

    }
  
    updateInterfaceTime() { //update every second
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
  
      this.el.minutes.textContent = minutes.toString().padStart(2, "0");
      this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }
  
    updateInterfaceControls() {
      if (this.interval === null) {
        this.el.control.innerHTML = `<span class="material-icons">play_circle</span>`;
        this.el.control.classList.add("timer_btn-start");
        this.el.control.classList.remove("timer_btn-stop");
      } else {
        this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
        this.el.control.classList.add("timer_btn-stop");
        this.el.control.classList.remove("timer_btn-start");
      }
    }
  
    start() { //initiate the thread 
      if (this.remainingSeconds === 0) return;
  
      this.interval = setInterval(() => {
        this.remainingSeconds--;
        this.updateInterfaceTime();
  
        if (this.remainingSeconds === 0) {
          this.stop();
        }
      }, 1000);
      this.updateInterfaceControls();
    }
  
    stop() { //reset timer 
      clearInterval(this.interval);
      this.interval = null;
      this.updateInterfaceControls();
    }
  
    //starts with 25 automatically for pomodoro
    static getHTML() {  
      return `

            <div class = "num_timer">
              <span class="timer_numerical timer_numerical-minutes">25</span>
              <span class="timer_numerical">:</span>
              <span class="timer_numerical timer_numerical-seconds">00</span>

            </div>

            <div class ="timer_btns_container" > 
              <button type="button" class="timer_btn timer_btn-control timer_btn-start">
                <span class="material-icons">play_arrow</span>
              </button>
              <button type="button" class="timer_btn timer_btn-restart" style="font-size: 10px">
                <span class="material-icons">timer</span>Study
              </button>
              <button type="button" class="timer_btn timer_btn-break" style='font-size: 11px'>
                <span class="material-symbols-outlined">coffee</span>Break
              </button>
              </div>
          `;
    }
  }
  
  new Timer(
      document.querySelector(".timer")
  );

//inpsired by https://codepen.io/dcode-software/pen/XWgyOpg


//for the to do list 
const inputText = document.querySelector(".inputB input");
const addButton = document.querySelector(".inputB button");
let list = document.querySelector(".task_list");
let deleteAll = document.querySelector(".comment button");
let tasks = [];

inputText.onkeyup = ()=>{
  let userInput = inputText.value;//retrieve 
  if(userInput.trim() != 0 ) {
    addButton.classList.add("active");
  } else {
    addButton.classList.remove("active");
  }
}

show_tasks();

addButton.onclick = () => {
    let userInput = inputText.value;//retrieve from input box
    let storage = localStorage.getItem("Task");
    if (storage == null) {
      tasks = [];
    } else {
      tasks = JSON.parse(storage); //json to js object
    }
      tasks.push(userInput); //adding new task to the list
      localStorage.setItem("Task", JSON.stringify(tasks)); //back to json 
      show_tasks(); //reshow array of tasks
      addButton.classList.remove("active");
}

function show_tasks() {
  let storage = localStorage.getItem("Task");
  if (storage == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(storage); //json to js object
  }
  let task_tag = '';
  tasks.forEach((task, index) => {
    task_tag += `<li> ${task} <span onclick="done_task(${index})" class='material-symbols-outlined'> remove</span></li>`;
  });
  list.innerHTML = task_tag;
  inputText.value = '';
}

deleteAll.onclick = () => {
  tasks = [];
  localStorage.setItem("Task", JSON.stringify(tasks));
  show_tasks();
}


//inspiration from tutorial on to do lists
//https://www.youtube.com/watch?v=ykuD2QOZkhc&t=188s

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById('embed-iframe');
  let options = {
      uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
    };
  let callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};

//for spotify API iframe
//https://developer.spotify.com/documentation/embeds/guides/using-the-iframe-api/

let chillMix = document.querySelector(".chillMix button");
let pianoMix = document.querySelector(".pianoMix button");
let rewindMix = document.querySelector(".rewindMix button");
let spotifyIframe = document.querySelector(".spotify");


chillMix.onclick = () => {
  
  let newIframe = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EVHGWrwldPRtj?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
  spotifyIframe.innerHTML = newIframe;

}

pianoMix.onclick = () => {
  let newIframe = `<iframe style="border-radius:30px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
  spotifyIframe.innerHTML = newIframe;
}

rewindMix.onclick = () => {
  let newIframe = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXpyNlpWQwux?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
  spotifyIframe.innerHTML = newIframe;
  console.log(backButton);
}

