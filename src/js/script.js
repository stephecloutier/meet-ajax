/* hepl-mmi/meet-ajax
 *
 * /js/script.js - Discover AJAX with jQuery
 *
 * coded by leny@flatLand!
 * started at 20/02/2017
 */

let $form;

const fHandleSubmit = function(oEvent) {
    let $nameInput = $form.find("input[name='name']"),
        $descriptionTextarea = $form.find("textarea[name='description']"),
        sName, sDescription,
        bHasErrors = false;

    oEvent.preventDefault();

    sName = ($nameInput.val() || "").trim();
    sDescription = ($descriptionTextarea.val() || "").trim();

    if(!sName) {
        bHasErrors = true;
    }

    // 2. check them
    // 3. display errors if any
    // 4. prepare AJAX request
    // 5. perform AJAX request
    // 6. display new buddy
};

$(function() {
    ($form = $("form")).on("submit", fHandleSubmit);
});
