import GordonPic from './images/rordon.png'
import UnclePic from './images/rncle.jpg'
import SantoshPic from './images/rantosh.jpg'

export default function getContactPage(){
    const content = document.querySelector('#content');
    if(content.children.length === 3){ // if main div exists removes the main div
        content.removeChild(content.children[1]);
    }
    
    const main = document.createElement('main');
    main.classList.add('contact-background')
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    const contacts = document.createElement('div');
    contacts.classList.add('contacts')
        const chefs = document.createElement('h2');
        chefs.textContent = 'Chefs';
        const span1 = document.createElement('h3');
            const img1 = document.createElement('span');
                const gordon = new Image();
                gordon.src = GordonPic
                const para1 = document.createElement('p');
                para1.textContent = 'Rordon Gamsey';

        const span2 = document.createElement('h3');
            const img2 = document.createElement('span');
                const uncle = new Image();
                uncle.src = UnclePic
                const para2 = document.createElement('p');
                para2.textContent = 'Rncle Uoger';

        const span3 = document.createElement('h3');
            const img3 = document.createElement('span');
                const santosh = new Image();
                santosh.src = SantoshPic
                const para3 = document.createElement('p');
                para3.textContent = 'Rantosh Thah';

        // br
        const number = document.createElement('h2');
        number.textContent = 'Contact Us:'
            const number1 = document.createElement('h3');
            number1.textContent = '+977 01XXXXXXX'
            const number2 = document.createElement('h3');
            number2.textContent = '+977 98XXXXXXXX'

        const email = document.createElement('h2');
        email.textContent = 'E-mail:'
            const emailaddress = document.createElement('h3');
            emailaddress.textContent = 'habibimakes@gmail.com'

        const location = document.createElement('h2');
        location.textContent = 'Location'
            const nepal = document.createElement('h3');
            nepal.textContent = 'Inside Nepal';


    const form = document.createElement('div');
    form.classList.add('form')
        const innerForm = document.createElement('form');
        innerForm.action = 'post';
            const name = document.createElement('label');
            name.textContent = 'Name';
            const nameInput = document.createElement('input');

            const phone = document.createElement('label');
            phone.textContent = 'Number';
            const phoneInput = document.createElement('input');

            const emailadr = document.createElement('label');
            emailadr.textContent = 'Email';
            const emailInput = document.createElement('input');

            const feedback = document.createElement('label');
            feedback.textContent = 'Feedback & Queries';
            const feedbackTextarea = document.createElement('textarea');
            feedbackTextarea.cols = '30';
            feedbackTextarea.rows = '10';

            const submitbutton = document.createElement('button');
            submitbutton.textContent = 'Submit';

            submitbutton.addEventListener('click', (e)=>{
                e.preventDefault();
            })

        const map = document.createElement('iframe');
        map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594581.587852433!2d81.88577433938082!3d28.3789909490526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995e8c77d2e68cf%3A0x34a29abcd0cc86de!2sNepal!5e0!3m2!1sen!2snp!4v1674094459546!5m2!1sen!2snp';
        map.width = '300';
        map.height = '330';
        map.style.border = '0';
        map.style.borderRadius = '10px';


    // append

    content.insertBefore(main, content.children[1]);
    main.appendChild(contactContainer);
    contactContainer.appendChild(contacts);
        contacts.appendChild(chefs);
        contacts.appendChild(span1);
            span1.appendChild(img1);
                img1.appendChild(gordon);
            span1.appendChild(para1);
        
        contacts.appendChild(span2);
            span2.appendChild(img2);
                img2.appendChild(uncle);
            span2.appendChild(para2);

        contacts.appendChild(span3);
            span3.appendChild(img3);
                img3.appendChild(santosh);
            span3.appendChild(para3);

        contacts.appendChild(number);
        contacts.appendChild(number1);
        contacts.appendChild(number2);

        contacts.appendChild(email);
        contacts.appendChild(emailaddress);
        
        contacts.appendChild(location);
        contacts.appendChild(nepal);

    contactContainer.appendChild(form);
        form.appendChild(innerForm);
            innerForm.appendChild(name);
            innerForm.appendChild(nameInput);
            innerForm.appendChild(emailadr);
            innerForm.appendChild(emailInput);
            innerForm.appendChild(phone);
            innerForm.appendChild(phoneInput);
            innerForm.appendChild(feedback);
            innerForm.appendChild(feedbackTextarea);
            innerForm.appendChild(submitbutton)
        form.appendChild(map);
}