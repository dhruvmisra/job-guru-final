<template>
    <div>
        <!-- footer -->
        <footer class="footer">
            <div class="container">

                <div class="row footer-content text-white justify-content-center">

                    <div class="">
                        <ul style="list-style-type: none;">
                            <li class="list-title">Important Links</li>
                            <li><router-link to="/case-studies" tag="a" class="list-link">CASE STUDIES</router-link></li>
                            <li><router-link to="/about-us" tag="a" class="list-link">ABOUT US</router-link></li>
                            <li><router-link to="/privacy" tag="a" class="list-link">PRIVACY POLICY</router-link></li>
                            <li><router-link to="/terms" tag="a" class="list-link">TERMS & CONDITIONS</router-link></li>
                        </ul>                    
                    </div>

                    <div class="">
                        <div class="social-row p-0">
                            <p class="text-white text-center list-title">Follow Us</p>
                            <div class="d-flex justify-content-center">
                                <a href="https://www.youtube.com/channel/UCEAAzv2OBqxsSczKJ2QZyGQ/" target="_blank">
                                    <img src="../assets/social icons/youtube.png" alt="" class="social">
                                </a>
                                <a href="https://www.instagram.com/pushkarrajthakur" target="_blank">
                                    <img src="../assets/social icons/instagram.png" alt="" class="social">
                                </a>
                                <a href="https://www.facebook.com/PushkarRajThakurOfficial" target="_blank">
                                    <img src="../assets/social icons/facebook.png" alt="" class="social">
                                </a>
                            </div>
                        </div>                    
                    </div>
                    
                    <div class="">
                        <ul style="list-style-type: none;">
                            <li class="list-title">Contact Us</li>
                            <li>820, Golf Course Road</li>
                            <li>Sector 42, Gurugram</li>
                            <li>Haryana - 122001, India</li>
                            <br>
                            <li>Email: <a class="list-link" href="mailto:prtglobalsolutions@gmail.com">prtglobalsolutions@gmail.com</a></li>
                        </ul>                    
                    </div>

                </div>

            </div>
            <div class="copyright">&copy; 2017-2019 GryNow | All Rights Reserved</div>
        </footer>    
    </div>
</template>

<style>
    .row {
        font-size: 0.9em;
    }
    .link {
        color: gray;
        cursor: pointer;
    }
    /* Footer */
    .footer {
        position: relative;
        background-color: #1D232A;
        height: fit-content;
        font-size: 0.9em;
    }
    .social-row {
        display: block;
        padding-top: 20px;
    }
    .social {
        height: 50px;
        width: 50px;
        margin: 2px 5px;
        cursor: pointer;
        transition: all 0.05s ease-in;
    }
    .social:hover {
        transform: scale(1.05);
    }

    
    .list-title {
        font-weight: bold;
        font-size: 1.2em;
        padding-top: 10px;
        padding-bottom: 10px
    }
    .list-link {
        color: white;
    }
    .list-link:hover {
        color: rgb(202, 202, 202);
        text-decoration: none;
    }

    .footer-content > div {
        display: flex;
        margin-top: 2em;
        width: 30%;
        justify-content: center;
    }

</style>

