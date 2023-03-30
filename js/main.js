//carousel variable setup
let body = document.querySelector(`body`);

let carouselslides = document.getElementsByClassName(`carousel-slides`)[0];

let navigation = document.getElementsByClassName(`carousel-navigation`);
navigation = navigation[0].children;

let leftarrow = navigation[0];
leftarrow.setAttribute(`id`, `arrow-left`);

let rightarrow = navigation[0];
rightarrow.setAttribute(`id`, `arrow-right`);

//function for carousel
function slides(data)
{
    let index = 0;
    const imgwidth = 640;

    for(let i = 0; i < data.slide.length; i++)
    {
        let slide = document.createElement(`div`);
        slide.setAttribute(`id`, `slide`);

        let album = document.createElement(`p`);
        album.textContent = data.slideArray[i].album;
        album.setAttribute(`id`, `album`);

        let artist = document.createElement(`p`);
        artist.textContent = data.slideArray[i].artist;
        artist.setAttribute(`id`, `div`);

        let cover_picture = document.createElement(`img`);
        cover_picture.setAttribute(`src`, data.slideArray[i].cover_image.path);
        cover_picture.setAttribute(`id`, `pic`);
        cover_picture.setAttribute(`width`, data.slideArray[i].cover_image.width);
        cover_picture.setAttribute(`height`, data.slideArray[i].cover_image.height);
        cover_picture.setAttribute(`alt`, data.slideArray[i].cover_image.alt_content);

        let credit = document.createElement(`p`);
        credit.textContent = data.slideArray[i].cover_image.credit;
        credit.setAttribute(`id`, `credit`);

        let desc = document.createElement(`p`);
        desc.textContent = data.slideArray[i].review.content;
        desc.setAttribute(`id`, `desc`);

        let source = document.createElement(`p`);
        source.textContent = data.slideArray[i].review.source;
        source.setAttribute(`id`, `source`);

        slide.appendChild(album);
        slide.appendChild(artist);
        slide.appendChild(cover_picture);
        slide.appendChild(credit);
        slide.appendChild(desc);
        slide.appendChild(source);

        carouselslides.appendChild(slide);
    }

    leftarrow.addEventListener(`click`, () => {
        if(index < carouselslides.children.length - 1)
        {
            rightarrow.style.visibility = `visible`;
            index ++;
            carouselslides.style.marginLeft = imgwidth * index + `px`;
            if(index === carouselslides.children.length -1)
            {
                leftarrow.style.visibility = `hidden`;
            }
        }
    });

    rightarrow.addEventListener(`click`, () => {
        if(index > 0)
        {
            leftarrow.style.visibility = `visible`;
            index --;
            carouselslides.style.marginLeft = imgwidth * index + `px`;
            if(index === carouselslides.children.length - 1)
            {
                rightarrow.style.visibility = `hidden`;
            }
        }
    });

    document.addEventListener(`keydown`, (k) => {
        if(k.code === `ArrowLeft`)
        {
            if(index < carouselslides.children.length - 1)
            {
                rightarrow.style.visibility = `visible`;
                index ++;
                carouselslides.style.marginLeft = imgwidth * index + `px`;
                if(index === carouselslides.children.length - 1)
                {
                    leftarrow.style.visibility = `hidden`;
                }
            }
        }
    });

    document.addEventListener(`keydown`, (k) => {
        if(k.code === `ArrowRight`)
        {
            if(index > 0)
            {
                leftarrow.style.visibility = `visible`;
                index --;
                carouselslides.style.marginLeft = imgwidth * index + `px`;
                if(index === carouselslides.children.length - 1)
                {
                    rightarrow.style.visibility = `hidden`;
                }
            }
        }
    });
}

//jsonp
let script = document.createElement(`script`);
script.setAttribute(`src`, `json/data.json`);

body.appendChild (script);
