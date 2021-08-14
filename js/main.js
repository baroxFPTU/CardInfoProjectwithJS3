const cardImg = document.querySelector('.card_avt-img img');
const nameAuthor = document.querySelector('.card_name');
const role = document.querySelector('.card_role');
const description = document.querySelector('.card_desc');

// Button
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

// Init default index
let index = window.localStorage.getItem('index_starter') || 0;

const data = [
    {
        name: "Susan Smith",
        role: "WEB DEVELOPER",
        description: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
    },
    {
        name: "Anna Johnson",
        role: "WEB DESIGNER",
        description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
    },
    {
        name: "Peter Jones",
        role: "INTERN",
        description: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    },
    {
        name: "Bill Anderson",
        role: "THE BOSS",
        description: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
    }
];

// Functions
function updateData(data, index) {
    // Init info data
    let author = data[index];

    // Update data
    cardImg.src = author.image;
    nameAuthor.innerHTML = author.name;
    role.innerText = author.role;
    description.innerText = author.description;

    // Update data to localStorage
    window.localStorage.setItem('index_starter',index);
}

// Handle Events
window.onload = () => {
    setTimeout(() => {
        updateData(data, index);
    }, 0);
}


btnNext.addEventListener('click', () => {
    index++;

    if (index > (data.length - 1)) {
        index = 0;
        updateData(data, index);
        return;
    }

    updateData(data, index);
});

btnPrev.addEventListener('click', () => {
    index--;

    if (index < 0) {
        index = data.length - 1;
        updateData(data, index);
        return;
    }

    updateData(data, index);
});


