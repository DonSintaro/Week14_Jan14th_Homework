function render(uniqueName, ID) { return `
<div class="input-group mb-3">
        <input type="text" class="form-control burgerName" placeholder=${uniqueName} aria-label="Recipient's username" aria-describedby="button-addon2" readonly>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary eatBtn" type="button" id="button-addon2" data-name="${"db"+ID}">Ate!</button>
        </div>
</div>
    `
}

exports.render = render;