/* hepl-mmi/meet-ajax
 *
 * /js/script.js - Discover AJAX with jQuery
 *
 * coded by leny@flatLand!
 * started at 20/02/2017
 */

let $form,
    $tplErrorMessage;

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

    console.info("All is ok.");

    // 2. check them
    // 3. display errors if any
    // 4. prepare AJAX request
    // 5. perform AJAX request
    // 6. display new buddy
};

$(function() {
    ($form = $("form")).on("submit", fHandleSubmit);
    $tplErrorMessage = $($("#form-error-message").html());
});
