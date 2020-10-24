# NavigatorCRE-Assessment

    Goal: Design a full website with a clear theme and value proposition that meets accessibility standards and is mobile/desktop
    responsive displaying useful UI/UX trends  

    Requirements:
        • 1 home page, minimum 4 additional pages
        • Menu
        • 3 features (minimum) your choice
            ◦ Ex. Floating action button, hamburger menu, animated elements (sliding up, hover, etc), words  icons (vice versa)
        • Contact/inquiry form



# Lumpia World

The inspiration for my website came from a close friend. They run a family owned business called "Lumpia World". It is a popular
food truck with a store front location based out of Washington and I felt their current [website](https://www.lumpiaworld.com/)
could use a more modern and custom face lift.

I chose to make this website as a concept of something they could use in the future, but not necessarily use directly as this site
is for the NavigatorCRE front end developer assessment.

# The Site

I created a static website using HTML, CSS, and JavaScript. Some notable features are:

    - There are 5 main pages: Home, Our Story, Media, Menu, and Contact

    - The navigation bar features buttons that allow the user to navigate to relevant information at any time. The bar itself is
    also sticky so it'll follow the user when they scroll down.

    - When viewed in mobile or in a smaller window the navigation bar will turn into a "burger" which is animated and can be clicked
    to display all the buttons that are in the nav bar conveniently.

    - There is a contact page, with fields for Name, Subject, Email, and Message. For the sake of the assessment it is not functional.
    It could be made functional with some research.

    - Animated menu button which opens a pdf containing menu items in a new tab.

For the sake of the assessment I chose not to host on a custom domain. However, if I were too:

    1. I would use AWS S3 to store the site files.
    2. Buy a custom and relevant domain name from Google Domains.
    3. Use AWS Route 53 with my S3 bucket and custom domain I purchased so that when searching my custom domain it takes users to my
    S3 bucket without the gross looking link.
    4. Setup my Git with AWS CodePipeline so when I make changes to the site's repository it'll update the S3 bucket, which in return
    updates the site live.

Notes:

    - I created a seperate CSS file for the animated menu button just because there was so much to it, I wanted to decompose it.

    - Not going to even lie, I started decomposing the code a bit later than I should have so it is a little messy, but I am
    refactoring to organize.