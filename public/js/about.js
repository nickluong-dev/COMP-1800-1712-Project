let consoleParagraph = document.getElementById('console-text-area');

consoleParagraph.textContent = "loading...";

function setupButton(name, bio) {
    let button;
    button = document.createElement('a');
    button.textContent = name;
    button.href = "#";
    button.setAttribute('class', 'person-button');

    button.addEventListener('click', function(event) {
        document.getElementById('about-area').textContent = bio;
    });

    return button;
}

function displayNames() {
    let displayNamesParagraph = document.createElement('p');
    displayNamesParagraph.textContent = "who on the team would you like to learn about?";

    let aboutArea = document.createElement('p');
    aboutArea.setAttribute('id', 'about-area');

    let aaronInfo = "human being person 1";
    let aaronButton = setupButton("aaron", aaronInfo);

    let aidanInfo = "human being person 2";
    let aidanButton = setupButton("aidan", aidanInfo);

    let chrisInfo = "human being person 3";
    let chrisButton = setupButton("chris", chrisInfo);

    let nickInfo = "human being person 4";
    let nickButton = setupButton("nick", nickInfo);

    let seanInfo = "human being person 5";
    let seanButton = setupButton("sean", seanInfo);

    consoleParagraph.append(displayNamesParagraph)
    consoleParagraph.append(aaronButton)
    consoleParagraph.append(aidanButton)
    consoleParagraph.append(chrisButton)
    consoleParagraph.append(nickButton)
    consoleParagraph.append(seanButton)
    consoleParagraph.append(aboutArea)
}

function postLoad() {
    let postLoadParagraph = document.createElement('p');
    postLoadParagraph.textContent = "welcome to the about page!";
    consoleParagraph.append(postLoadParagraph)
    setTimeout(displayNames, 1500);
}

function loaded() {
    consoleParagraph.textContent = "loaded!";
    setTimeout(postLoad, 1500);
}

setTimeout(loaded,3000);