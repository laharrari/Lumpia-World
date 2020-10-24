# NavigatorCRE-Assessment

    Goal: Design a full website with a clear theme and value proposition that meets accessibility standards and
    is mobile/desktop responsive displaying useful UI/UX trends  

    Requirements:
        • 1 home page, minimum 4 additional pages
        • Menu
        • 3 features (minimum) your choice
            ◦ Ex. Floating action button, hamburger menu, animated elements (sliding up, hover, etc), words
             icons (vice versa)
        • Contact/inquiry form

Created by Harrison Lee
[Repo Here](https://github.com/laharrari/NavigatorCRE-Assessment)

This static website was made in HTML, CSS, and JavaScript. I used Visual Studio code and Git pages to host the
website online. For the best experience I would recommend cloning and opening the repository on Visual Studio and
opening index.html with a browser of choice.

# Lumpia World

The inspiration for my website came from a close friend. They run a family owned business called "Lumpia World".
It is a popular food truck with a store front location based out of Washington and I wanted to make my version
of their current [website](https://www.lumpiaworld.com/).

I chose to make this website as a concept of something they could use in the future, but not necessarily use
directly as this site is for the NavigatorCRE front end developer assessment.

# The Site

Features are:

    - There are 5 main pages: Home, Our Story, Media, Menu, and Contact.

    - Home page includes slideshow featuring images related to Lumpia World.

    - The navigation bar features buttons that allow the user to navigate to relevant information at any time.
    The bar itself is also sticky so it'll follow the user when they scroll down.

    - When viewed in mobile or in a smaller window the navigation bar will turn into a "burger" which is
    animated and can be clicked to display all the buttons that are in the nav bar conveniently.

    - Media page includes embedded videos featuring Lumpia World.

    - There is a contact page with fields for Name, Subject, Email, and Message. For the sake of the
    assessment it is not functional.

    - Embedded a Google Maps featuring the store front of Lumpia World on the contact page with the address.

    - Animated menu button which opens a pdf containing menu items in a new tab.

    - Included footer at the bottom of the page that includes social media and contact info.

    - Animated social media buttons for Facebook, Twitter, and Instagram in the footer.

# Notes:

    - Tried my best to decompose code and keep things organized, but admittedly the CSS files are a bit messy.

    - A majority of the challenges I faced were CSS related where I would have trouble formatting certain
    components in a particular way.

    - Tested mobile view on Google Chrome using F12 and the top left "Toggle device toolbar".
    I used my phone as well (iPhone 7 Plus) and for diversity I had a friend test on his Android device.

    - I realized that on my device the footer formatting was getting ruined because iOS was trying to
    format the number into a callable one. I had a friend with an Android device check for me and
    his footer looked fine. Glad I caught this one.

    - One issue I had was the nav bar was supposed to be sticky, but something was breaking that. I did
    some investigating and discoverd "overflow-x: hidden" in html, body will break "position: sticky".
    I fixed this by using "position: fixed" and adding padding to my "main-container".

For the sake of the assessment I chose not to host on a custom domain. However, if I were too:

    1. I would use AWS S3 to store the site files.
    2. Buy a custom and relevant domain name from Google Domains.
    3. Use AWS Route 53 with my S3 bucket and custom domain I purchased so that when searching my custom
    domain it takes users to my S3 bucket without the gross looking link.
    4. Setup my Git with AWS CodePipeline so when I make changes to the site's repository it'll update the
    S3 bucket, which in return updates the site live.

# Resources:

I utilized Google and worked hard to make my own creation, but of course at times I did look for inspiration else where.
To credit those I borrowed heavily from I will link their work below:

    - Dev Ed: https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q
    - https://codepen.io/ryne/pen/PoPoqgO
    - https://codepen.io/sazzad/pen/WbdzzQ/
