# GVF-Lures
## Project
This repository is for the GVF-Lures Website. Purpose for this project is to bring awareness and spread important information about GVF-Lures which is a fishing tackle company. GVF-Lures creates lures and dodger fishing equipment used to help catch fish in a variety of places within the USA. This website built using Django (python3) backend and the ReactJS frontend framework. User Authentication does exist in the website and allows users to access certain pages that non users are not allowed to access without proper credentials. The website is a solo project all done by myself done from complete scratch.
## WIP
Currently this project is a WIP and still will be updating it and this READ.md with updates/additions to the project. Resoultion size with this project works with a width of 800px width and wider. I will be adding ways to check for different screen sizes once I have more pages updated to where I want them to be before fully going into checking resolution sizes. Final note is I am currently still working on getting this project up to a live link to be accessible on the web. This will take precident before the resolution size adjustments.

<br/><br/>
<br/><br/>

![readme1](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/c6b11d27-b8eb-4ed7-b145-ab7cad304cde)
## Home Page
This page has a slideshow of pictures that transition from picture to picture every 10 seconds with a very short transtion time in bewteen pictures. When the user logs into the website, their username will be displayed in a welcome message above the slideshow showing that they are successfully signed in on their account. Updates I want to make to this page would include css and html to go over the slideshow and change depending on which image is currently being shown. After that maybe add some interactions with the shop and home page once I add a shop page in the future.

<br/><br/>
<br/><br/>

![readme2](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/69188f60-a207-4bd3-b43d-7c4f23e01277)
## Contact Us Page
This is currently used with template information and users will use the page to contact the buisness owner by phone or email regarding questions they have.

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

![readme6](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/fe30fbf4-f568-4d43-85ad-1c15c16f91ee)
### CSS Image Blow Ups
When an image is clicked in the gallery page, it will blow up the size of the image and will be fully responsive based on screen size. An update I am currently working on for this feature is to allow users to click on a next and previous button to switch between photos instead of having to press the white X in the top right corner to switch between different photos. This will make it more efficent to easily look at photos while they are blown up saving the users time.

<br/><br/>
<br/><br/>

![readme7](https://github.com/Nathan-Reinhardt/GVF-Lures/assets/19512110/49a01fff-cde2-49a2-8150-dd64f676c745)
## Log In/Sign Up Pages
When the user is either new and wants to create an account, they will use the Sign Up page to create their new account. The Log In page allows existing users to log back into their accounts to access their profile if needed or use the Store feature in the future. User Authentication is very important and also the security of the users is important. This is why passwords are fully encrypted to prevent unauthorized users from accessing information they shouldn't have access to. The only adjustments that would be made to these pages is possible css changes to color and adding possible infomration needed on the Sign Up page that would help the Store page function better.

<br/><br/>

### Profile Page
This page is currently still a WIP and currently is only accessible for logged in users and displays information about the user which is currently their email address and username. The /profile route is wrapped in a private route created using ReactJS. It redirects the users who are not logged in indicating to them that the page would be not be accessile if you are not logged in. Once logged in bellow the GVF-Lures title in the Info Nav Panel above each page, a new tab is created on successful log in called "Profile". This tab allows users to access the Profile Page.

<br/><br/>
<br/><br/>

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

## Future Installment Shop Page
The shop page would be one of the last and hardest features to implement into the website. Reasoning is I will need to restructure and add information into the database based on what is needed in order to get the users information to help create orders and ship items to users.
