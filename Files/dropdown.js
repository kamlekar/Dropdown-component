var select = {
    initialize: function () {
        this.attachEvents(this.optionEls, 'onclick', this.optionClick, this);
    },
    optionEls: document.getElementsByClassName('option'),
    optionClick: function (e) {
        var curEl = e.currentTarget;
        this.getLabelEl(curEl).textContent = curEl.innerHTML;
    },
    attachEvents: function (elements, action, method, bind) {
        for (var i = 0; i < elements.length; i++) {
            var option = this.optionEls[i];
            if (bind) {
                option[action] = method.bind(bind);
            } else {
                option[action] = method;
            }
        }
    },
    getLabelEl: function (curEl) {
        return curEl.parentElement.parentElement.childNodes[0];
    }
}

select.initialize();
