    const one = document.getElementById('one');
    const home = document.getElementById('home');

    one.addEventListener('click', () => {
        home.scrollIntoView({
            behavior: 'smooth' 
        });
    });
    const two = document.getElementById('two');
    const about = document.getElementById('about');

    two.addEventListener('click', () => {
        about.scrollIntoView({
            behavior: 'smooth' 
        });
    });

    const three = document.getElementById('three');
    const work = document.getElementById('work');

    three.addEventListener('click', () => {
        work.scrollIntoView({
            behavior: 'smooth' 
        });
    });
    
    const four = document.getElementById('four');
    const skills = document.getElementById('skills');

    four.addEventListener('click', () => {
        skills.scrollIntoView({
            behavior: 'smooth' 
        });
    });
    
    const five = document.getElementById('five');
    const contact = document.getElementById('contact');

    five.addEventListener('click', () => {
        contact.scrollIntoView({
            behavior: 'smooth' 
        });
    });

    const five_2 = document.getElementById('five_2');

    five_2.addEventListener('click', () => {
        contact.scrollIntoView({
            behavior: 'smooth' 
        });
    });

    const three_2 = document.getElementById('three_2');

    three_2.addEventListener('click', () => {
        work.scrollIntoView({
            behavior: 'smooth' 
        });
    });

let btn= document.getElementById('theme')
let nav=document.getElementById('nav')
let footer=document.querySelector('footer')
let title=document.getElementById('title')
let parts=document.getElementById('parts')
let hi=document.getElementById('hi')
let resume=document.getElementById('resume')
let icon=document.getElementById('icon')
let a_desc=document.getElementById('a_desc')
let a_tab1=document.getElementById('a_tab1')
let a_tab2=document.getElementById('a_tab2')
let a_tab3=document.getElementById('a_tab3')
let a_tab4=document.getElementById('a_tab4')
let a_card1=document.getElementById('a_card1')
let a_card2=document.getElementById('a_card2')
let a_card3=document.getElementById('a_card3')
let a_card4=document.getElementById('a_card4')
let a_card_11=document.getElementById('a_card_11')
let a_card_22=document.getElementById('a_card_22')
let a_card_33=document.getElementById('a_card_33')
let a_card_44=document.getElementById('a_card_44')

let w_title=document.getElementById('w_title')
let w_btn1=document.getElementById('w_btn1')
let w_tab1=document.getElementById('w_tab1')
let w_btn2=document.getElementById('w_btn2')
let w_tab2=document.getElementById('w_tab2')
let w_btn3=document.getElementById('w_btn3')
let w_tab3=document.getElementById('w_tab3')

let s_title=document.getElementById('s_title')
let s_title2=document.getElementById('s_title2')

let s_t1=document.getElementById('s_t1')
let s_t2=document.getElementById('s_t2')
let s_t3=document.getElementById('s_t3')
let s_t4=document.getElementById('s_t4')
let s_t5=document.getElementById('s_t5')
let s_t6=document.getElementById('s_t6')

let s_p1=document.getElementById('s_p1')
let s_p2=document.getElementById('s_p2')
let s_p3=document.getElementById('s_p3')
let s_p4=document.getElementById('s_p4')
let s_p5=document.getElementById('s_p5')
let s_p6=document.getElementById('s_p6')

let c_title=document.getElementById('c_title')
let c_1=document.getElementById('c_1')
let c_2=document.getElementById('c_2')
let c_3=document.getElementById('c_3')

let title_end=document.getElementById('title_end')
let icon2=document.getElementById('icon2')

let flag=false
btn.addEventListener("click",function(){
    if(flag==true)
    {
        home.style.backgroundColor='black'
        about.style.backgroundColor='oklch(20.5% 0 0)'
        work.style.backgroundColor='black'
        skills.style.backgroundColor='oklch(20.5% 0 0)'
        contact.style.backgroundColor='black'
        nav.style.backgroundColor='black'
        footer.style.backgroundColor='black'
        title.style.color='white'
        parts.style.color='oklch(70.7% 0.022 261.325)'
        btn.style.color='white'
        five_2.style.backgroundColor='white'
        five_2.style.color='black'
        hi.style.color='white'
        three_2.style.color='black'
        three_2.style.backgroundColor='white'
        resume.style.color='white'
        icon.style.color='white'
        a_desc.style.color='white'

        a_tab1.style.color='white'
        a_tab1.style.backgroundColor='oklch(26.9% 0 0)'
        a_tab2.style.color='white'
        a_tab2.style.backgroundColor='oklch(26.9% 0 0)'
        a_tab3.style.color='white'
        a_tab3.style.backgroundColor='oklch(26.9% 0 0)'
        a_tab4.style.color='white'
        a_tab4.style.backgroundColor='oklch(26.9% 0 0)'

        a_card1.style.color='white'
        a_card1.style.backgroundColor='oklch(26.9% 0 0)'
        a_card2.style.color='white'
        a_card2.style.backgroundColor='oklch(26.9% 0 0)'
        a_card3.style.color='white'
        a_card3.style.backgroundColor='oklch(26.9% 0 0)'
        a_card4.style.color='white'
        a_card4.style.backgroundColor='oklch(26.9% 0 0)'

        a_card_11.style.color='white'
        a_card_22.style.color='white'
        a_card_33.style.color='white'
        a_card_44.style.color='white'

        w_title.style.color='white'
        w_tab1.style.color='white'
        w_tab2.style.color='white'
        w_tab3.style.color='white'

        w_btn1.style.color='white'
        w_btn2.style.color='white'
        w_btn3.style.color='white'
    
        s_title.style.color='white'
        s_title2.style.color='white'

        s_t1.style.color='white'
        s_t2.style.color='white'
        s_t3.style.color='white'
        s_t4.style.color='white'
        s_t5.style.color='white'
        s_t6.style.color='white'
    
        s_p1.style.backgroundColor='oklch(26.9% 0 0)'
        s_p2.style.backgroundColor='oklch(26.9% 0 0)'
        s_p3.style.backgroundColor='oklch(26.9% 0 0)'
        s_p4.style.backgroundColor='oklch(26.9% 0 0)'
        s_p5.style.backgroundColor='oklch(26.9% 0 0)'
        s_p6.style.backgroundColor='oklch(26.9% 0 0)'

        c_title.style.color='white'
        c_1.style.color='white'
        c_2.style.color='white'
        c_3.style.color='white'

        title_end.style.color='white'
        icon2.style.color='white'
        
        flag=false
    }
    else
    {
        home.style.backgroundColor='white'
        about.style.backgroundColor='oklch(98% 0.016 73.684)'
        work.style.backgroundColor='white'
        skills.style.backgroundColor='oklch(98% 0.016 73.684)'
        contact.style.backgroundColor='white'
        nav.style.backgroundColor='white'
        footer.style.backgroundColor='white'
        title.style.color='black'
        parts.style.color='black'
        btn.style.color='black'
        five_2.style.backgroundColor='black'
        five_2.style.color='white'
        hi.style.color='black'
        three_2.style.color='white'
        three_2.style.backgroundColor='black'
        resume.style.color='black'
        icon.style.color='oklch(44.4% 0.011 73.639)'
        a_desc.style.color='black'

        a_tab1.style.color='oklch(26.9% 0 0)'
        a_tab1.style.backgroundColor='white'
        a_tab2.style.color='oklch(26.9% 0 0)'
        a_tab2.style.backgroundColor='white'
        a_tab3.style.color='oklch(26.9% 0 0)'
        a_tab3.style.backgroundColor='white'
        a_tab4.style.color='oklch(26.9% 0 0)'
        a_tab4.style.backgroundColor='white'

        a_card1.style.color='oklch(26.9% 0 0)'
        a_card1.style.backgroundColor='white'
        a_card2.style.color='oklch(26.9% 0 0)'
        a_card2.style.backgroundColor='white'
        a_card3.style.color='oklch(26.9% 0 0)'
        a_card3.style.backgroundColor='white'
        a_card4.style.color='oklch(26.9% 0 0)'
        a_card4.style.backgroundColor='white'

        a_card_11.style.color='black'
        a_card_22.style.color='black'
        a_card_33.style.color='black'
        a_card_44.style.color='black'

        w_title.style.color='black'
        w_tab1.style.color='black'
        w_tab2.style.color='black'
        w_tab3.style.color='black'

        w_btn1.style.color='black'
        w_btn2.style.color='black'
        w_btn3.style.color='black'

        s_title.style.color='black'
        s_title2.style.color='black'

        s_t1.style.color='black'
        s_t2.style.color='black'
        s_t3.style.color='black'
        s_t4.style.color='black'
        s_t5.style.color='black'
        s_t6.style.color='black'

        s_p1.style.backgroundColor='oklch(90.1% 0.076 70.697)'
        s_p2.style.backgroundColor='oklch(90.1% 0.076 70.697)'
        s_p3.style.backgroundColor='oklch(90.1% 0.076 70.697)'
        s_p4.style.backgroundColor='oklch(90.1% 0.076 70.697)'
        s_p5.style.backgroundColor='oklch(90.1% 0.076 70.697)'
        s_p6.style.backgroundColor='oklch(90.1% 0.076 70.697)'

        c_title.style.color='black'
        c_1.style.color='black'
        c_2.style.color='black'
        c_3.style.color='black'

        title_end.style.color='black'
        icon2.style.color='oklch(44.4% 0.011 73.639)'

        flag=true
    }  
})