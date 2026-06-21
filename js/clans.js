const create_clan = document.getElementById("create_clan");
const menu_create_clan = document.getElementById("menu_create_clan");

create_clan.addEventListener("click", function() {

    if (document.getElementById("menu_clans")) {
        menu_create_clan.removeChild(document.getElementById("menu_clans"));
        return;

    } else {

        const newObject = document.createElement("div");
        newObject.setAttribute("id", "menu_clans");

        menu_create_clan.appendChild(newObject);

    }

});