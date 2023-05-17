Display in the posts all the related posts, kinda like the feed


How to make clickable link display catalogue for each specific image without having to hard code each one? Instead an ejs way if possible


    <!--  -->
<!-- 
    <div class="container">
      <div class="row justify-content-center mt-5">
        <ul class="row list-unstyled">
          <li class="col-6 justify-content-between mt-5">
            <span><%=workouts[i].name%></span>
            <span><%=workouts[i].type%></span>
            <span><%=workouts[i].walkthrough%></span>
            
          </li>
          </ul>
      </div>
    </div>   -->


    how to put my code into the post.ejs without causing it to crash(crash happesn cause the code registers the ejs that hasn't been submitted yet but the code is takes in what will be used)/



    why isn't the data being organized and sent to mongodb in order/


       <div class="container">
      <div class="row justify-content-center mt-5">
        <ul class="row list-unstyled">
          <% for(var i=0; i<workout.length; i++) {%>
            <li class="col-6 justify-content-between mt-5">
              <span><%= workouts[i].name%></span>
            
              </a>
            </li>
          <% } %>
          </ul>
      </div>
    </div>  


    Media player that display when a link is clicked, and is able to play a different video if a different link is clicked.

    start a new row after X amount of div's

    <!-- hamburger menu code -->

    /* Menu Wrap */

.menu-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.menu-wrap .toggler {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
  z-index: 2;
}

.menu-wrap .hamburger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hamburger lines */

.menu-wrap .hamburger > div {
  position: relative;
  flex: none;
  width: 100%;
  height: 2px;
  background: #fff;
  transition: all 0.4s ease;
  /* align-items: center; */
  /* justify-content: center; */
}

/* Hamburger top and bottom line */

.menu-wrap .hamburger > div::before,
.menu-wrap .hamburger > div::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: inherit;
}

.menu-wrap .hamburger > div::after {
  top: 10px;
}

/* Toggler Animation */

.menu-wrap .toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}


/* Turns line into X */
.menu-wrap .toggler:checked + .hamburger > div:before,
.menu-wrap .toggler:checked + .hamburger > div:after {
  top: 0;
  transform: rotate(90deg);
}

/* Rotate on hover when checked */
.menu-wrap .toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}

/* Show Menu */
.menu-wrap .toggler:checked ~ .menu {
  visibility: visible;
}

.menu-wrap .toggler:checked ~ .menu > div {
  transform: scale(1);
  transition-duration: var(--menu-speed);
}
.menu-wrap .toggler:checked ~ .menu > div > div {
  opacity: 1;
  transition: opacity 0.4s ease 0.4s;
}

.menu-wrap .menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-wrap .menu > div {
  background: var(--overlay-color);
  width: 225vw;
  height: 225vw;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: all 0.4s ease;
  border-radius: 50%;
}

.menu-wrap .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.menu-wrap .menu > div > div > ul > li {
  list-style: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem;
}
.menu-wrap .menu > div > div > ul > li > a {
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease;
}
.menu-wrap .menu > div > div > ul > li > a:hover {
  color: teal;
}

#showcase {
  background: white;
  color: #fff;
  height: 100vh;
  position: relative;
}

#showcase:before {
  content: '';
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

#showcase .showcase-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#showcase h1 {
  font-size: 4rem;
}

/* showcase keyframe */
@keyframes heading {
  to {
    transform: translateX(0);
  }
}

#showcase p {
  font-size: 1.3rem;
  padding-top: 15px;
}


auto scroll feed horizontal

when the cursor gets close to the auto scroll feed, the container enlarges while the cursor is within the distance of the container reach

what are the semantics for auto scroll horizontal endless loop?

  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  box-sizing: border-box;
  margin-top: 3rem!important;

  <!-- Autoscroll slideshow -->

    max-width: 100%;
  height: auto;
  

  <div class="main-scroll-div">
          <div>
              <button class="icon" onmouseover="scrolll()"> <i class="fas fa-angle-double-left"></i></button>
              <!-- <button class="icon" onclick="scrolll()"> <i class="fas fa-angle-double-left"></i></button> -->
          </div>
          <div class="cover">
              <div class="scroll-images">
                <% for(var i=0; i<posts.length; i++) {%>
                  <div class="child">
                      <a href="/post/<%= posts[i]._id%>">
                        <img class="img-feed child-img" src="<%= posts[i].image%>">
                      </a>
                  </div>
                <% } %>
              </div>
          </div>
          <div>
              <button class="icon" onmouseover="scrollr()"> <i class="fas fa-angle-double-right"></i></button>
          </div>
        </div>


        how to make scrollable content, when added elements, don't change outside elements properties?