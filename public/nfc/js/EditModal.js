class EditModal {
    constructor(sticker) {
        this.data = sticker;
        this.link = sticker.redirectURL;
        this.processing = false;
        this.$modal = $('.ui.edit.modal');
    }

    show() {
        this.$modal.find('#form-uuid').val(this.data.stickerId); 
        this.$modal.find('#form-userid').val(this.data.userId); 
        this.$modal.find('#form-name').val(this.data.name); 

        const link = this.data.redirectURL || '';

        this.$modal.find('#form-link').val(link); 

        this.$modal.modal({
            onApprove: this.handleApprove.bind(this)
        })

        this.$modal.find('button.button.positive').removeClass('loading');
        this.$modal.modal('show');
    }

    hide() {
        this.$modal.modal('hide');
    }

    handleApprove($button) {
        if (this.processing) return false;
        this.processing = true;
        
        const newLink = this.$modal.find('#form-link').val() === '' ? null : this.$modal.find('#form-link').val();
        const newName = this.$modal.find('#form-name').val() === '' ? null : this.$modal.find('#form-name').val();
        
        if (newName === null) {
            this.displayNameIsRequired();
            return false;
        }
        
        $button.addClass('loading');
        this.updateLink(newName, newLink);
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

    // TODO név
    updateLink(name, link) {
        const request = new XMLHttpRequest();
        request.open("patch", "https://europe-west3-sticktunnel.cloudfunctions.net/API/sticker/update");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
       
        const payload = JSON.stringify({
            userId: this.data.userId,
            stickerId: this.data.stickerId,
            redirectURL: link,
            name: name
        });

        const cb = this.hide.bind(this);
        request.onreadystatechange = function () {
            if (this.readyState == 4) {
                
                switch (JSON.parse(request.response).code) {
                    case 200:
                        this.processing = false;
                        cb();
                        getStickers(firebase.auth().currentUser);

                    default:
                        break
                }
            }
        };
       
        request.send(payload);
    }

}

