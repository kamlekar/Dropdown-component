var select = (function(){
    var attr = 'data-option',
        show = 'show',
        initialize = function (select) {
            attachEvents(select, 'click', optionsClick);
            for(var i =0; i<select.length; i++){
                var options = select[i].getElementsByClassName('option');
                attachEvents(options, 'click', optionClick);
            }
        },
        optionsClick = function(e){
            var el = e.currentTarget;
            if(e.target !== el){
                return;
            }
            toggleClass(el, show);
        },
        optionClick = function (e) {
            var el = e.currentTarget;
            var select = el.parentElement.parentElement;
            select.setAttribute(attr, el.innerHTML);
            select.classList.remove(show);
        },
        toggleClass = function(el, cls){
            if(el.classList.contains(cls)){
                el.classList.remove(cls);
            }
            else{
                el.classList.add(cls);
            }
        },
        attachEvents = function (elements, action, method) {
            for (var i = 0; i < elements.length; i++) {
                elements[i]["on" + action] = method;
            }
        };
    return {
        init: initialize
    }
})();

