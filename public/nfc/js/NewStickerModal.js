class NewStickerModal {
    constructor() {
        this.processing = false;
        this.$modal = $('.ui.newSticker.modal');
        this.show();
    }

    show() {
        this.$modal.find('button.button.positive').removeClass('loading');
        
        this.$modal.modal({
            onApprove: this.handleApprove.bind(this)
        })
        
        this.$modal.modal('show');
    }

    hide() {
        this.$modal.modal('hide');
    }

    handleApprove($button) {
        if (this.processing) return false;
        this.processing = true;
        
        const link = this.$modal.find('#form-link-new').val() === '' ? null : this.$modal.find('#form-link-new').val();
        const name = this.$modal.find('#form-name-new').val() === '' ? null : this.$modal.find('#form-name-new').val();
        
        // Check if a name is given
        if (name === null) {
            this.displayNameIsRequired(); 
            return false;
        }

        $button.addClass('loading');
        this.createSticker(name, link);
        return false;
    }

    displayNameIsRequired() {
        this.processing = false;
        const $field = this.$modal.find('.field.name');
        $field.addClass('error');

        const $form = this.$modal.find('.form');
        $form.addClass('error');

        // Remove error when typing
        // TODO make it efficient
        $('#form-name-new').on('keyup', function() {
            const $field = this.$modal.find('.field.name');
            $field.removeClass('error');

            const $form = this.$modal.find('.form');
            $form.removeClass('error');
        }.bind(this));
    
    }

    createSticker(name, link) {
        const request = new XMLHttpRequest();
        request.open("post", "https://europe-west3-sticktunnel.cloudfunctions.net/API/sticker/registrate");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        const payload = JSON.stringify({
            userId: firebase.auth().currentUser.uid,
            redirectURL: link, 
            name: name
        });

        const cb = this.hide.bind(this);
        request.onreadystatechange = function () {
            if (this.readyState == 4) {
                cb();

                switch (JSON.parse(request.response).code) {
                    case 201:
                        this.processing = false;
                        getStickers(firebase.auth().currentUser);

                    default:
                        break
                }
            }
        };

        request.send(payload);
    }

}

