/* hepl-mmi/meet-ajax
 *
 * /js/script.js - Discover AJAX with jQuery
 *
 * coded by leny@flatLand!
 * started at 20/02/2017
 */

let $form,
    $tplErrorMessage,
    $tplBuddy,
    $buddiesContainer;

const fHandleSubmit = function(oEvent) {
    let $nameInput = $form.find("input[name='name']"),
        $descriptionTextarea = $form.find("textarea[name='description']"),
        sName, sDescription,
        bHasErrors = false;

    oEvent.preventDefault();

    $form.find(".has-error").removeClass("has-error");
    $form.find('.alert.alert-danger').remove();

    sName = ($nameInput.val() || "").trim();
    sDescription = ($descriptionTextarea.val() || "").trim();

    if(!sName) {
        bHasErrors = true;
        $nameInput.parent().addClass("has-error");
    }

    if(!sDescription) {
        bHasErrors = true;
        $descriptionTextarea.parent().addClass("has-error");
    }

    if(bHasErrors) {
        $form.find("fieldset").prepend($tplErrorMessage.clone());
        return console.error("Form has errors.");
    }

    $.ajax("./", {
        "method": "POST",
        "dataType": "json",
        "data": {
            "name": sName,
            "description": sDescription,
        },
        "error": function(oXHR, sStatus, sError) {
            console.error(sStatus, sError);
        },
        "success": function(oResponse) {
            let $buddy = $tplBuddy.clone();

            $buddy
                .find(".thumbnail")
                    .attr("title", oResponse.description)
                    .find("img")
                        .attr("src", oResponse.avatar)
                        .attr("alt", oResponse.alt)
                        .end()
                    .find("strong")
                        .text(oResponse.name);
            $buddiesContainer.append($buddy);

            $form[0].reset();
        },
    });
};

$(function() {
    ($form = $("form")).on("submit", fHandleSubmit);
    $tplErrorMessage = $($("#form-error-message").html());
    $tplBuddy = $($("#buddy-element").html());
    $buddiesContainer = $("#buddies-container");
});
