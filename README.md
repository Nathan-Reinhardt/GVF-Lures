# GVF-Lures
## Website
This repository is for the GVF-Lures Website (currently down for maintenance). Purpose for this website is to bring awareness and spread important information about GVF-Lures which is a fishing tackle company. GVF-Lures creates lures and dodger fishing equipment used to help catch fish in a variety of places within the USA. This website was built by using Django (python3) backend and the ReactJS frontend framework. Webpack is used to bundle the files and the website is hosted on Heroku. The domain of the website is gvflures.com User Authentication does exist in the website and allows users to access certain pages that non users are not allowed to access without proper credentials. Every page has mobile css adjustments made for vertical and landscape mode while also being adjusted for bigger screens as well. The website is a solo project all done by myself done from complete scratch.
## WIP
Currently this project is a WIP and will be updating this READ.md with updates/additions to the project.

<br/><br/>
<br/><br/>

![readme1](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/5019fe03-f9c4-46bd-9ab2-a77034698dc9)
## Home Page
This page has a slideshow of pictures that transition from picture to picture every 15 seconds with a nice transition between pictures. A message will appear and disappear for each picture that shows up with a nice welcome message and slogan message.

<br/><br/>
<br/><br/>

![readme2](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/1a5ef9c9-53c2-40b2-b639-679a944f5255)
## Contact Us Page
This page lets users know how to contact the buisness owner by phone or email regarding questions they have.

<br/><br/>
<br/><br/>

![readme3](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/c0c0c95f-6e8f-4a37-a67d-a82e05d17776)
## Lakes & Reservoir Page
Out of the entire project, this is my favorite page so far when creating the website. The purpose of this page is to give users information about the lakes, what lure that GVF-Lures sells that has worked really well, and also gives current temperature at the lake so if you decide to want to take a fishing trip soon. It gives you an idea of the weather temperature before you go on the trip. It has a lot of complexity built in the frontend to optmize the amount of coding lines being used to create this page. It currently uses list data stored in the main page react file and sends specfic items in each list to a react component to help create the panel for a specific lake. Passing information like current temperature, picture of the lake, hot lure info, etc. After the next react component checks where it will be placed on the page either the left or right side for info and picture of the lake. The final step is to keep sending those props to a new component where it can use the props information from the lists to display the current information on that specific lake. The reason why it saves a lot of lines of code is because without using react components and props, you would need to hardcode every value into each tag and copy paste similar code over and over. This would be a poor way of building a company website since you want the website to move as fast as possible for the user and reduce load times. The only updates I would do to the page would be to update the lure pictures potentially to make them bigger so it is easier to see them and maybe add some borders for the lake picture and or lake info containers.

<br/><br/>
<br/><br/>

![readme4](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/7daf3cd2-c2a4-4663-9f23-501ed8832ca3)
### OpenWeatherMap Api
https://openweathermap.org/api
<br/><br/>

For the Lakes Page, this project uses a weather api to track the current temperature at the lakes being shown on the page. OpenWeatherMap Api is the current weather api being used in the website.

<br/><br/>
<br/><br/>

![readme5](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/5204058f-0cab-4b03-a47e-bdaa68b24322)
## Gallery Page
This page takes all pictures that relate to fishing with GVF-Lures. This can be pictures from fish themselves with lures in their mouths that are from GVF-Lures to everyday people catching fish using GVF-Lures products to have a great time fishing. The page structure is built by using CSS Grid technqiue to map every picture to img tag elements.

<br/><br/>
<br/><br/>

![readme6](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/9d19cdb7-24bc-4f16-b91c-c6c8c72ef5b9)
### CSS Image Blow Ups
When an image is clicked in the gallery page, it will blow up the size of the image and will be fully responsive based on screen size. When the image is blown up, the user can go between images with the arrow buttons on the left and right sides of the screen. To close out of the image blown up users can press the X button in the top right of the screen.

<br/><br/>
<br/><br/>

![readme7](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/bd47038f-8393-4edf-94c6-bad5211092cf)
## Log In/Sign Up Pages
When the user is either new and wants to create an account, they will use the Sign Up page to create their new account. The Log In page allows existing users to log back into their accounts to access their profile if needed or use the Store feature in the future. User Authentication is very important and also the security of the users is important. This is why passwords are fully encrypted to prevent unauthorized users from accessing information they shouldn't have access to. Error handling is on the frontend for users to see what they can or can't submit to the webpage. Other checks also are there to make sure multiple emails don't exist and creation limit is limited in order to stop overflooding the database. The main adjustment coming for this would be the forgot password setup coming later.

<br/><br/>

### Profile Page
This page is currently still a WIP and currently is only accessible for logged in users and displays information about the user which is currently their email address and username. The /profile route is wrapped in a private route created using ReactJS. It redirects the users who are not logged in indicating to them that the page would be not be accessile if you are not logged in. Once logged in bellow the GVF-Lures title in the Info Nav Panel above each page, a new tab is created on successful log in called "Profile". This tab allows users to access the Profile Page.

<br/><br/>
<br/><br/>

## Shop Page
Shope page displays assortment of lures to choose from and each lure has a page to where you can choose what type of color or specific design for the lure.
( screenshot will uploaded at a later date )

![readme9](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/a7d24074-8005-41db-aa11-4be64e6ea720)
## Info Navigation Panel
This is a custom React Component I created that is used on every page at the very top of the page. The component uses sub custom components created to help reduce lines of code. This main component includes: top navbar links, header detail for the logo picture with a main title of the website, and finally some middle navigation tabs used to go from page to page. Some of the components do check for when the user is logged in or not to display certain information. For example, changing Log In and Sign Up to Log Out based on when the user is logged in or not. The update to this setup would be changing the logo and main title to have better image quality and to change the main title to be an image logo instead of text. Also will always be updated when new 

<br/><br/>
<br/><br/>

![readme8](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/85b6062f-2907-4468-966a-6f8ddd5bec8b)
## Footer
The Footer will always be on every page as well similar to the Info Navigation Panel. It is always at the very bottom giving users naviagation links to other pages. It also changes depending on if a user is logged in or not. Updates to the footer will happen when new pages are created.

<br/><br/>
<br/><br/>

![readme10](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/f2737d78-1f28-4ca2-8b9b-dd754d57ee0f)
## Live Server hosted on Heroku
Hosting on the live server was the most challeneging coding challenge I have ever done alone with no support. It took a long time to tie everything and seperate my development enviornment from the production enviornment. Any API keys or sensitive information for the server or website is stored within the heroku config vars. The domain used is from GoDaddy and the SSL is setup correctly and all forwarding/redirects go toward the working domain.
