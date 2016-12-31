    data = [{
        name: "Mark-Paul Gosselaar",
        photo_url: "img/default.png"
    }, {
        name: "Delta Burke",
        photo_url: "img/avatars/delta.png"
    }, {
        name: "Alf",
        photo_url: "img/avatars/alf.png"
    }, {
        name: "Jaleel White",
        photo_url: "img/avatars/jaleel.png"
    }, {
        name: "Ralph Macchio",
        photo_url: "img/avatars/ralph.png"
    }, {
        name: "Candace Cameron",
        photo_url: "img/avatars/candace.png"
    }, {
        name: "Patrick Duffy",
        photo_url: "img/avatars/pduff.png"
    }, {
        name: "Arnold Schwartzengger",
        photo_url: "img/avatars/arnold.png"
    }];

    $(document).ready(function() {
        for (i = 0; i < data.length; i++) {
            var dataName = data[i].name;
            var dataPhoto = data[i].photo_url;
            $("hr").after('<div class="card">' + '<p class="nameText">' + dataName + '</p>' + '<img src=' + dataPhoto + '>' + '</div>');
        }
    });

    $(document).on("click", "button", function() {
        var name = document.getElementById('name').value;
        var photo = document.getElementById('photo').value;
        if (photo === "") {
            photo = "img/default.png";
        } else {
            photo = photo;
        }
        // console.log("this works");
        $("hr").after('<div class="card">' + '<p class="nameText">' + name + '</p>' + '<img src=' + photo + '>' + '</div>');
        $(document).ready(function() {
            $(".card").mouseover(function() {
                // console.log("hover");
                $(this).append('<img class="hover" src=' + 'img/close.png' + '>');
            })
            $(".card").mouseleave(function() {
                // console.log("leave");
                $('.hover').remove();
            });
        });
        $('#name').val('');
        $('#photo').val('');
        return false;
    });

    $(document).ready(function() {
        $(".card").mouseover(function() {
            // console.log("hover");
            $(this).append('<img class="hover" src=' + 'img/close.png' + '>');
        })
        $(".card").mouseleave(function() {
            // console.log("leave");
            $('.hover').remove();
        });
    });
