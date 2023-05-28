"use strict";

(function () {

    window.addEventListener("load", init);

    /**
     * Applies event listeners to core buttons and starts process of fetching all pokemon from server
     */
    function init() {
        qsa(".card").forEach(cd =>
            cd.addEventListener("click", openNav));
        id("closebtn").addEventListener("click", closeNav);
    }

    function openNav() {
        console.log(id("portfolio_detail").style)
        let port_det_style = id("portfolio_detail").style;
        port_det_style.width = "100%";
       //port_det_style.display = "block";
    }

    function closeNav() {
        let port_det_style = id("portfolio_detail").style;
        port_det_style.width = "0%";
       // port_det_style.display = "none";
    }

    /** ------------------------------ Helper Functions  ------------------------------ */

    /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} idName element ID
     * @returns {object} DOM object associated with id.
     */
    function id(idName) {
        return document.getElementById(idName);
    }

    /**
     * Returns the first element that matches the given CSS selector.
     * @param {string} selector CSS query selector.
     * @returns {object} The first DOM object matching the query.
     */
    function qs(selector) {
        return document.querySelector(selector);
    }

    /**
     * Returns the array of elements that match the given CSS selector.
     * @param {string} selector CSS query selector
     * @returns {object[]} array of DOM objects matching the query.
     */
    function qsa(selector) {
        return document.querySelectorAll(selector);
    }

    /**
     * Creates a dom element given a proper name
     * @param {string} tagName a string which is use to create the element
     * @returns {object} generated Dom element
     */
    function gen(tagName) {
        return document.createElement(tagName);
    }

    /**
     * This is a CSE 154 provided function. It checks if a fetch request has
     * successfully gone through
     * @param {fetchresult} res A result from the fetch function
     * @returns {fetchresult} a guaranteed successful result
     */
    async function checkStatus(res) {
        if (!res.ok) {
            throw new Error(await res.text());
        }
        return res;
    }
})();