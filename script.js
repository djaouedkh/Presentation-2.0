/* ------------------------------------------------------------ */
/* -------------------------- HOME ------------------------- */
/* ------------------------------------------------------------ */

const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

let pages = document.querySelectorAll('.page');
let links = document.querySelectorAll('.link');

let current_page = 0;

for (let i = 0; i < links.length; i++) 
{
  links[i].addEventListener('mouseover', function()
  {
    for (let u = 0; u < pages.length; u++) 
    {
      pages[u].style.zIndex = "500";
      pages[u].style.opacity = "0";
    }
    pages[i].style.zIndex = "502";
    pages[i].style.opacity = "1";
  })

  links[i].addEventListener('mouseout', function()
  {
    for (let u = 0; u < pages.length; u++) 
    {
      pages[u].style.zIndex = "500";
      pages[u].style.opacity = "0";
    }
    pages[current_page].style.zIndex = "502";
    pages[current_page].style.opacity = "1";
  })

  links[i].addEventListener('click', function()
  {
    for (let u = 0; u < pages.length; u++) 
    {
      pages[u].style.zIndex = "500";
      pages[u].style.opacity = "0";
    }
    current_page = i;
    pages[current_page].style.zIndex = "502";
    pages[current_page].style.opacity = "1";
    container.classList.toggle("active");

    if (i === 3) 
    {
      let contain_dot = document.querySelectorAll('.contain_dot');
      let tech = document.querySelectorAll('.tech');
      let title_skills = document.querySelectorAll('.title_skills');
      let dot1 = document.querySelector('.dot1');
      let dot2 = document.querySelector('.dot2');
      let dot3 = document.querySelector('.dot3');
      for (let i = 0; i < contain_dot.length; i++) {
        contain_dot[i].style.animation = "to_top 0.5s 2s forwards";
        tech[i].style.animation = "to_bottom 0.5s 2.4s forwards";
        title_skills[i].style.animation = "appears 0.5s 1.5s forwards";
      }
      dot1.style.animation = "pickup1 1s 0.6s forwards";
      dot2.style.animation = "pickup2 1s 0.6s forwards";
      dot3.style.animation = "pickup3 1s 0.6s forwards";
    }
  })
}

let logo = document.querySelector('.logo');
logo.addEventListener('click', function()
{
  current_page = 0;
  for (let o = 0; o < pages.length; o++)
  {
    pages[o].style.zIndex = "500";
    pages[o].style.opacity = "0";
  }
  pages[current_page].style.zIndex = "502";
  pages[current_page].style.opacity = "1";
})


/* ------------------------------------------------------------ */
/* -------------------------- PROJECT ------------------------- */
/* ------------------------------------------------------------ */

let project = document.querySelectorAll('.project');
let box_contain_projects = document.querySelectorAll('.box_contain_projects');
let contain_project_describe = document.querySelector('.contain_project_describe');
let project_image = document.querySelectorAll('.project_image');
let project_title = document.querySelectorAll('.project_title');
let project_date = document.querySelectorAll('.project_date');
let project_hr = document.querySelectorAll('.project_hr');
let project_describe = document.querySelectorAll('.project_describe');
let position_left_first = 10;
let position_left_second = 10;
let flag_project = 0;
let flag_counter_project = 0;
let flag_counter_box_contain_projects = 0;
let flag_click_project = 0;
let next_back = document.querySelectorAll('.next_back');

// Button Next Back ON/OFF
if (project.length < 7) 
{
    for (let i = 0; i < next_back.length; i++) {
        next_back[i].style.display = "none";
    }
}

// Positions all projects
for (let v = 0; v < project.length; v++) 
{
    // Position Top
    if (flag_counter_project < 3) 
    {
        project[v].style.left = position_left_first+"%";
        position_left_first += 30;
    }
    // Position Bottom
    else
    {
        project[v].style.left = position_left_second+"%";
        project[v].style.top = "19vmax";
        position_left_second += 30;
    }

    flag_counter_project ++;

    // Reset for position NEXT All Projects in next box
    if (flag_counter_project === 6) 
    {
        flag_counter_project = 0;
        position_left_first = 10;
        position_left_second = 10;
    }
}

for (let i = 0; i < project.length; i++)
{
    // Click in Project   
    project[i].addEventListener('click', function()
    {
        // Verification
        if (flag_project === 0) 
        {
            // Project Open
            flag_project = 1;
            
            // Desactivate Button Next and Back
            flag_click_project = 1;

            // Button Next and Back Disappears
            for (let s = 0; s < next_back.length; s++) 
            {
                next_back[s].style.opacity = "0";
            }

            project[i].style.background = "#cba027";
            project[i].style.color = "whitesmoke";

            // ALL ANIMATION TO DISPLAY PROJECT AND DESCRIPTION

            project_title[i].style.transform = "translateX(25px)";
            project_title[i].style.opacity = "0";
            project_date[i].style.transform = "translateX(25px)";
            project_date[i].style.opacity = "0";
            project_hr[i].style.transform = "translateX(25px)";
            project_hr[i].style.opacity = "0";
            
            setTimeout(first_step_animation, 350);
            function first_step_animation()
            {
                for (let u = 0; u < project.length; u++) 
                {
                    project[u].style.opacity = "0";
                }
                project[i].style.opacity = "1";
                project[i].style.height = "100%";
                project[i].style.left = "0";
                project[i].style.top = "0";
                project[i].style.zIndex = "500";
                box_contain_projects[flag_counter_box_contain_projects].style.position = "relative";
                contain_project_describe.style.opacity = "1";
                contain_project_describe.style.zIndex = "50";
                project_title[i].style.transform = "translateX(-25px)";
                project_date[i].style.transform = "translateX(-25px)";
                project_image[i].style.display = "inline";

            }

            setTimeout(second_step_animation, 600);
            function second_step_animation()
            {
                for (let u = 0; u < project_describe.length; u++) 
                {
                    project_describe[u].style.display = "none";
                    project[u].style.display = "none";
                }
                project_describe[i].style.display = "inline";
                project[i].style.width = "40%";
                project[i].style.display = "flex";

            }

            setTimeout(third_step_animation, 900);
            function third_step_animation()
            {
                project_image[i].style.opacity = '1';
                project_image[i].style.transform = "translateX(0px)";
                project_title[i].style.transform = "translateX(0px)";
                project_title[i].style.opacity = "1";
                project_date[i].style.transform = "translateX(0px)";
                project_date[i].style.opacity = "1";
            }

            setTimeout(fourth_step_animation, 1450);
            function fourth_step_animation()
            {
                project_describe[i].style.opacity = "1";
                project_describe[i].style.transform = "translateX(0px)";
            } 

        }
        // Verification
        else if (flag_project === 1) 
        {
            // Project Open
            flag_project = 0;

            // Activate Button Next and Back
            flag_click_project = 0;

            project[i].style.background = "rgb(219 172 40 / 50%)";
            project[i].style.color = "black";

            // ALL THE ANIMATION TO REMOVE THE DESCRIPTION

            project_describe[i].style.opacity = "0";
            project_describe[i].style.transform = "translateX(25px)";
            project_image[i].style.opacity = '0';
            project_image[i].style.transform = "translateX(-25px)";
            project_title[i].style.transform = "translateX(-25px)";
            project_title[i].style.opacity = "0";
            project_date[i].style.transform = "translateX(-25px)";
            project_date[i].style.opacity = "0";
            project_hr[i].style.transform = "translateX(-25px)";
            project_hr[i].style.opacity = "0";

            for (let u = 0; u < project.length; u++) {
              project[u].style.display = "flex";
            }

            setTimeout(first_step_animation_back, 350);
            function first_step_animation_back()
            {
                project[i].style.width = "20%";
                contain_project_describe.style.opacity = "0";
                contain_project_describe.style.zIndex = "unset";
                project_title[i].style.transform = "translateX(25px)";
                project_date[i].style.transform = "translateX(25px)";
                project_hr[i].style.transform = "translateX(25px)";
                project_image[i].style.display = "none";
            }

            setTimeout(second_step_animation_back, 600);
            function second_step_animation_back()
            {
                for (let u = 0; u < project.length; u++) 
                {
                    project[u].style.opacity = "1";
                }
                position_left_first = 10;
                position_left_second = 10;
                flag_counter_project = 0;
                for (let v = 0; v < project.length; v++) 
                {
                    project[v].style.height = "14vmax";
                    
                    if (flag_counter_project < 3) 
                    {
                        project[v].style.left = position_left_first+"%";
                        position_left_first += 30;
                    }
                    else
                    {
                        project[v].style.left = position_left_second+"%";
                        project[v].style.top = "19vmax";
                        position_left_second += 30;
                    }
                
                    flag_counter_project ++;
                
                    if (flag_counter_project === 6) 
                    {
                        flag_counter_project = 0;
                        position_left_first = 10;
                        position_left_second = 10;
                    }
                }

                for (let s = 0; s < next_back.length; s++) {
                    next_back[s].style.opacity = "1";
                }
            }

            setTimeout(third_step_animation_back, 900);
            function third_step_animation_back()
            {
                project_title[i].style.transform = "translateX(0px)";
                project_title[i].style.opacity = "1";
                project_date[i].style.transform = "translateX(0px)";
                project_date[i].style.opacity = "1";
                project_hr[i].style.transform = "translateX(0px)";
                project_hr[i].style.opacity = "1";
            }
        }

    })
    
}

let next = document.querySelector('.next');
let back = document.querySelector('.back');
let translate = 0;
let flag_translate = 0;

next.addEventListener('click', function()
{

    if (flag_translate < box_contain_projects.length -1 && flag_click_project === 0) 
    {
        translate -= 100;
        flag_translate ++;

        for (let i = 0; i < box_contain_projects.length; i++) {
            box_contain_projects[i].style.left = translate + "%"; 
         }
    }

})
back.addEventListener('click', function()
{

    if (flag_translate > 0 && flag_click_project === 0) 
    {
        translate += 100;
        flag_translate --;

        for (let i = 0; i < box_contain_projects.length; i++) 
        {
            box_contain_projects[i].style.left = translate + "%"; 
        }
    }
})

/* ------------------------------------------------------------ */
/* -------------------------- SKILLS ------------------------- */
/* ------------------------------------------------------------ */

let contain_title_text = document.querySelectorAll('.contain_title_text');


for (let i = 0; i < contain_title_text.length; i++) {
    function overflow(){
        contain_title_text[i].style.overflow = "unset";
    }
    setTimeout(overflow, 3200);
    
}
let fas = document.querySelectorAll('.fas');
var window_width = window.innerWidth;

if (window_width <= 1200) {
    for (let i = 0; i < fas.length; i++) {
        fas[i].classList.remove("fa-2x");
        fas[i].classList.add("fa-1x");
    }
}