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

// const app = ()=> {
//     navSlide
// }

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
      this.remainingSeconds = 25 * 60;
  
      this.el.control.addEventListener("click", () => {
        if (this.interval === null) {
          this.start();
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
  
    updateInterfaceTime() {
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
  
    start() {
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
  
    stop() {
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
              <button type="button" class="timer_btn timer_btn-restart">
                <span class="material-icons">timer</span>
              </button>
              <button type="button" class="timer_btn timer_btn-break">
                <span class="material-symbols-outlined">coffee</span>
              </button>
              </div>
          `;
    }
  }
  
  new Timer(
      document.querySelector(".timer")
  );

