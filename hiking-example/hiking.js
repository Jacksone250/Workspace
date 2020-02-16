//create an array of hikes
const hikeList = [{
        name: 'Bechler Falls',
        imgSrc: 'falls.jpg',
        imgAlt: 'Image of Bechler Falls',
        distance: '3 miles',
        difficulty: 'Easy',
        description: 'Beautiful short hike along the Bechler river to Bechler Falls',
        directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
    },
    {
        name: 'Teton Canyon',
        imgSrc: 'falls.jpg',
        imgAlt: 'Image of Teton Canyon',
        distance: '5 miles',
        difficulty: 'Moderate',
        description: 'Beautiful short hike up Teton Canyon',
        directions: 'Take Highway 33 to Driggs. Turn right into the town and continue through. Follow that road for a few miles then turn right up Teton Canyon. Drive to the end of the road. There is a parking area at the trailhead.'
    },
    {
        name: 'Denanda Falls',
        imgSrc: 'falls.jpg',
        imgAlt: 'Image of Denanda Falls',
        distance: '12 miles',
        difficulty: 'Moderate',
        description: 'Beautiful hike through Bechler Meadows to Denanda Falls',
        directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for several miles then turn left again at the sign for the Bechler Meadows ranger station. There is a parking area at the trailhead.'
    }
];


const listElement = document.getElementById("hikes");
const imgPath = "https://byui-cit.github.io/cit261/examples/";

console.dir(listElement);
listElement.innerHTML = "";

function buildHikeDetails(hike) {
    const item = document.createElement("li");
    // const image = document.createElement("img");
    // image.src = imgPath + hike.imgSrc;
    // image.alt = hike.imgAlt;
    // item.appendChild(image);
    item.innerHTML = `<img
    src="https://byui-cit.github.io/cit261/examples/${hike.imgSrc}"
    alt="${hike.imgAlt}"
  />
  <h2>${hike.name}</h2>
  <div>
    <h3>Distance</h3>
    <p>${hike.distance}</p>
  </div>
  <div>
    <h3>Difficulty</h3>
    <p>${hike.difficulty}</p>
  </div>
  <div>
    <h3>Description</h3>
    <p>${hike.description}</p>
  </div>
  <div>
    <h3>How to get there</h3>
    <p>${hike.directions}</p>
  </div>`

    return item;
};

//listElement.appendChild(buildHikeDetails(hikeList[1]));


function buildHikeSmall(hike) {
    const item = document.createElement("li");
    item.classList.add('light')
    item.innerHTML = `<h2>${hike.name}</h2>
    <div>
    <img
    src="https://byui-cit.github.io/cit261/examples/${hike.imgSrc}"
    alt="${hike.imgAlt}"
    />
    </div>
    <div>
        <div>
            <h3>Distance</h3>
            <p>${hike.distance}</p>
        </div>
        <div>
            <h3>Difficulty</h3>
            <p>${hike.difficulty}</p>
        </div>
    </div>`;
    item.addEventListener("touchend", e => {
        console.log(e.currentTarget.children[0]);
        e.currentTarget.querySelector('h2');
    });

    return item;
};


// this is what listElement is declared as const listElement = document.getElementById("hikes");

function buildList(){
    hikeList.forEach(hike => {
        listElement.appendChild(buildHikeSmall(hike));
    });
};

buildList();

// listElement.appendChild(buildHikeSmall(hikeList[0]));