<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"> -->
    <script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="rules/reset.css">
    <link rel="stylesheet" href="plugin/fontawesome/css/all.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>

<body>
    <div id="wrapper">

        <!-- TOP -->

        <div id="header">

            <div id="top-logo">
                <a href=""><img class="banner-image" src="images/earth.png" alt=""></a>
            </div>

            <div id="toggle">
                <i class="fa-solid fa-bars" id="nav-toggle"></i>
            </div>

            <div class="nav">
                <ul class="main-menu">
                    <li><a class="btn" href="#home">Home</a></li>
                    <li class="li-1"><a class="li-parent btn" href="#news">News</a>
                        <ul class="sub-menu">
                            <li><a href="#home">Sub-menu-1</a></li>
                            <li class="li-1-1"><a class="li-child" href="#home">Sub-menu-2</a>
                                <ul class="sub-menu-child">
                                    <li><a href="#home">Sub-menu-2.1</a></li>
                                    <li><a href="#home">Sub-menu-2.2</a></li>
                                    <li><a href="#home">Sub-menu-2.3</a></li>
                                </ul>
                            </li>
                            <li><a href="#home">Sub-menu-3</a>

                            </li>
                        </ul>
                    </li>
                    <li><a class="btn" href="#contact">Contact</a></li>
                    <li><a class="btn" href="#about">About us</a></li>
                    <li class="li-2"><a class="li-parent-2 btn" href="#home">Support</a>
                        <ul class="sub-menu">
                            <li><a href="#home">Sub-menu-1</a></li>
                            <li class="li-2-1"><a class="li-child-2" href="#home">Sub-menu-2</a>
                                <ul class="sub-menu-child">
                                    <li><a href="#home">Sub-menu-2.1</a></li>
                                    <li><a href="#home">Sub-menu-2.2</a></li>
                                    <li><a href="#home">Sub-menu-2.3</a></li>
                                </ul>
                            </li>
                            <li><a href="#home">Sub-menu-3</a>

                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="icons">
                <i class="fas fa-search" id="search-icon"></i>
            </div>

            <form action="#" id="search-form">
                <input class="search-input" type="search" name="search" placeholder="Search..">
                <label for="search" class="fas fa-search"></label>
            </form>
        </div>

        <!-- CONTENT -->

        <div id="content">

            <!-- BANNER -->

            <div class="banner">
                <div class="banner-text">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
                <h1>story about dogs</h1>
            </div>

            <!-- SLOGAN -->

            <div class="slogan">
                <div class="box-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, assumenda exercitationem odit
                    minima officiis recusandae itaque saepe sunt eius harum.
                </div>
                <div class="box-2">

                    <a href="">
                        <img src="images/medal-icon.png" alt="">
                        <div>Lorem ipsum dolor sit amet.<br>Lorem ipsum dolor sit amet.</div>
                    </a>


                    <a href=""><img src="images/360-icon.png" alt="">
                        <div>Lorem <br>Lorem ipsum</div>
                    </a>


                    <a href=""><img src="images/tablet-64.png" alt="">
                        <div>Lorem ipsum<br>Lorem ipsum</div>
                    </a>


                    <a href=""><img src="images/speaker-64.png" alt="">
                        <div>Lorem<br>Lorem</div>
                    </a>

                    <a href=""><img src="images/location-update-64.png" alt="">
                        <div>Lorem ipsum<br>Lorem ipsum</div>
                    </a>

                </div>
            </div>

            <!-- SLIDE -->

            <div class="box-4">
                <div class="box-4-1">
                    <div class="box-4-1-1">
                        <h3>Lorem ipsum dolor sit.</h3>
                    </div>
                    <div class="box-4-1-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum maiores,
                        est modi libero earum nulla nemo dicta sint eius vel possimus dolore odio ut quibusdam.
                    </div>
                    <a href="">
                        <button class="box-4-1-btn">
                            Lorem ipsum dolor sit.
                        </button>
                    </a>
                </div>
                <div class="slideshow-container">
                    <div class="mySlides fade">
                        <div class="numbertext">1 / 3</div>
                        <img src="images/leaves.jpg" style="width:100%">
                        <div class="text">Caption One</div>
                    </div>
                    <div class="mySlides fade">
                        <div class="numbertext">2 / 3</div>
                        <img src="images/forest-2.jpg" style="width:100%">
                        <div class="text">Caption Two</div>
                    </div>
                    <div class="mySlides fade">
                        <div class="numbertext">3 / 3</div>
                        <img src="images/sunflower.jpg" style="width:100%">
                        <div class="text">Caption Three</div>
                    </div>
                </div>

                <div style="text-align:center">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                </div>
            </div>

            <!-- DISPLAY-CONTENT -->

            <div class="wp-display-content">
                <div class=display-content>
                    <div class="image">
                        <img src="images/forest.jpg" alt="">
                    </div>
                    <div class=content>
                        <h3>Lorem, ipsum dolor.</h3>
                        <a class="title" href="">Lorem, ipsum dolor.</a>
                        <div class="excerpt">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, pariatur eligendi reiciendis
                            quo veritatis doloremque doloribus voluptas nostrum eveniet fuga.
                        </div>
                    </div>
                </div>
                <div class=display-content>
                    <div class=image>
                        <img src="images/road.jpg" alt="">
                    </div>
                    <div class=content>
                        <h3>Lorem, ipsum dolor.</h3>
                        <a class="title" href="">Lorem, ipsum dolor.</a>
                        <div class=excerpt>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, pariatur eligendi reiciendis
                            quo veritatis doloremque doloribus voluptas nostrum eveniet fuga.
                        </div>
                    </div>
                </div>
                <div class=display-content>
                    <div class=image>
                        <img src="images/water.jpg" alt="">
                    </div>
                    <div class=content>
                        <h3>Lorem, ipsum dolor.</h3>
                        <a class="title" href="">Lorem, ipsum dolor.</a>
                        <div class=excerpt>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, pariatur eligendi reiciendis
                            quo veritatis doloremque doloribus voluptas nostrum eveniet fuga.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="input-form">
            <form id="form_reg" action="reg.php" method="post">
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name..">
          
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name..">
          
              <label for="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
          
              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
          
              <input type="submit" value="Submit">
            </form>
          </div>
        <div id="wp-footer">
            <div id="footer">
                <div id="about-us">
                    <div class="box-head">
                        <a href=""><img class="banner-image" src="images/earth.png" alt=""></a>
                    </div>
                    <div class="box-body">
                        <ul class="company-info">
                            <li><i class="fa-solid fa-location-dot"></i>Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Totam, excepturi.</li>
                            <li><i class="fa-solid fa-mobile"></i>0999999999</li>
                            <li><i class="fa-solid fa-phone"></i>(+84 28)12345678</li>
                            <li><i class="fa-solid fa-envelope"></i>abc90@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div id="follow-us">
                    <div class="box-head">
                        <h3>Social</h3>
                    </div>
                    <div class="box-body">
                        <ul class="list-social">
                            <li>
                                <a href=""><i class="fa-brands fa-square-facebook"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa-brands fa-square-instagram"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa-brands fa-square-youtube"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa-brands fa-square-pinterest"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="wp-copyright">
            <div class="container">
                <p class="copyright">Copyright © 2022 ABC. All right Reserved</p>
            </div>
        </div>
        <script src="js/script.js"></script>
</body>

</html>