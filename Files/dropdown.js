var select = {
    initialize: function () {
        this.attachEvents(this.optionEls, 'onclick', this.optionClick, this);
    },
    optionEls: document.getElementsByClassName('option'),
    optionClick: function (e) {
        var curEl = e.currentTarget;
        var label = this.getLabelEl(curEl);
        label.textContent = curEl.innerHTML;
        if (!this.isStyle) {
            label.style.left = "0px";
            label.style.right = "0px";
            label.style.padding = "2px 5px";
            this.isStyle = true;
        }
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
        return curEl.parentElement.parentElement.childNodes[1];
    }
}

select.initialize();
